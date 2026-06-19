import { useState } from "react"
import { Link } from "wouter"
import { ArrowRight, Phone, Tag, Calendar } from "lucide-react"
import { OFFERS, COMPANY } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { SEO } from "@/components/SEO"

const categories = [
  { slug: "all", label: "All Offers" },
  { slug: "air", label: "Heating & Cooling" },
  { slug: "water", label: "Plumbing" },
  { slug: "voltage", label: "Electrical" },
]

export default function Offers() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered = activeCategory === "all"
    ? OFFERS
    : OFFERS.filter((o) => o.category === activeCategory)

  return (
    <div className="min-h-screen">
      <SEO title="Special Offers & Deals | Alvis WAVE Services" description="Save on heating, cooling, plumbing, and electrical services with our current special offers. Limited-time deals for Western Montana homeowners." />

      {/* Hero */}
      <section className="bg-wave-blue-dark text-white py-16 grain-texture relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-wave-copper" />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">Special Offers</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">Save on heating, cooling, plumbing, and electrical services. These deals won't last — book today!</p>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-6 border-b border-wave-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat.slug
                    ? "bg-wave-blue text-white"
                    : "bg-wave-cream text-wave-dark hover:bg-wave-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Offers: unboxed, direct */}
      <section className="section-pad">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-0">
            {filtered.map((offer) => (
              <div key={offer.id} className="group border-b border-wave-border py-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Offer visual */}
                  <div className="shrink-0">
                    <div className="w-14 h-14 bg-wave-cream rounded-xl flex items-center justify-center">
                      <Tag className="w-6 h-6 text-wave-copper" />
                    </div>
                  </div>

                  {/* Offer content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-wave-blue uppercase tracking-wider">{offer.category}</span>
                      {offer.badge && (
                        <span className="text-xs bg-wave-copper/10 text-wave-copper px-2 py-0.5 rounded-full font-medium">{offer.badge}</span>
                      )}
                    </div>
                    <h2 className="font-display text-xl font-bold text-wave-dark mb-1">{offer.title}</h2>
                    <p className="text-wave-copper font-medium text-sm mb-2">{offer.subtitle}</p>
                    <p className="text-wave-warm-gray text-sm mb-4 leading-relaxed">{offer.description}</p>
                    <div className="flex items-center gap-1 text-xs text-wave-warm-gray mb-5">
                      <Calendar className="w-3 h-3" /> Expires: {offer.expires}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link href="/contact">
                        <Button variant="copper" size="sm" className="gap-1">
                          {offer.cta} <ArrowRight className="w-3 h-3" />
                        </Button>
                      </Link>
                      <a href={COMPANY.phoneHref}>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Phone className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-wave-warm-gray">No offers in this category right now. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
