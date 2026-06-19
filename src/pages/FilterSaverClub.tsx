import { Link } from "wouter"
import { Wind, CheckCircle, Truck, Calendar, ArrowRight, Phone, Package } from "lucide-react"
import { COMPANY } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { SEO } from "@/components/SEO"

export default function FilterSaverClub() {
  return (
    <div className="min-h-screen">
      <SEO title="Filter Saver Club | Alvis WAVE Services" description="Never forget a filter again. Fresh HVAC filters delivered to your door on schedule. Save money and keep your system running efficiently." />

      {/* Hero */}
      <section className="bg-wave-blue text-white py-16 md:py-20 grain-texture relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-wave-copper" />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
            <Wind className="w-5 h-5" />
            <span className="font-semibold">Never Forget a Filter Again</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">Filter Saver Club</h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed">Hassle-free filter delivery. We send you the right filter at the right time. No store trips, no guessing, no forgotten maintenance.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: How it works */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-wave-dark mb-6 tracking-tight">How It Works</h2>
              <div className="space-y-6">
                {[
                  { icon: <Package className="w-7 h-7 text-wave-copper" />, title: "Pick Your Filter", desc: "Choose the right MERV rating and size for your system. Not sure? We'll help you find the perfect match." },
                  { icon: <Calendar className="w-7 h-7 text-wave-copper" />, title: "Set Your Schedule", desc: "Most homes need filters every 1-3 months. Pick the schedule that works for your home and lifestyle." },
                  { icon: <Truck className="w-7 h-7 text-wave-copper" />, title: "We Deliver", desc: "Filters arrive at your door right when it's time to change them. No store trips, no guessing." },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 text-wave-copper">{step.icon}</div>
                    <div>
                      <h3 className="font-display font-semibold text-wave-dark mb-1">{step.title}</h3>
                      <p className="text-sm text-wave-warm-gray leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: benefits + pricing */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="font-display font-semibold text-wave-dark mb-4">Membership Benefits</h3>
                <ul className="space-y-2.5">
                  {[
                    "Free shipping on all filter orders",
                    "10% off compared to retail prices",
                    "Reminders via text or email",
                    "Pause or cancel anytime",
                    "Access to exclusive member-only offers",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-wave-dark">
                      <CheckCircle className="w-4 h-4 text-wave-copper mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-wave-cream rounded-xl p-6 text-center">
                <div className="font-display text-4xl font-bold text-wave-blue mb-1">$5<span className="text-lg text-wave-warm-gray">/month</span></div>
                <p className="text-sm text-wave-warm-gray mb-4">Starting price for basic filter subscription</p>
                <Link href="/contact">
                  <Button variant="copper" className="w-full gap-2">Join the Club <ArrowRight className="w-4 h-4" /></Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-wave-dark text-white grain-texture">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-4 tracking-tight">Dirty Filters Cost You Money</h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">A clogged filter makes your HVAC system work harder, increasing energy bills and shortening equipment life. Clean filters save you up to 15% on heating and cooling costs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="copper" size="lg" className="gap-2">Get Started <ArrowRight className="w-4 h-4" /></Button>
            </Link>
            <a href={COMPANY.phoneHref}>
              <Button variant="outline" size="lg" className="gap-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"><Phone className="w-4 h-4" /> {COMPANY.phone}</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
