import { Link } from "wouter"
import { Shield, Clock, Award, Users, Phone, ArrowRight, Star } from "lucide-react"
import { COMPANY, TRUST_SIGNALS } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { SEO } from "@/components/SEO"

export default function About() {
  return (
    <div className="min-h-screen">
      <SEO title="About Us | Alvis WAVE Services | Western Montana" description="Learn about Alvis WAVE Services, formerly Alvis Electrical. Family-owned with 20+ years of experience serving Western Montana." />

      {/* Hero */}
      <section className="bg-wave-blue-dark text-white py-16 md:py-20 grain-texture relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-wave-copper" />
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">About Alvis WAVE Services</h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">Same ownership. Same trusted team. Now four full home-service divisions serving Western Montana.</p>
        </div>
      </section>

      {/* Story section: unboxed */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-2 bg-wave-cream text-wave-blue text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                {COMPANY.formerly}
              </span>
              <h2 className="font-display text-3xl font-bold text-wave-dark mb-6 tracking-tight">From Alvis Electrical to Alvis WAVE</h2>

              <div className="space-y-4 text-wave-warm-gray leading-relaxed">
                <p>For over 20 years, Alvis Electrical has been the trusted name for electrical work in Western Montana. Master electrician AJ Alvis built the company on a simple promise: show up on time, do the job right, and treat every home like it's your own.</p>
                <p>As our customers' needs grew, so did we. Today, Alvis WAVE Services brings that same commitment to plumbing, heating, cooling, and select remodeling coordination — with master-licensed experts in every trade.</p>
                <p><strong className="text-wave-dark">W.A.V.E.</strong> stands for Water, Air, Voltage, Experts. It's not just a name — it's everything we do.</p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/contact">
                  <Button variant="copper" className="gap-2"><Phone className="w-4 h-4" /> {COMPANY.phone}</Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="gap-2">Our Services <ArrowRight className="w-4 h-4" /></Button>
                </Link>
              </div>
            </div>

            {/* Right: trust signals, unboxed */}
            <div className="lg:col-span-2 space-y-6">
              {TRUST_SIGNALS.map((signal) => (
                <div key={signal.label} className="text-center">
                  <div className="font-display text-4xl font-bold text-wave-copper">{signal.number}</div>
                  <div className="text-sm text-wave-warm-gray font-medium">{signal.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values: unboxed, no cards */}
      <section className="section-pad-sm bg-wave-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-wave-dark text-center mb-10 tracking-tight">Why Choose Alvis WAVE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="w-8 h-8" />, title: "Licensed & Insured", desc: "Every technician is fully licensed and insured for your protection." },
              { icon: <Clock className="w-8 h-8" />, title: "On-Time Guarantee", desc: "We respect your time. If we're late, the diagnostic is free." },
              { icon: <Award className="w-8 h-8" />, title: "Upfront Pricing", desc: "No hidden fees. You'll know the exact cost before we start." },
              { icon: <Users className="w-8 h-8" />, title: "Family Owned", desc: "Local Montana business serving our neighbors since 2004." },
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

      {/* Reviews teaser */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1,2,3,4,5].map((i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
          </div>
          <h2 className="font-display text-3xl font-bold text-wave-dark mb-4 tracking-tight">Rated 4.9 Stars by Our Customers</h2>
          <p className="text-wave-warm-gray max-w-2xl mx-auto mb-8 text-lg leading-relaxed">Don't just take our word for it. Here's what homeowners across Western Montana are saying about Alvis WAVE Services.</p>
          <Link href="/reviews">
            <Button variant="outline" className="gap-2">Read All Reviews <ArrowRight className="w-4 h-4" /></Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
