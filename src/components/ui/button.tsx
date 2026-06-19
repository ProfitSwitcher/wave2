import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "copper" | "white" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wave-blue/50 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]"

    const variants = {
      default: "bg-wave-blue text-white hover:bg-wave-blue-dark rounded-lg",
      outline: "border-2 border-wave-border text-wave-dark hover:bg-wave-blue hover:text-white hover:border-wave-blue rounded-lg",
      ghost: "hover:bg-wave-cream text-wave-dark rounded-lg",
      copper: "bg-wave-copper text-white hover:bg-wave-copper-light rounded-lg",
      white: "bg-white text-wave-blue hover:bg-wave-glacier border-2 border-wave-border rounded-lg",
      link: "text-wave-blue hover:underline p-0 h-auto rounded-none",
    }

    const sizes = {
      default: "h-10 px-5 py-2 text-sm",
      sm: "h-8 px-3 text-xs",
      lg: "h-12 px-8 text-base",
      icon: "h-10 w-10",
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
