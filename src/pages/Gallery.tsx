import { IMAGE_NAMES } from "../lib/image-imports";
import { ExternalLink } from "lucide-react";

export function Gallery() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <p className="section-label text-center">See It</p>
      <h1 className="section-title text-center">Gallery</h1>
      <p className="section-subtitle text-center mx-auto">
        Photos from the Cow Store N More
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4" role="list" aria-label="Photo gallery">
        {IMAGE_NAMES.map(({ src, alt }) => (
          <div key={src} className="gallery-item aspect-square" role="listitem">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="gallery-overlay" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-brand-brown/60 to-transparent">
              <p className="font-body text-xs text-brand-cream/90">{alt}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://www.instagram.com/cow_store_n_more"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center gap-2"
          aria-label="Follow Cow Store N More on Instagram"
        >
          Follow on Instagram
          <ExternalLink className="w-3 h-3 ml-1" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
