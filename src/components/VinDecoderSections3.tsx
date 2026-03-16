import { Button } from "@/src/components/ui/button"
import { CheckCircle2, Zap, ShieldCheck, Clock, FileText } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "./ui/FadeIn"

export function AdvancedVinDecoder() {
  const features = [
    {
      title: "Vehicle Specifications",
      desc: "Get every detail about the vehicle specifications, such as the year, make, model, engine, transmission, trim level, MSRP, and more."
    },
    {
      title: "Vehicle Usage",
      desc: "Find out how the vehicle has been used throughout its life. Was it a personal car, a rental, a commercial vehicle, or part of a fleet?"
    },
    {
      title: "Ownership Records",
      desc: "See how many people have owned the vehicle and for how long. If a car has had six owners in three years, that’s a red flag. But one owner for eight years is usually a good sign."
    },
    {
      title: "Auction and Sales History with Photos",
      desc: "You’ll see if the vehicle was ever sold at auction. Many auction listings include photos, so you can actually see what the car looked like at different points in its history."
    },
    {
      title: "Title Brand Check",
      desc: "This reveals if the vehicle has any title brands. A “clean” title is what you want. But some vehicles have branded titles: salvage, flood damage, rebuilt, lemon, or odometer rollback."
    },
    {
      title: "Mileage History",
      desc: "Watch the odometer readings over time from inspections, registrations, and service records. The numbers should go up in a logical way. If not, this can signal an odometer rollback."
    },
    {
      title: "Accident Records",
      desc: "Find out if the vehicle has been in crashes and how serious they were. A minor fender bender isn’t a big deal if it was fixed properly, unlike a major accident with structural damage."
    },
    {
      title: "Theft Records",
      desc: "Check if the vehicle was ever reported stolen. Some stolen cars get recovered and end up back on the market, but they might have been damaged or stripped for parts."
    },
    {
      title: "Damage Verification",
      desc: "Beyond just accidents, this shows other types of damage: hail damage, fire damage, vandalism, or weather-related problems. A car that sat through a hurricane might have hidden water damage that shows up months later."
    },
    {
      title: "Lien and Loan Records",
      desc: "A lien means someone else (like a bank) has a legal claim to the vehicle because of an unpaid loan. If you buy a car that has an active lien on it, the bank can take the car from you."
    },
    {
      title: "Service and Repair History",
      desc: "See maintenance records when the vehicle was serviced at shops that report to databases. You’ll know if the owner kept up with oil changes, tire rotations, and other important upkeep."
    },
    {
      title: "Open Recall Records",
      desc: "Our report shows if there are any open recalls that haven’t been fixed yet. Some recalls are minor, but others affect serious safety systems like airbags or brakes."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            Advanced VIN Decoder: Upgrade to Complete Vehicle History
          </h2>
          <p className="text-lg text-text-secondary">
            Our free VIN decoder tells you what the car is. Our advanced VIN lookup tool tells you what the car has been through. Knowing the year, make, and model is helpful. But before you spend thousands of dollars on a used vehicle, you need to know its history.
          </p>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.2} className="mb-12 text-center">
          <h3 className="text-2xl font-bold font-heading text-primary-navy mb-8">What You Get with Our Paid VIN Lookup Tool</h3>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-10">
            When you upgrade to our full vehicle history report, you get every piece of record available about that specific vehicle. Here’s what we reveal:
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div variants={fadeUpVariant} key={index} className="bg-bg-secondary p-6 rounded-2xl shadow-sm border border-card-border hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-full bg-primary-accent/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-5 w-5 text-primary-accent" />
              </div>
              <h4 className="text-xl font-bold font-heading text-primary-navy mb-3">{feature.title}</h4>
              <p className="text-text-secondary">{feature.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
        
        <div className="mt-12 text-center">
          <Button className="h-14 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Get Full Vehicle History Report
          </Button>
        </div>
      </div>
    </section>
  )
}

export function HowToDecode() {
  const steps = [
    {
      title: "Enter the VIN",
      desc: "Scroll up to the VIN decoder input box. Type or paste your 17-character VIN into the box. Double-check that you entered it correctly."
    },
    {
      title: "Click \"Search\" to View Vehicle Specs",
      desc: "Hit the button and wait a few seconds. Our tool checks the VIN and reveals vehicle specs such as the year, make, model, engine, trim level, market value, and MSRP for free."
    },
    {
      title: "Upgrade for Full Vehicle History Report",
      desc: "If you’re buying a used car and want to know the complete history (accidents, owners, title problems, and more), make the necessary payment to access the vehicle history report."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            How to Decode VIN Numbers Using Our Tool
          </h2>
          <p className="text-lg text-text-secondary">
            Using our free VIN lookup tool is simple. Here are the simple steps to follow:
          </p>
        </div>
        
        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>
          {steps.map((step, index) => (
            <motion.div variants={fadeUpVariant} key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-card-border text-center relative z-10">
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

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Instant & Accurate VIN Decoding",
      desc: "Get precise vehicle specifications in seconds from vehicle manufacturers (OEM) and government databases.",
      icon: <Zap className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "Covers All Vehicle Types",
      desc: "Our tool supports cars, trucks, motorcycles, RVs, and commercial vehicles from any manufacturer.",
      icon: <ShieldCheck className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "Classic Car VIN Decoding",
      desc: "Access specialized decoding for vintage and pre-1981 vehicles with 5-14 digit VIN numbers.",
      icon: <Clock className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "Easy Upgrade to Full Report",
      desc: "Easily upgrade from a basic specs check to get the complete vehicle history report.",
      icon: <FileText className="h-6 w-6 text-primary-accent" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            Why Choose Our VIN Decoding Service
          </h2>
          <p className="text-lg text-text-secondary">
            Our VIN decoder gives you fast, reliable vehicle information whether you’re checking modern cars, classic vehicles, or need complete history reports.
          </p>
        </div>
        
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div variants={fadeUpVariant} key={index} className="flex flex-col items-center text-center p-6">
              <div className="h-16 w-16 rounded-full bg-primary-accent/10 flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-primary-navy mb-3">{reason.title}</h3>
              <p className="text-text-secondary">{reason.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
