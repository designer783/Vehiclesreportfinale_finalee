import { Plus, Minus } from "lucide-react"
import { cn } from "@/src/lib/utils"
import { motion } from "framer-motion"
import { StaggerContainer, fadeUpVariant } from "@/src/components/ui/FadeIn"

interface FAQAccordionProps {
  items: { q: string; a: string }[]
  openIndex: number | null
  onToggle: (index: number) => void
  className?: string
}

export function FAQAccordion({ items, openIndex, onToggle, className }: FAQAccordionProps) {
  return (
    <StaggerContainer className={cn("space-y-4", className)}>
      {items.map((faq, i) => (
        <motion.div variants={fadeUpVariant} key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <button 
            onClick={() => onToggle(i)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
          >
            <span className="font-bold text-primary-navy">{faq.q}</span>
            {openIndex === i ? <Minus className="h-5 w-5 text-primary-accent" /> : <Plus className="h-5 w-5 text-primary-accent" />}
          </button>
          {openIndex === i && (
            <div className="px-6 pb-6 text-text-secondary leading-relaxed animate-in slide-in-from-top-2 duration-300">
              {faq.a}
            </div>
          )}
        </motion.div>
      ))}
    </StaggerContainer>
  )
}
