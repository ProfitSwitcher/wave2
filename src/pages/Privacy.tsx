import { SEO } from "@/components/SEO"

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Privacy Policy | Alvis WAVE Services"
        description="Alvis WAVE Services privacy policy. Learn how we collect, use, and protect your personal information."
      />
      
      <section className="bg-wave-blue-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-slate">
          <p className="text-wave-slate mb-6">Last updated: January 1, 2026</p>
          
          <h2 className="font-display text-2xl font-bold text-wave-charcoal mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-wave-slate mb-4">We collect information you provide directly to us, including your name, phone number, email address, home address, and service preferences when you request a quote, schedule service, or contact us.</p>
          
          <h2 className="font-display text-2xl font-bold text-wave-charcoal mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-wave-slate mb-4">We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to send you marketing communications if you've opted in.</p>
          
          <h2 className="font-display text-2xl font-bold text-wave-charcoal mt-8 mb-4">3. Information Sharing</h2>
          <p className="text-wave-slate mb-4">We do not sell your personal information to third parties. We may share your information with service providers who assist us in operating our business, or as required by law.</p>
          
          <h2 className="font-display text-2xl font-bold text-wave-charcoal mt-8 mb-4">4. Data Security</h2>
          <p className="text-wave-slate mb-4">We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or destruction.</p>
          
          <h2 className="font-display text-2xl font-bold text-wave-charcoal mt-8 mb-4">5. Your Rights</h2>
          <p className="text-wave-slate mb-4">You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at info@alviswaveservices.com.</p>
          
          <h2 className="font-display text-2xl font-bold text-wave-charcoal mt-8 mb-4">6. Contact Us</h2>
          <p className="text-wave-slate mb-4">If you have any questions about this Privacy Policy, please contact us at info@alviswaveservices.com or call 406-396-9936.</p>
        </div>
      </section>
    </div>
  )
}
