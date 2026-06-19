import { Link, useParams } from "wouter"
import { ChevronRight, Phone } from "lucide-react"
import { SERVICE_HUBS, COMPANY } from "@/lib/content"
import { Button } from "@/components/ui/button"
import NotFound from "./NotFound"
import { SEO } from "@/components/SEO"

export default function ServiceHub() {
  const { hubSlug } = useParams()
  const hub = SERVICE_HUBS.find((h) => h.slug === hubSlug)

  if (!hub) return <NotFound />

  return (
    <div className="min-h-screen">
      <SEO title="Services | Alvis WAVE Services" description="Explore our comprehensive home services including HVAC, plumbing, electrical, and select remodel coordination for homes across Western Montana." />

      {/* Hero */}
      <section className="bg-wave-blue-dark text-white py-16 md:py-20 grain-texture relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-wave-copper" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
            <Link href="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span>{hub.fullName}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">{hub.fullName}</h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">{hub.description}</p>
        </div>
      </section>

      {/* Services: unboxed */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-6">
            {hub.services.map((svc) => (
              <div key={svc.slug} className="rounded-xl border border-wave-border p-6 hover:shadow-sm transition-shadow">
                <h3 className="font-display font-semibold text-wave-dark text-lg mb-2">{svc.name}</h3>
                <p className="text-sm text-wave-warm-gray mb-4 leading-relaxed">{svc.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/contact">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">Book Service</Button>
                  </Link>
                  <a href={COMPANY.phoneHref}>
                    <Button variant="copper" size="sm"><Phone className="w-4 h-4" /></Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
