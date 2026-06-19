import { Link } from "wouter"
import { Droplets, Wind, Zap, Wrench, ChevronRight, Phone, ArrowRight } from "lucide-react"
import { SERVICE_HUBS, COMPANY } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { SEO } from "@/components/SEO"

const hubIcons: Record<string, React.ReactNode> = {
  water: <Droplets className="w-8 h-8" />,
  air: <Wind className="w-8 h-8" />,
  voltage: <Zap className="w-8 h-8" />,
  experts: <Wrench className="w-8 h-8" />,
}

export default function Services() {
  return (
    <div className="min-h-screen">
      <SEO title="Our Services | HVAC, Plumbing & Electrical | Alvis WAVE Services" description="Complete home services including heating, cooling, plumbing, electrical, and select remodel coordination. Master-licensed technicians serving Western Montana." />

      {/* Hero */}
      <section className="bg-wave-blue-dark text-white py-16 grain-texture relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-wave-copper" />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Services</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">Four divisions, one trusted team. From emergency repairs to major installations, we've got you covered.</p>
        </div>
      </section>

      {/* Services listing: unboxed, direct */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-0">
            {SERVICE_HUBS.map((hub) => (
              <div key={hub.slug} className="group border-b border-wave-border py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: hub header */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: hub.color }}>
                        {hubIcons[hub.slug]}
                      </div>
                      <div>
                        <h2 className="font-display text-2xl font-bold text-wave-dark">{hub.fullName}</h2>
                        <p className="text-wave-warm-gray text-sm">{hub.description}</p>
                      </div>
                    </div>
                    <Link href={`/services/${hub.slug}`}>
                      <span className="inline-flex items-center gap-1 text-wave-blue font-semibold text-sm mt-2 group-hover:gap-2 transition-all">
                        View All {hub.name} Services <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                    <div className="mt-4">
                      <a href={COMPANY.phoneHref}>
                        <Button variant="copper" size="sm" className="gap-2">
                          <Phone className="w-4 h-4" /> Call {COMPANY.phone}
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Right: service list */}
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                      {hub.services.map((svc) => (
                        <Link key={svc.slug} href={`/services/${hub.slug}/${svc.slug}`} className="flex items-center gap-2 text-wave-dark hover:text-wave-blue transition-colors group/link">
                          <ChevronRight className="w-4 h-4 text-wave-copper shrink-0 group-hover/link:translate-x-0.5 transition-transform" />
                          <span className="text-sm">{svc.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
