## Goal
Replace every instance of the blog category label "Field Craft" with "In the Field" in the auto-loading blog system.

## Changes
1. **src/data/blog.ts** — Update `DEFAULT_CATEGORY` from `"Field Craft"` to `"In the Field"`.
2. **6 blog post HTML files** — Update the frontmatter comment block in each file that currently says `category: Field Craft` to `category: In the Field`:
   - `src/content/blog/finding-willow-ptarmigan-churchill.html`
   - `src/content/blog/snowy-owl-photography-churchill.html`
   - `src/content/blog/ethical-red-fox-photography.html`
   - `src/content/blog/ground-level-wildlife-photo-tips.html`
   - `src/content/blog/photographing-arctic-hares-snow.html`
   - `src/content/blog/pine-marten-photography-canada.html`

## Verification
- After the edits, the Blog page will group posts under the heading "In the Field" instead of "Field Craft".
- Post cards and article headers will show the new category badge.
- No other code changes are required because the UI dynamically reads the category value from the post object.