import { Search, Eye, Download } from "lucide-react"
import { motion } from "framer-motion"
import { StaggerContainer, fadeUpVariant, FadeIn } from "@/src/components/ui/FadeIn"

const steps = [
  {
    title: "Enter Your VIN",
    description: "Type the 17-digit VIN number into the form at the top of the page. Don't have the VIN handy? Enter the license plate number and select the US state.",
    icon: Search,
  },
  {
    title: "Search VIN and Preview",
    description: "Click “Search VIN” to review basic information such as the year, make, model, engine type, and manufacturing details to confirm it's the right vehicle.",
    icon: Eye,
  },
  {
    title: "Get Your Complete Car History Report",
    description: "Select the package and make the necessary payment to instantly generate, view, and download the full VIN report in PDF. It’s yours forever.",
    icon: Download,
  }
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            How to Look Up a Car History by VIN?
          </h2>
          <p className="text-lg text-text-secondary font-sans">
            Getting your complete vehicle history report takes less than a minute from start to finish. Here are the steps to follow.
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-8 md:grid-cols-3 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-light-bg -z-10"></div>
          
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeUpVariant} className="flex flex-col items-center text-center relative">
              <div className="w-24 h-24 rounded-full bg-light-bg flex items-center justify-center mb-6 border-4 border-white shadow-sm relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-accent text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <step.icon className="h-10 w-10 text-primary-navy" />
              </div>
              <h3 className="text-xl font-bold font-heading text-primary-navy mb-3">{step.title}</h3>
              <p className="text-text-secondary max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
