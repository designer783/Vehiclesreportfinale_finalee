import { Button } from "@/src/components/ui/button"
import { ShieldCheck, TrendingUp, Search, FileText, Clock, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "./ui/FadeIn"

export function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <FadeIn direction="down" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            The Benefits of a License Plate Lookup
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Running a license plate check helps everyone involved in buying or selling used vehicles make smarter, safer decisions.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn direction="left" className="space-y-6">
            <h3 className="text-2xl font-bold font-heading text-primary-navy border-b pb-2">Buyers</h3>
            <p className="text-text-secondary">Smart buyers use license plate lookups to protect their money and avoid purchasing vehicles with expensive hidden problems.</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2 flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary-accent" /> Avoid Buying Damaged or Salvaged Vehicles</h4>
                <p className="text-text-secondary">You’ll discover if the car was totaled in accidents before dishonest sellers can trick you into overpaying.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2 flex items-center gap-2"><Search className="h-5 w-5 text-primary-accent" /> Verify Seller's Claims About Condition</h4>
                <p className="text-text-secondary">The report proves whether the seller told you the complete truth about accidents, ownership, and maintenance history.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2 flex items-center gap-2"><TrendingUp className="h-5 w-5 text-primary-accent" /> Negotiate Better Prices with Facts</h4>
                <p className="text-text-secondary">Armed with real damage and repair history, you can talk the price down when you find problems that sellers didn’t mention.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" className="space-y-6">
            <h3 className="text-2xl font-bold font-heading text-primary-navy border-b pb-2">Sellers/Dealers</h3>
            <p className="text-text-secondary">Honest sellers and dealerships use license plate searches to build trust and sell vehicles faster at fair market prices.</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2 flex items-center gap-2"><FileText className="h-5 w-5 text-primary-accent" /> Provide Transparent History to Buyers</h4>
                <p className="text-text-secondary">Showing buyers a complete vehicle history report proves you have nothing to hide and builds confidence in your honesty.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2 flex items-center gap-2"><TrendingUp className="h-5 w-5 text-primary-accent" /> Price Vehicles Accurately</h4>
                <p className="text-text-secondary">Knowing the full history helps you set fair prices that reflect the vehicle’s true condition and past problems.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2 flex items-center gap-2"><Clock className="h-5 w-5 text-primary-accent" /> Close Sales Faster with Confidence</h4>
                <p className="text-text-secondary">Buyers make quicker decisions when they see detailed reports proving the vehicle’s condition matches your sales description exactly.</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.2} className="mt-12 text-center">
          <Button className="h-14 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Search License Plate
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}

export function HowToRun() {
  const steps = [
    {
      title: "Enter Plate Number and Select State",
      desc: "Type the license plate number exactly as it appears and choose the state that issued it."
    },
    {
      title: "Search Plate and Preview",
      desc: "Click the search button to view the vehicle’s specifications for free. These include the year, make, model, engine, transmission, and more."
    },
    {
      title: "Pay and Get Vehicle History Report",
      desc: "Complete your purchase securely and instantly download the full report in PDF showing everything about that vehicle's past."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            How to Run a License Plate Lookup Online
          </h2>
          <p className="text-lg text-text-secondary">
            Getting a complete vehicle history report using a license plate takes just three simple steps and a few minutes.
          </p>
        </FadeIn>
        
        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>
          {steps.map((step, index) => (
            <motion.div variants={fadeUpVariant} key={index} className="bg-bg-secondary p-8 rounded-2xl shadow-sm border border-card-border text-center relative z-10">
              <div className="h-12 w-12 rounded-full bg-primary-accent text-white flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-md">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold font-heading text-primary-navy mb-3">{step.title}</h3>
              <p className="text-text-secondary">{step.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export function WhenToCheck() {
  const events = [
    {
      title: "Before buying a used car",
      desc: "Always run a license plate number lookup before you hand over money for any used vehicle you find online or at dealerships. This helps reveal hidden issues that sellers often hide from buyers."
    },
    {
      title: "After a minor accident",
      desc: "When someone bumps your car in a parking lot and drives away, their license plate helps you file insurance claims. Looking up the plate gives you vehicle information to share with the police and your insurance company."
    },
    {
      title: "When considering a private sale",
      desc: "Private sellers sometimes lie about their vehicle’s past. A license plate lookup tells you the real story before you meet the seller in person. You’ll walk into negotiations knowing exactly what the car history is."
    },
    {
      title: "Before Selling Your Vehicle",
      desc: "Running a license plate check before listing your car helps you price it fairly and honestly. You’ll know what potential buyers will find when they research your vehicle themselves, helping to build trust and help you sell faster."
    },
    {
      title: "During Vehicle Inspections",
      desc: "Mechanics and inspectors use license plate lookups to compare what they see with the vehicle’s documented history records. This helps them spot previous damage that someone repaired poorly or tried to hide from you."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            When Should You Check a License Plate?
          </h2>
          <p className="text-lg text-text-secondary">
            You should check a plate number in any of the following events:
          </p>
        </FadeIn>
        
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <motion.div variants={fadeUpVariant} key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-card-border">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="h-6 w-6 text-primary-accent shrink-0" />
                <h3 className="text-xl font-bold font-heading text-primary-navy">{event.title}</h3>
              </div>
              <p className="text-text-secondary">{event.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
