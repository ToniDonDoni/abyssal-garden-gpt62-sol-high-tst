# SPEC-001: Indigo Water and Audio Review

## Scope and environment

The requirements are in [SPEC-001-INDIGO-WATER-AUDIO.md](SPEC-001-INDIGO-WATER-AUDIO.md); the supplied palette reference is [REFERENCES/SPEC-001-INDIGO-WATER-AUDIO-INDIGO.png](REFERENCES/SPEC-001-INDIGO-WATER-AUDIO-INDIGO.png). The scene is transferred from the merged artistic study, with color and procedural sound changes in this game repository.

Actual Chrome 157 on macOS rendered the page through Apple Metal WebGPU. The observed opening and approach views were captured at 1536 x 1024. Audio was captured from the running browser's output graph at 48 kHz stereo. These are implementer observations; no independent artistic review or physical loudspeaker test is claimed.

## Visual observations

- **V01:** the original procedural subject categories, animation and free camera remain. The scene is still three-dimensional.
- **V02:** the opening is blue-black and indigo, with a pale lavender-white source, blue-violet halo, soft shafts and local violet/magenta organic accents. The former mint/green treatment no longer dominates.
- **V03:** the broad diffuse halo and depth-aware shafts remain visible around the open center. The focus stays near half width and 43 percent height in the opening view.
- **V04:** selected fans retain bounded enamel regions and fine veins while wood and rock stay matte. Existing coarse/faceted geometry and the plant-like carved-tail silhouette remain limitations; the supplied image is a color direction, not a claimed exact geometric reconstruction.
- **V05:** the transferred navigation remains, and the new sound button and M mute/unmute help are visible. Direct file opening, keyboard navigation, reset, HUD toggle and M help were exercised. Both 1536 x 1024 and 1600 x 900 retained the opening focus; 390 x 844 keeps the light visible while cropping peripheral subjects. Touch controls are not implemented.

## Actual audio output

The following measurements come from PCM captured after the page's real master gain, while the audio context was running. Individual layers were isolated in the local inspection session without changing the delivered page.

| Captured output | RMS amplitude | Peak amplitude | Observation |
| --- | ---: | ---: | --- |
| Full soundscape, about 12 seconds | 0.0476 | 0.2032 | Finite, non-silent stereo output, with headroom below clipping. |
| Output after the second M press | 0.0480 | 0.1988 | Sound returns after mute. |
| Filtered water alone | 0.0473 | 0.1832 | Generated noise produces a continuous water bed. |
| Low-pressure tones alone | 0.00730 | 0.01451 | The quiet low-frequency layer is present. |
| Bubble events alone | 0.00237 | 0.05472 | Intermittent generated events are present. |

The full-mix left/right correlation was approximately 0.03, consistent with a stereo water bed rather than duplicated mono. Only the HTML request was made during the audio run; the noise buffer was generated in memory. No audio asset was fetched.

Before entry there was no audio context. One M press changed the control to off and suspended the context; the second changed it to on and restored a measured non-silent output. Esc suspended sound. Re-entry reused the same context: one context and one generated stereo noise buffer remained. No JavaScript or captured WebGPU errors occurred in this run.

Audio excerpts and temporary inspection scripts stay local. The WAV recordings are evidence produced from browser output, not runtime game assets. Capture confirms the browser's audio signal, not the user's physical speaker routing or a subjective claim of hydrophone realism.

## Version and limits

The first screen displays a small `Version 2.0` label. The root `index.html` is the single readable and playable source; no generated page or commit-stamping step is used.

The artistic result still differs from the color reference in geometry, subject placement and close-up material finesse. The visibility handler was exercised with a synthetic hidden/visible signal against the real audio graph: hidden suspended it, visible resumed it, and a muted preference stayed muted. A native hidden-tab transition was not established by browser automation, so that physical transition is not claimed as an observed pass.

## Final direct-file check

The delivered HTML was also opened through a local file URL. Its measured audio RMS was approximately 0.0456 after entry. While muted, the context was suspended and zero output callbacks occurred during the observation window. Repeated mute/unmute, Esc pause and re-entry retained one context. The final run recorded no JavaScript or WebGPU errors.

These observations establish generated browser output and control behavior. Subjective sound quality and the user's speaker route remain listening checks; a locally captured full-mix WAV excerpt is supplied with the handoff. No capture helper or generated sound file is added to the repository. The tooling is limited to HTML linting, JavaScript syntax and WGSL compilation.

## Code-validation observations

The action checks `index.html` directly with HTMLHint, Node's JavaScript syntax check and Naga compilation of all three shaders. These are technical code-validity checks; artistic and sound observations remain those recorded above.
