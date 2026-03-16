import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Search, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { US_STATES } from "@/src/constants"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "./ui/FadeIn"

export function VinCheckHero() {
  const [activeTab, setActiveTab] = useState<'vin' | 'plate'>('vin');

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
                Check Used Car VIN Number: Instantly Reveal Past Records
              </motion.h1>
              <motion.p variants={fadeUpVariant} className="max-w-[600px] text-lg text-text-secondary font-sans leading-relaxed">
                Every used car has a history. Run a VIN check to pull back the curtain on any vehicle’s real history. Get a detailed report with accident records, title history, mileage records, thefts, ownership, and more. Check the VIN first before buying.
              </motion.p>
            </StaggerContainer>
            
            <FadeIn delay={0.4} className="w-full max-w-xl space-y-4">
              <div className="flex gap-2">
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-tertiary"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </div>
                  </>
                )}
                <Button className="h-12 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-base transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-primary-accent/20">
                  Search
                </Button>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.6} className="relative mx-auto w-full max-w-[500px] lg:max-w-none hidden lg:block">
            <div className="relative w-full h-[520px] flex items-center justify-center overflow-visible">

              {/* Central: Browser/Report Screenshot */}
              <motion.div
                className="absolute z-10"
                style={{ width: '75%', top: '5%', left: '18%', rotate: 2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <img
                  src="/assets/images/vin-check/Safari (Big Sur) - Light.png"
                  alt="VIN Check Report"
                  className="w-full h-auto drop-shadow-2xl rounded-xl"
                />
              </motion.div>

              {/* Left: Vehicle Info Card */}
              <motion.div
                className="absolute z-20"
                style={{ width: '40%', bottom: '5%', left: '0%', rotate: -3 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <img
                  src="/assets/images/vin-check/Frame 1000010507.png"
                  alt="Vehicle Specs Card"
                  className="w-full h-auto drop-shadow-xl"
                />
              </motion.div>

              {/* Right: Market Price Fan Cards */}
              <motion.div
                className="absolute z-20"
                style={{ width: '52%', bottom: '0%', right: '-2%' }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <img
                  src="/assets/images/vin-check/Frame 1000010519.png"
                  alt="Estimated Market Price"
                  className="w-full h-auto drop-shadow-xl"
                />
              </motion.div>

              {/* Floating Badge: Title Issues (Top Center) */}
              <motion.div
                className="absolute z-30"
                style={{ width: '30%', top: '-2%', left: '28%' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [0, -10, 0], opacity: 1 }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  opacity: { delay: 0.8, duration: 0.5 }
                }}
              >
                <img src="/assets/images/vin-check/Container.png" alt="Title Issues" className="w-full h-auto drop-shadow-lg" />
              </motion.div>

              {/* Floating Badge: Number of Accidents (Top Right) */}
              <motion.div
                className="absolute z-30"
                style={{ width: '34%', top: '2%', right: '-4%' }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: [0, 12, 0], opacity: 1 }}
                transition={{
                  y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
                  opacity: { delay: 1.0, duration: 0.5 }
                }}
              >
                <img src="/assets/images/vin-check/Container-1.png" alt="Number of Accidents" className="w-full h-auto drop-shadow-lg" />
              </motion.div>

              {/* Floating Badge: Number of Owners (Bottom Left) */}
              <motion.div
                className="absolute z-30"
                style={{ width: '32%', bottom: '12%', left: '-2%' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [0, -8, 0], opacity: 1 }}
                transition={{
                  y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
                  opacity: { delay: 1.2, duration: 0.5 }
                }}
              >
                <img src="/assets/images/vin-check/Container-2.png" alt="Number of Owners" className="w-full h-auto drop-shadow-lg" />
              </motion.div>

            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export function FreeVinCheckSpecs() {
  const specs = [
    "Year, Make & Model",
    "Body Type",
    "Engine Type & Capacity",
    "Transmission",
    "Trim",
    "Fuel Type",
    "Doors",
    "Estimated Market Value (in 4 conditions)",
    "Base MSRP"
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">Verifying Vehicle Specs? Start with a Free VIN Check</h2>
          <p className="text-lg text-text-secondary">Enter the 17-character VIN number to immediately see basic vehicle information at no cost. These include:</p>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {specs.map((spec, i) => (
            <motion.div key={i} variants={fadeUpVariant} className="flex items-center gap-3 bg-light-bg p-4 rounded-xl border border-card-border">
              <CheckCircle2 className="h-5 w-5 text-primary-accent shrink-0" />
              <span className="font-medium text-primary-navy">{spec}</span>
            </motion.div>
          ))}
        </StaggerContainer>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-text-secondary mb-6">If you’re buying a used car, simply upgrade to get the full vehicle history report.</p>
          <Button className="h-12 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-base">Decode VINs for Free</Button>
        </div>
      </div>
    </section>
  )
}

export function WhatIsVinCheckText() {
  return (
    <section className="py-24 bg-light-bg">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <FadeIn direction="down">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-6 text-center">What Is a VIN Number Check?</h2>
        </FadeIn>
        <StaggerContainer className="space-y-4 text-lg text-text-secondary">
          <motion.p variants={fadeUpVariant}>A VIN number check is when you look up a vehicle’s 17-character identification code to reveal the car’s history, which includes any reported records of accidents, thefts, ownership, title brands, mileage, liens, and more.</motion.p>
          <motion.p variants={fadeUpVariant}>When buying a used car, a VIN check helps avoid fraud by verifying that the seller is telling the truth. It shows if the vehicle is safe to buy and in good condition before you part ways with your hard-earned money.</motion.p>
        </StaggerContainer>
      </div>
    </section>
  )
}

export function WhatInfoIncluded() {
  const sections = [
    {
      title: "Vehicle Usage History",
      desc: "Discover how previous owners used this vehicle. Usage history matters because rental cars, taxis, and delivery vehicles typically accumulate harder wear than personally owned cars driven more gently.",
      items: [
        { name: "Vehicle Usage History", desc: "Learn if the car lived its life as someone’s personal transportation or worked as a commercial vehicle in business fleets." },
        { name: "Rental or Fleet Status", desc: "Find out if major rental companies, corporate fleets, or government agencies owned the vehicle before it entered the used car market." }
      ]
    },
    {
      title: "Ownership Records",
      desc: "Track every registered owner from the original buyer through each subsequent person who held the title.",
      items: [
        { name: "Previous Owners and Location", desc: "See exactly how many different people or businesses registered this vehicle in their names throughout its history, and their locations." },
        { name: "Length of Each Ownership", desc: "Check how long each owner kept the car before selling, with short ownership periods suggesting dissatisfaction or discovered problems." }
      ]
    },
    {
      title: "Auction/Sales History with Photos",
      desc: "View appearances at wholesale dealer auctions, complete with condition reports and up to 10 photos showing the vehicle’s state at sale time.",
      items: [
        { name: "Wholesale Auction Appearances", desc: "Track when and where the vehicle was sold at dealer-only auctions and sales, listed as a salvage/total loss, including how many times it cycled through wholesale markets." },
        { name: "Condition Photos from Sales", desc: "Look at real pictures auction inspectors took showing visible damage, interior condition, and overall appearance before dealers purchased for resale." }
      ]
    },
    {
      title: "Title Brand Check",
      desc: "Search government title records across all states to find problematic brands that affect value and raise safety concerns.",
      items: [
        { name: "Current Title Status", desc: "See whether the vehicle currently holds a clean title or carries brands for salvage, rebuilt, flood damage, fire damage, or other problems." },
        { name: "Historical Brand Changes", desc: "Track title status changes over time, catching title washing schemes where criminals moved cars across state lines to hide damaged brands." }
      ]
    },
    {
      title: "Mileage History Verification",
      desc: "Follow odometer readings recorded at registrations, inspections, auctions, and service visits throughout the vehicle’s lifetime.",
      items: [
        { name: "Odometer Reading Timeline", desc: "Review every recorded mileage reading with dates, creating a timeline that shows whether the odometer advanced naturally or jumped suspiciously." },
        { name: "Mileage Consistency Analysis", desc: "See our analysis flagging readings that don’t make sense, like sudden drops or impossibly low mileage for the vehicle’s age." }
      ]
    },
    {
      title: "Accident Records",
      desc: "Access every reported collision, crash, and impact event filed with insurance companies or law enforcement agencies. Accident history reveals damage that affects safety, reliability, and resale value even after repairs are completed.",
      items: [
        { name: "Collision Dates and Severity", desc: "Check when accidents happened and how severe the damage was, from minor bumper taps to major crashes requiring extensive reconstruction work." },
        { name: "Airbag Deployment Information", desc: "Find out if airbags went off during crashes, which signals serious impacts and adds thousands to proper repair costs if done right." }
      ]
    },
    {
      title: "Theft Records",
      desc: "Search police databases nationwide to confirm nobody reported the vehicle stolen and verify it doesn’t appear on active hot sheets.",
      items: [
        { name: "Stolen Vehicle Status", desc: "See if anyone ever reported this car stolen to law enforcement agencies anywhere in the United States or Canada." },
        { name: "Recovery Date and Condition", desc: "Learn when police recovered the vehicle, if it was stolen, and what damage or condition issues resulted from the theft." }
      ]
    },
    {
      title: "Lien and Loan Records",
      desc: "Discover if banks or finance companies currently hold liens on the vehicle from unpaid loans or active leases. Outstanding liens prevent a clean title transfer and could leave you unable to register the car legally in your name.",
      items: [
        { name: "Active Lien Status", desc: "Check if any lenders filed claims on the vehicle that must be satisfied before the seller can transfer a clean title." },
        { name: "Event Date and Location", desc: "Find out the date and the state or region where the lien was filed and held. This helps to know if a loan is still active." }
      ]
    },
    {
      title: "Service and Repair History",
      desc: "Access maintenance records, oil changes, inspections, and repair work documented by dealerships and repair facilities.",
      items: [
        { name: "Maintenance Record Timeline", desc: "Follow oil changes, tire rotations, fluid services, and routine maintenance performed throughout the vehicle’s life, showing owner care levels." },
        { name: "Major Repair Records", desc: "See significant repairs like engine work, transmission rebuilds, or suspension replacements that indicate past problems or current reliability." }
      ]
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">What Information is Included in Our Full VIN Report</h2>
          <p className="text-lg text-text-secondary">Our comprehensive VIN lookup report goes far beyond basic specifications to reveal a vehicle’s complete documented history from multiple trusted sources. You get access to premium information, including:</p>
        </FadeIn>
        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, i) => (
            <motion.div variants={fadeUpVariant} key={i} className="bg-light-bg rounded-2xl p-6 shadow-sm border border-card-border">
              <h3 className="text-xl font-bold text-primary-navy mb-3">{section.title}</h3>
              <p className="text-sm text-text-secondary mb-6">{section.desc}</p>
              <ul className="space-y-4">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <h4 className="font-semibold text-primary-navy text-sm flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary-accent shrink-0 mt-0.5" />
                      {item.name}
                    </h4>
                    <p className="text-sm text-text-secondary mt-1 ml-6">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </StaggerContainer>
        <FadeIn direction="up" delay={0.2} className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="h-12 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-base">Get Vehicle History Report</Button>
          <Button variant="outline" className="h-12 px-8 rounded-lg font-semibold text-base border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white">View Sample Report</Button>
        </FadeIn>
      </div>
    </section>
  )
}
