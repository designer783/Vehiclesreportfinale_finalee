import { Button } from "@/src/components/ui/button"
import { Link } from "react-router-dom"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/ui/accordion"
import { ArrowRight, Search, FileText, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant, scaleInVariant } from "./ui/FadeIn"

export function VinDecoderAdditionalTools() {
  const tools = [
    {
      title: "License Plate Lookup",
      desc: "Don’t have the VIN handy? Search any vehicle specs and history with the US license plate number.",
      linkText: "Lookup License Plate",
      href: "/license-plate",
      icon: <Search className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "Window Sticker Lookup",
      desc: "Get window stickers for any vehicle type, showing all the options, features, original price, and colors.",
      linkText: "Get Window Sticker by VIN",
      href: "/window-stickers",
      icon: <FileText className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "Classic Car Build Sheet by VIN",
      desc: "Find the build sheet for classic cars made before 1981. View the standard and optional equipment, and more.",
      linkText: "Get Classic Build Sheet",
      href: "/classic-window-stickers",
      icon: <Clock className="h-6 w-6 text-primary-accent" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            Don't Stop Here - Get More With These Tools
          </h2>
          <p className="text-lg text-text-secondary">
            Sometimes you don’t have the VIN handy, or you want even more information about a vehicle. We offer the following tools that help you research any cars easily:
          </p>
        </FadeIn>
        
        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div variants={fadeUpVariant} key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-card-border flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary-accent/10 flex items-center justify-center mb-6">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-primary-navy mb-3">{tool.title}</h3>
              <p className="text-text-secondary mb-6 flex-grow">{tool.desc}</p>
              <Link to={tool.href} className="text-primary-accent font-semibold flex items-center hover:text-hover-accent transition-colors">
                {tool.linkText} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export function SmartBuyerCta() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up" className="p-12 md:p-20 text-center relative overflow-hidden border border-primary-accent/10 bg-slate-900 rounded-3xl shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-accent/20 to-purple-600/20 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
              Every Smart Buyer Checks the VIN. Now it's Your Turn
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Don’t buy a used car blind. Know what you’re getting. Decode the VIN first, then make a smart decision with real info and records instead of just trusting what the seller tells you.
            </p>
            <Button className="h-14 px-10 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Check VIN Now
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export function DecodeByMakes() {
  const makes = [
    "Acura", "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Bugatti", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Daewoo", "Dodge", "Ferrari", "Fiat", "Ford", "Freightliner", "GMC", "Hino", "Honda", "Hummer", "Hyundai", "Infiniti", "Isuzu", "Jaguar", "Jeep", "Kawasaki", "Kenworth", "Kia", "Lamborghini", "Land Rover", "Lexus", "Lincoln", "Lotus", "Mazda", "Mercedes-Benz", "Mercury", "MINI", "Mitsubishi", "Nissan", "Oldsmobile", "Plymouth", "Pontiac", "Porsche", "Rolls-Royce", "Saab", "Saturn", "Scion", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen", "Volvo"
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            Decode VIN By Makes
          </h2>
        </FadeIn>
        
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto text-center">
          {makes.map((make, index) => (
            <motion.div variants={fadeUpVariant} key={index} className="p-3 bg-bg-secondary rounded-lg border border-card-border hover:bg-primary-accent/5 hover:border-primary-accent/30 transition-colors cursor-pointer">
              <span className="text-primary-navy font-medium text-sm">{make}</span>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export function VinDecoderFaq() {
  const faqs = [
    {
      question: "What is a VIN decoder?",
      answer: "A VIN decoder is an online tool that translates a 17-character VIN (Vehicle Identification Number) into detailed information about a car, such as its manufacturer, year, engine type, and more. It breaks down this unique code to reveal specific car specs, features, and history, often used by buyers to verify vehicle details."
    },
    {
      question: "Is a VIN decoder really free?",
      answer: "Yes, our basic VIN decoding service is completely free. It provides essential vehicle specifications like year, make, model, trim, and engine details. If you need a comprehensive vehicle history report with accident records, ownership history, and more, we offer a paid upgrade."
    },
    {
      question: "How accurate is our VIN decoder?",
      answer: "Our VIN decoder is highly accurate. We pull data directly from vehicle manufacturers (OEMs), government databases (like the NMVTIS), and other trusted automotive data providers to ensure you get the most precise and up-to-date information available."
    },
    {
      question: "Can I decode a VIN from any country?",
      answer: "Our VIN decoder primarily supports vehicles manufactured for the North American market (USA and Canada) that follow the standard 17-character VIN format introduced in 1981. Vehicles from other regions may have different VIN structures that might not fully decode."
    },
    {
      question: "Will the VIN decoder show if a car was in an accident?",
      answer: "The free VIN decoder provides vehicle specifications, not history. To see if a car was in an accident, you need to upgrade to our full Vehicle History Report, which checks extensive databases for accident records, salvage titles, and damage reports."
    },
    {
      question: "Can I Check Multiple VINs?",
      answer: "Yes, you can check as many VINs as you like using our free decoder tool. There is no limit to the number of basic spec checks you can perform."
    },
    {
      question: "Can a VIN tell me the model year?",
      answer: "Yes, the 10th character of a standard 17-character VIN specifically indicates the model year of the vehicle. Our decoder automatically translates this character to give you the exact year."
    },
    {
      question: "Does a VIN show accidents or ownership history?",
      answer: "The VIN itself does not contain accident or ownership history. However, the VIN acts as a key to access databases that store this information. You will need a full Vehicle History Report to view these records."
    },
    {
      question: "Can classic or pre-1981 VINs be decoded?",
      answer: "Yes, we offer specialized decoding for classic and vintage vehicles manufactured before 1981, which often have VINs ranging from 5 to 14 characters. You can use our Classic Car Build Sheet tool for these vehicles."
    },
    {
      question: "Does a VIN reveal engine size?",
      answer: "Yes, specific characters within the Vehicle Descriptor Section (VDS) of the VIN indicate the engine type, size, and capacity. Our decoder extracts this information and presents it clearly."
    },
    {
      question: "How can I get a window sticker using a VIN?",
      answer: "You can use our dedicated Window Sticker Lookup tool. Just enter the VIN, and we will generate a digital copy of the original window sticker, showing all factory options, packages, and the original MSRP."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <FadeIn direction="down" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            Frequently Asked Questions About VIN Decoder
          </h2>
        </FadeIn>
        
        <StaggerContainer className="w-full space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div variants={fadeUpVariant} key={index}>
                <AccordionItem value={`item-${index}`} className="bg-white border border-card-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-primary-navy hover:text-primary-accent py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-secondary pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </StaggerContainer>
      </div>
    </section>
  )
}
