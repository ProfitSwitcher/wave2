import { useState } from "react"
import { Link, useLocation } from "wouter"
import { Menu, X, Phone, MapPin, ChevronDown, Droplets, Wind, Zap, Wrench, ArrowRight } from "lucide-react"
import { COMPANY, SERVICE_HUBS, LOCATIONS } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const hubIcons: Record<string, React.ReactNode> = {
  water: <Droplets className="w-5 h-5" />,
  air: <Wind className="w-5 h-5" />,
  voltage: <Zap className="w-5 h-5" />,
  experts: <Wrench className="w-5 h-5" />,
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMega, setActiveMega] = useState<string | null>(null)
  const [locationOpen, setLocationOpen] = useState(false)
  const [location, setLocation] = useState<typeof LOCATIONS[number]>(LOCATIONS[0])
  const [l] = useLocation()

  return (
    <header className="sticky top-0 z-50">
      {/* Promo Banner */}
      <div className="bg-wave-copper text-white text-sm py-2 px-4 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="font-semibold">Yard Sign Program: Get entered to win a $250 gift card every month!</span>
          <Link href="/yard-sign-program" className="underline hover:text-wave-blue font-medium flex items-center gap-1">
            Learn More <ArrowRight className="w-3 h-3" />
          </Link>
          <button onClick={() => {}} className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-wave-blue text-white/80">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Top Bar */}
      <div className="bg-wave-dark text-white/80 text-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Location Selector */}
            <div className="relative">
              <button
                onClick={() => setLocationOpen(!locationOpen)}
                className="flex items-center gap-1 hover:text-wave-copper-light transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>{location.name}, {location.state}</span>
                <ChevronDown className={cn("w-3 h-3 transition-transform", locationOpen && "rotate-180")} />
              </button>
              {locationOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white text-wave-dark rounded-lg shadow-lg border border-wave-border py-2 min-w-[200px]">
                  {LOCATIONS.map((loc) => (
                    <button
                      key={loc.slug}
                      onClick={() => { setLocation(loc); setLocationOpen(false) }}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm hover:bg-wave-cream transition-colors",
                        location.slug === loc.slug && "bg-wave-cream font-medium"
                      )}
                    >
                      <div className="font-medium">{loc.name}</div>
                      <div className="text-xs text-wave-warm-gray">{loc.description}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href={COMPANY.phoneHref} className="flex items-center gap-1 hover:text-wave-copper-light transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">{COMPANY.phone}</span>
            </a>
            <Link href="/contact">
              <Button variant="copper" size="sm">Schedule Online</Button>
            </Link>
            <Link href="/financing" className="hidden sm:block hover:text-wave-copper-light transition-colors">Financing</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white border-b border-wave-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo: Use wave-logo.jpg */}
            <Link href="/" className="flex items-center gap-3">
              <img src="/wave-logo.jpg" alt="Alvis WAVE Services" className="w-9 h-9 rounded-md object-cover" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-wave-dark text-base leading-tight tracking-tight">Alvis WAVE</span>
                <span className="text-[9px] text-wave-warm-gray leading-tight tracking-widest uppercase">{COMPANY.acronym}</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              <Link href="/" className={cn("px-3 py-2 text-sm font-medium hover:text-wave-blue transition-colors", l === "/" && "text-wave-blue font-semibold")}>Home</Link>

              {/* Services Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMega("services")}
                onMouseLeave={() => setActiveMega(null)}
              >
                <button className={cn("px-3 py-2 text-sm font-medium hover:text-wave-blue transition-colors flex items-center gap-1", l.startsWith("/services") && "text-wave-blue font-semibold")}>
                  Services <ChevronDown className="w-3 h-3" />
                </button>
                {activeMega === "services" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[820px] bg-white rounded-xl shadow-lg border border-wave-border p-6 grid grid-cols-2 gap-6">
                    {SERVICE_HUBS.map((hub) => (
                      <div key={hub.slug}>
                        <Link href={`/services/${hub.slug}`} className="flex items-center gap-2 mb-3 group">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: hub.color }}>
                            {hubIcons[hub.slug]}
                          </div>
                          <span className="font-display font-semibold text-wave-dark group-hover:text-wave-blue">{hub.fullName}</span>
                        </Link>
                        <ul className="space-y-1">
                          {hub.services.slice(0, 5).map((svc) => (
                            <li key={svc.slug}>
                              <Link href={`/services/${hub.slug}/${svc.slug}`} className="text-sm text-wave-warm-gray hover:text-wave-blue transition-colors">
                                {svc.name}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link href={`/services/${hub.slug}`} className="text-sm font-medium text-wave-blue hover:underline">
                              View All {hub.name} Services →
                            </Link>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/offers" className={cn("px-3 py-2 text-sm font-medium hover:text-wave-blue transition-colors", l === "/offers" && "text-wave-blue font-semibold")}>
                Offers
              </Link>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMega("about")}
                onMouseLeave={() => setActiveMega(null)}
              >
                <button className={cn("px-3 py-2 text-sm font-medium hover:text-wave-blue transition-colors flex items-center gap-1", l.startsWith("/about") && "text-wave-blue font-semibold")}>
                  About <ChevronDown className="w-3 h-3" />
                </button>
                {activeMega === "about" && (
                  <div className="absolute top-full left-0 mt-0 w-[240px] bg-white rounded-xl shadow-lg border border-wave-border py-2">
                    {[
                      { label: "About Us", href: "/about" },
                      { label: "Service Area", href: "/service-area" },
                      { label: "Reviews", href: "/reviews" },
                      { label: "Yard Sign Program", href: "/yard-sign-program" },
                      { label: "Financing", href: "/financing" },
                      { label: "Maintenance Plans", href: "/maintenance-plans" },
                      { label: "Filter Saver Club", href: "/filter-saver-club" },
                      { label: "Careers", href: "/careers" },
                      { label: "Blog", href: "/blog" },
                      { label: "Contact", href: "/contact" },
                    ].map((item) => (
                      <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm text-wave-dark hover:bg-wave-cream hover:text-wave-blue transition-colors">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/blog" className={cn("px-3 py-2 text-sm font-medium hover:text-wave-blue transition-colors", l === "/blog" && "text-wave-blue font-semibold")}>
                Blog
              </Link>
              <Link href="/contact" className={cn("px-3 py-2 text-sm font-medium hover:text-wave-blue transition-colors", l === "/contact" && "text-wave-blue font-semibold")}>
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-wave-cream"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-wave-border bg-white">
            <div className="px-4 py-4 space-y-1">
              <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-wave-cream" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-wave-cream" onClick={() => setMobileOpen(false)}>Services</Link>
              <Link href="/offers" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-wave-cream" onClick={() => setMobileOpen(false)}>Offers</Link>
              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-wave-cream" onClick={() => setMobileOpen(false)}>About</Link>
              <Link href="/reviews" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-wave-cream" onClick={() => setMobileOpen(false)}>Reviews</Link>
              <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-wave-cream" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-wave-cream" onClick={() => setMobileOpen(false)}>Contact</Link>
              <div className="pt-3 border-t border-wave-border">
                <a href={COMPANY.phoneHref} className="flex items-center gap-2 px-3 py-3 text-wave-blue font-semibold text-base">
                  <Phone className="w-5 h-5" /> {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
