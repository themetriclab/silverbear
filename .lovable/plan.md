# "Read all reviews on Google" — blocked page fix

## What's happening

The button link is correct. The "www.google.com is blocked" screen appears because the click is opening Google inside the editor's preview window, and Google refuses to be displayed inside another site's frame. On the real published site the same button opens a normal new tab and works.

## What to change

Make the button force a true new browser tab, so it can never try to load Google inside a frame:

- In the reviews section, handle the click in code and open the link with `window.open(url, "_blank", "noopener,noreferrer")`, keeping the existing link so it still behaves like a normal link for search engines and right-click / middle-click.
- Same component is used on the homepage and the Polar Bear Photography Tour page, so both are fixed at once.

## How to confirm

Open the live site (or the preview in its own browser tab, not the embedded panel) and click "Read all reviews on Google" — it should land on the Silver Bear Photo Tours Google listing.
