# Polish Checklist — Session Learnings

Practical polish patterns demonstrated during real project polish passes.

## Accessibility (First Priority)

Every interactive element needs visible focus indicators:

```css
/* In @layer components or inline */
focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:ring-offset-2
```

- **Navigation links**: Add `focus:ring` + `rounded` so keyboard users see where they are
- **Buttons**: Already have `focus:ring` from the component definition
- **Phone links**: Add `focus:ring` + `rounded` — these are easy to miss
- **Social links**: Add `focus:ring` + `rounded`
- **Mobile menu toggle**: Add `focus:ring` + `rounded`

Semantic HTML matters for screen readers:

- `<nav role="navigation" aria-label="Main navigation">`
- `<footer role="contentinfo">`
- `<section>` with proper `<h1>`–`<h3>` hierarchy
- `<address>` for physical addresses (not `<p>`)
- `<dl>/<dt>/<dd>` for hours (not `<ul>/<li>`)
- `aria-hidden="true"` on decorative icons
- `aria-label` on phone links, gallery, social links, map embed

## Interaction States

Every button and link needs all states:

- **Default**: Resting state (color, size, shape)
- **Hover**: Subtle feedback (color shift, shadow, scale)
- **Focus**: Keyboard focus indicator (ring + offset)
- **Active**: `active:scale-[0.98]` for satisfying press feedback
- **Disabled**: (if applicable) — muted, no pointer-events

## Reduced Motion

Respect user preferences — this is non-negotiable:

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Custom keyframes (e.g., scroll indicator) must also respect this.

## Semantic HTML Patterns

- **Addresses**: `<address class="not-italic">` — not `<p>`
- **Hours**: `<dl>/<dt>/<dd>` — not `<ul>/<li>`
- **Navigation**: `<nav role="navigation" aria-label="...">`
- **Footer**: `<footer role="contentinfo">`
- **Main content**: `<main>` wrapper (if applicable)
- **Images**: Descriptive `alt` text, `aria-hidden` on decorative elements
- **Maps**: `title` attribute + `aria-label` on wrapper

## Responsive Touch Targets

- Buttons: `px-8 py-4` minimum (well above 44x44px)
- Nav links: `py-2 px-1` minimum padding
- Mobile menu items: `py-3 px-3` minimum
- All interactive elements must be tappable on mobile

## Content Fixes

- **SPA route anchors**: `href="#menu"` does not work on client-side routers (wouter, react-router). Use `href="/menu"` for full navigation.
- **Hero image contrast**: Ensure text overlay has sufficient contrast. `bg-brand-brown/50` on a hero image is a safe default.
- **Text readability**: Use `brand-cream/85` (not `/70`) for body text on dark overlays.

## Code Quality

- Remove unused imports (e.g., `Coffee` in Footer when only `Clock` was needed)
- Remove TypeScript errors (e.g., `priority` prop on `<img>` — Next.js only)
- No console logs in production
- No commented-out code
- Consistent naming across all pages
