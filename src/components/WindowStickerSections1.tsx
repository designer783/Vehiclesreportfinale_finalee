import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Search, ShieldCheck, CheckCircle2, Users, Banknote } from "lucide-react"
import { useState } from "react"
import { US_STATES } from "@/src/constants"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "./ui/FadeIn"

export function WindowStickerHero() {
  const [activeTab, setActiveTab] = useState<'vin' | 'plate' | 'ymm'>('vin');

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
                Get a Copy of Your Vehicle’s Window Sticker in Seconds
              </motion.h1>
              <motion.p variants={fadeUpVariant} className="max-w-[600px] text-lg text-text-secondary font-sans leading-relaxed">
                Retrieve any vehicle’s window sticker by VIN with all the options, equipment, and features. Enter the VIN number to understand what the car was like when it was new on the dealer’s lot. View original MSRP, colors, and more.
              </motion.p>
            </StaggerContainer>
            
            <FadeIn delay={0.4} className="w-full max-w-xl space-y-4">
              <div className="flex flex-wrap gap-2">
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
                <button 
                  onClick={() => setActiveTab('ymm')}
                  className={`px-4 py-2 font-semibold rounded-t-lg text-sm transition-all duration-300 ${activeTab === 'ymm' ? 'bg-white text-primary-navy border-t border-l border-r border-slate-200' : 'text-text-tertiary hover:text-primary-navy hover:bg-slate-50'}`}
                >
                  By Year, Make, and Model
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 p-2 bg-white rounded-xl shadow-custom border border-slate-200 rounded-tl-none focus-within:ring-2 focus-within:ring-primary-accent/20 focus-within:border-primary-accent/40 transition-all duration-300 hover:shadow-lg">
                {activeTab === 'ymm' ? (
                  <div className="flex flex-col sm:flex-row flex-1 gap-2 sm:gap-0">
                    <div className="relative flex-1">
                      <select className="w-full h-12 bg-transparent border-0 text-text-primary text-base focus:ring-0 cursor-pointer outline-none font-medium px-3 appearance-none">
                        <option value="">Year</option>
                        {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-tertiary"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </div>
                    <div className="hidden sm:block w-px bg-gray-200 my-2"></div>
                    <div className="relative flex-1 border-t sm:border-t-0 border-gray-200 pt-2 sm:pt-0">
                      <select className="w-full h-12 bg-transparent border-0 text-text-primary text-base focus:ring-0 cursor-pointer outline-none font-medium px-3 appearance-none">
                        <option value="">Make</option>
                        <option value="toyota">Toyota</option>
                        <option value="honda">Honda</option>
                        <option value="ford">Ford</option>
                        <option value="chevrolet">Chevrolet</option>
                      </select>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none mt-1 sm:mt-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-tertiary"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </div>
                    <div className="hidden sm:block w-px bg-gray-200 my-2"></div>
                    <div className="relative flex-1 border-t sm:border-t-0 border-gray-200 pt-2 sm:pt-0">
                      <select className="w-full h-12 bg-transparent border-0 text-text-primary text-base focus:ring-0 cursor-pointer outline-none font-medium px-3 appearance-none">
                        <option value="">Model</option>
                      </select>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none mt-1 sm:mt-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-tertiary"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </div>
                    <div className="hidden sm:block w-px bg-gray-200 my-2"></div>
                    <div className="relative flex-1 border-t sm:border-t-0 border-gray-200 pt-2 sm:pt-0">
                      <select className="w-full h-12 bg-transparent border-0 text-text-primary text-base focus:ring-0 cursor-pointer outline-none font-medium px-3 appearance-none">
                        <option value="">Trim</option>
                      </select>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none mt-1 sm:mt-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-tertiary"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
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
                  </>
                )}
                <Button className="h-12 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-base transition-all shrink-0 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-primary-accent/20">
                  Search
                </Button>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.6} className="relative mx-auto w-full max-w-[500px] lg:max-w-none hidden lg:block">
            <div className="relative aspect-[4/3] w-full flex items-center justify-center">
              {/* Main Sticker */}
              <motion.div 
                className="relative z-10 w-[85%]"
                style={{ rotate: -2 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <img
                  src="/assets/images/ws-main-sticker.png"
                  alt="Window Sticker Main"
                  className="w-full h-auto"
                  onError={(e) => (e.currentTarget.src = "https://picsum.photos/seed/windowsticker/800/600")}
                />
              </motion.div>

              {/* Floating Badge: Vehicle Info */}
              <motion.div 
                className="absolute -top-12 -left-8 z-20 w-[45%]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: [0, -8, 0],
                  opacity: 1
                }}
                transition={{ 
                  y: {
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  opacity: { delay: 0.7, duration: 0.5 }
                }}
              >
                <img src="/assets/images/ws-badge-vehicle.png" alt="Vehicle Info Badge" className="w-full h-auto" />
              </motion.div>

              {/* Floating Badge: Fuel (Top Right) */}
              <motion.div 
                className="absolute -top-12 -right-12 z-20 w-[45%]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: [0, 10, 0],
                  opacity: 1
                }}
                transition={{ 
                  y: {
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  opacity: { delay: 1, duration: 0.5 }
                }}
              >
                <img src="/assets/images/ws-badge-fuel.png" alt="Fuel Economy Badge" className="w-full h-auto" />
              </motion.div>

              {/* Floating Badge: MSRP (Middle Left) */}
              <motion.div 
                className="absolute top-[35%] -left-16 z-20 w-[40%]"
                initial={{ x: -20, opacity: 0 }}
                animate={{ 
                  x: [0, 8, 0],
                  opacity: 1
                }}
                transition={{ 
                  x: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  },
                  opacity: { delay: 0.8, duration: 0.5 }
                }}
              >
                <img src="/assets/images/ws-badge-msrp.png" alt="MSRP Badge" className="w-full h-auto" />
              </motion.div>

              {/* Floating Badge: Total Price (Bottom Left) */}
              <motion.div 
                className="absolute -bottom-10 -left-6 z-20 w-[48%]"
                initial={{ y: -20, opacity: 0 }}
                animate={{ 
                  y: [0, 12, 0],
                  opacity: 1
                }}
                transition={{ 
                  y: {
                    duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5
                  },
                  opacity: { delay: 1.4, duration: 0.5 }
                }}
              >
                <img src="/assets/images/ws-badge-price.png" alt="Total Price Badge" className="w-full h-auto" />
              </motion.div>

              {/* Floating Badge: Safety (Bottom Right) */}
              <motion.div 
                className="absolute -bottom-12 -right-8 z-20 w-[50%]"
                initial={{ y: -20, opacity: 0 }}
                animate={{ 
                  y: [0, -10, 0],
                  opacity: 1
                }}
                transition={{ 
                  y: {
                    duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2
                  },
                  opacity: { delay: 1.2, duration: 0.5 }
                }}
              >
                <img src="/assets/images/ws-badge-safety.png" alt="Safety Ratings Badge" className="w-full h-auto" />
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export function WhyWindowStickersMatter() {
  const reasons = [
    {
      title: "Transparency Drives Decisions",
      desc: "92%+ of buyers use the information online compared to a salesperson."
    },
    {
      title: "Buyers want Confidence",
      desc: "60% of used car buyers are first-time buyers and spend more time researching."
    },
    {
      title: "Buyers Want it Quick",
      desc: "Used buyers spend 40% more time looking up each car than new buyers due to different specs."
    }
  ]

  return (
    <section className="py-24 bg-light-bg">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">Why Window Stickers Matter</h2>
          <p className="text-lg text-text-secondary">Window stickers can help make informed decisions, build buyers’ trust, and close deals faster</p>
        </FadeIn>
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div variants={fadeUpVariant} key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-card-border text-center">
              <h3 className="text-xl font-bold text-primary-navy mb-4">{reason.title}</h3>
              <p className="text-text-secondary">{reason.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export function WhatIsWindowSticker() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <FadeIn direction="down"><h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-6 text-center">What is a Window Sticker on a Vehicle?</h2></FadeIn>
        <div className="space-y-4 text-lg text-text-secondary">
          <FadeIn direction="up" delay={0.2}><p>A window sticker is the official label that every new car gets from the factory. You’ve probably seen these white and black stickers on car windows at dealerships. They’re also called Monroney labels, named after a senator who made them required by law back in 1958.</p></FadeIn>
          <FadeIn direction="up" delay={0.3}><p>The sticker shows everything about the car. You’ll see the price, the features, the gas mileage, and the safety scores. It tells you what color the car is, inside and out. It lists every single extra feature that came with the vehicle.</p></FadeIn>
        </div>
      </div>
    </section>
  )
}

export function WhatInfoOnSticker() {
  const sections = [
    {
      title: "Vehicle Description",
      desc: "This section identifies your exact car by telling you what kind of vehicle it is and when it was made.",
      items: [
        { name: "Year, Make, and Model", desc: "Shows the production year, manufacturer’s name, and specific model of the vehicle." },
        { name: "Body Style and Trim Level", desc: "Tells if it’s a sedan, SUV, or truck, plus the version, like LX or Sport." },
        { name: "VIN Number", desc: "The unique 17-character code that identifies only the specific car, like a fingerprint for vehicles." }
      ]
    },
    {
      title: "Optional Equipment and Packages",
      desc: "Lists all the extra features and upgrades added to the car beyond the basic standard equipment.",
      items: [
        { name: "Factory Packages", desc: "Groups of features bundled together, like a technology package with navigation and a backup camera included." },
        { name: "Individual Add-on Features", desc: "Single upgrades bought separately, such as a sunroof, upgraded wheels, or a towing hitch for trucks." },
        { name: "Trim Level Additions", desc: "Special features that come with higher trim levels, like leather seats in premium models." }
      ]
    },
    {
      title: "Interior Colors",
      desc: "Describe what colors you see inside the car, from the seats to the dashboard trim pieces.",
      items: [
        { name: "Color Code", desc: "This shows the exact color and shade used for the interior, helpful for matching repairs later." },
        { name: "Upholstery Material", desc: "States if seats are cloth, leather, vinyl, or synthetic materials with specific texture and quality." }
      ]
    },
    {
      title: "Exterior Color",
      desc: "Shows the official paint color name and type used on the outside of your vehicle’s body.",
      items: [
        { name: "Paint Type and Code", desc: "It identifies whether it’s solid, metallic, or pearl paint, useful for accurate painting when restoring a vehicle." },
        { name: "Finish Type", desc: "Tells if the paint is matte, glossy, or has special effects like sparkles or color shifts." }
      ]
    },
    {
      title: "MSRP (Manufacturer Suggested Retail Price)",
      desc: "The price the carmaker recommends dealers charge for the vehicle when selling it brand new.",
      items: [
        { name: "Standard Equipment Cost", desc: "The base price covering all features that come automatically with every car of this model." },
        { name: "Cost of Factory Options and Packages", desc: "Shows how much each extra feature or package adds to the base price of the vehicle." }
      ]
    },
    {
      title: "NHTSA Safety Ratings",
      desc: "Government crash test results showing how well the car protects people during accidents using star ratings.",
      items: [
        { name: "Overall Safety Rating", desc: "A single score from one to five stars showing the car’s general safety performance combined." },
        { name: "Crash Test Scores", desc: "Separate ratings for front crashes, side crashes, and rollover tests showing protection in each type." }
      ]
    },
    {
      title: "Shipping Charges",
      desc: "The fee for transporting the vehicle from the factory where it was built to the dealership.",
      items: [
        { name: "Factory Delivery Fee", desc: "Also called destination charge, this covers gas, transport trucks, and handling to ship your car." },
        { name: "Total Vehicle Price", desc: "The complete cost adding together the base price, all options, packages, and delivery fees combined." }
      ]
    },
    {
      title: "Base Price",
      desc: "Starting cost for the car with only standard features before adding any optional equipment or packages.",
      items: [
        { name: "MSRP (Manufacturer Suggested Retail Price)", desc: "The suggested retail price for the base model before any extras, packages, or fees get added." },
        { name: "Options and Packages", desc: "Combined cost of all extra features, upgrades, and package bundles you chose beyond standard equipment." },
        { name: "Destination Charge", desc: "The shipping fee added to transport the vehicle from the factory to your local car dealership." }
      ]
    },
    {
      title: "Mechanical Features",
      desc: "Details about the parts that make the car move, including the engine, transmission, and drive system.",
      items: [
        { name: "Engine Specifications", desc: "Engine size, horsepower, fuel type needed, and cylinder count that determines power and performance levels." },
        { name: "Transmission", desc: "Whether the car shifts gears automatically or manually, plus the number of speeds it has." },
        { name: "Drivetrain Layout", desc: "Shows if power goes to front wheels, rear wheels, or all four wheels for traction." }
      ]
    },
    {
      title: "Exterior Features",
      desc: "Everything on the outside of the car, from body parts to lights that help you see.",
      items: [
        { name: "Body and Trim Elements", desc: "Bumpers, grilles, mirrors, running boards, roof rails, and decorative chrome or plastic trim pieces included." },
        { name: "Lighting and Visibility", desc: "Headlight types, fog lights, daytime running lights, turn signals, and features helping you see better." }
      ]
    },
    {
      title: "Interior Features",
      desc: "What you find inside the cabin, including seats, comfort options, and all the technology systems.",
      items: [
        { name: "Seating and Adjustability", desc: "Seat material, number of seats, power adjustments, heating, cooling, and memory settings for driver comfort." },
        { name: "Cabin Technology", desc: "Radio, speakers, touchscreen, navigation, smartphone connections, USB ports, and voice controls for entertainment and convenience." }
      ]
    },
    {
      title: "Fuel Economy",
      desc: "Know how many miles the car can travel on one gallon of gas in different driving situations.",
      items: [
        { name: "MPG (City, Highway, and Combined)", desc: "Miles per gallon in stop-and-go traffic, on freeways, and the average of both driving types." },
        { name: "Estimated Annual Fuel Cost", desc: "How much money you’ll probably spend on gas in one year based on average driving habits." },
        { name: "Five-Year Fuel Cost Savings", desc: "Comparison showing how much money you save or spend versus the average new car over time." }
      ]
    },
    {
      title: "Safety and Security Features",
      desc: "Equipment protecting you from crashes and theft, including airbags, computer systems, and alarm features.",
      items: [
        { name: "Safety Features", desc: "Airbags, anti-lock brakes, stability control, automatic braking, lane warnings, and crash prevention technology included." },
        { name: "Security Features", desc: "Alarm systems, engine immobilizers, door locks, tracking systems, and features preventing theft of your vehicle." }
      ]
    },
    {
      title: "Warranty Information",
      desc: "Promises from the carmaker to fix problems for free during certain time periods or mileage limits.",
      items: [
        { name: "Basic and Powertrain Warranty", desc: "Coverage for most parts and major engine or transmission repairs, usually lasting three to five years." },
        { name: "Additional Warranty Coverage", desc: "Extra protection for rust, emissions parts, hybrid batteries, or other specific components beyond basic coverage." }
      ]
    },
    {
      title: "Greenhouse Gas Rating",
      desc: "Scores showing how much pollution the car produces and its impact on air quality and climate.",
      items: [
        { name: "CO2 Emissions Rating", desc: "Scale from one to ten rating carbon dioxide output, with ten being the cleanest for the environment." },
        { name: "Environmental Impact Notes", desc: "Information about smog production, comparison to other vehicles, and any special environmental certifications or features." }
      ]
    }
  ]

  return (
    <section className="py-24 bg-light-bg">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">What Information Is on a Car Window Sticker?</h2>
          <p className="text-lg text-text-secondary">A car window sticker tells you everything about a vehicle when it was brand new at the dealership. Here’s the information you would see:</p>
        </FadeIn>
        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, i) => (
            <motion.div variants={fadeUpVariant} key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-card-border">
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
          <Button className="h-12 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-base">Get Your Window Sticker</Button>
          <Button variant="outline" className="h-12 px-8 rounded-lg font-semibold text-base border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white">View Sample</Button>
        </FadeIn>
      </div>
    </section>
  )
}
