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


PASS 6 - MOBILE PERFORMANCE, MODELS, PRECISION, DEBUGGING
- Draw calls cut about 33%. Peaks at 960x540: Low 130 -> 93, Medium 163 -> 128, High 186 -> 135.
  The jeep and crew went from about 40 draw calls to 8: every part is merged into a few meshes, and each vertex
  knows which moving part (wheel, crew head/arms, crates...) it belongs to. The canopy light shafts are one
  instanced call, and the car casts its shadow with one simple shape.
- No more stutters mid-run: three.js was rebuilding its shader setup about 14 times a frame in the shadow pass;
  fixed with a separate material and shadow material per instanced pool.
  Shaders are compiled behind a new loading card, so the title no longer shows white first frames.
- Mobile: auto quality picks a tier from the GPU, each tier has a pixel budget, and the resolution adapts on the
  fly at every quality setting. Foliage, blocks and planks no longer cast shadows on phones (cheaper shadow
  filter there too). The headlight light is dropped on Low, the unused nitro light is gone, the spray particles
  are capped in size and rate, and only the live part of the particle buffers is uploaded.
- Crew: rebuilt heads (shaped skull/jaw, nose, brows, eyes with iris and pupil, eyelids that blink, a mouth that
  opens to shout, freckles for Penny), hands with fingers, knees and boot soles. Dusty steers hand-over-hand, both
  look into bends (Penny looks back at the boulder), they flinch on hits, and Penny cheers on big air. Smoother
  jeep panels on Medium/High.
- Gameplay: steering eases into small corrections and stays quick for big ones. A hard bottom-out now counts as
  one hit (not one per contact point), and never during a graded landing. The suspension no longer bounces the
  car into the air in fast dips (this fixes the seed 2 fall at 1.9 km). The autopilot is better at slowing for bends.
- Debugging: pieces free their GPU memory when they are recycled (GPU geometry count used to grow every run).
  Switching tabs pauses the run and mutes the sound. A 200-seed sweep (300 km) had 0 falls and 0 errors.
