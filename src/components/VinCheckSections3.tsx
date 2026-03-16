import { ArrowRight } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Link } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant, scaleInVariant } from "./ui/FadeIn"

export function VinCheckAdditionalTools() {
  const tools = [
    { title: "VIN Decoder", desc: "Decode any VIN number for free. Verify the year, make, model, engine, transmission, and more", link: "Decode VIN", href: "/vin-decoder" },
    { title: "Window Sticker", desc: "Get a copy of the original window sticker. Verify car options, MSRP, equipment, colors, and more.", link: "Lookup Window Sticker by VIN", href: "/window-stickers" },
    { title: "License Plate Lookup", desc: "If you don’t have the VIN, switch to our license plate search tool to access the vehicle history.", link: "Search License Plate", href: "/license-plate" },
    { title: "Classic Window Stickers", desc: "Order classic build sheets showing original equipment, pricing, and specs for pre-1981 cars.", link: "Get Classic Window Sticker", href: "/classic-window-stickers" },
  ]
  return (
    <section className="py-24 bg-light-bg">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">More Helpful Vehicle Research Tools</h2>
          <p className="text-lg text-text-secondary">Our service is not only limited to VIN checks, but we also provide additional research tools that help you confirm vehicle details thoroughly.</p>
        </FadeIn>
        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div variants={fadeUpVariant} key={i} className="bg-white rounded-2xl p-8 border border-card-border flex flex-col items-start shadow-sm hover:shadow-custom hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-xl font-bold text-primary-navy mb-3 group-hover:text-primary-accent transition-colors">{tool.title}</h3>
              <p className="text-text-secondary mb-6 flex-1">{tool.desc}</p>
              <Link to={tool.href} className="text-primary-accent font-semibold hover:text-hover-accent flex items-center gap-2 group-hover:translate-x-1 transition-all">
                {tool.link} <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export function VinCheckCta() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up" className="p-12 md:p-20 text-center relative overflow-hidden border border-primary-accent/10 bg-slate-900 rounded-3xl shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-accent/20 to-purple-600/20 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">Run a VIN Check Today</h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">Don’t risk thousands of dollars on a used car with hidden problems lurking in its past. Enter the VIN right now to find what the seller isn’t telling you before it’s too late.</p>
            <Button className="h-14 px-10 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">Check Car History</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export function VinCheckFaq() {
  const faqs = [
    { q: "What is a VIN number lookup?", a: "A VIN number lookup searches databases across North America to compile history for a specific vehicle, including accidents, title information, ownership records, theft status, recalls, and service history pulled from both private and government registries." },
    { q: "Is there a free vehicle history report?", a: "We offer a free VIN decoder that provides basic specifications. For a complete history including accidents and title issues, a full report requires a purchase." },
    { q: "What does a VIN number tell you?", a: "A VIN tells you the manufacturer, year, make, model, engine type, and assembly plant. When used in a history check, it unlocks the car's entire recorded past." },
    { q: "How often should I check a VIN?", a: "You should always check a VIN before purchasing any used vehicle. It's the most important step in the car buying process." },
    { q: "How to check a VIN number for free?", a: "You can use our free VIN decoder tool on this site to instantly retrieve basic vehicle specifications at no cost." },
    { q: "Will a VIN check lower the car's value?", a: "No, a VIN check itself does not lower a car's value. However, it may reveal hidden issues (like accidents or salvage titles) that indicate the car is worth less than the seller claims." },
    { q: "Can I look up my vehicle specs with the VIN?", a: "Yes, our free VIN decoder provides a detailed breakdown of your vehicle's original factory specifications, engine details, and standard equipment." }
  ]
  
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <FadeIn direction="down" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">Frequently Asked Questions About VIN Check</h2>
        </FadeIn>
        <StaggerContainer className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div variants={fadeUpVariant} key={i} className="bg-light-bg rounded-xl border border-card-border overflow-hidden">
              <button 
                className="w-full px-6 py-4 text-left font-semibold text-primary-navy flex justify-between items-center hover:bg-slate-50 transition-colors group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="group-hover:text-primary-accent transition-colors">{faq.q}</span>
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
