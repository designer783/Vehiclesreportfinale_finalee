import { Users, Banknote, AlertTriangle } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "./ui/FadeIn"

export function HowToRunVinCheck() {
  const steps = [
    {
      title: "Enter Your VIN & Search",
      description: "Enter the VIN into the form at the top of the page and click “Search VIN.” You can also search by license plate (US only).",
      step: "1"
    },
    {
      title: "Preview & Select a Plan",
      description: "Preview basic vehicle specifications showing year, make, model, and engine type at no cost to confirm you're checking the right car. Then select your plan, whether to buy one report or more (if you’re checking many cars).",
      step: "2"
    },
    {
      title: "Download & Print Report",
      description: "Get the full VIN report to access comprehensive accident history, title information, ownership records, theft checks, mileage records, and more.",
      step: "3"
    }
  ]

  return (
    <section className="py-24 bg-light-bg">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">How to Run a VIN Check: Step-by-Step Guide</h2>
          <p className="text-lg text-text-secondary">Getting the complete records on any used vehicle takes under a minute by following these three easy steps:</p>
        </FadeIn>
        <StaggerContainer className="grid gap-8 md:grid-cols-3 relative">
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-card-border -z-10"></div>
          {steps.map((step, index) => (
            <motion.div variants={fadeUpVariant} key={index} className="flex flex-col items-center text-center relative">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-6 border-4 border-light-bg shadow-sm relative text-3xl font-bold text-primary-navy font-heading">
                {step.step}
              </div>
              <h3 className="text-xl font-bold font-heading text-primary-navy mb-3">{step.title}</h3>
              <p className="text-text-secondary max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
        <FadeIn direction="up" delay={0.2} className="mt-12 text-center">
          <Button className="h-12 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-base">Run a VIN Check</Button>
        </FadeIn>
      </div>
    </section>
  )
}

export function WhereIsVinList() {
  const locations = [
    "Stand outside and peek through the front window on the driver’s side. Look down at the bottom corner where the dashboard meets the glass.",
    "Open the driver’s door and check the metal frame where the door clicks shut.",
    "Flip open the hood and look for a sticker or metal tag near the engine.",
    "Check your car’s paperwork, like the registration card or insurance documents."
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-6">Where’s the VIN Number on a Car?</h2>
            <p className="text-lg text-text-secondary mb-8">Every vehicle has the VIN stamped and printed in multiple easy-to-access locations, both on the car and on official paperwork. Here are the most common places to spot the VIN:</p>
            <ul className="space-y-4 mb-8">
              {locations.map((loc, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-accent/10 text-primary-accent flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">{i + 1}</div>
                  <span className="text-text-secondary">{loc}</span>
                </li>
              ))}
            </ul>
            <Button className="h-12 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-base">Run a VIN Check</Button>
          </FadeIn>
          <FadeIn direction="right" className="relative">
            <div className="rounded-2xl overflow-hidden shadow-custom border border-card-border">
              <img src="https://picsum.photos/seed/vinlocation/800/600" alt="Where is the VIN Number on a Car?" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export function VinCheckBenefits() {
  return (
    <section className="py-24 bg-light-bg">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">The Benefits of Checking a Vehicle History Before Buying</h2>
          <p className="text-lg text-text-secondary">A vehicle history check can help buyers spot hidden problems before handing over the cash. It also helps sellers make informed selections of cars they can quickly sell with confidence. Here’s how it helps:</p>
        </FadeIn>
        <StaggerContainer className="grid md:grid-cols-2 gap-12">
          <motion.div variants={fadeUpVariant} className="bg-white rounded-2xl p-8 border border-card-border shadow-sm">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                <Users className="h-5 w-5" />
              </div>
              Buyers
            </h3>
            <p className="text-text-secondary mb-6">Checking a vehicle’s history before you buy protects your wallet and saves you from future headaches.</p>
            <ul className="space-y-6">
              <li>
                <h4 className="font-bold text-primary-navy">Stop Scammers and Dishonest Sellers</h4>
                <p className="text-sm text-text-secondary mt-1">VIN reports reveal when sellers lie about accidents, mileage, or title problems, protecting you from criminals who tamper with odometers or hide serious damage.</p>
              </li>
              <li>
                <h4 className="font-bold text-primary-navy">Make Smarter Purchase Decisions</h4>
                <p className="text-sm text-text-secondary mt-1">You’ll know if the car was properly maintained, how many owners it had, and whether it’s worth the asking price before emotions take over.</p>
              </li>
              <li>
                <h4 className="font-bold text-primary-navy">Protect Your Family's Safety</h4>
                <p className="text-sm text-text-secondary mt-1">The report shows recalls, airbag deployments, and structural damage that could put your loved ones at risk every time they ride in that vehicle.</p>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="bg-white rounded-2xl p-8 border border-card-border shadow-sm">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-navy/10 flex items-center justify-center text-primary-navy">
                <Banknote className="h-5 w-5" />
              </div>
              For Sellers and Dealers
            </h3>
            <p className="text-text-secondary mb-6">Providing the VIN check report upfront separates professional sellers from shady operators and speeds up the entire sales process.</p>
            <ul className="space-y-6">
              <li>
                <h4 className="font-bold text-primary-navy">Stand Out from Sketchy Competition</h4>
                <p className="text-sm text-text-secondary mt-1">Most private sellers hide problems or hope buyers won’t check, so offering the VIN history report yourself shows you’re different and worth trusting immediately.</p>
              </li>
              <li>
                <h4 className="font-bold text-primary-navy">Answer Buyer Questions Before They Ask</h4>
                <p className="text-sm text-text-secondary mt-1">The VIN lookup report handles all the “has it been wrecked” questions automatically, eliminating back-and-forth conversations that waste your time and theirs.</p>
              </li>
              <li>
                <h4 className="font-bold text-primary-navy">Close Deals Without Price Arguments</h4>
                <p className="text-sm text-text-secondary mt-1">Buyers pay the asking price when proof backs up your claims, ending endless negotiations with people who assume every used car hides terrible issues.</p>
              </li>
            </ul>
          </motion.div>
        </StaggerContainer>
        <FadeIn direction="up" delay={0.2} className="mt-12 text-center">
          <Button className="h-12 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-base">Check Vehicle History</Button>
        </FadeIn>
      </div>
    </section>
  )
}

export function RealStory() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up" className="max-w-5xl mx-auto bg-primary-navy rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-primary-accent p-8 flex flex-col justify-center text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
              <AlertTriangle className="h-16 w-16 mb-6 opacity-80" />
              <h2 className="text-3xl font-bold font-heading mb-4 relative z-10">Real Story: How a VIN Check Saved $3,000+</h2>
              <p className="text-white/80 relative z-10">Sometimes the smartest choice is walking away when a VIN check shows problems the seller tried to hide.</p>
            </div>
            <div className="md:col-span-3 p-8 md:p-12 bg-white">
              <StaggerContainer className="space-y-8">
                <motion.div variants={fadeUpVariant}>
                  <h3 className="text-xl font-bold text-primary-navy mb-2 border-b border-light-bg pb-2">The Situation</h3>
                  <p className="text-text-secondary">Mike found a 2012 Honda Civic selling for $2,500 less than the current market price, with only 137,500 km showing. The seller said he needed money fast, so Mike started planning a three-hour drive to buy it.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant}>
                  <h3 className="text-xl font-bold text-primary-navy mb-2 border-b border-light-bg pb-2">What the VIN Check Revealed</h3>
                  <p className="text-text-secondary mb-2">He ran a VIN check and found these issues:</p>
                  <ul className="list-disc pl-5 text-text-secondary space-y-1">
                    <li>Mileage rolled back from 206,000 km to 135,000 km in 2021.</li>
                    <li>One damage record that signals a potential repair cost.</li>
                  </ul>
                </motion.div>
                <motion.div variants={fadeUpVariant}>
                  <h3 className="text-xl font-bold text-primary-navy mb-2 border-b border-light-bg pb-2">The Outcome</h3>
                  <p className="text-text-secondary mb-6">Mike asked the seller about these problems, but the seller stopped answering messages. Mike skipped the car and bought a clean Honda Civic instead, paying $1,500 more but avoiding more than $4,500 in hidden problems due to wear and damage. Always check a VIN history before buying a used car.</p>
                  <Button className="h-12 px-8 bg-primary-navy hover:bg-primary-navy/90 text-white rounded-lg font-semibold text-base transition-all hover:translate-x-1">View Full Report</Button>
                </motion.div>
              </StaggerContainer>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
