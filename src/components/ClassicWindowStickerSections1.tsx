import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Search, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "./ui/FadeIn"

export function ClassicHero() {
  const [activeTab, setActiveTab] = useState("vin")

  return (
    <section className="relative overflow-hidden bg-slate-50/50 pt-20 pb-32 lg:pt-32 lg:pb-40 border-b border-slate-100">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary-accent/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-600/5 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <StaggerContainer className="flex flex-col justify-center space-y-8">
            <motion.div variants={fadeUpVariant} className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none font-heading text-primary-navy">
                Get Window Stickers for Classic Cars Made Before 1981
              </h1>
              <p className="max-w-[600px] text-lg text-text-secondary font-sans leading-relaxed">
                Want to know exactly how your vintage ride looked when it rolled off the factory line? Our classic window sticker service brings back those original details for any car made before 1981, giving you authentic factory build specs.
              </p>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="w-full max-w-xl space-y-4">
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setActiveTab("vin")}
                  className={`px-4 py-2 font-semibold rounded-t-lg text-sm transition-all duration-300 ${activeTab === 'vin' ? 'bg-white text-primary-navy border-t border-l border-r border-slate-200' : 'text-text-tertiary hover:text-primary-navy hover:bg-slate-50'}`}
                >
                  By VIN
                </button>
                <button 
                  onClick={() => setActiveTab("plate")}
                  className={`px-4 py-2 font-semibold rounded-t-lg text-sm transition-all duration-300 ${activeTab === 'plate' ? 'bg-white text-primary-navy border-t border-l border-r border-slate-200' : 'text-text-tertiary hover:text-primary-navy hover:bg-slate-50'}`}
                >
                  By US License Plate
                </button>
                <button 
                  onClick={() => setActiveTab("ymm")}
                  className={`px-4 py-2 font-semibold rounded-t-lg text-sm transition-all duration-300 ${activeTab === 'ymm' ? 'bg-white text-primary-navy border-t border-l border-r border-slate-200' : 'text-text-tertiary hover:text-primary-navy hover:bg-slate-50'}`}
                >
                  By Year, Make, and Model
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 p-2 bg-white rounded-xl shadow-custom border border-slate-200 rounded-tl-none focus-within:ring-2 focus-within:ring-primary-accent/20 focus-within:border-primary-accent/40 transition-all duration-300 hover:shadow-lg">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-tertiary" />
                  <Input 
                    type="text" 
                    placeholder={activeTab === 'vin' ? "Enter VIN" : activeTab === 'plate' ? "Enter License Plate" : "Enter Year, Make, Model"} 
                    className="border-0 bg-transparent pl-10 h-12 text-text-primary text-lg focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-text-tertiary font-mono uppercase placeholder:font-sans placeholder:normal-case w-full"
                  />
                </div>
                <Button className="h-12 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-base transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-primary-accent/20">
                  Search
                </Button>
              </div>
            </motion.div>
          </StaggerContainer>
          
          <FadeIn delay={0.6} className="relative mx-auto w-full max-w-[500px] lg:max-w-none hidden lg:block">
            <div className="relative w-full h-[520px] flex items-center justify-center overflow-visible">

              {/* Central Background: Classic Window Sticker Report */}
              <motion.div
                className="absolute z-10"
                style={{ width: '88%', top: '6%', left: '6%' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <img
                  src="/assets/images/classic-window-sticker/browser/Safari (Big Sur) - Light.png"
                  alt="Classic Window Sticker Report"
                  className="w-full h-auto drop-shadow-2xl rounded-xl"
                />
              </motion.div>

              {/* Floating Badge: Vehicle Description - Pontiac (Top Left) */}
              <motion.div
                className="absolute z-30"
                style={{ width: '38%', top: '-2%', left: '-2%' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [0, -10, 0], opacity: 1 }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  opacity: { delay: 0.7, duration: 0.5 }
                }}
              >
                <img src="/assets/images/classic-window-sticker/Frame 1000010556.png" alt="Vehicle Description" className="w-full h-auto drop-shadow-lg" />
              </motion.div>

              {/* Floating Badge: Original Base Price (Top Right) */}
              <motion.div
                className="absolute z-30"
                style={{ width: '30%', top: '0%', right: '-2%' }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: [0, 12, 0], opacity: 1 }}
                transition={{
                  y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
                  opacity: { delay: 0.9, duration: 0.5 }
                }}
              >
                <img src="/assets/images/classic-window-sticker/Frame 1000010558.png" alt="Original Base Price" className="w-full h-auto drop-shadow-lg" />
              </motion.div>

              {/* Floating Badge: Standard/Optional Equipment (Right Middle) */}
              <motion.div
                className="absolute z-30"
                style={{ width: '34%', top: '32%', right: '-2%' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [0, -8, 0], opacity: 1 }}
                transition={{
                  y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 },
                  opacity: { delay: 1.0, duration: 0.5 }
                }}
              >
                <img src="/assets/images/classic-window-sticker/Frame 1000010567.png" alt="Standard/Optional Equipment" className="w-full h-auto drop-shadow-lg" />
              </motion.div>

              {/* Floating Badge: No. Produced (Center) */}
              <motion.div
                className="absolute z-30"
                style={{ width: '30%', bottom: '24%', left: '18%' }}
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: [0, 10, 0], opacity: 1 }}
                transition={{
                  y: { duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
                  opacity: { delay: 1.1, duration: 0.5 }
                }}
              >
                <img src="/assets/images/classic-window-sticker/Frame 1000010566.png" alt="No. Produced" className="w-full h-auto drop-shadow-lg" />
              </motion.div>

              {/* Floating Badge: Exterior Color strip (Bottom) */}
              <motion.div
                className="absolute z-20"
                style={{ width: '70%', bottom: '0%', left: '5%' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [0, -6, 0], opacity: 1 }}
                transition={{
                  y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
                  opacity: { delay: 1.2, duration: 0.5 }
                }}
              >
                <img src="/assets/images/classic-window-sticker/Frame 1000010568.png" alt="Exterior Color" className="w-full h-auto drop-shadow-lg" />
              </motion.div>

              {/* Floating Badge: Paint Icon (Bottom Left Corner) */}
              <motion.div
                className="absolute z-30"
                style={{ width: '8%', bottom: '10%', left: '3%' }}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: [0, -12, 0], opacity: 1 }}
                transition={{
                  y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
                  opacity: { delay: 1.4, duration: 0.5 }
                }}
              >
                <img src="/assets/images/classic-window-sticker/mdi_paint-outline.png" alt="Paint Type" className="w-full h-auto drop-shadow-lg" />
              </motion.div>

            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export function WhatIsClassicSticker() {
  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <FadeIn direction="up" className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy">
            What is a Classic Window Sticker?
          </h2>
          <div className="prose prose-lg max-w-none text-text-secondary">
            <p>
              A classic window sticker is a document that shows the original factory information for older cars. It’s like the car’s birth certificate, listing every piece of equipment the car came with when it was brand new.
            </p>
            <p>
              These stickers, often called classic car build sheets, help you understand what made a car special back in the day. You can see the original base price (MSRP), paint color, and all the features it had from the factory.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export function WhatInfoClassicSticker() {
  const sections = [
    {
      title: "Vehicle Specifications",
      desc: "Basic details that identify your car and describe what it was built to do.",
      items: [
        { title: "Year, Make, and Model", desc: "Shows exactly what car you own, including the production year and official name from the factory." },
        { title: "Body Style and Trim Level", desc: "Tells you if it’s a coupe, sedan, or convertible, plus the specific trim package it came with." },
        { title: "Standard/Optional Equipment", desc: "Lists everything your car included, both regular features and special add-ons the first owner chose." },
        { title: "Factory-Installed Features", desc: "Shows items like air conditioning, radio, power windows, or special interior packages that came from the factory." },
        { title: "Additional Order Options", desc: "Identifies buyer-selected upgrades like upgraded interiors, or performance packages at an extra cost." }
      ]
    },
    {
      title: "Engine Specifications",
      desc: "Details about the motor under your hood and how powerful it was when new.",
      items: [
        { title: "Displacement and Horsepower", desc: "Tells the engine size in cubic inches or liters and how much power it made." },
        { title: "Carburetor or Fuel Injection Type", desc: "Shows what system fed fuel to the engine and any special performance features it had." }
      ]
    },
    {
      title: "Capacities",
      desc: "Information about how much your car can hold, from fluids to passengers and cargo space.",
      items: [
        { title: "Fuel Tank Size", desc: "States how many gallons of gas the tank holds when completely full for long trips." },
        { title: "Required Fluid Volume", desc: "Shows oil capacity, coolant volume, transmission, differential and brake fluid specifications for maintenance purposes." }
      ]
    },
    {
      title: "Original Base Price",
      desc: "This is the manufacturer’s suggested retail price (MSRP) for the base model, without the options, taxes, and destination charges.",
      items: [
        { title: "Manufacturer's Suggested Retail Price", desc: "Lists what the factory said the car should cost before any dealer markups or discounts." },
        { title: "Optional Equipment Costs", desc: "Shows extra money paid for add-ons like fancy wheels, a better stereo, or upgraded upholstery choices." }
      ]
    },
    {
      title: "System Specifications",
      desc: "Technical details about important systems that make your car run, stop, and handle the road.",
      items: [
        { title: "Transmission Type", desc: "Identifies if it’s automatic or manual and how many gears it has for shifting." },
        { title: "Brake and Suspension Setup", desc: "Describes whether it has drum or disc brakes and what suspension parts came standard." }
      ]
    },
    {
      title: "Exterior Colors (Paint Type)",
      desc: "The exact factory color name and paint type that covered your car when new.",
      items: [
        { title: "Original Color Code", desc: "Shows the manufacturer’s official name and number for the paint color they sprayed on." },
        { title: "Paint Finish Type", desc: "Tells if it was metallic, solid, two-tone, or special custom paint from the factory." }
      ]
    },
    {
      title: "Wheels, Rims, and Tires",
      desc: "Details about what your car rolled on straight from the assembly line back then.",
      items: [
        { title: "Wheel Size and Style", desc: "Lists the diameter and width, plus whether they were steel, chrome, or special alloy wheels." },
        { title: "Original Tire Specifications", desc: "Shows the tire size, brand, and type that came mounted from the factory for safe driving." }
      ]
    },
    {
      title: "Dimensions",
      desc: "Measurements that tell you exactly how big your car is from every angle and direction.",
      items: [
        { title: "Length, Width, and Height", desc: "Gives exact measurements in inches or feet so you know how much space it takes." },
        { title: "Wheelbase and Ground Clearance", desc: "Shows the distance between front and rear wheels, including how high it sits off the ground." }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            What Information Will I Find on a Classic Window Sticker?
          </h2>
          <p className="text-lg text-text-secondary">
            A classic car window sticker contains detailed factory information about any vintage car. Here’s what you’ll typically find in our window sticker for classics:
          </p>
        </FadeIn>
        
        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <motion.div variants={fadeUpVariant} key={index} className="bg-bg-secondary p-8 rounded-2xl shadow-sm border border-card-border hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold font-heading text-primary-navy mb-3">{section.title}</h3>
              <p className="text-text-secondary mb-6">{section.desc}</p>
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-primary-navy">{item.title}</h4>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
        
        <FadeIn direction="up" className="mt-12 flex justify-center">
          <Button className="h-14 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Get Classic Window Sticker
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
