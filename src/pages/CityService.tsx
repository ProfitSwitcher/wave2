import { Link, useParams } from "wouter"
import { MapPin, Phone, ArrowRight, ChevronRight, Clock, Shield, CheckCircle } from "lucide-react"
import { COMPANY, LOCATIONS, SERVICE_HUBS, CITY_CONTENT } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { SEO } from "@/components/SEO"
import NotFound from "./NotFound"

export default function CityService() {
  const { citySlug, hubSlug, serviceSlug } = useParams()
  const city = LOCATIONS.find((c) => c.slug === citySlug)
  const hub = SERVICE_HUBS.find((h) => h.slug === hubSlug)
  const service = hub?.services.find((s) => s.slug === serviceSlug)
  const cityData = CITY_CONTENT[citySlug || ""]

  if (!city || !hub || !service || !cityData) return <NotFound />

  return (
    <div className="min-h-screen">
      <SEO
        title={`${service.name} in ${city.name}, MT | Alvis WAVE Services`}
        description={`Professional ${service.name.toLowerCase()} in ${city.name}, Montana. Alvis WAVE Services provides licensed, insured ${hub.fullName.toLowerCase()} with same-day scheduling.`}
      />

      {/* Hero */}
      <section className="bg-wave-blue-dark text-white py-16 md:py-20 grain-texture relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-wave-copper" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-4 flex-wrap">
            <Link href="/service-area" className="hover:text-white">Service Area</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/city/${citySlug}`} className="hover:text-white">{city.name}</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/services/${hubSlug}`} className="hover:text-white">{hub.fullName}</Link>
            <ChevronRight className="w-4 h-4" />
            <span>{service.name}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">{service.name} in {city.name}</h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">{service.description} Serving {city.name} and surrounding areas with same-day availability.</p>
        </div>
      </section>

      {/* Content: unboxed */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-wave-dark mb-4 tracking-tight">{service.name} Services in {city.name}</h2>
                <p className="text-wave-warm-gray mb-4 leading-relaxed">{cityData.body}</p>
                <p className="text-wave-warm-gray leading-relaxed">When you need {service.name.toLowerCase()} in {city.name}, you need a contractor who knows local codes, understands Montana's climate challenges, and shows up when promised. Alvis WAVE delivers on all three.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-wave-border p-6">
                  <Clock className="w-8 h-8 text-wave-copper mb-3" />
                  <h3 className="font-display font-semibold text-wave-dark mb-2">Same-Day Service</h3>
                  <p className="text-sm text-wave-warm-gray">Most {city.name} calls are scheduled same-day. Emergency service available 24/7.</p>
                </div>
                <div className="rounded-xl border border-wave-border p-6">
                  <Shield className="w-8 h-8 text-wave-copper mb-3" />
                  <h3 className="font-display font-semibold text-wave-dark mb-2">Licensed & Insured</h3>
                  <p className="text-sm text-wave-warm-gray">Every technician is fully licensed for {city.name} and carries comprehensive insurance.</p>
                </div>
              </div>

              <div>
                <h3 className="font-display font-semibold text-wave-dark mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    "Upfront pricing before any work begins",
                    "Licensed technicians who arrive on time",
                    "Clean, respectful service in your home",
                    "Work backed by our satisfaction guarantee",
                    "Financing available for major projects",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-wave-dark">
                      <CheckCircle className="w-5 h-5 text-wave-copper mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-wave-blue text-white rounded-xl p-6">
                <h3 className="font-display font-semibold mb-4">Ready to Book?</h3>
                <p className="text-white/80 text-sm mb-4">Schedule {service.name.toLowerCase()} in {city.name} today. Most appointments available same-day.</p>
                <div className="space-y-3">
                  <a href={COMPANY.phoneHref}>
                    <Button variant="white" className="w-full gap-2"><Phone className="w-4 h-4" /> {COMPANY.phone}</Button>
                  </a>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 hover:border-white/50 gap-2">Request Online <ArrowRight className="w-4 h-4" /></Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-xl border border-wave-border p-6">
                <h3 className="font-display font-semibold text-wave-dark mb-3">Service Area</h3>
                <div className="flex items-start gap-2 text-wave-warm-gray text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  {city.description}
                </div>
              </div>

              <div className="rounded-xl border border-wave-border p-6">
                <h3 className="font-display font-semibold text-wave-dark mb-3">Other {hub.name} Services</h3>
                <ul className="space-y-2">
                  {hub.services.filter((s) => s.slug !== serviceSlug).slice(0, 5).map((svc) => (
                    <li key={svc.slug}>
                      <Link href={`/city/${citySlug}/${hubSlug}/${svc.slug}`} className="text-sm text-wave-blue hover:underline">
                        {svc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
