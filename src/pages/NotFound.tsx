import { Link } from "wouter"
import { Home, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center grain-texture bg-wave-blue-dark">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="font-display text-4xl font-bold text-white">404</span>
        </div>
        <h1 className="font-display text-3xl font-bold text-white mb-4 tracking-tight">Page Not Found</h1>
        <p className="text-white/70 mb-8 leading-relaxed">The page you're looking for doesn't exist or has been moved.</p>
        <Link href="/">
          <Button variant="copper" className="gap-2"><Home className="w-4 h-4" /> Back to Home <ArrowRight className="w-4 h-4" /></Button>
        </Link>
      </div>
    </div>
  )
}
