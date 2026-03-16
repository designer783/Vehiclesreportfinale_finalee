import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Search, ShieldCheck, Zap, Database } from "lucide-react"
import { US_STATES } from "@/src/constants"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "./ui/FadeIn"

export function LicensePlateHero() {
  return (
    <section className="relative overflow-hidden bg-slate-50/50 pt-20 pb-32 lg:pt-32 lg:pb-40 border-b border-slate-100">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary-accent/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-600/5 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <StaggerContainer className="space-y-4">
              <motion.h1 variants={fadeUpVariant} className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none font-heading text-primary-navy">
                Lookup License Plate Numbers in All US States
              </motion.h1>
              <motion.p variants={fadeUpVariant} className="max-w-[600px] text-lg text-text-secondary font-sans leading-relaxed">
                Enter any US license plate and get detailed vehicle information and records. Our license plate lookup tool reveals the vehicle’s past, including title history, ownership, theft status, lien records, mileage, accident records, and more.
              </motion.p>
            </StaggerContainer>
            
            <FadeIn delay={0.4} className="w-full max-w-xl space-y-4">
              <div className="flex flex-col sm:flex-row gap-2 p-2 bg-white rounded-xl shadow-custom border border-slate-200 focus-within:ring-2 focus-within:ring-primary-accent/20 focus-within:border-primary-accent/40 transition-all duration-300 hover:shadow-lg">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-tertiary" />
                  <Input 
                    type="text" 
                    placeholder="Enter Plate" 
                    className="border-0 bg-transparent pl-10 h-12 text-text-primary text-lg focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-text-tertiary font-mono uppercase placeholder:font-sans placeholder:normal-case w-full"
                  />
                </div>
                <div className="hidden sm:block w-px bg-gray-200 my-2"></div>
                <div className="relative sm:w-40 shrink-0 border-t sm:border-t-0 border-gray-200 pt-2 sm:pt-0">
                  <select className="w-full h-12 bg-transparent border-0 text-text-primary text-base focus:ring-0 cursor-pointer outline-none font-medium px-3 appearance-none">
                    <option value="">Select State</option>
                    {US_STATES.map(state => (
                      <option key={state.value} value={state.value}>{state.value}</option>
                    ))}
                  </select>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none mt-1 sm:mt-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-tertiary"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
                <Button className="h-12 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-base transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-primary-accent/20">
                  Search
                </Button>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.6} className="relative mx-auto w-full max-w-[500px] lg:max-w-none hidden lg:block">
            <div className="relative w-full h-[500px] flex items-center justify-center overflow-visible">

              {/* Central Background: California License Plate */}
              <motion.div
                className="absolute z-10"
                style={{ width: '80%', top: '20%', left: '10%' }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <img
                  src="/assets/images/license-plate/Frame 1000010570.png"
                  alt="California License Plate"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </motion.div>

              {/* Center Overlay: Magnifying Glass Icon (floating) */}
              <motion.div
                className="absolute z-20"
                style={{ width: '26%', top: '28%', left: '34%' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ y: [0, -14, 0], opacity: 1, scale: 1 }}
                transition={{
                  y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
                  opacity: { delay: 0.6, duration: 0.5 },
                  scale: { delay: 0.6, duration: 0.5 }
                }}
              >
                <img
                  src="/assets/images/license-plate/image 471.png"
                  alt="Lookup Icon"
                  className="w-full h-auto drop-shadow-xl"
                />
              </motion.div>

              {/* Floating Badge: Accident (Top Left) */}
              <motion.div
                className="absolute z-30"
                style={{ width: '28%', top: '0%', left: '0%' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [0, -10, 0], opacity: 1 }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  opacity: { delay: 0.8, duration: 0.5 }
                }}
              >
                <img src="/assets/images/license-plate/Card 2.png" alt="Accident" className="w-full h-auto drop-shadow-lg" />
              </motion.div>

              {/* Floating Badge: Number of Owners (Top Right) */}
              <motion.div
                className="absolute z-30"
                style={{ width: '34%', top: '5%', right: '-2%' }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: [0, 12, 0], opacity: 1 }}
                transition={{
                  y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
                  opacity: { delay: 1.0, duration: 0.5 }
                }}
              >
                <img src="/assets/images/license-plate/Container.png" alt="Number of Owners" className="w-full h-auto drop-shadow-lg" />
              </motion.div>

              {/* Floating Badge: Theft (Bottom Left) */}
              <motion.div
                className="absolute z-30"
                style={{ width: '30%', bottom: '2%', left: '-2%' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [0, -8, 0], opacity: 1 }}
                transition={{
                  y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
                  opacity: { delay: 1.2, duration: 0.5 }
                }}
              >
                <img src="/assets/images/license-plate/Card 10.png" alt="Theft" className="w-full h-auto drop-shadow-lg" />
              </motion.div>

              {/* Floating Badge: Damage (Bottom Right) */}
              <motion.div
                className="absolute z-30"
                style={{ width: '28%', bottom: '4%', right: '0%' }}
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: [0, 10, 0], opacity: 1 }}
                transition={{
                  y: { duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
                  opacity: { delay: 1.4, duration: 0.5 }
                }}
              >
                <img src="/assets/images/license-plate/Card 6.png" alt="Damage" className="w-full h-auto drop-shadow-lg" />
              </motion.div>

            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Comprehensive Data from Trusted National Sources",
      desc: "Over 2 million users trust us by pulling records from over 600 million + vehicle records across all states.",
      icon: <Database className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "Instant Results Without Delay",
      desc: "Your complete vehicle history report is available for viewing instantly. We process and generate full reports in split seconds.",
      icon: <Zap className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "Comprehensive Data from Trusted National Sources",
      desc: "Over 2 million users trust us by pulling records from over 600 million + vehicle records across all states.",
      icon: <ShieldCheck className="h-6 w-6 text-primary-accent" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            Why Thousands Choose Vehicle Report’s License Plate Check
          </h2>
        </FadeIn>
        
        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div variants={fadeUpVariant} key={index} className="bg-bg-secondary p-8 rounded-2xl shadow-sm border border-card-border text-center hover:shadow-md transition-shadow">
              <div className="h-16 w-16 rounded-full bg-primary-accent/10 flex items-center justify-center mx-auto mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-primary-navy mb-3">{reason.title}</h3>
              <p className="text-text-secondary">{reason.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export function WhatIsLicensePlateSearch() {
  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="space-y-6">
          <FadeIn direction="left">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy">
              What is a License Plate Search?
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="prose prose-lg max-w-none text-text-secondary">
            <p>
              A license plate search is a process that uses a vehicle’s number plate to look up information held on state and federal databases. You simply type in the plate number, and the system pulls up everything you need in seconds.
            </p>
            <p>
              It reveals the make, model, year, engine size, title status, ownership history, and more, giving you a fast and easy way to learn more about any vehicle’s specs and history before you buy.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
