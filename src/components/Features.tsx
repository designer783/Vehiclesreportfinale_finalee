import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { AlertTriangle, Gauge, Waves, FileText, Banknote, ShieldAlert } from "lucide-react"
import { motion } from "framer-motion"
import { StaggerContainer, fadeUpVariant, FadeIn } from "@/src/components/ui/FadeIn"

const features = [
  {
    title: "Accident Damage",
    description: "1 in 10 to more than half of used cars carry some accident history.",
    icon: AlertTriangle,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  },
  {
    title: "Odometer Fraud",
    description: "About 2.5 million cars on U.S. roads have suspected odometer rollback.",
    icon: Gauge,
    color: "text-primary-accent",
    bgColor: "bg-primary-accent/10"
  },
  {
    title: "Flood or Fire Damage",
    description: "In 2024, about 347,000 vehicles were damaged by floods.",
    icon: Waves,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    title: "Salvage Titles",
    description: "In a review of 1k+ car history reports, about 30% showed a salvage title.",
    icon: FileText,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    title: "Outstanding Liens",
    description: "In the same review, about 25% vehicles showed a recorded lien.",
    icon: Banknote,
    color: "text-verification",
    bgColor: "bg-verification/10"
  },
  {
    title: "Stolen Car Records",
    description: "In 2024 alone, 850,708 vehicles were reported stolen in the U.S.",
    icon: ShieldAlert,
    color: "text-red-500",
    bgColor: "bg-red-500/10"
  }
]

export function Features() {
  return (
    <section className="bg-light-bg py-24">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            Hidden Problems Our VIN Reports Bring to Light
          </h2>
          <p className="text-lg text-text-secondary font-sans">
            Our vehicle history check completely reveals any serious issues that sellers try to hide from buyers. Here's what we find most often.
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeUpVariant} className="flex">
              <Card className="w-full border-card-border shadow-sm hover:shadow-custom hover:-translate-y-1 transition-all duration-300 bg-white">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.bgColor}`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl text-primary-navy">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
