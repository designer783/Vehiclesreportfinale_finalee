import { Check, X, ArrowRight } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Link } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant, scaleInVariant } from "@/src/components/ui/FadeIn"

export function ComparisonTable() {
  const rows = [
    { label: "Year, make & model", free: true, full: true },
    { label: "Engine type & size", free: true, full: true },
    { label: "Transmission", free: true, full: true },
    { label: "Body Type", free: true, full: true },
    { label: "Drive type", free: true, full: true },
    { label: "Fuel type", free: true, full: true },
    { label: "Doors", free: true, full: true },
    { label: "Horsepower & torque", free: true, full: true },
    { label: "MSRP", free: true, full: true },
    { label: "Vehicle Usage", free: false, full: true },
    { label: "Ownership History", free: false, full: true },
    { label: "Title and condition", free: false, full: true },
    { label: "Accident records", free: false, full: true },
    { label: "Mileage History", free: false, full: true },
    { label: "Theft records", free: false, full: true },
    { label: "Lien and loan records", free: false, full: true },
    { label: "Sales history", free: false, full: true },
    { label: "Auction records", free: false, full: true },
  ]
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">Free VIN Decoder vs. Full Vehicle History Report</h2>
          <p className="text-lg text-text-secondary">Like many websites out there, we offer a free VIN check, which only scratches the surface of a vehicle’s history. Here, we compared what you get for free and what you can access by making a purchase:</p>
        </FadeIn>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-card-border overflow-hidden">
          <div className="grid grid-cols-3 bg-light-bg border-b border-card-border font-bold text-primary-navy text-sm md:text-base">
            <div className="p-4 md:p-6">Information/Records</div>
            <div className="p-4 md:p-6 text-center border-l border-card-border">Free VIN Check</div>
            <div className="p-4 md:p-6 text-center border-l border-card-border bg-primary-accent/5 text-primary-accent">Full VIN Report</div>
          </div>
          <StaggerContainer>
            {rows.map((row, i) => (
              <motion.div variants={fadeUpVariant} key={i} className="grid grid-cols-3 border-b border-card-border last:border-0 text-sm md:text-base hover:bg-slate-50 transition-colors">
                <div className="p-4 md:p-6 text-text-secondary">{row.label}</div>
                <div className="p-4 md:p-6 text-center border-l border-card-border flex items-center justify-center">
                  {row.free ? <Check className="h-5 w-5 text-verification" /> : <X className="h-5 w-5 text-red-400" />}
                </div>
                <div className="p-4 md:p-6 text-center border-l border-card-border bg-primary-accent/5 flex items-center justify-center">
                  {row.full ? <Check className="h-5 w-5 text-primary-accent" /> : <X className="h-5 w-5 text-red-400" />}
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
        <div className="mt-12 text-center">
          <Button className="h-12 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-base">Get Full VIN Report</Button>
        </div>
      </div>
    </section>
  )
}

export function VehicleTypes() {
  const types = ["Cars", "SUVs", "Trucks", "Vans", "Motorcycles", "RVs and Motorhomes", "Classic", "Electric Vehicles"]
  return (
    <section className="py-24 bg-light-bg">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <FadeIn direction="down">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-6">What Vehicle Types Do We Cover?</h2>
          <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto">Our VIN check service supports all types of vehicles registered in the United States, including:</p>
        </FadeIn>
        <StaggerContainer className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {types.map((type, i) => (
            <motion.div variants={scaleInVariant} key={i} className="bg-white px-6 py-3 rounded-full shadow-sm border border-card-border text-primary-navy font-medium hover:border-primary-accent hover:text-primary-accent cursor-pointer transition-colors duration-300">
              {type}
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export function AdditionalTools() {
  const tools = [
    { title: "Window Sticker Lookup by VIN", desc: "See the original factory window sticker showing the car’s MSRP, installed options, features, colors, and specifications from when it was new.", link: "Get Window Sticker by VIN", href: "/window-stickers" },
    { title: "Free VIN Decoder", desc: "Instantly decode any VIN to reveal basic info like make, model, year, engine, and more. Use this to quickly verify a seller’s claims about the car.", link: "Decode VINs", href: "/vin-decoder" },
    { title: "License Plate Lookup", desc: "Search vehicle history by license plate lookup when you can’t easily access the VIN.", link: "Search License Plate", href: "/license-plate" },
    { title: "Classic Window Stickers", desc: "Recreate the original window sticker for classic and vintage cars made before 1981, and with shorter VINs.", link: "Get Classic Car Build Sheet", href: "/classic-window-stickers" },
  ]
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">Additional Tools & Services</h2>
          <p className="text-lg text-text-secondary">Beyond our comprehensive vehicle history reports, we offer other helpful tools to research used cars before you buy.</p>
        </FadeIn>
        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div variants={fadeUpVariant} key={i} className="bg-light-bg rounded-2xl p-8 border border-card-border flex flex-col items-start hover:shadow-custom hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-primary-navy mb-3 group-hover:text-primary-accent transition-colors">{tool.title}</h3>
              <p className="text-text-secondary mb-6 flex-1">{tool.desc}</p>
              <Link to={tool.href} className="text-primary-accent font-semibold hover:text-hover-accent flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                {tool.link} <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export function CtaSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="p-12 md:p-20 text-center relative overflow-hidden border border-primary-accent/10 bg-slate-900 rounded-3xl shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-accent/20 to-purple-600/20 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">Get Used Vehicle Reports: Don’t Take Chances</h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">Our reports keep helping thousands of people avoid bad cars and find great deals they can trust. Enter the VIN to protect yourself from costly mistakes that could haunt you for years.</p>
            <Button className="h-14 px-10 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">Find Vehicle History Now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FaqSection() {
  const faqs = [
    { q: "What is a vehicle history report?", a: "A vehicle history report is a comprehensive document showing a car’s complete past, including accidents, ownership changes, title status, service records, recalls, theft records, odometer readings, and more." },
    { q: "How do I check my car history?", a: "You can check your car history by entering the 17-digit VIN into our search tool. We will instantly pull records from multiple databases to generate a comprehensive report." },
    { q: "Can I get a car history check free tool?", a: "Yes, we offer a free VIN decoder that provides basic vehicle specifications. However, for a complete history including accidents and title issues, a full report is required." },
    { q: "What's the best car history report service?", a: "We provide one of the most comprehensive and affordable services on the market, combining data from NMVTIS, insurance companies, and other trusted sources." },
    { q: "How do I check if a car has been in an accident?", a: "Our full vehicle history report includes accident records, showing reported collisions, damage severity, and airbag deployment history." },
    { q: "What does a Vehicle history report show?", a: "It shows title history, accident records, odometer readings, ownership history, service records, theft records, open recalls, and lien information." },
    { q: "Do vehicle history reports show everything?", a: "While they are highly comprehensive, they rely on reported data. If an accident or repair was never reported to insurance or police, it may not appear." },
    { q: "What is a DMV record check?", a: "A DMV record check pulls information directly from state Department of Motor Vehicles databases to verify title status, registration history, and ownership." },
    { q: "Can I use a license plate instead of a VIN?", a: "Yes, our tool allows you to search by US License Plate and state if you don't have the VIN handy." },
    { q: "Is the Vehicles Report report the same as the Carfax report?", a: "We provide similar comprehensive data pulled from many of the same national databases, but often at a more affordable price point." }
  ]
  
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-light-bg">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <FadeIn direction="down">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-12 text-center">Frequently Asked Questions About Vehicle History Reports</h2>
        </FadeIn>
        <StaggerContainer className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div variants={fadeUpVariant} key={i} className="bg-white rounded-xl border border-card-border overflow-hidden">
              <button 
                className="w-full px-6 py-4 text-left font-semibold text-primary-navy flex justify-between items-center transition-colors hover:text-primary-accent"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <motion.span 
                  animate={{ rotate: openIndex === i ? 180 : 0 }} 
                  className="text-primary-accent text-xl"
                >
                  {openIndex === i ? '-' : '+'}
                </motion.span>
              </button>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-6 pb-4 text-text-secondary"
                >
                  {faq.a}
                </motion.div>
              )}
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export function BlogSection() {
  const posts = [
    { title: "Best Used Volvo to Buy in 2025", date: "May 26, 2025", comments: "No Comments", excerpt: "If you’re considering buying a used car, you’ve likely faced the common dilemma: reliability versus cost. Many worry about inheriting someone else’s problems and missing" },
    { title: "Car With a Lien: What It Means and Why It Matters?", date: "April 23, 2025", comments: "No Comments", excerpt: "Buying a used car can be an exciting way to save money, but it’s challenging. One of the most important things to check before finalizing" },
    { title: "Red Flags When Buying a Used Truck: What to Watch Out For", date: "April 21, 2025", comments: "No Comments", excerpt: "Buying a used truck can be an exciting experience—whether you’re looking for a reliable workhorse or a capable weekend warrior. But it’s important to approach" }
  ]
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">Latest Articles</h2>
        </FadeIn>
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div variants={fadeUpVariant} key={i} className="bg-light-bg rounded-2xl overflow-hidden border border-card-border group cursor-pointer hover:shadow-custom hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img src={`https://picsum.photos/seed/blog${i}/600/400`} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-text-tertiary mb-3">
                  <span>{post.date}</span>
                  <span>{post.comments}</span>
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-3 group-hover:text-primary-accent transition-colors">{post.title}</h3>
                <p className="text-text-secondary text-sm mb-4">{post.excerpt}...</p>
                <span className="text-primary-accent font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">Read More <ArrowRight className="h-4 w-4" /></span>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
