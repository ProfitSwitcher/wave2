// Alvis WAVE Services — Central Content Library (Source of Truth)

export const COMPANY = {
  name: "Alvis WAVE Services",
  legal: "Alvis WAVE Services, Inc.",
  formerly: "Formerly Alvis Electrical",
  acronym: "Water • Air • Voltage • Experts",
  acronymExpanded: [
    { letter: "W", word: "Water", meaning: "Plumbing, drains, water heaters, and fixtures for your whole home." },
    { letter: "A", word: "Air", meaning: "Heating, cooling, and indoor air quality — sized right for Montana." },
    { letter: "V", word: "Voltage", meaning: "Electrical from the panel to the EV charger — master-licensed." },
    { letter: "E", word: "Experts", meaning: "Licensed, insured, family-owned Montana tradespeople." },
  ],
  tagline: "Water • Air • Voltage • Experts",
  bridge: "Same ownership. Same trusted team. Now four full home-service divisions.",
  positioning:
    "Alvis WAVE Services delivers dependable heating, cooling, plumbing, and electrical work to homes and small businesses across Western Montana — with the speed of a local crew and the depth of a full-service contractor.",
  phone: "406-396-9936",
  phoneHref: "tel:406-396-9936",
  emergencyPhone: "406-396-9936",
  email: "info@alviswaveservices.com",
  bookingEmail: "book@alviswaveservices.com",
  domain: "alviswaveservices.com",
  area: "Missoula, Seeley Lake & Western Montana",
  yearsExperience: "20+",
  hours: {
    weekdays: "Mon–Fri: 7:00am – 6:00pm",
    saturday: "Sat: 9:00am – 2:00pm",
    emergency: "Sun & after-hours: Emergency service available",
  },
  address: {
    street: "1234 Broadway St",
    city: "Missoula",
    state: "MT",
    zip: "59802",
    full: "1234 Broadway St, Missoula, MT 59802",
  },
  social: {
    facebook: "https://facebook.com/alviswaveservices",
    googleReview: "https://g.page/r/alviswaveservices",
  },
} as const;

export const LOCATIONS = [
  { name: "Missoula", slug: "missoula", state: "MT", description: "Main office serving the Missoula metro area." },
  { name: "Seeley Lake", slug: "seeley-lake", state: "MT", description: "Reliable service for Seeley Lake and the Blackfoot Valley." },
  { name: "Great Falls", slug: "great-falls", state: "MT", description: "Serving Great Falls and surrounding communities." },
  { name: "Helena", slug: "helena", state: "MT", description: "Capital city service with same-day availability." },
  { name: "Kalispell", slug: "kalispell", state: "MT", description: "Flathead Valley service including Whitefish and Columbia Falls." },
  { name: "Bozeman", slug: "bozeman", state: "MT", description: "Gallatin Valley service for Bozeman and Belgrade." },
] as const;

export type LocationSlug = typeof LOCATIONS[number]["slug"];

export const SERVICE_HUBS = [
  {
    slug: "water",
    name: "Water",
    fullName: "Plumbing & Water Systems",
    icon: "Droplets",
    color: "#0F4C81",
    description: "Light plumbing, water heaters, and water filtration — we handle service calls, repairs, and fixtures without major pipe runs.",
    services: [
      { slug: "plumbing-repair", name: "Plumbing Repair", description: "Fast fixes for leaks, drips, and broken fixtures. We handle service calls and minor repairs — typically under 10 feet of pipe." },
      { slug: "water-heater-repair", name: "Water Heater Repair", description: "Restore hot water fast — tank or tankless." },
      { slug: "water-heater-install", name: "Water Heater Install", description: "Energy-efficient tank and tankless water heaters." },
      { slug: "water-filtration", name: "Water Filtration", description: "Clean, safe water with whole-home filtration systems." },
      { slug: "water-softener", name: "Water Softener", description: "Protect pipes and appliances from hard water damage." },
      { slug: "drain-clearing", name: "Drain Clearing", description: "Clear clogs fast — kitchen, bathroom, and main lines." },
    ],
  },
  {
    slug: "air",
    name: "Air",
    fullName: "Heating & Cooling",
    icon: "Wind",
    color: "#2E8B8B",
    description: "HVAC services designed for Montana's extreme climate.",
    services: [
      { slug: "ac-repair", name: "A/C Repair", description: "Fast cooling repair when you need it most." },
      { slug: "ac-install", name: "A/C Installation", description: "Energy-efficient cooling systems sized for your home." },
      { slug: "ac-maintenance", name: "A/C Maintenance", description: "Prevent breakdowns with seasonal tune-ups." },
      { slug: "furnace-repair", name: "Furnace Repair", description: "Stay warm all winter with expert furnace service." },
      { slug: "furnace-install", name: "Furnace Installation", description: "High-efficiency furnaces for Montana winters." },
      { slug: "furnace-maintenance", name: "Furnace Maintenance", description: "Annual service to keep your heat reliable." },
      { slug: "heat-pump", name: "Heat Pumps", description: "Efficient heating and cooling in one system." },
      { slug: "mini-split", name: "Mini Splits", description: "Ductless heating and cooling for any room." },
      { slug: "thermostat", name: "Smart Thermostat", description: "Save energy with programmable and smart thermostats." },
      { slug: "indoor-air-quality", name: "Indoor Air Quality", description: "Air purifiers, humidifiers, and dehumidifiers." },
      { slug: "air-duct-cleaning", name: "Air Duct Cleaning", description: "Remove dust and allergens from your ductwork." },
    ],
  },
  {
    slug: "voltage",
    name: "Voltage",
    fullName: "Electrical Services",
    icon: "Zap",
    color: "#C9722F",
    description: "Master-licensed electrical work from panel to plug.",
    services: [
      { slug: "electrical-repair", name: "Electrical Repair", description: "Safe, fast repairs for any electrical issue." },
      { slug: "electrical-install", name: "Electrical Installation", description: "New circuits, outlets, and upgrades." },
      { slug: "panel-upgrade", name: "Panel Upgrades", description: "Modern panels to handle today's power demands." },
      { slug: "ev-charger", name: "EV Charger Install", description: "Home charging stations for electric vehicles." },
      { slug: "generator", name: "Generator Install", description: "Backup power solutions for Montana outages." },
      { slug: "lighting", name: "Lighting Installation", description: "Indoor, outdoor, and landscape lighting." },
      { slug: "outlets-switches", name: "Outlets & Switches", description: "New installs, replacements, and smart switches." },
      { slug: "ceiling-fan", name: "Ceiling Fan Install", description: "Beat the heat with professionally installed ceiling fans." },
      { slug: "surge-protection", name: "Surge Protection", description: "Whole-home surge protectors for sensitive electronics." },
      { slug: "rewiring", name: "Rewiring", description: "Full and partial home rewiring by master electricians." },
      { slug: "electrical-inspection", name: "Electrical Inspection", description: "Safety inspections for home sales and peace of mind." },
    ],
  },
  {
    slug: "experts",
    name: "Experts",
    fullName: "Service, Remodels, & More",
    icon: "Wrench",
    color: "#5B6875",
    description: "Primarily a service company — your go-to for repairs, maintenance, and upgrades. We also handle select remodel coordination when you need licensed trades on a renovation project.",
    services: [
      { slug: "home-remodeling", name: "Home Remodeling", description: "Kitchen, bathroom, and whole-home renovations." },
      { slug: "kitchen-remodel", name: "Kitchen Remodel", description: "Electrical, plumbing, and HVAC for your dream kitchen." },
      { slug: "bathroom-remodel", name: "Bathroom Remodel", description: "Full-service bathroom updates and additions." },
      { slug: "basement-finish", name: "Basement Finishing", description: "Turn your basement into livable space." },
      { slug: "addition", name: "Home Additions", description: "Expand your home with expert trades coordination." },
      { slug: "insurance-repair", name: "Insurance Repairs", description: "Storm and damage restoration coordinated with your insurer." },
    ],
  },
] as const;

export type HubSlug = typeof SERVICE_HUBS[number]["slug"];

export const OFFERS = [
  {
    id: "cooling-1",
    category: "air",
    title: "$89 A/C Tune-Up",
    subtitle: "Regularly $149",
    description: "Complete cooling system inspection, cleaning, and tune-up. Includes refrigerant check and filter replacement.",
    cta: "Schedule Tune-Up",
    expires: "2026-09-30",
    badge: "Limited Time",
  },
  {
    id: "cooling-2",
    category: "air",
    title: "Free A/C Diagnostic",
    subtitle: "With Repair",
    description: "We'll diagnose your cooling issue at no charge when you proceed with the repair. Same-day service available.",
    cta: "Get Free Diagnostic",
    expires: "2026-12-31",
    badge: null,
  },
  {
    id: "heating-1",
    category: "air",
    title: "$99 Furnace Tune-Up",
    subtitle: "Regularly $179",
    description: "Pre-winter furnace inspection and cleaning. Safety check, burner tune, and filter included.",
    cta: "Schedule Heating Tune-Up",
    expires: "2026-10-31",
    badge: "Seasonal",
  },
  {
    id: "heating-2",
    category: "air",
    title: "$500 Off New Furnace",
    subtitle: "Plus 0% Financing",
    description: "Replace your old furnace with a high-efficiency model. Includes installation, thermostat, and 10-year warranty.",
    cta: "Get Furnace Quote",
    expires: "2026-11-30",
    badge: "Big Savings",
  },
  {
    id: "plumbing-1",
    category: "water",
    title: "$49 Drain Clearing",
    subtitle: "Any Drain",
    description: "Clear any clogged drain for one low price. Kitchen, bathroom, laundry — we handle them all. Guaranteed flow.",
    cta: "Clear My Drain",
    expires: "2026-12-31",
    badge: null,
  },
  {
    id: "plumbing-2",
    category: "water",
    title: "$200 Off Water Heater",
    subtitle: "Tank or Tankless",
    description: "Replace your old water heater and save. Energy-efficient models with professional installation included.",
    cta: "Get Water Heater Quote",
    expires: "2026-12-31",
    badge: null,
  },
  {
    id: "electrical-1",
    category: "voltage",
    title: "Free Electrical Inspection",
    subtitle: "For New Customers",
    description: "Comprehensive electrical safety inspection for your home. Panel, outlets, wiring — we'll check it all.",
    cta: "Book Free Inspection",
    expires: "2026-12-31",
    badge: "New Customer",
  },
  {
    id: "electrical-2",
    category: "voltage",
    title: "$150 Off Panel Upgrade",
    subtitle: "Modernize Your Home",
    description: "Upgrade to a 200-amp panel with surge protection. Handle today's power demands safely.",
    cta: "Upgrade My Panel",
    expires: "2026-12-31",
    badge: null,
  },
  {
    id: "electrical-3",
    category: "voltage",
    title: "EV Charger Install $899",
    subtitle: "Level 2, Installed",
    description: "Professional EV charging station installation. Compatible with all major EV brands. Permits included.",
    cta: "Install EV Charger",
    expires: "2026-12-31",
    badge: null,
  },
] as const;

export const TRUST_SIGNALS = [
  { number: "20+", label: "Years Experience" },
  { number: "10,000+", label: "Jobs Completed" },
  { number: "4.9", label: "Google Rating" },
  { number: "24/7", label: "Emergency Service" },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: SERVICE_HUBS.map((hub) => ({
      label: hub.fullName,
      href: `/services/${hub.slug}`,
      children: hub.services.map((svc) => ({
        label: svc.name,
        href: `/services/${hub.slug}/${svc.slug}`,
      })),
    })),
  },
  { label: "Offers", href: "/offers" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  services: SERVICE_HUBS.map((hub) => ({
    label: hub.fullName,
    href: `/services/${hub.slug}`,
  })),
  company: [
    { label: "About Us", href: "/about" },
    { label: "Service Area", href: "/service-area" },
    { label: "Reviews", href: "/reviews" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  programs: [
    { label: "Yard Sign Program", href: "/yard-sign-program" },
    { label: "Maintenance Plans", href: "/maintenance-plans" },
    { label: "Financing", href: "/financing" },
    { label: "Filter Saver Club", href: "/filter-saver-club" },
  ],
} as const;


export const CITY_CONTENT: Record<string, { headline: string; subheadline: string; body: string; neighborhoods: string[]; landmarks: string[]; climateNotes: string }> = {
  missoula: {
    headline: "Missoula's Trusted Home Services",
    subheadline: "From the Rattlesnake to the University District — we serve every neighborhood.",
    body: "Missoula homeowners trust Alvis WAVE for fast, reliable heating, cooling, plumbing, and electrical service. Whether you need a furnace tune-up before winter or an emergency pipe repair, our master-licensed technicians are just a phone call away.",
    neighborhoods: ["Rattlesnake", "University District", "South Hills", "Lewis and Clark", "Target Range", "Moose Can Gully", "Franklin to the Fort", "Slant Streets", "Northside", "Riverfront"],
    landmarks: ["University of Montana", "Caras Park", "Fort Missoula", "Mount Sentinel", "Wilma Theatre"],
    climateNotes: "Missoula's cold winters and warm summers mean your HVAC system works hard year-round. We specialize in high-efficiency heating for older homes and modern cooling for new construction."
  },
  "seeley-lake": {
    headline: "Seeley Lake Home Services",
    subheadline: "Rural service without the rural wait. We make the drive so you don't have to.",
    body: "Seeley Lake and Blackfoot Valley homeowners know that finding reliable contractors can be a challenge. Alvis WAVE makes the drive from Missoula because we believe every Montana homeowner deserves quality service — no matter how far off the highway.",
    neighborhoods: ["Seeley Lake Proper", "Double Arrow", "Riceville", "Cottonwood Lakes", "Placid Lake Area"],
    landmarks: ["Seeley Lake", "Double Arrow Ranch", "Bob Marshall Wilderness Access", "Clearwater Junction"],
    climateNotes: "Seeley Lake winters are among the coldest in Montana. We specialize in propane heating, wood stove safety inspections, and freeze protection for cabins and seasonal homes."
  },
  "great-falls": {
    headline: "Great Falls HVAC, Plumbing & Electrical",
    subheadline: "Electric City homeowners count on Alvis WAVE for dependable home services.",
    body: "From historic homes near the Missouri River to new builds on the edge of town, Great Falls homeowners rely on Alvis WAVE for professional heating, cooling, plumbing, and electrical work done right the first time.",
    neighborhoods: ["Historic Downtown", "Northwest Great Falls", "Fox Farm", "Meadow Lark Country Club Area", "Gibson Flats", "Black Eagle"],
    landmarks: ["Malmstrom AFB", "Giant Springs State Park", "Paris Gibson Square", "Missouri River", "Lewis and Clark Interpretive Center"],
    climateNotes: "Great Falls experiences extreme temperature swings and persistent winds. We install wind-rated HVAC equipment and provide electrical service panel upgrades for homes with high power demands."
  },
  helena: {
    headline: "Helena Home Services",
    subheadline: "Capital city service with same-day availability.",
    body: "Helena homeowners choose Alvis WAVE because we show up when we say we will, diagnose the problem accurately, and fix it fast. From the Mansion District to the valley, we've got you covered.",
    neighborhoods: ["Mansion District", "Westside", "South-Central", "Upper East Side", "Euclid Avenue", "Sixth Ward", "Boulder Avenue Historic"],
    landmarks: ["Montana State Capitol", "Last Chance Gulch", "Mount Helena", "Cathedral of St. Helena", "Spring Meadow Lake"],
    climateNotes: "Helena's elevation means colder nights and more heating demand. We specialize in high-altitude HVAC sizing and boiler systems common in historic Capitol area homes."
  },
  kalispell: {
    headline: "Kalispell & Flathead Valley Services",
    subheadline: "Whitefish, Columbia Falls, and beyond — serving the entire Flathead.",
    body: "Flathead Valley homeowners trust Alvis WAVE for everything from mini split installations to well pump repairs. We understand the unique challenges of mountain homes and vacation properties.",
    neighborhoods: ["Kalispell Proper", "Whitefish", "Columbia Falls", "Bigfork", "Somers", "Lakeside", "Evergreen"],
    landmarks: ["Flathead Lake", "Whitefish Mountain Resort", "Glacier National Park Gateway", "Hockaday Museum", "Conrad Mansion"],
    climateNotes: "Flathead Valley's mountain climate brings heavy snow loads and freeze-thaw cycles. We install snow-rated heat pumps, protect exterior plumbing from freezing, and service well pumps common in rural valley properties."
  },
  bozeman: {
    headline: "Bozeman & Gallatin Valley Home Services",
    subheadline: "From historic downtown to new subdivisions — serving Bozeman and Belgrade.",
    body: "Bozeman's rapid growth means more homes needing reliable HVAC, plumbing, and electrical service. Alvis WAVE brings master-licensed expertise to Gallatin Valley homeowners with same-day scheduling.",
    neighborhoods: ["Historic Downtown", "North Bozeman", "South Bozeman", "West Bozeman", "Story Mill", "Bozeman Heights", "Belgrade", "Four Corners"],
    landmarks: ["Montana State University", "Museum of the Rockies", "Bozeman Hot Springs", "Bridger Bowl", "Gallatin River"],
    climateNotes: "Bozeman's growth means everything from 100-year-old bungalows to cutting-edge net-zero homes. We handle boiler conversions, radiant floor heating, EV charger installs, and smart home electrical upgrades."
  },
}
