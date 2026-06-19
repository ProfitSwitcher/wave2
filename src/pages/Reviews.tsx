import { Link } from "wouter"
import { Star, Phone, ArrowRight, MapPin, Quote } from "lucide-react"
import { COMPANY } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { SEO } from "@/components/SEO"

const testimonials = [
  {
    name: "Sarah M.",
    location: "Missoula, MT",
    rating: 5,
    text: "Alvis WAVE replaced our furnace in the middle of a cold snap. They showed up when promised, explained everything, and the price was exactly what they quoted. Couldn't ask for better service.",
    service: "Furnace Installation",
  },
  {
    name: "Mike T.",
    location: "Seeley Lake, MT",
    rating: 5,
    text: "Living in Seeley Lake, it's hard to find contractors who will make the drive. Alvis WAVE not only came out same-day, they fixed our electrical issue in under an hour. True professionals.",
    service: "Electrical Repair",
  },
  {
    name: "Jennifer K.",
    location: "Great Falls, MT",
    rating: 5,
    text: "We had a pipe burst at 2 AM. Called the emergency line and someone actually answered! They were at our house within the hour and stopped the flooding. Lifesavers.",
    service: "Emergency Plumbing",
  },
  {
    name: "David R.",
    location: "Helena, MT",
    rating: 5,
    text: "Had Alvis WAVE install a mini split in our home office. The crew was clean, respectful, and did impeccable work. The system works perfectly and our energy bill dropped noticeably.",
    service: "Mini Split Installation",
  },
  {
    name: "Lisa P.",
    location: "Kalispell, MT",
    rating: 5,
    text: "We've used Alvis for everything — electrical panel upgrade, new water heater, and annual HVAC maintenance. One company, one call, every trade. Makes homeownership so much easier.",
    service: "Multiple Services",
  },
  {
    name: "Tom H.",
    location: "Bozeman, MT",
    rating: 4,
    text: "Good honest work at a fair price. The technician took time to explain what was wrong with our AC and showed me exactly what he was doing. No upselling, just solid service.",
    service: "A/C Repair",
  },
]

export default function Reviews() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Customer Reviews | Alvis WAVE Services | Western Montana"
        description="See what homeowners across Western Montana are saying about Alvis WAVE Services. Rated 4.9 stars for HVAC, plumbing, and electrical work."
      />

      {/* Hero */}
      <section className="bg-wave-blue-dark text-white py-16 md:py-20 grain-texture relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-wave-copper" />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1,2,3,4,5].map((i) => <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />)}
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">Customer Reviews</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">Real reviews from real homeowners across Western Montana. See why our customers rate us 4.9 stars.</p>
        </div>
      </section>

      {/* Testimonials: unboxed */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            {testimonials.map((review, i) => (
              <div key={i} className="border-b border-wave-border pb-8">
                <Quote className="w-6 h-6 text-wave-copper/30 mb-4" />
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-wave-border'}`} />
                  ))}
                </div>
                <p className="text-wave-dark text-lg leading-relaxed mb-6 italic">"{review.text}"</p>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-wave-dark">{review.name}</span>
                    <span className="text-wave-warm-gray text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {review.location}
                    </span>
                  </div>
                  <span className="text-xs bg-wave-cream text-wave-warm-gray px-2 py-1 rounded-full">{review.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-sm bg-wave-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-wave-dark mb-4 tracking-tight">Join Our Happy Customers</h2>
          <p className="text-wave-warm-gray mb-8 text-lg leading-relaxed">Experience the Alvis WAVE difference. Same-day service, upfront pricing, and master-licensed technicians.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="copper" size="lg" className="gap-2">Book Service <ArrowRight className="w-4 h-4" /></Button>
            </Link>
            <a href={COMPANY.phoneHref}>
              <Button variant="outline" size="lg" className="gap-2"><Phone className="w-4 h-4" /> {COMPANY.phone}</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
