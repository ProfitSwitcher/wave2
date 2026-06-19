# Critique Setup & Pitfalls

Practical notes for running the impeccable critique workflow (and bold/craft/polish commands that reuse it).

## Setup: Install Scripts Locally

The project must have `.cursor/skills/impeccable/` installed locally. If it's missing:

```bash
mkdir -p /path/to/project/.cursor/skills
cp -r /Users/studio1/.hermes/skills/impeccable /path/to/project/.cursor/skills/impeccable
```

The skill lives at `~/.hermes/skills/impeccable/` on this machine. Every project that wants to run critique/bolder/polish needs a local copy.

## Common False Positives (from bundled scripts)

When running `detect.mjs --json .`, the detector scans **everything** under the target path, including the bundled impeccable scripts themselves. These false positives are normal and can be ignored:

- **`gradient-text`** — Found in `detect-antipatterns-browser.js` lines 584, 923, 930. This is the detector's own reference code, not your site.
- **`pure-black-white`** — Found in `detect-antipatterns-browser.js` line 591. Detector's bundled code.
- **`bounce-easing`** — Found in `detect-antipatterns-browser.js` line 839. Detector's bundled code.
- **`layout-transition`** — Found in `live-browser.js` line 3442. Detector's bundled code.

Only flag findings that point to your own source files (`src/`, `index.html`, `tailwind.config.js`, etc.).

## Detector Output Interpretation

- **Exit code 0** = clean (no findings in your code)
- **Exit code 2** = findings (real or false-positive)
- **Exit code 1** = script error (missing entrypoint, module not found)

Real findings will point to paths like:
- `src/pages/Home.tsx`
- `src/index.css`
- `tailwind.config.js`
- `index.html`

## Pitfall: Tailwind @apply + `group`

**This will break your build.** Tailwind's `@apply` cannot use the `group` utility.

```css
/* WRONG — breaks build */
.card {
  @apply group;
}

/* CORRECT — add `group` directly in JSX */
<div className="card group">
```

If you hit a `@apply should not be used with the 'group' utility` error:
1. Remove `group` from the `@apply` line in CSS
2. Add `group` as a className in the JSX where the element is rendered
3. Rebuild

This also applies to any Tailwind utility that depends on ancestor state (e.g., `group-hover:`). Put those in JSX, not in `@apply`.

## Pitfall: `animate-bounce` is Flagged

The detector flags Tailwind's `animate-bounce` class as a "bounce or elastic easing" anti-pattern. This is correct — it should not be used in production design.

If you need a scroll indicator or similar subtle animation, use a custom keyframe in your Tailwind config instead:

```js
// tailwind.config.js
keyframes: {
  scrollBounce: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(6px)' },
  },
}
```

Then use it via inline style:
```jsx
<div style={{ animation: 'scrollBounce 2s ease-in-out infinite' }} />
```

## Pitfall: Font Detection

The detector flags Inter, Roboto, Fraunces, Geist, Plus Jakarta Sans, and Space Grotesk as "overused fonts." These are real warnings — not false positives. If you're using any of these, consider a more distinctive alternative (Clash Display, Instrument Sans, etc.).

Note: the detector's list may be outdated. If you're using a font not listed but still feel generic, trust your own judgment — the detector is a heuristic, not a rule.

## Additional Pitfalls

- **SPA route anchors**: `href="#menu"` does not work on client-side routers (wouter, react-router). Use `href="/menu"` for full navigation, or a scroll-to-anchor helper.
- **`priority` prop on `<img>`**: This is a Next.js prop, not standard React/TypeScript. If your build fails with `Property 'priority' does not exist on type 'DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>'`, remove it.
- **`priority` is Next.js only**: If you need the hero image to load eagerly, just omit the prop — modern bundlers handle this fine without it.
