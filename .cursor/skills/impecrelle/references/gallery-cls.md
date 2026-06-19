# Gallery CLS Prevention Pattern

Layout Shift (CLS) occurs when images load and push content around. The fix is not on the `<img>` — it's on the **container**.

## The Mistake

```tsx
/* WRONG: aspect-ratio on the image only */
<div className="gallery-item">
  <img src={src} alt={alt} className="w-full aspect-square object-cover" />
</div>
```

The container has no intrinsic height until the image loads. The grid cell collapses to 0 height, then jumps to the correct height — visible layout shift.

## The Fix

```tsx
/* CORRECT: aspect-ratio on the container, explicit dimensions on the image */
<div key={src} className="gallery-item aspect-square" role="listitem">
  <img
    src={src}
    alt={alt}
    loading="lazy"
    className="w-full h-full object-cover"
  />
</div>
```

**CSS** (in your design system / index.css):
```css
.gallery-item {
  @apply relative overflow-hidden rounded-2xl cursor-pointer;
}
.gallery-item img {
  @apply w-full h-full object-cover transition-transform duration-500;
}
.gallery-item:hover img {
  @apply scale-105;
}
```

## Key points

- **`aspect-square` on the container** — this reserves the space before the image loads. Zero layout shift.
- **`w-full h-full object-cover` on the image** — fills the pre-reserved container.
- **`loading="lazy"`** — defers off-screen images for performance (doesn't affect CLS since the container already has space).
- **`role="listitem"`** — accessibility for screen readers.

## Equivalent patterns

| Grid type | Container class | Image class |
|-----------|-----------------|-------------|
| Square gallery | `aspect-square` | `w-full h-full object-cover` |
| Portrait gallery | `aspect-[3/4]` | `w-full h-full object-cover` |
| Landscape gallery | `aspect-[4/3]` | `w-full h-full object-cover` |
| Mixed aspect | Set explicit `height` on container | `object-cover` on image |

## Verification

Run the detector and check for `layout-transition` or CLS warnings on gallery elements. A clean scan = no layout shift.
