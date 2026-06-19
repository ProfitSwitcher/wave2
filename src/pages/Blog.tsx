import { Calendar, User, Clock, ArrowRight } from "lucide-react"
import { SEO } from "@/components/SEO"

const posts = [
  {
    slug: "winter-hvac-maintenance",
    title: "5 Winter HVAC Maintenance Tips Every Montana Homeowner Needs",
    excerpt: "Montana winters are brutal on heating systems. Learn how to keep your furnace running efficiently and avoid mid-winter breakdowns with these simple maintenance tips.",
    author: "AJ Alvis",
    date: "2026-01-15",
    readTime: "5 min read",
    category: "HVAC",
  },
  {
    slug: "signs-electrical-panel-upgrade",
    title: "7 Signs Your Electrical Panel Needs an Upgrade",
    excerpt: "If your home is more than 25 years old, your electrical panel might be outdated. Here are the warning signs that it's time for a modern 200-amp panel.",
    author: "AJ Alvis",
    date: "2026-01-08",
    readTime: "4 min read",
    category: "Electrical",
  },
  {
    slug: "prevent-frozen-pipes",
    title: "How to Prevent Frozen Pipes This Winter",
    excerpt: "Frozen pipes are a leading cause of home damage in Montana. Learn simple prevention techniques that can save you thousands in water damage repairs.",
    author: "Team WAVE",
    date: "2025-12-20",
    readTime: "6 min read",
    category: "Plumbing",
  },
  {
    slug: "ev-charger-home",
    title: "What to Know Before Installing a Home EV Charger",
    excerpt: "Thinking about an electric vehicle? Here's everything you need to know about Level 2 home charging station installation, costs, and electrical requirements.",
    author: "AJ Alvis",
    date: "2025-12-10",
    readTime: "7 min read",
    category: "Electrical",
  },
  {
    slug: "mini-split-vs-central-ac",
    title: "Mini Split vs Central AC: Which Is Right for Your Montana Home?",
    excerpt: "Ductless mini splits and central air both have advantages. We break down the costs, efficiency, and best use cases for each system in Montana's climate.",
    author: "Team WAVE",
    date: "2025-11-28",
    readTime: "8 min read",
    category: "HVAC",
  },
  {
    slug: "water-heater-tankless",
    title: "Tank vs Tankless Water Heater: The Montana Homeowner's Guide",
    excerpt: "Can't decide between a traditional tank and a tankless water heater? We compare efficiency, cost, and performance for Montana's cold groundwater.",
    author: "Team WAVE",
    date: "2025-11-15",
    readTime: "6 min read",
    category: "Plumbing",
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Blog | Home Tips & Advice | Alvis WAVE Services"
        description="Expert tips on HVAC, plumbing, electrical, and home maintenance from the pros at Alvis WAVE Services serving Western Montana."
      />

      {/* Hero */}
      <section className="bg-wave-blue-dark text-white py-16 md:py-20 grain-texture relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-wave-copper" />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">The WAVE Blog</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">Expert tips, how-tos, and advice from the home service professionals at Alvis WAVE.</p>
        </div>
      </section>

      {/* Posts: unboxed */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.slug} className="group rounded-xl border border-wave-border p-6 hover:shadow-sm transition-shadow">
                <div className="text-xs font-semibold text-wave-blue mb-2 uppercase tracking-wider">{post.category}</div>
                <h2 className="font-display text-xl font-bold text-wave-dark mb-3 leading-tight group-hover:text-wave-blue transition-colors">{post.title}</h2>
                <p className="text-sm text-wave-warm-gray mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-wave-warm-gray mb-3">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <button className="text-wave-blue text-sm font-medium hover:underline flex items-center gap-1">
                  Read More <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
