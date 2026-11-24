# Hero video assets

These three files belong to the original supplied hero and were preserved unchanged:

- `hero.mp4` — desktop background video, used from 1024 px upward.
- `hero-720.mp4` — lighter source for smaller screens.
- `hero-poster.jpg` — first-frame / loading fallback and a local fallback for the fixed page background.

`src/components/hero-video.tsx` plays two copies of the same source and cross-fades between them when a clip ends. Keep the filenames and paths unless you also update that component. The existing clips and poster are the original files from the submitted archive.
