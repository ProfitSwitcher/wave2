import { SEO } from "@/components/SEO"

export default function Terms() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Terms of Service | Alvis WAVE Services"
        description="Terms of service for Alvis WAVE Services. Please read these terms carefully before using our website or services."
      />
      
      <section className="bg-wave-blue-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-display text-4xl font-bold">Terms of Service</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-wave-slate mb-6">Last updated: January 1, 2026</p>
          
          <h2 className="font-display text-2xl font-bold text-wave-charcoal mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-wave-slate mb-4">By accessing or using the Alvis WAVE Services website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
          
          <h2 className="font-display text-2xl font-bold text-wave-charcoal mt-8 mb-4">2. Services</h2>
          <p>Alvis WAVE Services provides residential and commercial HVAC, plumbing, electrical, and select remodeling coordination services in Western Montana. All services are subject to availability and scheduling.</p>
          
          <h2 className="font-display text-2xl font-bold text-wave-charcoal mt-8 mb-4">3. Quotes and Estimates</h2>
          <p className="text-wave-slate mb-4">All quotes and estimates provided through our website or in person are valid for 30 days unless otherwise specified. Final pricing may vary based on actual conditions discovered during service.</p>
          
          <h2 className="font-display text-2xl font-bold text-wave-charcoal mt-8 mb-4">4. Warranties</h2>
          <p className="text-wave-slate mb-4">We stand behind our work with a satisfaction guarantee. Specific warranties vary by service and product. Please ask your technician for warranty details on your specific service.</p>
          
          <h2 className="font-display text-2xl font-bold text-wave-charcoal mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="text-wave-slate mb-4">To the maximum extent permitted by law, Alvis WAVE Services shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with our services.</p>
          
          <h2 className="font-display text-2xl font-bold text-wave-charcoal mt-8 mb-4">6. Governing Law</h2>
          <p className="text-wave-slate mb-4">These Terms shall be governed by and construed in accordance with the laws of the State of Montana, without regard to its conflict of law provisions.</p>
          
          <h2 className="font-display text-2xl font-bold text-wave-charcoal mt-8 mb-4">7. Changes to Terms</h2>
          <p className="text-wave-slate mb-4">We reserve the right to modify these terms at any time. Please review these terms periodically for changes. Your continued use of our website constitutes acceptance of any changes.</p>
        </div>
      </section>
    </div>
  )
}
