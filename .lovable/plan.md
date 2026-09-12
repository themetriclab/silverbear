# Fix stale favicon: old "Wildlife Discovered" logo still showing

## Diagnosis (confirmed)
- `public/favicon.png` (64×64) is the new polar-bear logo, and `index.html` links it correctly. Both preview and live site serve it.
- However, the live site also answers `/favicon.ico` with a 256×256 ICO containing the **old black "Wildlife Discovered" compass logo** (downloaded and visually confirmed).
- Browsers and Google Search fetch `/favicon.ico` by default regardless of the `<link rel="icon">` tag. Google's site icon in search results comes from that old file, and the project no longer has a `public/favicon.ico` to replace it.

## Fix
1. Generate `public/favicon.ico` from the new polar-bear logo (`public/favicon.png` source) with standard ICO sizes (16, 32, 48) so `/favicon.ico` serves the new brand.
2. Keep the existing `<link rel="icon" href="/favicon.png" type="image/png" />` in `index.html` — both files will agree, so every fetch path returns the new logo.
3. Verify after build that both `/favicon.png` and `/favicon.ico` serve the polar-bear image.

## Note
- Google caches site icons for weeks; after publishing, the search-result icon will update on Google's own schedule (requesting a reindex of the homepage in Search Console can speed it up). Nothing else needs to change.

## Technical details
- Command: `magick public/favicon.png -define icon:auto-resize=16,32,48 public/favicon.ico`
- No other files touched.
