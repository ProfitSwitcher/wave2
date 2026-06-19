import { Link } from "wouter"
import { MapPin, Phone, ArrowRight, Clock, Shield } from "lucide-react"
import { COMPANY, LOCATIONS } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { SEO } from "@/components/SEO"

export default function ServiceArea() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Service Area | Alvis WAVE Services | Western Montana"
        description="Alvis WAVE Services serves Missoula, Seeley Lake, Great Falls, Helena, Kalispell, Bozeman and surrounding communities across Western Montana."
      />

      {/* Hero */}
      <section className="bg-wave-blue-dark text-white py-16 md:py-20 grain-texture relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-wave-copper" />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Service Area</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">From the Bitterroot Valley to the Flathead, we bring master-licensed home services to communities across Western Montana.</p>
        </div>
      </section>

      {/* Locations: unboxed */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <div key={loc.slug} className="rounded-xl border border-wave-border p-6 hover:shadow-sm transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-wave-blue rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-wave-dark text-lg mb-1">{loc.name}</h3>
                    <p className="text-sm text-wave-warm-gray mb-3">{loc.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-wave-blue">
                        <Clock className="w-4 h-4" /> Same-Day
                      </span>
                      <span className="flex items-center gap-1 text-wave-copper">
                        <Shield className="w-4 h-4" /> Licensed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rural service section */}
      <section className="section-pad-sm bg-wave-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-wave-dark mb-4 tracking-tight">Rural Service, No Extra Charge</h2>
              <p className="text-wave-warm-gray mb-4 leading-relaxed">We know Montana. That means we know the drive to Seeley Lake is worth it because our neighbors there deserve the same quality service as folks in Missoula.</p>
              <p className="text-wave-warm-gray mb-6 leading-relaxed">Unlike some contractors who tack on travel fees for rural calls, we believe in fair, upfront pricing — no matter your zip code.</p>
              <ul className="space-y-3">
                {[
                  "No travel fees for service area calls",
                  "Emergency service available 24/7",
                  "Local technicians who know Montana homes",
                  "Upfront pricing before any work begins",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-wave-dark">
                    <Shield className="w-5 h-5 text-wave-copper mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-wave-border p-6">
                <h3 className="font-display font-semibold text-wave-dark mb-3">Not Sure If We Serve Your Area?</h3>
                <p className="text-wave-warm-gray mb-6 leading-relaxed">Call us! If you're within a reasonable drive of any of our hub cities, chances are we can help. And if we can't, we'll refer you to someone we trust.</p>
                <div className="space-y-3">
                  <a href={COMPANY.phoneHref}>
                    <Button variant="copper" className="w-full gap-2"><Phone className="w-4 h-4" /> Call {COMPANY.phone}</Button>
                  </a>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full gap-2">Contact Online <ArrowRight className="w-4 h-4" /></Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
