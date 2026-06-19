import { Link } from "wouter"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Placeholder() {
  return (
    <div className="min-h-screen flex items-center justify-center grain-texture bg-wave-blue-dark">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="font-display text-3xl font-bold text-white mb-4 tracking-tight">Coming Soon</h1>
        <p className="text-white/70 mb-8 leading-relaxed">This page is under construction. Check back soon!</p>
        <Link href="/">
          <Button variant="outline" className="gap-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"><ArrowLeft className="w-4 h-4" /> Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}
