import { COMPANY } from "../lib/content";
import { Menu as MenuIcon, X, Coffee, Phone, Link2 } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  currentPage: string;
}

export function Navbar({ currentPage }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-sm border-b border-brand-brown/10" role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5" aria-label="Cow Store N More home">
            <div className="w-9 h-9 bg-brand-green rounded-xl flex items-center justify-center">
              <Coffee className="w-5 h-5 text-brand-cream" />
            </div>
            <span className="font-display font-bold text-brand-brown text-base hidden sm:inline">
              {COMPANY.name}
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-medium transition-colors py-2 px-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:ring-offset-2 focus:ring-offset-brand-cream ${
                  currentPage === link.href
                    ? "text-brand-green font-semibold"
                    : "text-brand-brown/60 hover:text-brand-green"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${COMPANY.phone}`}
              className="btn-primary text-sm px-5 py-2.5"
              aria-label={`Call us at ${COMPANY.phone}`}
            >
              <Phone className="w-4 h-4 mr-1.5" />
              {COMPANY.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-brand-brown rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:ring-offset-2 focus:ring-offset-brand-cream"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div id="mobile-menu" className="md:hidden pb-6 border-t border-brand-brown/10 mt-2 pt-4">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-body font-medium py-3 px-3 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:ring-offset-2 focus:ring-offset-brand-cream ${
                    currentPage === link.href
                      ? "text-brand-green bg-brand-green/5 font-semibold"
                      : "text-brand-brown/60 hover:text-brand-green hover:bg-brand-cream-dark"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${COMPANY.phone}`}
                className="btn-primary text-center mt-4"
                aria-label={`Call us at ${COMPANY.phone}`}
              >
                <Phone className="w-4 h-4 mr-1.5" />
                {COMPANY.phone}
              </a>
              <div className="flex items-center gap-4 justify-center pt-4">
                <a
                  href={`https://www.instagram.com/${COMPANY.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-brown/50 hover:text-brand-green"
                  aria-label={`Follow us on Instagram: ${COMPANY.instagram}`}
                >
                  <Link2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
