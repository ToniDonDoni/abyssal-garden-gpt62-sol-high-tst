# SPEC-001: Indigo Abyssal Garden with Procedural Underwater Sound

## Objective and provenance

The game presents the navigable scene of the merged [Kuindzhi x Lalique V3 HTML study](https://github.com/ToniDonDoni/adavilazil/blob/238c0bdd5b3793936401c8a0d007084dd1546bcd/test/explore_visual_styles/kuindzhi_lalique_abyssal_garden/index-v3.html), with an indigo color direction and a procedural underwater soundscape. The delivered page is one readable, self-contained `index.html`.

The underlying artistic methods and composition are defined in the [V3 artistic specification](https://github.com/ToniDonDoni/adavilazil/blob/238c0bdd5b3793936401c8a0d007084dd1546bcd/test/explore_visual_styles/kuindzhi_lalique_abyssal_garden/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3.md) and [scene map](https://github.com/ToniDonDoni/adavilazil/blob/238c0bdd5b3793936401c8a0d007084dd1546bcd/test/explore_visual_styles/kuindzhi_lalique_abyssal_garden/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3-SCENE-MAP.md). The supplied [indigo reference](REFERENCES/SPEC-001-INDIGO-WATER-AUDIO-INDIGO.png) governs the new palette. Its card border, captions and typography are contextual presentation, not additional scene content to reproduce.

## Historical inputs

The earlier soft-light handoff is archived specifically for this specification under [ARCHIVE/SPEC-001-INDIGO-WATER-AUDIO/](ARCHIVE/SPEC-001-INDIGO-WATER-AUDIO/):

- [Earlier scene provenance and handoff](ARCHIVE/SPEC-001-INDIGO-WATER-AUDIO/V3-SOFT-LIGHT-HANDOFF-README.md).
- [Earlier lighting requirements and unfinished work](ARCHIVE/SPEC-001-INDIGO-WATER-AUDIO/V3-SOFT-LIGHT-HANDOFF-TODO.md).

These documents explain the predecessor checkpoint; this specification defines the current requirements. Each archived document links back here. Archive groups use the owning specification's complete filename stem, so different specifications have separate, identifiable history.

## Required visual result

- **V01 — Scene continuity:** the canyon, wreck, whale-fluke sculpture, kelp, enamel coral, fish and manta remain procedural 3D subjects with the existing free camera and animation. The image is not flattened into the supplied reference.
- **V02 — Indigo hierarchy:** deep blue-black water surrounds a single blue-violet focal region, a small pale lavender-white nucleus, a broad diffuse indigo/violet halo and softly feathered shafts. Violet and magenta organic accents remain secondary, with restrained cyan/lilac detail. A green/mint wash does not dominate the new view.
- **V03 — Light and depth:** the broad halo and soft shafts of the merged page remain perceptible, world-anchored and coherently obscured by foreground depth. Dark negative space remains around the opening focus near half width and 43 percent height.
- **V04 — Local materials:** selected organic surfaces carry bounded enamel colors and fine veins; wood and rock remain matte. Existing differences from the illustration, including faceting and carved-tail recognition, remain disclosed rather than presented as solved.
- **V05 — Framing and controls:** landscape desktop views preserve the central focus. WASD, mouse look, Q/E, Shift, R, Esc and H remain usable. Narrow framing may crop peripheral subjects; touch controls are outside scope.

## Required sound and interaction

- **A01 — Procedural origin:** all audio is synthesized or generated in memory. No MP3, WAV, downloaded sample, external music service or audio asset is used at runtime.
- **A02 — Underwater character:** a continuous muffled, slowly changing water bed, a restrained low-frequency pressure layer and occasional soft bubble-like events form a quiet stereo soundscape. Events vary in timing, pitch and placement; the result avoids a short obvious repeating musical phrase.
- **A03 — User activation:** entering the scene activates sound through the same user gesture. The page remains silent before entry. A clear sound control and the M key toggle sound without duplicating contexts or layers.
- **A04 — Pause and return:** releasing the pointer with Esc or hiding the page silences and suspends sound. Re-entering resumes according to the user's mute preference. Repeated entry/mute cycles preserve a single active sound graph.
- **A05 — Level and transitions:** default levels are restrained. Gain transitions and event envelopes avoid abrupt clicks; the output remains finite, non-silent while enabled, and below digital clipping. Muted/paused output becomes effectively silent.
- **A06 — Verified output:** an actual browser run establishes that the running audio graph produces a captured audio signal, rather than relying on source inspection or a running-context flag alone. A locally recorded sound excerpt is available for listening. Physical speaker routing is not inferred from a browser recording.

## Documentation and delivery

- **D01:** current specifications, this reference image and a separate outcome review live under `SPECS/`. The reference filename shares the specification's stem. Earlier handoff documents are historical material in `SPECS/ARCHIVE/SPEC-001-INDIGO-WATER-AUDIO/`, not root-level active requirements.
- **D02:** the pull request contains the spec and the corresponding code change. The game remains one readable root `index.html`, opened directly without a build step or runtime packages.
- **D03:** implementation evidence is recorded separately in `SPEC-001-INDIGO-WATER-AUDIO-REVIEW.md`, including actual screenshots/audio observations, remaining visual differences and limits of the audio check. Temporary capture scripts and generated recordings stay local.
- **D04 — Visible version:** the first screen carries a small `Version 2.0` label maintained directly in `index.html`. The M control is explicitly documented as mute/unmute and works on repeated presses.

- **D05 — Code validation:** the action lints the root `index.html`, checks its inline JavaScript syntax and compiles all three WGSL modules. It does not build, stamp or generate a second HTML file.

## Sound research and selected approach

The [W3C Web Audio specification](https://www.w3.org/TR/webaudio-1.1/) supplies the relevant building blocks: in-memory buffers, oscillators, time-varying filters, gain automation and stereo panning. [Chrome's game-audio guidance](https://developer.chrome.com/blog/web-audio-autoplay) requires resuming audio after user interaction. These establish API behavior, not a scientifically exact underwater acoustic model.

The selected creative approximation uses generated noise filtered into a muffled water bed, slowly modulated low tones for depth, and short downward sine sweeps for bubbles. Smooth gain envelopes and restrained output keep the sound compatible with the scene's quiet atmosphere. This is procedural sound design; no claim of calibrated hydrophone realism is made.
