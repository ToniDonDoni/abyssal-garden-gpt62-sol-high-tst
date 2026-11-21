# SPEC-003: Mobile Touch Controls

**Status** — Draft for review

## Objective

Make Abyssal Garden explorable on a phone with two on-screen thumbsticks. The left stick swims through the scene and the right stick turns the camera. The primary layout is a full-viewport portrait view, illustrated at 9:16.

## Current state

- Entering the scene requests mouse pointer lock. The entry overlay, in-game HUD and Deep Drift playback use that lock to determine whether the player has entered.
- WASD moves the camera, the mouse changes yaw and pitch, and the remaining controls use keyboard shortcuts or the sound button. The game has no on-screen movement or look controls.
- The WebGPU canvas already follows the viewport size. The entry screen and in-game HUD display keyboard instructions in portrait as well as landscape.
- This draft supersedes the touch exclusion in V05 of [SPEC-001](SPEC-001-INDIGO-WATER-AUDIO.md) and extends the entry and playback behavior in A03–A04 of [SPEC-002](SPEC-002-DEEP-DRIFT-SCORE.md) to touch sessions.

## Required state

- **T01 — Entry and layout.** Tapping “Enter the abyss” starts a touch session without requiring pointer lock. The phone entry screen describes the two sticks. The sticks appear only during gameplay on phones. The movement stick sits in the lower-left corner and the camera stick sits in the lower-right, inside the screen’s safe area. The 9:16 layout uses two 76 CSS-pixel translucent circular bases with arrow marks and centered thumbs at rest. The sticks have no visible text labels. The compact HUD keeps the scene title and sound toggle visible. Keyboard prompts are hidden during touch play. The [portrait mockup](REFERENCES/SPEC-003-MOBILE-TOUCH-CONTROLS-PORTRAIT.png) shows the intended placement and scale.
- **T02 — Movement.** The left stick swims forward/back along the current view direction and strafes left/right relative to the camera. Players can change depth by pitching the camera and swimming forward or backward. Displacement beyond a small neutral zone sets swimming speed proportionally. Full deflection reaches normal desktop swim speed in any direction.
- **T03 — Camera.** The right stick turns the camera left/right and tilts it up/down. Outside the neutral zone, displacement controls how fast the view turns. A held deflection continues turning the view. Pitch stays within the existing camera limits.
- **T04 — Two-finger input.** Each stick tracks its own finger from press through release, even if the finger drifts beyond the control. Both sticks accept diagonals and work simultaneously. Each thumb follows its finger within the base’s travel radius, then returns to center when its input ends. Releasing one finger clears only its stick. A browser cancellation clears the affected stick. A hidden page, focus loss or viewport rotation clears both sticks. Using the sticks leaves the page in place without scrolling or zooming it.
- **T05 — Sound and desktop.** Touch entry starts Deep Drift when sound is enabled. The on-screen sound button toggles the score without moving the camera. A hidden page pauses the score, which resumes when visible if the scene is active and sound is enabled. Desktop entry continues to use pointer lock. On computers, WASD, Q/E, Shift, R, Esc, H and M remain available alongside mouse look. The game remains a self-contained root `index.html`.

## Acceptance criteria

- **AC01 — Phone entry and framing.** On WebGPU-capable iOS Safari and Android Chrome, open the game in portrait and tap “Enter the abyss.” The scene becomes playable with both sticks visible and unlabeled. At 360 × 640 CSS pixels the circles measure 76 CSS pixels in diameter and their placement matches the reference. At 320 × 568 and at a taller phone viewport with a bottom safe-area inset, the controls remain fully visible, reachable and clear of the sound toggle and center of the scene.
- **AC02 — Move and look together.** Hold the left stick up with one thumb and drag the right stick left, then up, with the other. The camera swims and turns at the same time. Check all four directions and diagonals on each stick. Small deflections beyond the neutral zone are slower than full deflections. When looking up and swimming forward, the camera gains altitude.
- **AC03 — Release and interruption.** While both sticks are held, drag one finger beyond its stick and release it. Its thumb centers and its input stops. The other stick remains active until released. Trigger cancellation of one touch and verify its stick centers while the other remains active. Switch away from the browser or rotate the phone while holding both sticks. Both thumbs center and the camera rests until the next touch.
- **AC04 — Audio.** Verify silence before entry and playback after touch entry with sound enabled. Toggle sound off and on during play. Background and reopen the page with sound enabled, then repeat with sound muted. Verify pause and eligible resume without duplicate playback.
- **AC05 — Desktop regression.** On desktop Chrome, enter using mouse pointer lock and exercise the existing keyboard, mouse and sound controls. Verify Esc returns to the entry screen and pauses the score, and re-entry restores play. Verify the sticks are absent on computers, including touch-enabled laptops and narrow desktop windows, and on tablets. Run the repository HTML, JavaScript and WGSL checks.
