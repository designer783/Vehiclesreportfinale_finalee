import React, { useState } from "react"
import { motion } from "framer-motion"
import { Search, Lock, CreditCard, FileText, Zap, Map } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { US_STATES } from "@/src/constants"
import { StackCollage } from "./StackCollage"
import { FadeIn, StaggerContainer, fadeUpVariant } from "./ui/FadeIn"

interface HeroProps {
  title?: string;
  description?: string;
}

export function Hero({
  title = "Check the Complete Vehicle History: Buy With Confidence",
  description = "Don’t gamble with your money on a used car. Get a complete vehicle history report that shows accidents, title problems, odometer fraud, liens, recalls, ownership records, and more for any vehicle registered in the USA or Canada."
}: HeroProps) {
  const [activeTab, setActiveTab] = useState<'vin' | 'plate'>('vin');

  return (

    <section className="relative overflow-hidden bg-slate-50/50 pt-20 pb-32 lg:pt-32 lg:pb-40 border-b border-slate-100">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary-accent/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-600/5 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <StaggerContainer className="space-y-4 w-full flex flex-col items-center lg:items-start">
              <motion.div variants={fadeUpVariant} className="inline-flex items-center rounded-full border border-primary-accent/20 bg-primary-accent/5 px-3 py-1 text-sm font-semibold text-primary-accent">
                <span className="flex h-2 w-2 rounded-full bg-primary-accent mr-2"></span>
                Does the vehicle have a hidden past? Find out today!
              </motion.div>
              <motion.h1 
                variants={fadeUpVariant}
                className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none font-heading text-primary-navy"
              >
                {title}
              </motion.h1>
              <motion.p 
                variants={fadeUpVariant}
                className="max-w-[600px] text-lg text-text-secondary font-sans leading-relaxed"
              >
                {description}
              </motion.p>
            </StaggerContainer>

            <FadeIn delay={0.4} className="w-full max-w-xl space-y-4">
              <div className="flex gap-2 justify-center lg:justify-start">
                <button
                  onClick={() => setActiveTab('vin')}
                  className={`px-4 py-2 font-semibold rounded-t-lg text-sm transition-all duration-300 ${activeTab === 'vin' ? 'bg-white text-primary-navy border-t border-l border-r border-slate-200' : 'text-text-tertiary hover:text-primary-navy hover:bg-slate-50'}`}
                >
                  By VIN
                </button>
                <button
                  onClick={() => setActiveTab('plate')}
                  className={`px-4 py-2 font-semibold rounded-t-lg text-sm transition-all duration-300 ${activeTab === 'plate' ? 'bg-white text-primary-navy border-t border-l border-r border-slate-200' : 'text-text-tertiary hover:text-primary-navy hover:bg-slate-50'}`}
                >
                  By US License Plate
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 p-2 bg-white rounded-xl shadow-custom border border-slate-200 rounded-tl-none focus-within:ring-2 focus-within:ring-primary-accent/20 focus-within:border-primary-accent/40 transition-all duration-300 hover:shadow-lg">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-tertiary" />
                  <Input
                    type="text"
                    placeholder={activeTab === 'vin' ? "Enter VIN" : "Enter License Plate"}
                    className="border-0 bg-transparent pl-10 h-12 text-text-primary text-lg focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-text-tertiary font-mono uppercase placeholder:font-sans placeholder:normal-case w-full"
                  />
                </div>
                {activeTab === 'plate' && (
                  <>
                    <div className="hidden sm:block w-px bg-gray-200 my-2"></div>
                    <div className="relative sm:w-32 shrink-0 border-t sm:border-t-0 border-gray-200 pt-2 sm:pt-0">
                      <select className="w-full h-12 bg-transparent border-0 text-text-primary text-base focus:ring-0 cursor-pointer outline-none font-medium px-3 appearance-none">
                        <option value="">State</option>
                        {US_STATES.map(state => (
                          <option key={state.value} value={state.value}>{state.value}</option>
                        ))}
                      </select>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none mt-1 sm:mt-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-tertiary"><path d="m6 9 6 6 6-6" /></svg>
                      </div>
                    </div>
                  </>
                )}
                <Button className="h-12 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-base transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-primary-accent/20">
                  Search
                </Button>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-text-secondary mt-8">
              {[
                { icon: Lock, label: "End-to-End Encryption" },
                { icon: CreditCard, label: "Guaranteed secure payments" },
                { icon: FileText, label: "Over 5 Million Reports Generated" },
                { icon: Zap, label: "Instant Access to Full Reports" },
                { icon: Map, label: "Covers All 50 States & Canada" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeUpVariant} 
                  className="flex items-center gap-2 group cursor-default"
                >
                  <item.icon className="h-4 w-4 text-verification group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-primary-navy transition-colors">{item.label}</span>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>

          <FadeIn delay={0.6} className="relative mx-auto w-full max-w-[500px] lg:max-w-none flex justify-center items-center">
            <StackCollage />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
