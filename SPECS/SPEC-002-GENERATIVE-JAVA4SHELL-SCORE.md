# SPEC-002: Generative Java4Shell Score

## Objective

Adapt the original synth score from the Java4Shell motion graphic into live music for Abyssal Garden. This specification supersedes the sound requirements in [SPEC-001](SPEC-001-INDIGO-WATER-AUDIO.md). Its visual and camera-control requirements continue to apply.

## Requirements

- **A01 — Synthesis:** Generate the four-chord progression, three sine harmonics and shaped note envelopes with Web Audio. Keep the score in the root `index.html` so the game can run directly from disk without audio assets or a build step.
- **A02 — Variation:** Schedule four-second bars with bass, harmony and occasional chimes. Vary chime selection and occurrence, note timing, level and stereo placement within bounded ranges.
- **A03 — Activation:** Start music after the player enters the scene. The M key and sound button toggle sound.
- **A04 — Pause and return:** Fade and suspend sound on mute, pointer unlock or a hidden page. Resume from the same audio context when the scene is active, visible and unmuted.
- **A05 — Level:** Use restrained default levels and smooth note envelopes and mute transitions.

## Verification

- Open the game in Chrome from a local server and directly from `index.html`. Verify silence before entry, start on entry and continued generation across bars.
- Verify pause and resume with M, pause with Esc and resume on re-entry without creating a second audio context.
- Render a stereo excerpt using the same Web Audio synthesis and bar scheduler. Compare different seeds to confirm that the score varies and verify that the output has signal in both channels with headroom.
- Run the repository HTML, JavaScript and WGSL checks.
