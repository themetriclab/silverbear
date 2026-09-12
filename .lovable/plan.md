# Pause + Zoom on Hover for Image Sliders

## Goal
Make every image auto-slider on the site pause when the mouse is over it and resume when the mouse leaves, and enlarge the hovered image by 1.5×.

## Current State
- The only image carousel in active use is `src/components/ui/image-auto-slider.tsx`.
- It is rendered on:
  - Homepage (`src/components/ImageSliderSection.tsx`)
  - Tour detail pages (`src/pages/TourDetail.tsx`) for Loon, Algonquin/Moose, Polar Bear, and Waterfowl tours
- `src/components/ui/carousel.tsx` exists (Embla-based) but is not used for image sliders.
- `src/components/ui/slider.tsx` is a form/range slider, not an image carousel.

## What Will Change
1. Update `src/components/ui/image-auto-slider.tsx`:
   - Track hover state with `onMouseEnter` / `onMouseLeave` on the scroll container.
   - Add the existing `.paused` CSS class to the scrolling track while hovered so the animation stops.
   - Remove the `.paused` class on mouse leave so scrolling resumes.
   - Change the `.image-item:hover` scale from `1.05` to `1.5`.
   - Ensure the hovered image can visually grow without being clipped by the container overflow (e.g., raise z-index or allow overflow on the hovered item).
2. Verify the change applies to all `ImageAutoSlider` instances automatically because it is a shared component.
3. Run a type-check and a quick preview check.

## Out of Scope
- No changes to `carousel.tsx` or `slider.tsx` because they are not image carousels.
- No changes to slide timing, image sources, or page layout.

## Verification
- `bunx tsc --noEmit` passes.
- Preview shows the homepage slider pausing on hover and the hovered image scaling up.
