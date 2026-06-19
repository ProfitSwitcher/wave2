import { Link } from "wouter"
import { CreditCard, CheckCircle, ArrowRight, Phone, Shield } from "lucide-react"
import { COMPANY } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { SEO } from "@/components/SEO"

export default function Financing() {
  return (
    <div className="min-h-screen">
      <SEO title="Financing Options | Alvis WAVE Services" description="Flexible financing for HVAC, plumbing, and electrical services. 0% APR options, low monthly payments, and same-as-cash plans available." />

      {/* Hero */}
      <section className="bg-wave-blue-dark text-white py-16 md:py-20 grain-texture relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-wave-copper" />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">Flexible Financing</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">Don't put off essential home services. Get pre-qualified in minutes with no impact to your credit score.</p>
        </div>
      </section>

      {/* Content: unboxed */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-wave-dark mb-4 tracking-tight">Why Finance With Us?</h2>
              <p className="text-wave-warm-gray mb-6 leading-relaxed">Major home repairs and replacements can't always wait. Our financing partners offer flexible terms so you can get the service you need now and pay over time.</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Pre-qualify in minutes online or by phone",
                  "No impact to your credit score to check rates",
                  "Multiple payment plans available",
                  "Competitive interest rates",
                  "Use for any service over $500",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-wave-dark">
                    <CheckCircle className="w-5 h-5 text-wave-copper mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a href={COMPANY.phoneHref}>
                  <Button variant="copper" className="gap-2"><Phone className="w-4 h-4" /> Call {COMPANY.phone}</Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" className="gap-2">Apply Online <ArrowRight className="w-4 h-4" /></Button>
                </Link>
              </div>
            </div>

            {/* Right: financing options */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-xl border border-wave-border p-6">
                <div className="flex items-center gap-2 text-wave-blue mb-2">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-wave-dark mb-2">0% APR for 12 Months</h3>
                <p className="text-sm text-wave-warm-gray">Available on qualifying purchases over $2,000. No interest if paid in full within 12 months.</p>
              </div>
              <div className="rounded-xl border border-wave-border p-6">
                <div className="flex items-center gap-2 text-wave-blue mb-2">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-wave-dark mb-2">Low Monthly Payments</h3>
                <p className="text-sm text-wave-warm-gray">Extended terms available from 24 to 60 months. Budget-friendly payments for major installations.</p>
              </div>
              <div className="rounded-xl border border-wave-border p-6">
                <div className="flex items-center gap-2 text-wave-blue mb-2">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-wave-dark mb-2">Same-As-Cash Options</h3>
                <p className="text-sm text-wave-warm-gray">6-month same-as-cash available on all repairs. Pay nothing extra if you pay in full within the promotional period.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
