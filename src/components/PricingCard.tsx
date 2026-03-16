import { Button } from "@/src/components/ui/button"
import { cn } from "@/src/lib/utils"

interface PricingCardProps {
  name: string
  save: string
  price: string
  unit: string
  total: string
  popular?: boolean
  buttonText: string
  onAction?: () => void
  className?: string
}

export function PricingCard({ 
  name, 
  save, 
  price, 
  unit, 
  total, 
  popular, 
  buttonText, 
  onAction,
  className 
}: PricingCardProps) {
  return (
    <div className={cn(
      "relative bg-white rounded-3xl border p-8 shadow-sm hover:shadow-md transition-all flex flex-col",
      popular ? 'border-2 border-primary-accent shadow-xl' : 'border-slate-200',
      className
    )}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-accent text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Popular
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-primary-navy mb-2">{name}</h3>
        <div className={cn(
          "font-bold text-sm mb-4",
          save.includes('<') ? 'text-primary-accent' : 'text-green-600'
        )}>
          {save}
        </div>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-extrabold text-primary-navy">{price}</span>
          <span className="text-text-secondary">{unit}</span>
        </div>
        <div className="mt-2 text-sm">
          <span className="text-primary-navy font-bold">{total}</span>
        </div>
      </div>
      <p className="text-center text-sm text-text-secondary mb-8 italic">Buy now, use later!</p>
      <Button 
        onClick={onAction}
        className={cn(
          "w-full font-bold py-6 rounded-xl mb-6",
          popular ? 'bg-primary-accent hover:bg-hover-accent text-white' : 'bg-primary-navy hover:bg-slate-800 text-white'
        )}
      >
        {buttonText}
      </Button>
    </div>
  )
}
