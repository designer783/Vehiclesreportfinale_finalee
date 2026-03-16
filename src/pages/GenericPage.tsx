import React from "react"
import { FadeIn } from "@/src/components/ui/FadeIn"

interface GenericPageProps {
  title: string;
  children?: React.ReactNode;
}

export function GenericPage({ title, children }: GenericPageProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 pt-24 pb-16">
        <FadeIn direction="down" className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-navy mb-4">{title}</h1>
        </FadeIn>
      </div>
      
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <FadeIn direction="up">
          {children ? children : (
            <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-200 text-center">
              <p className="text-text-secondary text-lg">Content for {title} is coming soon.</p>
            </div>
          )}
        </FadeIn>
      </div>
    </div>
  )
}
