import { Button } from "@/src/components/ui/button"
import { Link } from "react-router-dom"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/ui/accordion"
import { ArrowRight, Search, FileText, Clock, FileKey, ShieldCheck } from "lucide-react"
import { US_STATES } from "@/src/constants"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant, scaleInVariant } from "./ui/FadeIn"

export function LicensePlateDesign() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="space-y-12">
          <FadeIn direction="down" className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy">
              License Plate Design and Formats
            </h2>
            <p className="text-lg text-text-secondary">
              License plates look different depending on which state issued them, but they all serve the same important legal purpose. Each state designs its own plates with unique colors, symbols, and letter-number combinations that help identify vehicles quickly.
            </p>
            <p className="text-lg text-text-secondary">
              The formats vary from simple number sequences to complex mixes of letters and numbers with special characters.
            </p>
          </FadeIn>

          <FadeIn direction="left" className="space-y-6">
            <h3 className="text-2xl font-bold font-heading text-primary-navy">Front vs. Rear License Plates</h3>
            <p className="text-text-secondary">
              Some states require two license plates: one on the front bumper and one on the rear bumper of the vehicle. Other states only require a single plate mounted on the back of the car, which saves money and metal.
            </p>
            <p className="text-text-secondary">
              Currently, 31 states require both front and rear plates, while 19 states only require rear plates for legal driving.
            </p>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn direction="left">
              <h3 className="text-2xl font-bold font-heading text-primary-navy">Types of License Plates</h3>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-text-secondary">
                Different types of plates serve different purposes, from regular passenger vehicles to specialized uses across America. These include:
              </p>
            </FadeIn>
            
            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeUpVariant} className="bg-bg-secondary p-6 rounded-xl border border-card-border">
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2">Standard Passenger Plates</h4>
                <p className="text-text-secondary text-sm">Regular cars and trucks display these common plates with standard number and letter combinations for everyday driving.</p>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="bg-bg-secondary p-6 rounded-xl border border-card-border">
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2">Commercial Vehicle Plates</h4>
                <p className="text-text-secondary text-sm">Businesses use these special plates on trucks, vans, and vehicles that carry goods or provide services professionally.</p>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="bg-bg-secondary p-6 rounded-xl border border-card-border">
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2">Motorcycle Plates</h4>
                <p className="text-text-secondary text-sm">Smaller plates designed specifically for motorcycles with different size requirements and mounting positions than regular vehicles.</p>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="bg-bg-secondary p-6 rounded-xl border border-card-border">
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2">Temporary Plates</h4>
                <p className="text-text-secondary text-sm">Dealers provide paper or cardboard temporary tags when you buy a vehicle before permanent metal plates arrive.</p>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="bg-bg-secondary p-6 rounded-xl border border-card-border">
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2">Disabled/Handicapped Plates</h4>
                <p className="text-text-secondary text-sm">Special plates for people with disabilities that allow parking in designated accessible spaces at stores and buildings.</p>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="bg-bg-secondary p-6 rounded-xl border border-card-border">
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2">Veteran Plates</h4>
                <p className="text-text-secondary text-sm">Military veterans can get special plates honoring their service with unique designs and symbols representing their sacrifice.</p>
              </motion.div>
              <motion.div variants={fadeUpVariant} className="bg-bg-secondary p-6 rounded-xl border border-card-border">
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2">Personalized/Vanity Plates</h4>
                <p className="text-text-secondary text-sm">Custom plates where owners choose their own letter and number combinations to display messages or names they like.</p>
              </motion.div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

export function IsItLegal() {
  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="space-y-6">
          <FadeIn direction="left">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy">
              Is It Legal to Look Up a License Plate?
            </h2>
          </FadeIn>
          <div className="prose prose-lg max-w-none text-text-secondary">
            <FadeIn direction="up" delay={0.2}><p>
              Yes, a vehicle license plate lookup is completely legal across all 50 states when you use it for legitimate purposes. Vehicle facts like accident history, title status, and mechanical records are accessible under federal law for consumer protection.
            </p></FadeIn>
            <FadeIn direction="up" delay={0.3}><p>
              The Driver’s Privacy Protection Act (DPPA) protects personal information like names, addresses, and phone numbers from public searches.
            </p></FadeIn>
            <FadeIn direction="up" delay={0.4}><p className="font-semibold text-primary-navy">Legitimate uses of the license plate check include:</p></FadeIn>
            <StaggerContainer>
              <motion.li variants={fadeUpVariant} className="list-disc pl-6 space-y-2">Making vehicle purchasing decisions</motion.li>
              <motion.li variants={fadeUpVariant} className="list-disc pl-6 space-y-2">Insurance verification</motion.li>
              <motion.li variants={fadeUpVariant} className="list-disc pl-6 space-y-2">Business transactions</motion.li>
              <motion.li variants={fadeUpVariant} className="list-disc pl-6 space-y-2">Personal safety concerns about suspicious vehicles.</motion.li>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

export function StatesList() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            Lookup License Plates by State
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We provide comprehensive license plate lookup services covering all 50 United States and the District of Columbia.
          </p>
        </FadeIn>
        
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto text-center">
          {US_STATES.map((state, index) => (
            <motion.div variants={fadeUpVariant} key={index} className="p-3 bg-bg-secondary rounded-lg border border-card-border hover:bg-primary-accent/5 hover:border-primary-accent/30 transition-colors cursor-pointer">
              <span className="text-primary-navy font-medium text-sm">{state.value}</span>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export function OtherTools() {
  const tools = [
    {
      title: "VIN Decoder",
      desc: "Decode any 17-character VIN number free to reveal vehicle specifications, manufacturing details, and equipment features instantly.",
      linkText: "Decode VIN",
      href: "/vin-decoder",
      icon: <FileKey className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "VIN Check",
      desc: "Get complete vehicle history reports using VIN numbers for accidents, ownership, titles, maintenance records, and more.",
      linkText: "Check Vehicle History",
      href: "/vin-check",
      icon: <ShieldCheck className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "Window Sticker Lookup",
      desc: "View original factory window stickers showing MSRP, features, equipment, and specifications from when the vehicle was new.",
      linkText: "Lookup Window Sticker by VIN",
      href: "/window-stickers",
      icon: <FileText className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "Classic Window Sticker",
      desc: "Find and recreate original window stickers for classic and vintage vehicles built before modern digital record-keeping.",
      linkText: "Get Classic Window Sticker",
      href: "/classic-window-stickers",
      icon: <Clock className="h-6 w-6 text-primary-accent" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            Other Helpful Vehicle Lookup Tools
          </h2>
          <p className="text-lg text-text-secondary">
            Besides license plate searches, we offer these additional tools that help you research more vehicle information.
          </p>
        </FadeIn>
        
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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

export function LicensePlateCta() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up" className="p-12 md:p-20 text-center relative overflow-hidden border border-primary-accent/10 bg-slate-900 rounded-3xl shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-accent/20 to-purple-600/20 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
              Get Instant License Plate History Report
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Don’t risk buying a problem vehicle; get your complete license plate history report right now and drive with confidence.
            </p>
            <Button className="h-14 px-10 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Search Vehicle History
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export function LicensePlateFaq() {
  const faqs = [
    {
      question: "Can I find the owner's name with a license plate lookup?",
      answer: "No, you cannot lookup license plate owner to obtain personal information like names, addresses, or contact details. The Driver’s Privacy Protection Act (DPPA) specifically protects this private information from public access. Our reports only include vehicle history, specifications, and records."
    },
    {
      question: "Can I get a VIN from a license plate?",
      answer: "Yes, a license plate lookup will typically reveal the vehicle's 17-character VIN (Vehicle Identification Number) associated with that plate, along with other vehicle specifications."
    },
    {
      question: "How accurate is our license plate lookup?",
      answer: "Our license plate lookup is highly accurate. We source data from trusted national databases, state DMVs, insurance companies, and law enforcement agencies to provide the most up-to-date and reliable vehicle history available."
    },
    {
      question: "What's the difference between a license plate lookup and a VIN check?",
      answer: "Both tools provide similar vehicle history reports. The main difference is the starting point. A license plate lookup uses the state-issued plate number, which is easier to see from a distance. A VIN check uses the 17-character code stamped on the vehicle. Both ultimately access the same comprehensive databases."
    },
    {
      question: "Does every state allow license plate lookups?",
      answer: "Yes, you can perform a license plate lookup for vehicles registered in any of the 50 US states. The information provided is legal to access under federal law for legitimate purposes like vehicle purchasing decisions."
    },
    {
      question: "Will the vehicle owner know I looked up their plate?",
      answer: "No, license plate lookups are completely confidential and anonymous. The current owner of the vehicle is not notified when you run a search on their license plate."
    },
    {
      question: "Do license plate lookups work for motorcycles and RVs?",
      answer: "Yes, our tool can look up license plates for motorcycles, RVs, commercial trucks, and standard passenger vehicles, provided they are registered in the US."
    },
    {
      question: "Can I look up a license plate for free?",
      answer: "Our initial search provides basic vehicle specifications for free. To access the comprehensive vehicle history report, including accident records, title history, and ownership details, a paid upgrade is required."
    },
    {
      question: "What is a reverse license plate search?",
      answer: "A reverse license plate search is simply another term for a license plate lookup. It means you are starting with the license plate number and 'reversing' the process to find the vehicle's details and history associated with that plate."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <FadeIn direction="down" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            Frequently Asked Questions About License Plate Lookup
          </h2>
        </FadeIn>
        
        <StaggerContainer className="w-full space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div variants={fadeUpVariant} key={index}>
                <AccordionItem value={`item-${index}`} className="bg-bg-secondary border border-card-border rounded-lg px-6">
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
