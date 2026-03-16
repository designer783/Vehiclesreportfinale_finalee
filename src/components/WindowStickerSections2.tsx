import { Check, X, ArrowRight, Users, Banknote } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Link } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "./ui/FadeIn"

export function WindowStickerBenefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">How Buyers and Sellers Benefit from a Window Sticker Lookup?</h2>
          <p className="text-lg text-text-secondary">Window sticker lookups help everyone in the car-buying process. Buyers get transparency and verification, while sellers build trust and close deals faster.</p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn direction="left" className="bg-light-bg rounded-2xl p-8 border border-card-border">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                <Users className="h-5 w-5" />
              </div>
              Buyers
            </h3>
            <p className="text-text-secondary mb-6">Getting the original window sticker protects you from overpaying and helps verify what you’re buying.</p>
            <ul className="space-y-6">
              <li>
                <h4 className="font-bold text-primary-navy">Verify the Vehicle's Original Equipment and Features</h4>
                <p className="text-sm text-text-secondary mt-1">Make sure the car has the factory options the seller claims. Spot aftermarket parts replacing original equipment before you buy.</p>
              </li>
              <li>
                <h4 className="font-bold text-primary-navy">Confirm Fair Market Value and Pricing</h4>
                <p className="text-sm text-text-secondary mt-1">See what the car originally cost new. Compare the current asking price against the original MSRP and included options for negotiation power.</p>
              </li>
              <li>
                <h4 className="font-bold text-primary-navy">Avoid Buying Misrepresented Vehicles</h4>
                <p className="text-sm text-text-secondary mt-1">Catch sellers lying about trim levels, packages, or features. The window sticker shows exactly the equipment that left the factory with the car, preventing fraud.</p>
              </li>
            </ul>
          </FadeIn>
          <FadeIn direction="right" className="bg-light-bg rounded-2xl p-8 border border-card-border">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-navy/10 flex items-center justify-center text-primary-navy">
                <Banknote className="h-5 w-5" />
              </div>
              Sellers and Dealers
            </h3>
            <p className="text-text-secondary mb-6">Providing window stickers builds buyer confidence, justifies your asking price, and helps you sell vehicles faster.</p>
            <ul className="space-y-6">
              <li>
                <h4 className="font-bold text-primary-navy">Gain Buyer’s Trust</h4>
                <p className="text-sm text-text-secondary mt-1">Show buyers you have nothing to hide. Providing factory details upfront proves honesty and speeds up the sales process significantly.</p>
              </li>
              <li>
                <h4 className="font-bold text-primary-navy">Justify Premium Pricing</h4>
                <p className="text-sm text-text-secondary mt-1">Prove your car has valuable factory options worth paying extra for. Window stickers highlight packages buyers might overlook during inspection.</p>
              </li>
              <li>
                <h4 className="font-bold text-primary-navy">Close Deals Faster</h4>
                <p className="text-sm text-text-secondary mt-1">Serious buyers appreciate having all the information ready. Window stickers answer questions immediately, reducing back-and-forth and eliminating buyer hesitation.</p>
              </li>
            </ul>
          </FadeIn>
        </div>
        <FadeIn direction="up" delay={0.2} className="mt-12 text-center">
          <Button className="h-12 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-base">Lookup Window Sticker</Button>
        </FadeIn>
      </div>
    </section>
  )
}

export function WindowStickerVsMonroney() {
  const rows = [
    { label: "Vehicle specifications", monroney: true, vr: true },
    { label: "MSRP", monroney: true, vr: true },
    { label: "Mechanical features", monroney: true, vr: true },
    { label: "Interior & exterior features", monroney: true, vr: true },
    { label: "Detailed interior & exterior", monroney: false, vr: true },
    { label: "Exterior color", monroney: true, vr: true },
    { label: "Interior color", monroney: false, vr: true },
    { label: "Safety and security", monroney: true, vr: true },
    { label: "Options & packages", monroney: true, vr: true },
    { label: "Fuel economy", monroney: true, vr: true },
    { label: "Warranty information", monroney: false, vr: true },
    { label: "NHTSA safety ratings", monroney: true, vr: true },
    { label: "Detailed price breakdown", monroney: false, vr: true },
    { label: "QR code", monroney: true, vr: true },
    { label: "Customization option", monroney: false, vr: true },
    { label: "License plate decoding", monroney: false, vr: true },
    { label: "Classic car support", monroney: false, vr: true },
  ]
  return (
    <section className="py-24 bg-light-bg">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">Vehicles Report Window Sticker Vs Monroney Label</h2>
          <p className="text-lg text-text-secondary">Our window sticker by VIN shows everything the original Monroney label had, but we add extra information you need to make confident buying and selling decisions. Here’s how the two stickers compare:</p>
        </FadeIn>
        <FadeIn direction="up" delay={0.2} className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-card-border overflow-hidden">
          <div className="grid grid-cols-3 bg-light-bg border-b border-card-border font-bold text-primary-navy text-sm md:text-base">
            <div className="p-4 md:p-6">Information</div>
            <div className="p-4 md:p-6 text-center border-l border-card-border">Monroney Label</div>
            <div className="p-4 md:p-6 text-center border-l border-card-border bg-primary-accent/5 text-primary-accent">Vehicles Report Window Sticker</div>
          </div>
          {rows.map((row, i) => (
            <div key={i} className="grid grid-cols-3 border-b border-card-border last:border-0 text-sm md:text-base">
              <div className="p-4 md:p-6 text-text-secondary">{row.label}</div>
              <div className="p-4 md:p-6 text-center border-l border-card-border flex items-center justify-center">
                {row.monroney ? <Check className="h-5 w-5 text-verification" /> : <X className="h-5 w-5 text-red-400" />}
              </div>
              <div className="p-4 md:p-6 text-center border-l border-card-border bg-primary-accent/5 flex items-center justify-center">
                {row.vr ? <Check className="h-5 w-5 text-primary-accent" /> : <X className="h-5 w-5 text-red-400" />}
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  )
}

export function HowToGetWindowSticker() {
  const steps = [
    {
      title: "Enter the VIN",
      description: "Type the 17-digit VIN number into the form at the top of this page. You can also search by license plate or by entering the car’s year, make, and model.",
      step: "1"
    },
    {
      title: "Click \"Get Window Sticker\"",
      description: "Click the button to search the database for your vehicle's information. A preview page appears showing basic details like year, make, model, series, drive type, and country of origin for free.",
      step: "2"
    },
    {
      title: "View & Download Window Sticker",
      description: "Pay to view and download your car window sticker PDF with all original factory information included. The sticker shows everything just like it appeared on the dealership window when the car was brand new.",
      step: "3"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">How to Get a Window Sticker for any Vehicle?</h2>
          <p className="text-lg text-text-secondary">Getting a car window sticker takes just a few simple steps using our tool.. Follow these simple steps to get yours:</p>
        </FadeIn>
        <StaggerContainer className="grid gap-8 md:grid-cols-3 relative">
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-light-bg -z-10"></div>
          {steps.map((step, index) => (
            <motion.div variants={fadeUpVariant} key={index} className="flex flex-col items-center text-center relative">
              <div className="w-24 h-24 rounded-full bg-light-bg flex items-center justify-center mb-6 border-4 border-white shadow-sm relative text-3xl font-bold text-primary-navy font-heading">
                {step.step}
              </div>
              <h3 className="text-xl font-bold font-heading text-primary-navy mb-3">{step.title}</h3>
              <p className="text-text-secondary max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
        <FadeIn direction="up" delay={0.2} className="mt-12 text-center">
          <Button className="h-12 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-base">Get Window Sticker by VIN</Button>
        </FadeIn>
      </div>
    </section>
  )
}

export function SampleWindowStickers() {
  const samples = [
    { name: "2017 TACOMA TRD OFF-ROAD", vin: "3TMCZ5AN2HM052507", ext: "BLACK", int: "GREY" },
    { name: "2006 F-150 SUPERCAB 4-WD", vin: "1FTPX14576FB73459", ext: "PEARL WHIT", int: "BLACK" },
    { name: "2016 CR-V 5DR 2WD XL", vin: "55SWF6EBXGU110456", ext: "PEARL WHITE", int: "BLACK" }
  ]
  return (
    <section className="py-24 bg-light-bg">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">Sample Window Stickers</h2>
          <p className="text-lg text-text-secondary">See exactly what a window sticker looks like before you look up one</p>
        </FadeIn>
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {samples.map((sample, i) => (
            <motion.div variants={fadeUpVariant} key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-card-border text-center flex flex-col items-center">
              <div className="w-full h-48 bg-gray-200 rounded-xl mb-6 overflow-hidden">
                <img src={`https://picsum.photos/seed/sample${i}/400/300`} alt={sample.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-bold text-lg text-primary-navy mb-2">{sample.name}</h3>
              <p className="text-sm text-text-secondary mb-1">VIN: {sample.vin}</p>
              <p className="text-sm text-text-secondary mb-1">EXTERIOR: {sample.ext}</p>
              <p className="text-sm text-text-secondary mb-6">INTERIOR: {sample.int}</p>
              <Button variant="outline" className="w-full border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white">Click Here Sample</Button>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export function WindowStickerAdditionalTools() {
  const tools = [
    { title: "VIN Decoder", desc: "Instantly decode VIN numbers for free. Confirm the year, model, vehicle type, engine size, capacity, and more.", link: "Decode VIN", href: "/vin-decoder" },
    { title: "VIN Check", desc: "Get a complete VIN report showing accidents, thefts, previous owners, title problems, liens, and more.", link: "Check VIN", href: "/vin-check" },
    { title: "Classic Window Stickers", desc: "Get detailed build information for older vehicles from the 1970s, 1980s, and early 1990s.", link: "Get Window Sticker", href: "/classic-window-stickers" },
    { title: "License Plate Lookup", desc: "Use the tool to search for vehicle information using the license plate number instead of the VIN.", link: "Lookup License Plate", href: "/license-plate" },
  ]
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">Want More Vehicle Information? Check Out These Tools</h2>
          <p className="text-lg text-text-secondary">We provide other tools to help you find more information about any car’s specs, build details, and history:</p>
        </FadeIn>
        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div variants={fadeUpVariant} key={i} className="bg-light-bg rounded-2xl p-8 border border-card-border flex flex-col items-start">
              <h3 className="text-xl font-bold text-primary-navy mb-3">{tool.title}</h3>
              <p className="text-text-secondary mb-6 flex-1">{tool.desc}</p>
              <Link to={tool.href} className="text-primary-accent font-semibold hover:text-hover-accent flex items-center gap-2">
                {tool.link} <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export function SupportedMakes() {
  const makes = [
    "Acura", "Alfa Romeo", "AM General", "AMC", "Aston Martin", "Austin Healey", "Audi", "Avanti Motors", "BMW", "Bricklin", "Bentley", "Bugatti", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Daihatsu", "Daewoo", "Datsun", "Dodge", "Eagle", "Ferrari", "Fiat", "Freightliner", "Genesis", "Geo", "Ford", "Fisker", "GMC", "Harley-Davidson", "Hino", "Honda", "Hummer", "Hyundai", "Infiniti", "International", "Isuzu", "Jaguar", "Jeep", "Kawasaki", "Kenworth", "Koenigsegg", "Kia", "Lamborghini", "Land Rover", "Lexus", "Lincoln", "Lotus", "Maserati", "Maybach", "Mazda", "McLaren", "Mercedes-Benz", "MG", "Mercury", "Mini", "Mitsubishi", "Nissan", "Panoz", "Peterbilt", "Plymouth", "Polestar", "Oldsmobile", "Pontiac", "Porsche", "RAM", "Rolls-Royce", "Saleen", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Triumph", "Volkswagen", "Volvo"
  ]
  return (
    <section className="py-24 bg-light-bg">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <FadeIn direction="down"><h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-6">Supported Makes for Window Sticker Lookup</h2></FadeIn>
        <FadeIn direction="up" delay={0.2}><p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto">We support window sticker lookups for all major vehicle manufacturers. Find original factory specs for these popular makes and many more.</p></FadeIn>
        <StaggerContainer className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {makes.map((make, i) => (
            <motion.div variants={fadeUpVariant} key={i} className="bg-white px-4 py-2 rounded-lg shadow-sm border border-card-border text-primary-navy font-medium text-sm">
              {make}
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export function WindowStickerCta() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up" className="p-12 md:p-20 text-center relative overflow-hidden border border-primary-accent/10 bg-slate-900 rounded-3xl shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-accent/20 to-purple-600/20 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">Lookup Vehicle Options and Original Build Specifications</h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">If you’re buying or selling, the window sticker gives you facts. Avoid guessing or wondering if the seller is telling the truth. Get answers about whether a car really has that premium package or upgraded engine.</p>
            <Button className="h-14 px-10 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">Lookup VIN Now</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export function WindowStickerFaq() {
  const faqs = [
    { q: "Can you look up a window sticker with VIN?", a: "Yes, you can look up a window sticker with the 17-digit VIN number. The sheet shows the original MSRP, options, EPA Fuel economy ratings, NHTSA safety ratings, and more." },
    { q: "Can I find my window sticker online?", a: "Yes, our tool allows you to instantly retrieve and download a digital copy of your vehicle's original window sticker using just the VIN." },
    { q: "Does Carfax show an original window sticker?", a: "Carfax reports provide vehicle history but typically do not include the original factory window sticker with complete build options and MSRP." },
    { q: "Can you get a build sheet from a VIN?", a: "Yes, our window sticker tool essentially provides the build sheet information, detailing all factory options, packages, and standard equipment." },
    { q: "Is this the same sticker that was on my car when new?", a: "Yes, the information we provide is a digital recreation of the exact Monroney label (window sticker) that was on the vehicle when it was sold new." },
    { q: "What's the difference between a window sticker and a vehicle history report?", a: "A window sticker shows what the car was like when it was brand new (options, MSRP, specs). A vehicle history report shows what happened to the car after it was sold (accidents, owners, service)." }
  ]
  
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <FadeIn direction="down"><h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-12 text-center">Frequently Asked Questions About Window Sticker by VIN</h2></FadeIn>
        <StaggerContainer className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div variants={fadeUpVariant} key={i} className="bg-light-bg rounded-xl border border-card-border overflow-hidden">
              <button 
                className="w-full px-6 py-4 text-left font-semibold text-primary-navy flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <span className="text-primary-accent text-xl">{openIndex === i ? '-' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-text-secondary">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
