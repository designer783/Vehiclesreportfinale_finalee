import { Button } from "@/src/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "./ui/FadeIn"

export function WhatInfoProvided() {
  const sections = [
    {
      title: "Vehicle Specifications",
      desc: "Our free license plate lookup shows you exactly what kind of vehicle you’re dealing with right from the start.",
      items: [
        { title: "Make, Model, and Year Information", desc: "The search tells you the manufacturer, specific model name, and the year the factory built that vehicle." },
        { title: "Engine Type and Transmission Details", desc: "You’ll discover what kind of engine powers the car and whether it has automatic or manual transmission features." }
      ]
    },
    {
      title: "Vehicle Usage",
      desc: "Understanding how someone used a vehicle before helps you know what condition to expect when you see it.",
      items: [
        { title: "Personal vs. Commercial Use", desc: "The license plate history report shows whether someone drove the car for family trips or used it for business deliveries daily." },
        { title: "Taxi, Rental, or Fleet History", desc: "You’ll learn if the vehicle worked as a taxi, rental car, or fleet vehicle with multiple drivers previously." }
      ]
    },
    {
      title: "Ownership Records",
      desc: "Knowing who owned a car and how often it changed hands tells you a lot about its story.",
      items: [
        { title: "Number of Previous Owners", desc: "The lookup reveals exactly how many different people or companies owned this vehicle throughout its entire lifetime." },
        { title: "Ownership Duration and Transfer Dates", desc: "You’ll see how long each owner kept the car and when they sold it to someone else." }
      ]
    },
    {
      title: "Sales and Auction Records",
      desc: "See if a car was ever sold at auction, including condition photos, sale dates, locations, and recorded prices.",
      items: [
        { title: "Auction Records and Photos", desc: "If available you may see auction data and photos showing the car’s visible condition and any damage recorded." },
        { title: "Sales Listing History", desc: "Find out what the car sold for, and the type of sale (private, dealership or auction), which helps understand its market value over time." }
      ]
    },
    {
      title: "Title Brand Check",
      desc: "The title tells you if something serious happened that legally changed how people view this vehicle forever.",
      items: [
        { title: "Salvage, Rebuilt, or Clean Title", desc: "You’ll discover if insurance companies declared the car totaled, if someone rebuilt it, or if nothing bad happened." },
        { title: "Flood, Hail, or Fire Damage Brands", desc: "The reverse license plate search reveals if natural disasters like floods, hailstorms, or fires damaged the vehicle in the past." }
      ]
    },
    {
      title: "Mileage History",
      desc: "Tracking how many miles a car traveled over the years helps you spot odometer fraud and unusual patterns.",
      items: [
        { title: "Recorded Odometer Readings", desc: "You’ll see official mileage numbers recorded during inspections, sales, and registration renewals throughout the vehicle’s life." },
        { title: "Mileage Inconsistencies and Rollback Detection", desc: "The report flags any suspicious jumps backward in mileage that might mean someone tampered with the odometer dishonestly." }
      ]
    },
    {
      title: "Accident Records",
      desc: "Knowing about past crashes helps you understand if the car suffered damage that might cause problems later on.",
      items: [
        { title: "Minor and Major Collision Reports", desc: "The license plate number lookup shows both small fender benders and serious crashes that required extensive repair work on the vehicle." },
        { title: "Airbag Deployment History", desc: "You’ll learn if the airbags ever deployed during an accident, which means the crash was pretty serious." }
      ]
    },
    {
      title: "Theft Records",
      desc: "Finding out if thieves ever stole a vehicle protects you from buying someone else’s stolen property accidentally.",
      items: [
        { title: "Stolen Vehicle Database Check", desc: "The search compares the plate against national databases tracking cars that police reported as stolen across America." },
        { title: "Recovery Status and Details", desc: "You’ll see if the police recovered the stolen vehicle and what condition it was in when they found it." }
      ]
    },
    {
      title: "Damage Verification",
      desc: "Understanding all the damage a vehicle experienced helps you know what repairs it needed throughout its entire existence.",
      items: [
        { title: "Structural and Frame Damage", desc: "The report reveals if the car’s main frame or structure has been bent, which affects safety and value significantly." },
        { title: "Paint and Body Work History", desc: "You’ll discover areas where repair shops fixed dents, replaced panels, or repainted sections of the vehicle’s exterior." }
      ]
    },
    {
      title: "Lien and Loan Records",
      desc: "Checking for liens tells you if someone still owes money on the car before you buy it yourself.",
      items: [
        { title: "Active Liens and Financial Holds", desc: "The lookup shows if banks or lenders have legal claims on the vehicle until someone pays off loans." },
        { title: "Lien Release Dates", desc: "You’ll see when previous owners paid off their car loans and when lenders removed their financial holds completely." }
      ]
    },
    {
      title: "Service and Repair History",
      desc: "Maintenance records show you if the previous owner took good care of the vehicle or ignored important repairs.",
      items: [
        { title: "Scheduled Maintenance Records", desc: "The report includes oil changes, tire rotations, and other regular service visits that the owner completed on time and properly." },
        { title: "Major Repairs and Part Replacements", desc: "You’ll learn about big fixes like engine work, transmission replacements, or other expensive repairs the car needs." }
      ]
    },
    {
      title: "Open Recall Check",
      desc: "Recalls mean the manufacturer found dangerous problems and needs to fix them for free at their dealerships immediately.",
      items: [
        { title: "Current Safety Recalls", desc: "The lookup reveals any unfixed recalls for safety issues like faulty brakes, dangerous airbags, or steering problems right now." },
        { title: "Recall Completion Status", desc: "You’ll see which recalls the previous owner already completed and which ones still need attention from the dealer." }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            What Information Does a License Plate Search Provide?
          </h2>
          <p className="text-lg text-text-secondary">
            A license plate lookup shows everything important about a vehicle’s past, present, and potential problems waiting ahead. Here’s what you’ll find:
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
        
        <FadeIn direction="up" delay={0.2} className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Button className="h-14 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Lookup License Plate
          </Button>
          <Button variant="outline" className="h-14 px-8 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-lg font-semibold text-lg transition-all">
            View Sample Report
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
