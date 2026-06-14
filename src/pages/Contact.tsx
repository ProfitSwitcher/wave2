import { COMPANY } from "../lib/content";
import { MapPin, Phone, Clock, Link2, ExternalLink } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [mapFailed, setMapFailed] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <p className="section-label text-center">Find Us</p>
      <h1 className="section-title text-center">
        Next to The Cow
      </h1>
      <p className="section-subtitle text-center mx-auto">
        Off Highway 200, Greenough, Montana
      </p>

      {/* Map — with fallback */}
      <div className="rounded-2xl overflow-hidden shadow-hero mb-12 border-2 border-brand-brown/5" aria-label="Map showing Cow Store N More location">
        {mapFailed ? (
          <div className="aspect-video flex items-center justify-center bg-brand-cream-dark px-8">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-brand-green mx-auto mb-3" aria-hidden="true" />
              <p className="font-body text-brand-brown mb-4">Map temporarily unavailable</p>
              <a
                href={`https://www.google.com/maps/dir//${encodeURIComponent(COMPANY.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex text-sm px-6 py-3"
                aria-label={`Get directions to ${COMPANY.address}`}
              >
                Get Directions on Google Maps <ExternalLink className="w-3 h-3 ml-2" aria-hidden="true" />
              </a>
            </div>
          </div>
        ) : (
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.0!2d-113.8333!3d47.6667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536bdf4c8c3e7f4d%3A0x0!2s44676+MT-200%2C+Greenough%2C+MT+59823!5e0!3m2!1sen!2sus!4v"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cow Store N More location on Google Maps"
              className="w-full h-full"
              onError={() => setMapFailed(true)}
            />
          </div>
        )}
      </div>

      {/* Info grid — no cards, info-block style */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="info-block">
          <h3 className="font-display text-lg font-semibold text-brand-green mb-5 flex items-center gap-2">
            <MapPin className="w-5 h-5" aria-hidden="true" /> Address
          </h3>
          <address className="font-body not-italic mb-4">{COMPANY.address}</address>
          <a
            href={`https://www.google.com/maps/dir//${encodeURIComponent(COMPANY.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex text-sm px-6 py-3"
            aria-label={`Get directions to ${COMPANY.address}`}
          >
            Get Directions <ExternalLink className="w-3 h-3 ml-2" aria-hidden="true" />
          </a>
        </div>

        <div className="info-block">
          <h3 className="font-display text-lg font-semibold text-brand-green mb-5 flex items-center gap-2">
            <Phone className="w-5 h-5" aria-hidden="true" /> Phone
          </h3>
          <a 
            href={`tel:${COMPANY.phone}`} 
            className="font-body text-brand-green text-xl font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:ring-offset-2 focus:ring-offset-brand-cream rounded"
            aria-label={`Call us at ${COMPANY.phone}`}
          >
            {COMPANY.phone}
          </a>
        </div>
      </div>

      {/* Hours + Social — side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="info-block">
          <h3 className="font-display text-lg font-semibold text-brand-green mb-5 flex items-center gap-2">
            <Clock className="w-5 h-5" aria-hidden="true" /> Hours
          </h3>
          <dl className="space-y-3">
            {[
              ["Monday – Friday", COMPANY.hours.mon],
              ["Saturday", COMPANY.hours.sat],
              ["Sunday", COMPANY.hours.sun],
            ].map(([day, hours]) => (
              <div key={day} className="flex justify-between font-body">
                <dt>{day}</dt>
                <dd className="font-semibold">{hours}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="info-block">
          <h3 className="font-display text-lg font-semibold text-brand-green mb-5 flex items-center gap-2">
            <Link2 className="w-5 h-5" aria-hidden="true" /> Social
          </h3>
          <div className="space-y-3">
            <a
              href={`https://www.instagram.com/${COMPANY.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-brand-green font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:ring-offset-2 focus:ring-offset-brand-cream rounded"
              aria-label={`Follow us on Instagram: ${COMPANY.instagram}`}
            >
              {COMPANY.instagram} <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <a
              href={`https://www.instagram.com/${COMPANY.theCow.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-brand-green font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:ring-offset-2 focus:ring-offset-brand-cream rounded"
              aria-label={`Follow The Montana Cow on Instagram: ${COMPANY.theCow}`}
            >
              {COMPANY.theCow} (The Montana Cow) <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
