import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { useState } from "react"
import { cn } from "@/src/lib/utils"

interface SearchToolsProps {
  className?: string
  variant?: 'sidebar' | 'hero'
}

export function SearchTools({ className, variant = 'sidebar' }: SearchToolsProps) {
  const [searchType, setSearchType] = useState<'vin' | 'plate' | 'ymm'>('vin')

  return (
    <div className={cn(
      "rounded-3xl p-8 border",
      variant === 'sidebar' ? "bg-slate-50 border-slate-100" : "bg-white border-slate-200 shadow-xl",
      className
    )}>
      <h3 className="text-xl font-bold text-primary-navy mb-6">Lookup Tools</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        <button 
          onClick={() => setSearchType('vin')}
          className={cn(
            "px-4 py-2 rounded-full text-xs font-bold transition-all",
            searchType === 'vin' ? 'bg-primary-navy text-white shadow-md' : 'bg-white text-text-secondary border border-slate-200'
          )}
        >
          By VIN
        </button>
        <button 
          onClick={() => setSearchType('plate')}
          className={cn(
            "px-4 py-2 rounded-full text-xs font-bold transition-all",
            searchType === 'plate' ? 'bg-primary-navy text-white shadow-md' : 'bg-white text-text-secondary border border-slate-200'
          )}
        >
          By US License Plate
        </button>
        <button 
          onClick={() => setSearchType('ymm')}
          className={cn(
            "px-4 py-2 rounded-full text-xs font-bold transition-all",
            searchType === 'ymm' ? 'bg-primary-navy text-white shadow-md' : 'bg-white text-text-secondary border border-slate-200'
          )}
        >
          By YMM
        </button>
      </div>

      <div className="space-y-4">
        {searchType === 'vin' && (
          <div className="space-y-4">
            <Input placeholder="Enter VIN" className="h-12 rounded-xl border-slate-200" />
            <Button className="w-full h-12 bg-primary-accent hover:bg-hover-accent text-white font-bold rounded-xl">
              Search VIN
            </Button>
          </div>
        )}
        {searchType === 'plate' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="Plate Number" className="h-12 rounded-xl border-slate-200" />
              <Input placeholder="State" className="h-12 rounded-xl border-slate-200" />
            </div>
            <Button className="w-full h-12 bg-primary-accent hover:bg-hover-accent text-white font-bold rounded-xl">
              Lookup Plate
            </Button>
          </div>
        )}
        {searchType === 'ymm' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="Year" className="h-12 rounded-xl border-slate-200" />
              <Input placeholder="Make" className="h-12 rounded-xl border-slate-200" />
            </div>
            <Input placeholder="Model" className="h-12 rounded-xl border-slate-200" />
            <Button className="w-full h-12 bg-primary-accent hover:bg-hover-accent text-white font-bold rounded-xl">
              Search YMM
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
