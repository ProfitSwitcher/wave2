import { COMPANY, FEATURES, MENU } from "../lib/content";
import { HERO_IMAGE } from "../lib/image-imports";
import { Coffee, IceCream, Gift, MapPin, Clock, ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero — full-bleed, minimal overlay, huge typography */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="The iconic Montana Cow statue outside Cow Store N More"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-brown/50" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 text-center py-24">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold mb-6 animate-hero-fade-up animate-hero-fade-up-delay-1">
            Highway 200 · Greenough, Montana
          </p>
          <h1 className="hero-heading animate-hero-fade-up animate-hero-fade-up-delay-2">
            Cow Store<br className="hidden md:block" />
            <span className="text-brand-gold">N More</span>
          </h1>
          <p className="hero-tagline animate-hero-fade-up animate-hero-fade-up-delay-3">
            {COMPANY.tagline}
          </p>
          <p className="font-body text-brand-cream/85 max-w-lg mx-auto mt-6 text-lg leading-relaxed animate-hero-fade-up animate-hero-fade-up-delay-3">
            {COMPANY.description}
          </p>
          <div className="hero-cta-group animate-hero-fade-up animate-hero-fade-up-delay-4">
            <a href="/menu" className="btn-secondary">
              See Our Menu
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="/contact" className="btn-outline border-brand-cream/40 text-brand-cream hover:bg-brand-cream hover:text-brand-brown">
              <MapPin className="w-4 h-4 mr-2" />
              Find Us
            </a>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
          <div className="w-6 h-10 border-2 border-brand-cream/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-brand-cream/50 rounded-full mt-2" style={{ animation: 'scrollBounce 2s ease-in-out infinite' }} />
          </div>
        </div>
      </section>

      {/* Features — no cards, clean grid with icons */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-24">
        <p className="section-label text-center reveal-on-scroll">What We Offer</p>
        <h2 className="section-title text-center reveal-on-scroll">The Good Stuff</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((f, i) => (
            <div key={i} className={`text-center reveal-on-scroll ${i === 0 ? 'reveal-delay-1' : i === 1 ? 'reveal-delay-2' : i === 2 ? 'reveal-delay-3' : 'reveal-delay-4'}`}>
              <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                {i === 0 && <Coffee className="w-7 h-7 text-brand-green" />}
                {i === 1 && <IceCream className="w-7 h-7 text-brand-green" />}
                {i === 2 && <Gift className="w-7 h-7 text-brand-green" />}
                {i === 3 && <MapPin className="w-7 h-7 text-brand-green" />}
              </div>
              <h3 className="font-display text-xl font-bold text-brand-brown mb-2">{f.title}</h3>
              <p className="font-body text-brand-brown/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Preview — break the card pattern, use clean list */}
      <section id="menu" className="bg-brand-cream-dark py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <p className="section-label text-center reveal-on-scroll">From the Counter</p>
          <h2 className="section-title text-center reveal-on-scroll">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {MENU.map((cat, catIdx) => (
              <div key={cat.category} className={`reveal-on-scroll ${catIdx === 0 ? 'reveal-delay-1' : 'reveal-delay-2'}`}>
                <h3 className="font-display text-2xl font-bold text-brand-green mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-brand-gold rounded-full" />
                  {cat.category}
                </h3>
                <ul className="space-y-0" aria-label={`${cat.category} menu items`}>
                  {cat.items.map((item) => (
                    <li key={item.name} className="menu-item">
                      <div>
                        <span className="font-body font-semibold text-brand-brown">{item.name}</span>
                        {item.desc && (
                          <p className="font-body text-sm text-brand-brown/50 mt-1">{item.desc}</p>
                        )}
                      </div>
                      {item.price && (
                        <span className="menu-price">{item.price}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal-on-scroll">
            <a href="/menu" className="btn-primary inline-flex">
              Full Menu
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA — bold, full-width, with image feel */}
      <section className="relative bg-brand-green py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-gold rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-cream rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 md:px-8 reveal-on-scroll">
          <p className="section-label text-brand-gold">Stop By Next to The Cow</p>
          <h2 className="font-display text-display-2xl md:text-display-3xl font-bold text-brand-cream mb-6 tracking-tight">
            Montana's Most Iconic<br />Roadside Landmark
          </h2>
          <p className="font-body text-brand-cream/85 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
            Grab coffee, Big Dipper Ice Cream, or a huckleberry shake before you explore the area.
          </p>
          <a href="/contact" className="btn-secondary inline-flex">
            <MapPin className="w-4 h-4 mr-2" />
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
}
