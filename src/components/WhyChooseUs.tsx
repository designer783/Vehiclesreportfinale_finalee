import { Zap, DollarSign, Map, Database, Clock, ShieldCheck } from "lucide-react"

const reasons = [
  {
    title: "Instant Report Access",
    description: "View and download your report immediately without waiting hours or days for processing or delivery.",
    icon: Zap,
  },
  {
    title: "We are 56% Cheaper than Carfax",
    description: "Get an affordable auto history report without sacrificing quality or missing important information about the vehicle.",
    icon: DollarSign,
  },
  {
    title: "Full Coverage Across the USA and Canada",
    description: "Get the history of any vehicle registered in all 50 US states, including Canadian provinces, with one service.",
    icon: Map,
  },
  {
    title: "Multiple Trusted Data Sources",
    description: "We combine DMV record check data with insurance, auction, and service facility records to provide a complete vehicle history report.",
    icon: Database,
  },
  {
    title: "24/7 Access to Our VIN Lookup Service",
    description: "Search the car history report by VIN or license plate any time of day from your computer or phone.",
    icon: Clock,
  },
  {
    title: "Money-Back Guarantee",
    description: "If you don’t get the report, you can request a refund without hassle or too many questions.",
    icon: ShieldCheck,
  }
]

export function WhyChooseUs() {
  return (
    <section className="bg-light-bg py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            Why Choose Our Vehicle History Report?
          </h2>
          <p className="text-lg text-text-secondary font-sans">
            We’ve built our service around accuracy, affordability, and ease of use. Here’s what makes us the best car history report choice for buyers across North America.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-card-border flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-primary-accent/10 flex items-center justify-center mb-6">
                <reason.icon className="h-6 w-6 text-primary-accent" />
              </div>
              <h3 className="font-bold text-xl text-primary-navy font-heading mb-3">{reason.title}</h3>
              <p className="text-text-secondary leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
