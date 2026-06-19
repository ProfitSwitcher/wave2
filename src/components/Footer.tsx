import { Link } from "wouter"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { COMPANY, FOOTER_LINKS, SERVICE_HUBS } from "@/lib/content"

export function Footer() {
  return (
    <footer className="bg-wave-dark text-white">
      {/* Copper accent stripe */}
      <div className="h-1 bg-wave-copper" />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img src="/wave-logo.jpg" alt="Alvis WAVE Services" className="w-10 h-10 rounded object-cover" />
              <div>
                <div className="font-display font-bold text-lg leading-tight tracking-tight">Alvis WAVE</div>
                <div className="text-[10px] text-white/50 leading-tight tracking-widest uppercase">{COMPANY.acronym}</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">{COMPANY.positioning}</p>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-wave-blue transition-colors text-sm font-bold">
                f
              </a>
              <a href={COMPANY.social.googleReview} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-wave-blue transition-colors text-sm font-bold">
                G
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-white/70">Services</h4>
            <ul className="space-y-2.5">
              {SERVICE_HUBS.map((hub) => (
                <li key={hub.slug}>
                  <Link href={`/services/${hub.slug}`} className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1 group">
                    {hub.fullName}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-white/70">Company</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs & Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-white/70">Programs</h4>
            <ul className="space-y-2.5 mb-8">
              {FOOTER_LINKS.programs.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>

            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-white/70">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a href={COMPANY.phoneHref} className="text-sm text-wave-copper-light hover:text-white transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" /> {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> {COMPANY.email}
                </a>
              </li>
              <li className="text-sm text-white/60 flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {COMPANY.address.full}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>© {new Date().getFullYear()} {COMPANY.legal}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white/70 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
