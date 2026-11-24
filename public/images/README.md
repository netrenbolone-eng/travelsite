# Local image assets

The `vietnam-*.svg` illustrations are in-use local fallback artwork for the region gallery, category tiles and tour cards. They ensure that the layout still works when external photography is unavailable.

The selected region gallery and the fixed page background also use fixed Unsplash CDN image URLs in the source code; credits and the image source list are in the root `CREDITS.md` file. The fixed background uses the original hero poster and `vietnam-bay.svg` as local fallbacks.

To replace any illustration with an approved photo, add the file under `public/images/`, update the matching path in `src/data/categories.ts`, `src/data/tours.ts` or `src/components/region-explorer.tsx`, and keep a descriptive `alt` text. Suggested crops: category tiles 1000 × 1200 px; tour cards 1000 × 1250 px; region gallery 1000 × 650 px.
