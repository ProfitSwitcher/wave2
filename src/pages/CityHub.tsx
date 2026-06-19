import { Link, useParams } from "wouter"
import { Phone, ChevronRight } from "lucide-react"
import { COMPANY, LOCATIONS, SERVICE_HUBS, CITY_CONTENT } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { SEO } from "@/components/SEO"
import NotFound from "./NotFound"

export default function CityHub() {
  const { citySlug } = useParams()
  const city = LOCATIONS.find((c) => c.slug === citySlug)
  const cityData = CITY_CONTENT[citySlug || ""]

  if (!city || !cityData) return <NotFound />

  return (
    <div className="min-h-screen">
      <SEO
        title={`${city.name} Home Services | HVAC, Plumbing & Electrical | Alvis WAVE`}
        description={`Alvis WAVE Services provides heating, cooling, plumbing, and electrical service in ${city.name}, MT. Same-day scheduling, upfront pricing, licensed technicians.`}
      />

      {/* Hero */}
      <section className="bg-wave-blue-dark text-white py-16 md:py-20 grain-texture relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-wave-copper" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
            <Link href="/service-area" className="hover:text-white">Service Area</Link>
            <ChevronRight className="w-4 h-4" />
            <span>{city.name}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">{cityData.headline}</h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">{cityData.subheadline}</p>
        </div>
      </section>

      {/* Content: unboxed */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <p className="text-wave-warm-gray text-lg mb-8 leading-relaxed">{cityData.body}</p>

              <div className="bg-wave-cream rounded-xl p-6 mb-8">
                <h3 className="font-display font-semibold text-wave-dark mb-3">Local Climate Considerations</h3>
                <p className="text-sm text-wave-warm-gray leading-relaxed">{cityData.climateNotes}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-display font-semibold text-wave-dark mb-3">Neighborhoods We Serve</h3>
                  <div className="flex flex-wrap gap-2">
                    {cityData.neighborhoods.map((n) => (
                      <span key={n} className="text-xs bg-wave-cream border border-wave-border rounded-full px-3 py-1 text-wave-dark">{n}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-wave-dark mb-3">Local Landmarks</h3>
                  <ul className="space-y-1">
                    {cityData.landmarks.map((l) => (
                      <li key={l} className="text-sm text-wave-warm-gray">• {l}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-wave-dark mb-6 tracking-tight">Services in {city.name}</h2>
              <div className="space-y-4">
                {SERVICE_HUBS.map((hub) => (
                  <div key={hub.slug} className="rounded-xl border border-wave-border p-6">
                    <h3 className="font-display font-semibold text-wave-dark mb-1">{hub.fullName}</h3>
                    <p className="text-sm text-wave-warm-gray mb-4">{hub.description}</p>
                    <ul className="space-y-1.5 mb-4">
                      {hub.services.slice(0, 4).map((svc) => (
                        <li key={svc.slug}>
                          <Link href={`/city/${citySlug}/${hub.slug}/${svc.slug}`} className="text-sm text-wave-blue hover:underline">
                            {svc.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/services/${hub.slug}`}>
                      <Button variant="outline" size="sm" className="w-full">View All {hub.name} Services</Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-xl border border-wave-border p-6">
                <h3 className="font-display font-semibold text-wave-dark mb-4">Contact {city.name}</h3>
                <div className="space-y-3">
                  <a href={COMPANY.phoneHref} className="flex items-center gap-2 text-wave-blue">
                    <Phone className="w-4 h-4" /> {COMPANY.phone}
                  </a>
                  <p className="text-sm text-wave-warm-gray">{city.description}</p>
                </div>
                <div className="mt-4">
                  <Link href="/contact">
                    <Button variant="copper" className="w-full">Schedule Service</Button>
                  </Link>
                </div>
              </div>

              <div className="bg-wave-dark text-white rounded-xl p-6">
                <h3 className="font-display font-semibold mb-2">Why {city.name} Chooses Alvis WAVE</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• Same-day service available</li>
                  <li>• No extra travel fees</li>
                  <li>• Licensed & insured</li>
                  <li>• Upfront pricing</li>
                  <li>• 20+ years experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
