# Map Iframe Fallback Pattern

When embedding Google Maps (or any third-party iframe) in a frontend interface, always provide a fallback state. Iframes can fail due to network issues, ad blockers, blocked domains, or API key problems — and a blank iframe box is a dead end for the user.

## Pattern

```tsx
import { useState } from "react";

export function MapSection() {
  const [mapFailed, setMapFailed] = useState(false);

  return (
    <div className="rounded-2xl overflow-hidden shadow-hero mb-12 border-2 border-brand-brown/5" aria-label="Map showing store location">
      {mapFailed ? (
        <div className="aspect-video flex items-center justify-center bg-brand-cream-dark px-8">
          <div className="text-center">
            <MapPin className="w-10 h-10 text-brand-green mx-auto mb-3" aria-hidden="true" />
            <p className="font-body text-brand-brown mb-4">Map temporarily unavailable</p>
            <a
              href={`https://www.google.com/maps/dir//${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex text-sm px-6 py-3"
              aria-label={`Get directions to ${address}`}
            >
              Get Directions on Google Maps <ExternalLink className="w-3 h-3 ml-2" aria-hidden="true" />
            </a>
          </div>
        </div>
      ) : (
        <div className="aspect-video">
          <iframe
            src={`https://www.google.com/maps/embed?...`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Store location on Google Maps"
            className="w-full h-full"
            onError={() => setMapFailed(true)}
          />
        </div>
      )}
    </div>
  );
}
```

## Key points

- **`useState(false)`** tracks whether the iframe loaded successfully.
- **`onError`** on the `<iframe>` sets `mapFailed = true` when the browser fires the error event.
- **Fallback panel** shows a clear message + a direct "Get Directions" link (bypasses the iframe entirely).
- **Same `btn-primary` styling** on the fallback CTA keeps visual consistency.
- **`aria-label`** on the container and the fallback CTA maintains accessibility.
- **`aspect-video`** on the container (not just the iframe) prevents layout shift when toggling between states.

## When to use

- Any embedded Google Maps iframe
- Any third-party iframe where failure would block the user's goal
- Any embedded content that might be blocked by ad blockers or network restrictions

## When NOT to use

- Internal dashboards where the user controls the environment
- Offline-first applications (the content is already available locally)
- Content where the fallback provides strictly equal functionality (e.g., a text address that's always visible)
