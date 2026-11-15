/* Tournament Arcade hooks for this packaged copy only (not the live GitHub Pages site).
   Prefixes localStorage with the game slug, unregisters service workers, and reports
   ladder/daily FRAGS to the Arcade play-page leaderboard. Quick-Fire points go to a
   separate SDK board so the two scales are not mixed. */
(function (global) {
  "use strict";
  var PREFIX = "tournament-trivia:";

  if (global.navigator && global.navigator.serviceWorker && global.navigator.serviceWorker.getRegistrations) {
    global.navigator.serviceWorker.getRegistrations().then(function (regs) {
      regs.forEach(function (r) { r.unregister(); });
    }).catch(function () {});
  }

  var proto = Storage.prototype;
  var _get = proto.getItem;
  var _set = proto.setItem;
  var _rem = proto.removeItem;
  function isLS() { return this === global.localStorage; }
  proto.getItem = function (k) {
    return isLS.call(this) ? _get.call(this, PREFIX + k) : _get.call(this, k);
  };
  proto.setItem = function (k, v) {
    if (isLS.call(this)) {
      _set.call(this, PREFIX + k, v);
      try { onSave(k, v); } catch (e) {}
      return;
    }
    return _set.call(this, k, v);
  };
  proto.removeItem = function (k) {
    return isLS.call(this) ? _rem.call(this, PREFIX + k) : _rem.call(this, k);
  };

  var inArcade = global.parent !== global;
  var greeted = false;
  var lastSentAt = 0;
  var bestSent = null;
  var pending = null;
  var timer = null;
  var sdk = null;
  var hooked = false;
  var lastQuickSent = null;

  global.addEventListener("message", function (event) {
    if (event.source !== global.parent) return;
    var message = event.data;
    if (!message || typeof message.type !== "string") return;
    if (message.type === "tournament-arcade:hello") greeted = true;
  });

  function sayReady() {
    if (inArcade && !greeted) global.parent.postMessage({ type: "tournament-arcade:ready" }, "*");
  }
  sayReady();
  setTimeout(sayReady, 1500);
  setTimeout(sayReady, 4000);

  function sendFrags(score) {
    score = Math.round(score);
    if (!isFinite(score) || score < 0) return;
    if (bestSent != null && score <= bestSent) return;
    var now = Date.now();
    if (now - lastSentAt < 3500) {
      pending = score;
      if (!timer) timer = setTimeout(flush, 3500 - (now - lastSentAt));
      return;
    }
    lastSentAt = now;
    bestSent = score;
    if (inArcade) global.parent.postMessage({ type: "tournament-arcade:score", score: score }, "*");
    if (sdk) {
      try { sdk.score(score); } catch (e) {}
      try { sdk.leaderboards.submit("frags", score); } catch (e) {}
    }
  }
  function flush() {
    timer = null;
    if (pending != null) {
      var s = pending;
      pending = null;
      sendFrags(s);
    }
  }

  function sendQuick(score) {
    score = Math.round(score);
    if (!isFinite(score) || score < 0) return;
    if (lastQuickSent != null && score <= lastQuickSent) return;
    lastQuickSent = score;
    if (sdk) {
      try { sdk.leaderboards.submit("quickfire", score); } catch (e) {}
    }
  }

  function reportFromGame() {
    var TQ = global.TQ;
    var G = TQ && TQ.G;
    if (!G) return;
    var score = Math.round(Number(G.score) || 0);
    if (G.mode === "ladder" || G.mode === "daily") sendFrags(score);
    else if (G.mode === "quick") sendQuick(score);
  }

  function onSave(k, v) {
    if (k !== "tq_hs" && k !== "hs") return;
    if (typeof v !== "string") return;
    var data;
    try { data = JSON.parse(v); } catch (e) { return; }
    if (!data || typeof data !== "object") return;
    var best = 0;
    if (isFinite(data.ladder)) best = Math.max(best, Math.round(data.ladder));
    if (data.daily && typeof data.daily === "object") {
      for (var d in data.daily) {
        if (Object.prototype.hasOwnProperty.call(data.daily, d) && isFinite(data.daily[d])) {
          best = Math.max(best, Math.round(data.daily[d]));
        }
      }
    }
    if (best > 0) sendFrags(best);
    if (isFinite(data.quick) && data.quick > 0) sendQuick(data.quick);
  }

  function hook() {
    if (hooked) return true;
    var TQ = global.TQ;
    if (!TQ || typeof TQ.endGame !== "function") return false;
    hooked = true;
    var orig = TQ.endGame;
    TQ.endGame = function () {
      var ret = orig.apply(this, arguments);
      try { reportFromGame(); } catch (e) {}
      return ret;
    };
    return true;
  }

  var hookTimer = setInterval(function () {
    if (hook()) clearInterval(hookTimer);
  }, 100);
  setTimeout(function () { clearInterval(hookTimer); hook(); }, 20000);

  if (global.TournamentArcade && typeof global.TournamentArcade.ready === "function") {
    global.TournamentArcade.ready().then(function (api) {
      sdk = api;
      greeted = true;
    }).catch(function () {});
  }
})(window);
