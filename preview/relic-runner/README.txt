RELIC RUNNER 4x4 - Milestone 1 (Jungle Temple)
==============================================
Open index.html in Chrome, Edge, Firefox or Safari. Everything is bundled locally (three.js r170, fonts, procedural textures and audio), so it works offline and straight from the zip. The single exception is gyro steering on iOS, which needs the page served over https.

CONTROLS
PC keyboard : W / Up = throttle, S / Down = brake & reverse, A/D or Left/Right = steer, SPACE = handbrake (drift),
              SHIFT = nitro, W/S in the air = pitch (A/D in the air = roll/yaw), C = chase/hood camera, ESC/P = pause,
              ENTER = start from title or results, ` (backtick) = debug overlay (telemetry, force set piece, tuning sliders)
Gamepad     : left stick steer (and pitch in the air), RT throttle, LT brake, A handbrake, B nitro, Y camera, START pause
Touch       : left thumb = floating steering stick (push up/down in the air to pitch), auto-accelerate is on by default,
              NITRO / DRIFT / BRAKE buttons on the right, pause button top-right. Options: tilt (gyro) steering + calibrate.

URL PARAMETERS (testing)
?seed=123  fixed track seed       ?daily  daily expedition seed     ?quality=low|medium|high
?skipIntro  skip the gate cutscene ?autopilot  car drives itself       ?fixed  fixed 1/30 s frame step (capture)

OPTIONS
Driving assist (full / light / off), auto-accelerate, difficulty (Explorer / Adventurer / Legend), steering sensitivity,
camera distance, touch steering mode, motion comfort, reduce flashing, colorblind hazard markers, subtitle size,
music & effects volume, quality (auto / low / medium / high), 60/30 fps cap. Progress is saved in localStorage.
