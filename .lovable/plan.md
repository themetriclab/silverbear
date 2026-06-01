## Goal
Change the header image for the **"Discover the Best Polar Bear Photography Tour in Churchill This Fall"** blog post.

## Choice
You skipped the selection, so I'll use **Bear in yellow grass** (`Bear-in-yellow-grass.jpg`) — it best matches the post's fall theme.

## Steps
1. Copy `Bear-in-yellow-grass.jpg` from uploads into `src/assets/slider/bear-yellow-grass.jpg`.
2. In `src/data/blog.ts`, add an import for the new image and set it as the `image` for the `best-polar-bear-photography-tour-churchill` post (replacing `young-bear-rock.jpg`).

This updates both the blog listing card and the post header (both read from the `image` field).

If you'd prefer a different bear photo, just tell me the filename and I'll swap it.