import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-lg border border-wave-border bg-white px-4 py-2 text-sm ring-offset-white placeholder:text-wave-warm-gray/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wave-blue/50 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 transition-shadow",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
