import { Button } from "@/src/components/ui/button"
import { ShieldCheck, TrendingUp, Search, FileText, Wrench, Clock, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "./ui/FadeIn"

export function ClassicBenefits() {
  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <FadeIn direction="down" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            How Can You Benefit From Getting a Classic Window Sticker?
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            A classic window sticker helps both buyers and sellers make smarter decisions about vintage cars today. Here’s how this documentation helps:
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          <motion.div variants={fadeUpVariant} className="bg-white p-8 rounded-2xl shadow-sm border border-card-border">
            <h3 className="text-2xl font-bold font-heading text-primary-navy border-b pb-4 mb-6">Buyers</h3>
            <p className="text-text-secondary mb-6">The window sticker gives you confidence when shopping for a classic car that matches your dreams perfectly.</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2 flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary-accent shrink-0" /> Verify Authenticity</h4>
                <p className="text-text-secondary text-sm">Check if the car still has its original engine, paint, and features, or if things have changed.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2 flex items-center gap-2"><TrendingUp className="h-5 w-5 text-primary-accent shrink-0" /> Know Fair Market Value</h4>
                <p className="text-text-secondary text-sm">Compare what the car originally cost with today’s prices to understand if you’re paying right.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2 flex items-center gap-2"><Search className="h-5 w-5 text-primary-accent shrink-0" /> Understand Rarity</h4>
                <p className="text-text-secondary text-sm">Learn which options were rare back then, making your potential purchase more valuable and special.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="bg-white p-8 rounded-2xl shadow-sm border border-card-border">
            <h3 className="text-2xl font-bold font-heading text-primary-navy border-b pb-4 mb-6">Sellers/Dealers</h3>
            <p className="text-text-secondary mb-6">The Monroney label for classic cars helps you prove your classic car’s worth and attract serious buyers who pay top dollar. Sellers benefit in the following ways:</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2 flex items-center gap-2"><FileText className="h-5 w-5 text-primary-accent shrink-0" /> Prove Original Condition</h4>
                <p className="text-text-secondary text-sm">Show buyers hard evidence that your car keeps its factory parts and hasn’t been heavily modified.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2 flex items-center gap-2"><TrendingUp className="h-5 w-5 text-primary-accent shrink-0" /> Justify Asking Price</h4>
                <p className="text-text-secondary text-sm">Use original pricing and rare options to explain why your car deserves the money requested.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2 flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary-accent shrink-0" /> Build Buyer Confidence</h4>
                <p className="text-text-secondary text-sm">Give potential customers documentation that makes them trust your car is the real deal.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="bg-white p-8 rounded-2xl shadow-sm border border-card-border">
            <h3 className="text-2xl font-bold font-heading text-primary-navy border-b pb-4 mb-6">Restorers</h3>
            <p className="text-text-secondary mb-6">A build sheet is a classic car restorer’s best friend. Here is why.</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2 flex items-center gap-2"><Wrench className="h-5 w-5 text-primary-accent shrink-0" /> Find the Right Original Parts</h4>
                <p className="text-text-secondary text-sm">It shows exact factory parts, helping restorers source and fit correct components easily.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2 flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary-accent shrink-0" /> Prove the Car is Authentic</h4>
                <p className="text-text-secondary text-sm">A build sheet confirms original features, making the classic car worth significantly more money.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2 flex items-center gap-2"><Clock className="h-5 w-5 text-primary-accent shrink-0" /> Save Time During Restoration</h4>
                <p className="text-text-secondary text-sm">Restorers know the exact colors, options, and equipment fitted, removing all the guesswork instantly.</p>
              </div>
            </div>
          </motion.div>
        </StaggerContainer>

        <FadeIn direction="up" delay={0.2} className="mt-12 text-center">
          <Button variant="outline" className="h-14 px-8 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white rounded-lg font-semibold text-lg transition-all">
            View Sample
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}

export function HowToLookupClassic() {
  const steps = [
    {
      title: "Enter the Classic VIN",
      desc: "Type or paste your car's VIN carefully into the form at the top of the page. You can also search by year, make, and model."
    },
    {
      title: "Search VIN",
      desc: "Click the search button to decode the VIN number for basic vehicle details like the year, make, model, and more. This ensures you’re checking the right car."
    },
    {
      title: "Get the Classic Window Sticker",
      desc: "Instantly view the reproduction window sticker. Download or print as a PDF showing all the original factory information and features."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            How to Look Up a Classic Car Window Sticker
          </h2>
          <p className="text-lg text-text-secondary">
            By using your vehicle identification number, follow these easy steps to get your classic window sticker:
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

export function WhereToFindClassicVin() {
  const locations = [
    { title: "Dashboard by the Windshield", desc: "Look at the bottom corner of the driver’s side windshield where a small metal plate might be attached." },
    { title: "Driver’s Side Door Jamb", desc: "Check the area where the door latches when closed for a metal tag with numbers and letters." },
    { title: "Engine Block", desc: "Check if the VIN is stamped directly onto the engine block, usually on the front or side surface." },
    { title: "Frame Rail", desc: "Look underneath the car along the frame rails near the front wheels for stamped numbers in the metal." },
    { title: "Firewall", desc: "Check the metal wall separating the engine from the passenger compartment for a stamped or attached plate." },
    { title: "Under the Hood", desc: "Open the hood and look on the inner fender wells or radiator support for identification tags." },
    { title: "Trunk Area", desc: "Some manufacturers placed identification plates inside the trunk, often near the spare tire or on the lid." },
    { title: "Glove Box", desc: "Check inside the glove compartment for a small metal tag that might contain the VIN or serial number." },
    { title: "Vehicle Paperwork", desc: "Check titles, registrations, insurance documents, and old service records." }
  ];

  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="space-y-8">
          <FadeIn direction="down" className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
              Where Can I Find the VIN on a Classic Car?
            </h2>
            <p className="text-lg text-text-secondary">
              Finding your classic car’s VIN can be tricky since older cars placed them in different spots. Here are common places to find an old car VIN number.
            </p>
          </FadeIn>
          
          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {locations.map((loc, index) => (
              <motion.div variants={fadeUpVariant} key={index} className="bg-white p-4 rounded-xl border border-card-border flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-primary-navy">{loc.title}: </span>
                  <span className="text-text-secondary text-sm">{loc.desc}</span>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
