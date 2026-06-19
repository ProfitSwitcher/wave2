# Scroll Reveal & Hero Animation Patterns

Session-derived patterns for adding purposeful motion to frontend interfaces. Covers the `useScrollReveal` hook, hero entrance animations, and CSS keyframe patterns for staggered reveals.

## The useScrollReveal Hook

A React hook that observes elements and adds a `.reveal` class when they enter the viewport. Respects `prefers-reduced-motion`.

```tsx
import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);
}
```

**Usage**: Add `className="reveal-on-scroll"` to any element you want to animate. The hook handles IntersectionObserver lifecycle, cleanup, and reduced-motion gating.

**Key points**:
- `threshold: 0.1` — triggers when 10% of the element is visible
- `unobserve` after revealing — avoids re-triggering on scroll back
- `disconnect` in cleanup — prevents memory leaks
- Respects `prefers-reduced-motion` — skips entirely for motion-sensitive users

## Hero Entrance Animations

Staggered fade-up sequence for page-load hero content. Define keyframes once, apply staggered delays per element.

### CSS (in `index.css` or component stylesheet)

```css
@keyframes heroFadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-hero-fade-up {
  animation: heroFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.animate-hero-fade-up-delay-1 { animation-delay: 100ms; }
.animate-hero-fade-up-delay-2 { animation-delay: 200ms; }
.animate-hero-fade-up-delay-3 { animation-delay: 350ms; }
.animate-hero-fade-up-delay-4 { animation-delay: 500ms; }
```

### HTML/JSX usage

```jsx
<p className="animate-hero-fade-up animate-hero-fade-up-delay-1">
  Location tag
</p>
<h1 className="animate-hero-fade-up animate-hero-fade-up-delay-2">
  Hero heading
</h1>
<p className="animate-hero-fade-up animate-hero-fade-up-delay-3">
  Tagline
</p>
<div className="animate-hero-fade-up animate-hero-fade-up-delay-4">
  CTAs
</div>
```

**Timing rationale**: 600ms total animation, 100-350ms stagger between elements. Total sequence ~800ms. Uses `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo) — confident, decisive.

## Scroll Reveal Animations

CSS keyframes for elements entering the viewport during scroll. Staggered delays create a cascading effect.

### CSS

```css
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}

.reveal {
  opacity: 0;
  animation: fadeSlideUp 500ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.reveal-delay-1 { animation-delay: 80ms; }
.reveal-delay-2 { animation-delay: 160ms; }
.reveal-delay-3 { animation-delay: 240ms; }
.reveal-delay-4 { animation-delay: 320ms; }
```

### HTML/JSX usage

```jsx
{/* Hook must be called in the parent component */}
{features.map((f, i) => (
  <div
    key={i}
    className={`reveal-on-scroll ${
      i === 0 ? "reveal-delay-1" :
      i === 1 ? "reveal-delay-2" :
      i === 2 ? "reveal-delay-3" :
      "reveal-delay-4"
    }`}
  >
    {/* content */}
  </div>
))}
```

**Key points**:
- `.reveal` starts with `opacity: 0` — invisible until IntersectionObserver adds it
- Stagger delays are 80ms apart — subtle cascading, not obvious
- Uses `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint) — slightly snappier than hero
- Only applied once per element (via `unobserve`)

## Pitfalls

- **Memory leaks**: Always `disconnect()` the observer in the cleanup function. Without it, observers accumulate across re-renders.
- **Missing `prefers-reduced-motion`**: If you skip the check, motion-sensitive users get jarring animations. Always gate on it.
- **Forgetting to call the hook**: The hook only works if called in a component that renders `.reveal-on-scroll` elements. Call it in the parent, not in individual items.
- **Stagger delays too large**: >400ms between elements feels disjointed. Keep delays 80-200ms apart for scroll reveals, 100-350ms for hero.
- **Using `height` or `width` in animations**: These trigger layout recalculation. Use `transform` and `opacity` only.
- **`@apply` + `group` breaks build**: Tailwind's `@apply` cannot use the `group` utility. Add `group` as a className in JSX instead.

## Pin Workflow

To create a standalone shortcut for `animate`:

```bash
node .cursor/skills/impeccable/scripts/pin.mjs pin animate
```

This writes to every harness directory (`~/.hermes/skills/animate`, `.cursor/skills/animate`, etc.) so `/<command>` works directly.

To remove:

```bash
node .cursor/skills/impeccable/scripts/pin.mjs unpin animate
```
