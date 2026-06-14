import { COMPANY } from "../lib/content";
import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-cream" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-brand-gold" />
              </div>
              <span className="font-display font-bold text-lg">{COMPANY.name}</span>
            </div>
            <p className="font-body text-brand-cream/60 text-sm leading-relaxed max-w-xs">
              {COMPANY.description}
            </p>
            <div className="mt-6">
              <p className="font-body text-xs text-brand-cream/40 uppercase tracking-widest mb-2">Hours</p>
              <p className="font-body text-sm text-brand-cream/70">
                Mon – Sun: {COMPANY.hours.mon}
              </p>
            </div>
          </div>

          {/* Quick Links — keep it short */}
          <div>
            <h3 className="font-display font-semibold text-brand-cream mb-5">Explore</h3>
            <ul className="space-y-3" aria-label="Quick links">
              {[
                ["Menu", "/menu"],
                ["Gallery", "/gallery"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-body text-brand-cream/60 hover:text-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:ring-offset-2 focus:ring-offset-brand-brown rounded"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-brand-cream mb-5">Visit</h3>
            <ul className="space-y-4" aria-label="Contact information">
              <li className="flex items-start gap-2.5 text-brand-cream/60">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-gold shrink-0" />
                <span className="font-body text-sm">{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="font-body text-sm text-brand-cream/70 hover:text-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:ring-offset-2 focus:ring-offset-brand-brown rounded"
                  aria-label={`Call us at ${COMPANY.phone}`}
                >
                  {COMPANY.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-cream/10 mt-12 pt-8 text-center">
          <p className="font-body text-sm text-brand-cream/40">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
