import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Search, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { US_STATES } from "@/src/constants"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "./ui/FadeIn"

export function VinDecoderHero() {
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
                Decode any VIN in Seconds: Get Accurate Vehicle Information
              </motion.h1>
              <motion.p variants={fadeUpVariant} className="max-w-[600px] text-lg text-text-secondary font-sans leading-relaxed">
                Enter your VIN into our VIN decoder to verify the vehicle’s specs, like year, make, model, trim, and engine size and capacity, for free. Easily prevent fraud and make an informed buying decision.
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

              {/* Background: Vehicle Summary Grid */}
              <motion.div
                className="absolute z-10"
                style={{ width: '72%', top: '8%', right: '0%' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <img
                  src="/assets/images/vin-decoder/Frame 1000010522.png"
                  alt="Vehicle Summary"
                  className="w-full h-auto drop-shadow-2xl rounded-xl"
                />
              </motion.div>

              {/* Left: Vehicle Specs Card */}
              <motion.div
                className="absolute z-20"
                style={{ width: '42%', top: '10%', left: '0%', rotate: -2 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <img
                  src="/assets/images/vin-decoder/Frame 1000008828.png"
                  alt="Vehicle Specs - 2018 Chevrolet Camaro"
                  className="w-full h-auto drop-shadow-xl"
                />
              </motion.div>

              {/* Floating Badge: Odometer (Top Center) */}
              <motion.div
                className="absolute z-30"
                style={{ width: '26%', top: '-2%', left: '32%' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [0, -12, 0], opacity: 1 }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  opacity: { delay: 0.8, duration: 0.5 }
                }}
              >
                <img src="/assets/images/vin-decoder/Card 5.png" alt="Odometer" className="w-full h-auto drop-shadow-lg" />
              </motion.div>

              {/* Floating Badge: Damage (Top Right) */}
              <motion.div
                className="absolute z-30"
                style={{ width: '26%', top: '2%', right: '-2%' }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: [0, 10, 0], opacity: 1 }}
                transition={{
                  y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
                  opacity: { delay: 1.0, duration: 0.5 }
                }}
              >
                <img src="/assets/images/vin-decoder/Card 6.png" alt="Damage" className="w-full h-auto drop-shadow-lg" />
              </motion.div>

              {/* Floating Badge: Title Brand (Bottom Left) */}
              <motion.div
                className="absolute z-30"
                style={{ width: '26%', bottom: '8%', left: '10%' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [0, -8, 0], opacity: 1 }}
                transition={{
                  y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
                  opacity: { delay: 1.2, duration: 0.5 }
                }}
              >
                <img src="/assets/images/vin-decoder/Card 1.png" alt="Title Brand" className="w-full h-auto drop-shadow-lg" />
              </motion.div>

            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export function WhatIsVinDecoder() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="space-y-6">
          <FadeIn direction="down">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy">
              What is a VIN Decoder?
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="prose prose-lg max-w-none text-text-secondary">
            <p>
              A VIN decoder is a tool that reads the unique 17-character VIN assigned to every vehicle ever made. Each section of the VIN holds specific information about the car, like where it was built, the year it was made, and what it came with.
            </p>
            <p>
              By decoding a VIN (Vehicle Identification Number), you can instantly pull up details like the make, model, engine type, trim level, and more. This gives you a much clearer picture of exactly what a vehicle is before you spend any money on it.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export function WhatVinDecoderTells() {
  const features = [
    {
      title: "Year, Make, and Model",
      desc: "You’ll know if that “2020 Honda Accord” is really a 2020 or if the seller got the year wrong (or is lying). You’ll also confirm the exact model. Sometimes sellers confuse an LX with an EX, and those can have very different values."
    },
    {
      title: "Body Type",
      desc: "Is it a sedan, coupe, SUV, or truck? The body type affects everything from insurance costs to how much stuff you can haul around."
    },
    {
      title: "Engine Type and Capacity",
      desc: "You’ll find out if it has a 4-cylinder, V6, or V8 engine, plus the exact size (like 2.4L or 3.5L). Bigger engines usually mean more power but worse gas mileage. This matters a lot when you’re budgeting for fuel."
    },
    {
      title: "Transmission",
      desc: "Our VIN decoder shows whether it’s an automatic or manual transmission, and how many gears it has. Some people love driving a stick shift, while others want the ease of an automatic. Now you’ll know for sure."
    },
    {
      title: "Trim Level",
      desc: "The trim tells you which version of the model you’re looking at. An LX trim usually has basic features, while an EX or Touring trim comes loaded with extras like leather seats, sunroof, and better sound systems."
    },
    {
      title: "Fuel Type",
      desc: "Most vehicles run on regular gasoline, but some need premium fuel, diesel, or even electricity. If you’re looking at a car that requires premium gas, you’ll pay about 50 cents more per gallon every time you fill up. That adds up fast!"
    },
    {
      title: "Number of Doors",
      desc: "This confirms whether it’s a 2-door or 4-door vehicle. Might seem obvious, but it matters for insurance rates and how easy it is to get kids or passengers in and out."
    },
    {
      title: "Estimated Market Value",
      desc: "We show you what the vehicle is worth in four different conditions: excellent, good, fair, and poor. This gives you a reality check on whether the seller’s asking price makes sense."
    },
    {
      title: "Base MSRP",
      desc: "This is what the vehicle cost brand new when it first hit the showroom floor. Knowing the original price helps you understand how much value the car has lost over time."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            What Does Our Free VIN Decoder Tell You About a Vehicle?
          </h2>
          <p className="text-lg text-text-secondary">
            When you use our free VIN lookup tool, you get important details that help you understand exactly what you’re looking at. All of the information loads in seconds, completely free. No credit card required, no email signup, just straight answers. Here’s what you’ll get:
          </p>
        </FadeIn>
        
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div variants={fadeUpVariant} key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-card-border hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-full bg-primary-accent/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-5 w-5 text-primary-accent" />
              </div>
              <h3 className="text-xl font-bold font-heading text-primary-navy mb-3">{feature.title}</h3>
              <p className="text-text-secondary">{feature.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
        
        <FadeIn direction="up" delay={0.2} className="mt-12 text-center">
          <Button className="h-14 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Decode VIN
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
