import { Link } from "wouter"
import { Phone, Droplets, Wind, Zap, Wrench, Shield, Clock, Star, MapPin, ArrowRight, Check, Award, Leaf, Home as HomeIcon } from "lucide-react"
import { COMPANY, SERVICE_HUBS, OFFERS, TRUST_SIGNALS, LOCATIONS } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { SEO } from "@/components/SEO"

const hubIcons: Record<string, React.ReactNode> = {
  water: <Droplets className="w-8 h-8" />,
  air: <Wind className="w-8 h-8" />,
  voltage: <Zap className="w-8 h-8" />,
  experts: <Wrench className="w-8 h-8" />,
}

export default function Home() {
  const featuredOffers = OFFERS.slice(0, 4)

  return (
    <div className="min-h-screen">
      <SEO title="Alvis WAVE Services | Water • Air • Voltage • Experts | Western Montana" description="Your trusted home services partner for heating, cooling, plumbing, and electrical work across Western Montana. 24/7 emergency service available." />

      {/* Hero Section: BOLD, editorial, no cards */}
      <section className="relative bg-wave-blue-dark text-white overflow-hidden grain-texture">
        {/* Mountain silhouette background */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1440 400" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0,400 L0,250 Q60,200 120,230 Q180,180 240,210 Q300,150 360,190 Q420,120 480,170 Q540,100 600,160 Q660,80 720,140 Q780,60 840,130 Q900,90 960,150 Q1020,70 1080,140 Q1140,100 1200,160 Q1260,110 1320,170 Q1380,140 1440,180 L1440,400 Z" fill="rgba(255,255,255,0.05)" />
            <path d="M0,400 L0,280 Q80,230 160,260 Q240,200 320,240 Q400,180 480,220 Q560,150 640,200 Q720,130 800,180 Q880,110 960,170 Q1040,100 1120,160 Q1200,120 1280,180 Q1360,140 1440,200 L1440,400 Z" fill="rgba(255,255,255,0.03)" />
          </svg>
        </div>

        {/* Copper accent stripe */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-wave-copper via-wave-copper-light to-wave-copper" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            {/* Emergency badge */}
            <div className="inline-flex items-center gap-2 bg-wave-copper/20 border border-wave-copper/30 rounded-full px-4 py-1.5 text-sm mb-6">
              <span className="w-2 h-2 bg-wave-copper rounded-full animate-pulse" />
              24/7 Emergency Service Available
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Trusted Home Services
              <br />
              <span className="text-wave-copper-light">Across Western Montana</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              {COMPANY.positioning}
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/contact">
                <Button variant="copper" size="lg" className="gap-2 text-base">
                  <Phone className="w-5 h-5" /> Call Now {COMPANY.phone}
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="gap-2 text-base border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                  Our Services <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Trust row: unboxed, no cards */}
            <div className="flex flex-wrap items-center gap-6 md:gap-10 text-sm text-white/70">
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-wave-copper-light" /> Licensed & Insured</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-wave-copper-light" /> Same-Day Service</span>
              <span className="flex items-center gap-2"><Star className="w-4 h-4 text-wave-copper-light" /> 4.9 Google Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Hub: Break the card grid. Use asymmetric layout with visual weight. */}
      <section className="section-pad bg-wave-cream topo-bg">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section header: no card, just text + copper accent */}
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-wave-dark mb-3 tracking-tight">Four Divisions. One Call.</h2>
            <div className="copper-accent mb-4" />
            <p className="text-wave-warm-gray max-w-2xl text-lg leading-relaxed">From plumbing to electrical, heating to home service and select remodels — Alvis WAVE Services is first and foremost your repair and maintenance crew, with remodel coordination when you need it.</p>
          </div>

          {/* Asymmetric service grid: no cards, visual hierarchy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICE_HUBS.map((hub) => (
              <Link key={hub.slug} href={`/services/${hub.slug}`}>
                <div className="group relative bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow border border-wave-border">
                  {/* Color indicator bar */}
                  <div className="w-12 h-1 rounded-full mb-6" style={{ backgroundColor: hub.color }} />

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0" style={{ backgroundColor: hub.color }}>
                      {hubIcons[hub.slug]}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-wave-dark">{hub.fullName}</h3>
                      <p className="text-wave-warm-gray text-sm mt-1">{hub.description}</p>
                    </div>
                  </div>

                  {/* Service count */}
                  <div className="flex items-center gap-2 text-sm text-wave-warm-gray">
                    <span>{hub.services.length} services</span>
                    <span>•</span>
                    <span>Available 24/7</span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-wave-blue" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Current Offers: Magazine-style layout, not card grid */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-wave-dark mb-3 tracking-tight">Current Offers</h2>
              <div className="copper-accent mb-4" />
              <p className="text-wave-warm-gray max-w-xl text-lg leading-relaxed">Save on your next service with these limited-time deals.</p>
            </div>
            <Link href="/offers" className="hidden md:flex items-center gap-1 text-wave-blue font-semibold hover:underline">
              View All Offers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Asymmetric offer grid: featured + standard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredOffers.map((offer) => (
              <div key={offer.id} className="group bg-white border border-wave-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                {/* Badge strip */}
                {offer.badge && (
                  <div className="bg-wave-blue-dark text-white text-xs font-semibold px-4 py-1.5">
                    {offer.badge}
                  </div>
                )}

                <div className="p-6">
                  <div className="text-xs font-semibold text-wave-blue uppercase tracking-wider mb-2">{offer.category}</div>
                  <h3 className="font-display text-lg font-bold text-wave-dark mb-1">{offer.title}</h3>
                  <p className="text-wave-warm-gray text-sm mb-4">{offer.description}</p>

                  <Link href="/contact">
                    <Button variant="outline" size="sm" className="w-full border-wave-border hover:bg-wave-blue hover:text-white hover:border-wave-blue transition-colors">
                      {offer.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/offers">
              <Button variant="outline">View All Offers</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Marketing Programs: Prominent, conversion-focused */}
      <section className="section-pad bg-wave-blue text-white grain-texture">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">Smart Programs That Pay Off</h2>
              <div className="copper-accent mb-6" style={{ backgroundColor: "var(--color-wave-copper-light)" }} />

              <div className="space-y-6">
                {/* Yard Sign Program */}
                <Link href="/yard-sign-program" className="group block">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-wave-copper/30 flex items-center justify-center shrink-0 group-hover:bg-wave-copper/50 transition-colors">
                      <HomeIcon className="w-5 h-5 text-wave-copper-light" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg mb-1">Yard Sign Program</h3>
                      <p className="text-white/70 text-sm">Display an Alvis WAVE yard sign and get entered to win a $250 gift card every month. Plus, our signs are walking billboards — neighbors notice.</p>
                      <span className="text-wave-copper-light text-sm font-semibold group-hover:underline">Learn More →</span>
                    </div>
                  </div>
                </Link>

                <div className="h-px bg-white/10" />

                {/* Filter Saver Club */}
                <Link href="/filter-saver-club" className="group block">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-wave-copper/30 flex items-center justify-center shrink-0 group-hover:bg-wave-copper/50 transition-colors">
                      <Leaf className="w-5 h-5 text-wave-copper-light" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg mb-1">Filter Saver Club</h3>
                      <p className="text-white/70 text-sm">Hassle-free filter delivery. We send you the right filter at the right time. No remembering, no running to the store.</p>
                      <span className="text-wave-copper-light text-sm font-semibold group-hover:underline">Learn More →</span>
                    </div>
                  </div>
                </Link>

                <div className="h-px bg-white/10" />

                {/* Maintenance Plans */}
                <Link href="/maintenance-plans" className="group block">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-wave-copper/30 flex items-center justify-center shrink-0 group-hover:bg-wave-copper/50 transition-colors">
                      <Award className="w-5 h-5 text-wave-copper-light" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg mb-1">Maintenance Plans</h3>
                      <p className="text-white/70 text-sm">Annual tune-ups that keep your systems running efficiently, prevent breakdowns, and extend equipment life. Priority scheduling included.</p>
                      <span className="text-wave-copper-light text-sm font-semibold group-hover:underline">Learn More →</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right side: visual element */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="font-display text-xl font-bold mb-4">Why Homeowners Choose Alvis WAVE</h3>
              <div className="space-y-3">
                {[
                  "Master-licensed electricians & certified HVAC technicians",
                  "Same-day and emergency service available",
                  "Upfront pricing — no surprises",
                  "Family-owned with 20+ years of experience",
                  "Financing options for major projects",
                  "Satisfaction guaranteed on every job",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-white/90 text-sm">
                    <Check className="w-5 h-5 text-wave-copper-light mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals: Big, bold, no cards */}
      <section className="section-pad-sm bg-wave-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {TRUST_SIGNALS.map((signal) => (
              <div key={signal.label}>
                <div className="font-display text-4xl md:text-5xl font-bold text-wave-copper-light mb-2">{signal.number}</div>
                <div className="text-white/70 text-sm font-medium">{signal.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing CTA: Clear, direct, no-nonsense */}
      <section className="section-pad bg-wave-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-wave-dark mb-4 tracking-tight">Don't Put Off Repairs</h2>
            <div className="copper-accent mx-auto mb-6" />
            <p className="text-wave-warm-gray text-lg max-w-xl mx-auto mb-8 leading-relaxed">Flexible financing options available for major installations and repairs. Get pre-qualified in minutes with no impact to your credit score.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/financing">
                <Button variant="copper" size="lg">Explore Financing</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-wave-border text-wave-dark hover:bg-wave-blue hover:text-white hover:border-wave-blue">Get a Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area: Asymmetric layout */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-wave-dark mb-3 tracking-tight">Serving All of Western Montana</h2>
              <div className="copper-accent mb-6" />
              <p className="text-wave-warm-gray text-lg mb-8 leading-relaxed">From Missoula to Seeley Lake, Great Falls to Kalispell — we're the local crew that shows up when you need us.</p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {LOCATIONS.map((loc) => (
                  <div key={loc.slug} className="flex items-center gap-2 text-wave-dark">
                    <MapPin className="w-4 h-4 text-wave-blue" />
                    <span className="text-sm font-medium">{loc.name}</span>
                  </div>
                ))}
              </div>
              <Link href="/service-area">
                <Button variant="default" className="gap-2">View Full Service Area <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>

            {/* Right: service area visual */}
            <div className="bg-wave-glacier rounded-2xl p-8 border border-wave-border">
              <h3 className="font-display text-xl font-bold text-wave-dark mb-4">Find Us Near You</h3>
              <p className="text-wave-warm-gray text-sm mb-6">Main office in Missoula, serving communities across the state. We make the drive so you don't have to.</p>

              {/* Montana reference */}
              <div className="bg-white rounded-xl p-6 border border-wave-border">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-wave-blue" />
                  <span className="font-display font-semibold text-wave-dark">Montana-Made Service</span>
                </div>
                <p className="text-wave-warm-gray text-sm leading-relaxed">We know Montana weather. We know Montana homes. From freeze protection on Seeley Lake cabin pipes to wind-rated HVAC on the Great Plains, we size and install for real conditions, not textbook scenarios.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA: Big, bold, direct */}
      <section className="section-pad bg-wave-blue-dark text-white grain-texture">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">Ready to Get Started?</h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8 leading-relaxed">One call handles it all. Tell us what you need and we'll get back to you fast.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="copper" size="lg" className="gap-2 text-base">
                <Phone className="w-5 h-5" /> Schedule Online
              </Button>
            </Link>
            <a href={COMPANY.phoneHref}>
              <Button variant="outline" size="lg" className="gap-2 text-base border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                <Phone className="w-5 h-5" /> {COMPANY.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
