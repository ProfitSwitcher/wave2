# "No Cards" Design System

When a project's design explicitly avoids cards (or any component), you must avoid card-like wrappers — even for informational content. This is not about the word "card" but about the **visual pattern**: `rounded-2xl` + `border` + `padding` + `shadow` on a content block.

## The Anti-Pattern

```tsx
/* WRONG: card-like wrapper for informational content */
<div className="bg-brand-green/5 rounded-2xl p-8 md:p-12 text-center border border-brand-green/10">
  <IceCream className="w-12 h-12 text-brand-green mx-auto mb-4" />
  <p>Ask About Today's Big Dipper Flavors!</p>
</div>
```

This has all the visual hallmarks of a card: rounded corners, border, padding, background tint, shadow. It contradicts a design system that says "cards are the lazy answer."

## The Fix

```tsx
/* CORRECT: unboxed text + icon */
<div className="mt-16 text-center" role="note">
  <IceCream className="w-14 h-14 text-brand-green mx-auto mb-4" aria-hidden="true" />
  <p className="font-display text-xl font-semibold text-brand-brown mb-2">
    Ask About Today's Big Dipper Flavors!
  </p>
  <p className="font-body text-brand-brown/60 text-sm">
    Rotating seasonal flavors — always made with Montana love.
  </p>
</div>
```

## Replacement patterns (when you still need visual separation)

| Pattern | When to use | Styling |
|---------|-------------|---------|
| **Unboxed text** | Informational content, callouts | Just text + icon, maybe `mt-16` for spacing |
| **Full-width band** | CTA sections, announcements | Solid background color (no border, no rounded corners), text centered |
| **Divider + text** | Section separators | Thin `<hr />` or custom divider class, followed by content |
| **Icon + label** | Feature items | Icon container (colored background, no border) + text |
| **Gradient overlay** | Image sections | Gradient on the edge of an image, not a separate wrapper |

## Key principle

A card says "this is a self-contained unit." If your design system says "content is not a unit" — full-bleed hero, clean lists, unboxed text — then wrapping content in a card-like wrapper is a design regression, even if the wrapper uses your brand colors.

## Checklist

Before adding any wrapper to a content block, ask:
1. Does this wrapper use `rounded-[2-3]xl`? → Probably a card.
2. Does it have `border`? → Probably a card.
3. Does it have `p-8` or `p-12` (padding much larger than the surrounding gap)? → Probably a card.
4. Does it have `shadow-*`? → Probably a card.

If 2+ of these are true, it's a card. Find an unboxed alternative.