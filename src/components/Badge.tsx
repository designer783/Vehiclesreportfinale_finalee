import React from "react"
import { cn } from "@/src/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'orange' | 'green' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  const variants = {
    primary: "bg-primary-accent text-white",
    orange: "bg-white border border-orange-300 text-orange-500",
    green: "bg-green-100 text-green-700",
    outline: "bg-white border border-slate-200 text-text-secondary"
  }

  return (
    <div className={cn(
      "inline-block text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm uppercase tracking-wider",
      variants[variant],
      className
    )}>
      {children}
    </div>
  )
}
