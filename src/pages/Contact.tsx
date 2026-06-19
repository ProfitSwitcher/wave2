import { useState } from "react"
import { Link } from "wouter"
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { COMPANY } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { SEO } from "@/components/SEO"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        alert("Something went wrong. Please call us directly.")
      }
    } catch {
      alert("Something went wrong. Please call us directly.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      <SEO title="Contact Us | Alvis WAVE Services | Western Montana" description="Request service or get a free estimate. Call 406-396-9936 or contact us online. 24/7 emergency service available." />

      {/* Hero: simple, direct */}
      <section className="bg-wave-blue-dark text-white py-16 grain-texture relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-wave-copper" />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">Get in Touch</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">Ready to book? Have a question? We're here to help. Call, email, or fill out the form below.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: contact info + emergency */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact details: unboxed */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-semibold text-wave-dark mb-4 text-lg">Contact Info</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-wave-blue mt-0.5 shrink-0" />
                      <div>
                        <div className="font-medium text-wave-dark">Phone</div>
                        <a href={COMPANY.phoneHref} className="text-wave-blue hover:underline">{COMPANY.phone}</a>
                        <div className="text-xs text-wave-warm-gray mt-1">Emergency line available 24/7</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-wave-blue mt-0.5 shrink-0" />
                      <div>
                        <div className="font-medium text-wave-dark">Email</div>
                        <a href={`mailto:${COMPANY.email}`} className="text-wave-blue hover:underline">{COMPANY.email}</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-wave-blue mt-0.5 shrink-0" />
                      <div>
                        <div className="font-medium text-wave-dark">Office</div>
                        <div className="text-wave-warm-gray text-sm">{COMPANY.address.full}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-wave-blue mt-0.5 shrink-0" />
                      <div>
                        <div className="font-medium text-wave-dark">Hours</div>
                        <div className="text-wave-warm-gray text-sm">{COMPANY.hours.weekdays}</div>
                        <div className="text-wave-warm-gray text-sm">{COMPANY.hours.saturday}</div>
                        <div className="text-wave-warm-gray text-sm">{COMPANY.hours.emergency}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency box */}
                <div className="bg-wave-blue text-white rounded-xl p-6">
                  <h3 className="font-display font-semibold text-lg mb-2">Emergency?</h3>
                  <p className="text-white/80 text-sm mb-4">We offer 24/7 emergency service for urgent heating, cooling, plumbing, and electrical issues.</p>
                  <a href={COMPANY.phoneHref}>
                    <Button variant="copper" className="w-full gap-2">
                      <Phone className="w-4 h-4" /> Call {COMPANY.phone}
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-wave-dark mb-2">Message Sent!</h3>
                  <p className="text-wave-warm-gray text-lg">We'll get back to you within 24 hours. For urgent needs, call {COMPANY.phone}.</p>
                  <Link href="/">
                    <Button variant="outline" className="mt-6">Return Home</Button>
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-display text-2xl font-bold text-wave-dark mb-2">Request Service</h3>
                  <p className="text-wave-warm-gray">Fill out the form and we'll get back to you within 24 hours. For immediate service, call {COMPANY.phone}.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-wave-dark mb-1.5">Name *</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="flex h-11 w-full rounded-lg border border-wave-border bg-white px-4 text-sm placeholder:text-wave-warm-gray/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wave-blue/50 transition-shadow" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-wave-dark mb-1.5">Phone *</label>
                      <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="flex h-11 w-full rounded-lg border border-wave-border bg-white px-4 text-sm placeholder:text-wave-warm-gray/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wave-blue/50 transition-shadow" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-wave-dark mb-1.5">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="flex h-11 w-full rounded-lg border border-wave-border bg-white px-4 text-sm placeholder:text-wave-warm-gray/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wave-blue/50 transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-wave-dark mb-1.5">Service Needed</label>
                    <select
                      className="flex h-11 w-full rounded-lg border border-wave-border bg-white px-4 text-sm placeholder:text-wave-warm-gray/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wave-blue/50 transition-shadow"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="">Select a service</option>
                      <option value="electrical">Electrical</option>
                      <option value="hvac">Heating & Cooling</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="remodeling">Service & Remodel Coordination</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-wave-dark mb-1.5">Message</label>
                    <textarea
                      className="flex min-h-[140px] w-full rounded-lg border border-wave-border bg-white px-4 py-3 text-sm placeholder:text-wave-warm-gray/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wave-blue/50 transition-shadow resize-y"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project or issue..."
                    />
                  </div>
                  <Button type="submit" className="w-full text-base" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"} <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>

                  <p className="text-xs text-wave-warm-gray text-center">We'll respond within 24 hours. For emergencies, call {COMPANY.phone}.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
