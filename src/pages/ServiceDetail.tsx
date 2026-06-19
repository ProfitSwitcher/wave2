import { Link, useParams } from "wouter"
import { ChevronRight, Phone, ArrowRight } from "lucide-react"
import { SERVICE_HUBS, COMPANY } from "@/lib/content"
import { Button } from "@/components/ui/button"
import NotFound from "./NotFound"
import { SEO } from "@/components/SEO"

export default function ServiceDetail() {
  const { hubSlug, serviceSlug } = useParams()
  const hub = SERVICE_HUBS.find((h) => h.slug === hubSlug)
  const service = hub?.services.find((s) => s.slug === serviceSlug)

  if (!hub || !service) return <NotFound />

  return (
    <div className="min-h-screen">
      <SEO title={`Service Details | ${service.name} | Alvis WAVE Services`} description={`Professional ${service.name.toLowerCase()} by licensed technicians serving Missoula and Western Montana.`} />

      {/* Hero */}
      <section className="bg-wave-blue-dark text-white py-16 md:py-20 grain-texture relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-wave-copper" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
            <Link href="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/services/${hub.slug}`} className="hover:text-white">{hub.fullName}</Link>
            <ChevronRight className="w-4 h-4" />
            <span>{service.name}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">{service.name}</h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">{service.description}</p>
        </div>
      </section>

      {/* CTA: unboxed */}
      <section className="section-pad bg-wave-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-wave-dark mb-3 tracking-tight">Ready to Get Started?</h2>
          <p className="text-wave-warm-gray mb-6 leading-relaxed">Contact us today for a free estimate on {service.name.toLowerCase()}.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={COMPANY.phoneHref}>
              <Button variant="copper" className="gap-2"><Phone className="w-4 h-4" /> Call {COMPANY.phone}</Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" className="gap-2">Request Online <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
