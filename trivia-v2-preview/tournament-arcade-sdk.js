/*! Tournament Arcade SDK 1.0.0 for browser games. Copy into your build and load with
    <script src="tournament-arcade-sdk.js"></script>, then: TournamentArcade.ready().then(function (sdk) { ... });
    Docs: get_build_guide on the Tournament Arcade connector. */
(function (global) {
  "use strict";
  var PREFIX = "tournament-arcade:";
  var TIMEOUT_MS = 15000;
  var pending = {};
  var seq = 0;
  var hello = null;
  var waiters = [];

  function inArcade() { return global.parent && global.parent !== global; }

  function post(message) {
    // The play page is the only parent the Arcade allows (its frame-ancestors), so "*" reaches only it.
    if (inArcade()) global.parent.postMessage(message, "*");
  }

  function fail(code, message) {
    var error = new Error(message);
    error.code = code;
    return error;
  }

  global.addEventListener("message", function (event) {
    if (event.source !== global.parent) return;
    var data = event.data;
    if (!data || typeof data !== "object" || typeof data.type !== "string") return;
    if (data.type === PREFIX + "hello") {
      hello = data;
      var ready = waiters;
      waiters = [];
      for (var i = 0; i < ready.length; i++) ready[i](api);
      return;
    }
    if (data.type === PREFIX + "sdk-result" && typeof data.id === "string" && pending[data.id]) {
      var entry = pending[data.id];
      delete pending[data.id];
      clearTimeout(entry.timer);
      if (data.ok) entry.resolve(data.data);
      else entry.reject(fail((data.error && data.error.code) || "ARCADE_SDK_FAILED", (data.error && data.error.message) || "The call did not go through."));
    }
  });

  function call(op, args) {
    return new Promise(function (resolve, reject) {
      if (!inArcade()) return reject(fail("ARCADE_SDK_NOT_IN_ARCADE", "The game is not running inside Tournament Arcade."));
      seq += 1;
      var id = "c" + seq + "_" + Date.now().toString(36);
      var timer = setTimeout(function () {
        delete pending[id];
        reject(fail("ARCADE_SDK_TIMEOUT", "Tournament Arcade did not answer in time."));
      }, TIMEOUT_MS);
      pending[id] = { resolve: resolve, reject: reject, timer: timer };
      post({ type: PREFIX + "sdk", id: id, op: op, args: args || {} });
    });
  }

  function toBase64(value) {
    var bytes = typeof value === "string" ? new TextEncoder().encode(value) : value instanceof ArrayBuffer ? new Uint8Array(value) : value;
    var binary = "";
    for (var i = 0; i < bytes.length; i += 0x8000) binary += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(binary);
  }

  function fromBase64(text) {
    var binary = atob(text);
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes;
  }

  var api = {
    version: "1.0.0",
    /** The player's Tournament name (null when they have none; a preview gets a stand-in name like any player's). */
    get player() { return hello ? hello.player : null; },
    me: function () { return call("me"); },
    /** The classic single score (the game's score mode); the page throttles it. */
    score: function (value) { post({ type: PREFIX + "score", score: value }); },
    achievements: {
      list: function () { return call("achievements.list").then(function (r) { return r.achievements; }); },
      unlock: function (key) { return call("achievements.unlock", { key: key }); }
    },
    stats: {
      get: function () { return call("stats.get").then(function (r) { return r.stats; }); },
      update: function (key, value) { return call("stats.update", { key: key, value: value }); }
    },
    leaderboards: {
      submit: function (key, score) { return call("leaderboards.submit", { key: key, score: score }); },
      top: function (key, limit) { return call("leaderboards.top", limit ? { key: key, limit: limit } : { key: key }); }
    },
    saves: {
      list: function () { return call("saves.list").then(function (r) { return r.saves; }); },
      /** Resolves { slot, revision, updatedAt, bytes, text }. Rejects with code NOT_FOUND for an empty slot. */
      get: function (slot) {
        return call("saves.get", { slot: slot }).then(function (r) {
          var bytes = fromBase64(r.data);
          return { slot: r.slot, revision: r.revision, updatedAt: r.updatedAt, bytes: bytes, text: new TextDecoder().decode(bytes) };
        });
      },
      /** data: a string or bytes, at most 256 KiB. Pass the revision you read to refuse overwriting another device's save. */
      put: function (slot, data, revision) {
        var args = { slot: slot, data: toBase64(data) };
        if (revision) args.revision = revision;
        return call("saves.put", args);
      },
      remove: function (slot, revision) { return call("saves.delete", revision ? { slot: slot, revision: revision } : { slot: slot }); }
    }
  };

  global.TournamentArcade = {
    /** Resolves the SDK once the play page has said hello (within a second or two of loading). */
    ready: function () {
      return new Promise(function (resolve, reject) {
        if (!inArcade()) return reject(fail("ARCADE_SDK_NOT_IN_ARCADE", "The game is not running inside Tournament Arcade."));
        if (hello) return resolve(api);
        waiters.push(resolve);
        post({ type: PREFIX + "ready" });
      });
    }
  };
})(typeof window !== "undefined" ? window : this);
