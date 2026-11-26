RELIC RUNNER 4x4 - Milestone 1 (Jungle Temple) - premium pass + UI/mobile pass
==============================================
Open index.html in Chrome, Edge, Firefox or Safari. Everything is bundled locally (three.js r170, fonts, procedural textures and audio), so it works offline and straight from the zip. The single exception is gyro steering on iOS, which needs the page served over https.

CONTROLS
PC keyboard : W / Up = throttle, S / Down / X = BRAKE (hold when stopped = reverse), A/D or Left/Right = steer, SPACE = handbrake (drift),
              SHIFT = nitro, W/S in the air = pitch (A/D in the air = roll/yaw), C = chase/hood camera, ESC/P = pause,
              ENTER = start from title or results, ` (backtick) = debug overlay (telemetry, force set piece, tuning sliders)
Gamepad     : left stick steer (and pitch in the air), RT throttle, LT brake, A handbrake, B nitro, Y camera, START pause
Touch       : left thumb = floating steering stick anywhere on the left half (push up/down in the air to pitch),
              auto-accelerate on by default. Big red BRAKE button bottom-right (hold = brake, keep holding when stopped =
              reverse), DRIFT (handbrake) to its left, NITRO above it, pause top-right. All multi-touch (steer + brake +
              nitro together). Options: steering sensitivity, tilt (gyro) steering + CALIBRATE TILT (also RE-CENTRE TILT
              in the pause menu), touch haptics. Portrait works after the rotate prompt ("PLAY IN PORTRAIT").
HOW TO DRIVE (title / pause) lists every control; a 5-step first-run tutorial runs once (REPLAY TUTORIAL there).

URL PARAMETERS (testing)
?seed=123  fixed track seed       ?daily  daily expedition seed     ?quality=low|medium|high
?skipIntro  skip the gate cutscene ?autopilot  car drives itself       ?fixed  fixed 1/30 s frame step (capture)
?notut  skip the first-run tutorial

OPTIONS
Driving assist (full / light / off), auto-accelerate, difficulty (Explorer / Adventurer / Legend), steering sensitivity,
camera distance, touch steering mode, motion comfort, reduce flashing, colorblind hazard markers, subtitle size,
controller rumble, music & effects volume, quality (auto / low / medium / high), 60/30 fps cap. Progress is saved in localStorage.


PASS 5 - FULL SCREEN + MOBILE PORTRAIT/LANDSCAPE
- Full screen: button on the title screen, in the pause menu, and a HUD icon (under pause). F key on desktop.
  Landscape phones also try to lock the orientation (fails silently where unsupported).
- iPhone Safari has no Fullscreen API: an "Add to Home Screen" hint is shown instead; installed as a
  home-screen app (manifest.webmanifest, display: fullscreen) it runs without browser bars.
- The canvas, pixel ratio and HUD rescale on resize, rotation and full-screen changes.
- Portrait is fully playable (its own camera framing and HUD, controls in the bottom third). Pick
  "PLAY IN PORTRAIT" or the Options toggle and the choice is remembered.
