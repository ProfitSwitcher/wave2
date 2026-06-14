import { COMPANY } from "../lib/content";
import { MapPin, Phone, Clock, Link2 } from "lucide-react";

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <p className="section-label text-center">Our Story</p>
      <h1 className="section-title text-center">About Us</h1>

      {/* Story — unboxed, big text, no card wrapper */}
      <div className="mb-16">
        <p className="font-body text-xl md:text-2xl text-brand-brown/85 leading-relaxed mb-6">
          Cow Store N More is the newest addition to Montana's most iconic roadside landmark — 
          The Cow. Located right off Highway 200 in Greenough, Montana, we bring together the 
          things Montana does best: great coffee, real ice cream, huckleberry everything, and 
          unique gifts made right here in the Treasure State.
        </p>
        <p className="font-body text-xl md:text-2xl text-brand-brown/85 leading-relaxed">
          Whether you're passing through on Route 200, visiting Flathead Lake, or making a 
          special trip to see The Cow, stop by for a Big Dipper Ice Cream, a huckleberry shake, 
          or one of our many Montana-made souvenirs. We're fueled by Montana, and marked by a cow.
        </p>
      </div>

      {/* Info blocks — side by side, no cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="info-block">
          <h3 className="font-display text-lg font-semibold text-brand-green mb-5 flex items-center gap-2">
            <MapPin className="w-5 h-5" aria-hidden="true" /> Location
          </h3>
          <address className="font-body not-italic">
            <p className="mb-4">{COMPANY.address}</p>
          </address>
          <a 
            href={`tel:${COMPANY.phone}`} 
            className="font-body text-brand-green text-lg font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:ring-offset-2 focus:ring-offset-brand-cream rounded"
            aria-label={`Call us at ${COMPANY.phone}`}
          >
            {COMPANY.phone}
          </a>
        </div>

        <div className="info-block">
          <h3 className="font-display text-lg font-semibold text-brand-green mb-5 flex items-center gap-2">
            <Clock className="w-5 h-5" aria-hidden="true" /> Hours
          </h3>
          <dl className="space-y-3">
            {[
              ["Mon – Fri", COMPANY.hours.mon],
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
      </div>

      {/* Social — subtle, no card */}
      <div className="mt-12 text-center">
        <Link2 className="w-6 h-6 text-brand-gold mx-auto mb-3" aria-hidden="true" />
        <p className="font-body text-brand-brown/60">
          Follow us:{" "}
          <a 
            href={`https://www.instagram.com/${COMPANY.instagram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-green hover:underline focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:ring-offset-2 focus:ring-offset-brand-cream rounded"
            aria-label={`Follow us on Instagram: ${COMPANY.instagram}`}
          >
            {COMPANY.instagram}
          </a>
          {" · "}
          <a
            href={`https://www.instagram.com/${COMPANY.theCow.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-green hover:underline focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:ring-offset-2 focus:ring-offset-brand-cream rounded"
            aria-label={`Follow The Montana Cow on Instagram: ${COMPANY.theCow}`}
          >
            {COMPANY.theCow}
          </a>
        </p>
      </div>
    </div>
  );
}
