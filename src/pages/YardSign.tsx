import { useState } from "react"
import { Link } from "wouter"
import { Gift, Home, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SEO } from "@/components/SEO"

export default function YardSign() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/yard-sign", {
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
      <SEO title="Yard Sign Program | Win $250 | Alvis WAVE Services" description="Display an Alvis WAVE yard sign and get entered to win a $250 gift card every month. Free to enter, no purchase necessary." />

      {/* Hero: copper background, bold */}
      <section className="bg-wave-copper text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
            <Gift className="w-5 h-5" />
            <span className="font-semibold">Win $250 Every Month!</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">Yard Sign Program</h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed">Display an Alvis WAVE yard sign and get automatically entered to win a $250 gift card. No purchase necessary. And hey — our signs are walking billboards. Your neighbors will notice.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: How it works */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-wave-dark mb-6 tracking-tight">How It Works</h2>
                <div className="space-y-6">
                  {[
                    { icon: <CheckCircle className="w-7 h-7 text-wave-copper" />, title: "Sign Up", desc: "Fill out the form with your name, address, and contact info." },
                    { icon: <Home className="w-7 h-7 text-wave-copper" />, title: "We Install the Sign", desc: "Our team places a professional Alvis WAVE yard sign in your front yard." },
                    { icon: <Gift className="w-7 h-7 text-wave-copper" />, title: "You're Entered to Win", desc: "Every month we draw one winner for a $250 gift card. The longer you display, the more chances!" },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="shrink-0 text-wave-copper">{step.icon}</div>
                      <div>
                        <h3 className="font-display font-semibold text-wave-dark mb-1">{step.title}</h3>
                        <p className="text-sm text-wave-warm-gray leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rules */}
              <div className="bg-wave-cream rounded-xl p-6">
                <h3 className="font-display font-semibold text-wave-dark mb-3">Program Rules</h3>
                <ul className="space-y-2 text-sm text-wave-warm-gray">
                  <li>• Must be a current or past Alvis WAVE customer</li>
                  <li>• Sign must remain visible for at least 30 days to qualify</li>
                  <li>• One entry per household per month</li>
                  <li>• Winner notified by email and phone</li>
                  <li>• Gift card valid for services or retail</li>
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-wave-dark mb-2">You're Signed Up!</h3>
                  <p className="text-wave-warm-gray">We'll contact you within 2 business days to schedule yard sign installation.</p>
                  <Link href="/">
                    <Button variant="outline" className="mt-6">Back to Home</Button>
                  </Link>
                </div>
              ) : (
                <div>
                  <h3 className="font-display text-2xl font-bold text-wave-dark mb-2">Sign Up Now</h3>
                  <p className="text-wave-warm-gray text-sm mb-6">Enter your info and we'll handle the rest. We install the sign — you just enjoy the chance to win.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-wave-dark mb-1.5">Full Name</label>
                      <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-wave-dark mb-1.5">Email</label>
                      <Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-wave-dark mb-1.5">Phone</label>
                      <Input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="406-555-1234" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-wave-dark mb-1.5">Service Address</label>
                      <Input required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="123 Main St, Missoula, MT" />
                    </div>
                    <Button type="submit" className="w-full gap-2 text-base" disabled={loading}>
                      {loading ? "Submitting..." : "Enter to Win $250"} <ArrowRight className="w-4 h-4" />
                    </Button>
                    <p className="text-xs text-wave-warm-gray text-center">By signing up, you agree to display the yard sign for at least 30 days.</p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
