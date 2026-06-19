import { Link } from "wouter"
import { Wrench, CheckCircle, Shield, Clock, ArrowRight, Phone, Star } from "lucide-react"
import { COMPANY } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { SEO } from "@/components/SEO"

const plans = [
  {
    name: "WAVE Essential",
    price: "$19",
    period: "/month",
    description: "Perfect for homeowners who want peace of mind on a budget.",
    features: [
      "Annual heating system tune-up",
      "Annual cooling system tune-up",
      "10% discount on repairs",
      "Priority scheduling",
      "No overtime charges",
    ],
  },
  {
    name: "WAVE Complete",
    price: "$39",
    period: "/month",
    description: "Our most popular plan covering all major home systems.",
    features: [
      "Everything in Essential, plus:",
      "Annual electrical safety inspection",
      "Annual plumbing inspection",
      "15% discount on repairs",
      "Free drain clearing (1x/year)",
      "Transferable if you move",
    ],
    popular: true,
  },
  {
    name: "WAVE Total Home",
    price: "$69",
    period: "/month",
    description: "Maximum protection for every system in your home.",
    features: [
      "Everything in Complete, plus:",
      "Whole-home surge protector check",
      "Water heater flush (1x/year)",
      "20% discount on repairs",
      "Free service calls",
      "Annual indoor air quality test",
    ],
  },
]

export default function MaintenancePlans() {
  return (
    <div className="min-h-screen">
      <SEO title="Maintenance Plans | Alvis WAVE Services" description="Protect your home with WAVE maintenance plans. Annual tune-ups, priority scheduling, and repair discounts for HVAC, plumbing, and electrical." />

      {/* Hero */}
      <section className="bg-wave-blue-dark text-white py-16 md:py-20 grain-texture relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-wave-copper" />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">Maintenance Plans</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">Protect your home's most important systems with regular maintenance, priority service, and exclusive discounts.</p>
        </div>
      </section>

      {/* Plans: unboxed, direct */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-xl border ${plan.popular ? 'border-wave-copper shadow-md' : 'border-wave-border'}`}>
                {plan.popular && (
                  <div className="bg-wave-copper text-white text-center text-xs font-semibold py-1.5">
                    <Star className="w-3 h-3 inline mr-1" /> Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-display text-xl font-bold text-wave-dark mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="font-display text-4xl font-bold text-wave-blue">{plan.price}</span>
                    <span className="text-wave-warm-gray">{plan.period}</span>
                  </div>
                  <p className="text-sm text-wave-warm-gray mb-6">{plan.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-wave-dark">
                        <CheckCircle className="w-4 h-4 text-wave-copper mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full">{plan.popular ? "Enroll Now" : "Get Started"}</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why maintenance matters: unboxed */}
      <section className="section-pad-sm bg-wave-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-wave-dark text-center mb-10 tracking-tight">Why Maintenance Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Wrench className="w-8 h-8" />, title: "Prevent Breakdowns", desc: "Regular maintenance catches small issues before they become expensive emergencies." },
              { icon: <Clock className="w-8 h-8" />, title: "Extend Equipment Life", desc: "Well-maintained systems last years longer, saving you thousands in replacement costs." },
              { icon: <Shield className="w-8 h-8" />, title: "Stay Safe", desc: "Electrical and gas system inspections protect your family from hidden dangers." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-wave-copper mb-3 flex justify-center">{item.icon}</div>
                <h3 className="font-display font-semibold text-wave-dark mb-2">{item.title}</h3>
                <p className="text-sm text-wave-warm-gray leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-wave-dark mb-4 tracking-tight">Ready to Protect Your Home?</h2>
          <p className="text-wave-warm-gray text-lg mb-8 leading-relaxed">Join thousands of Western Montana homeowners who trust Alvis WAVE for year-round protection.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="copper" size="lg" className="gap-2">Sign Up Today <ArrowRight className="w-4 h-4" /></Button>
            </Link>
            <a href={COMPANY.phoneHref}>
              <Button variant="outline" size="lg" className="gap-2"><Phone className="w-4 h-4" /> Call {COMPANY.phone}</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
