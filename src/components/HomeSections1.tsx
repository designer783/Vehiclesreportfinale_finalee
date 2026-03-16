import { CheckCircle2, Users, Banknote } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "@/src/components/ui/FadeIn"

export function WhatIsVinCheck() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <FadeIn direction="down">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-6 text-center">What Is a VIN Number Check?</h2>
        </FadeIn>
        <StaggerContainer className="space-y-4 text-lg text-text-secondary">
          <motion.p variants={fadeUpVariant}>A VIN number check is when you look up a vehicle’s 17-character identification code to reveal the car’s history, which includes any reported records of accidents, thefts, ownership, title brands, mileage, liens, and more.</motion.p>
          <motion.p variants={fadeUpVariant}>When buying a used car, a VIN check helps avoid fraud by verifying that the seller is telling the truth. It shows if the vehicle is safe to buy and in good condition before you part ways with your hard-earned money.</motion.p>
        </StaggerContainer>
      </div>
    </section>
  )
}

export function WhatsIncluded() {
  const sections = [
    {
      title: "Title History and Brand Records",
      desc: "Title records reveal legal issues and damage classifications that affect a vehicle’s safety and value significantly. Title brands include salvage, rebuilt, flood, hail damage, fire damage, and lemon law buybacks.",
      items: [
        { name: "Check Car Title Status", desc: "See if the title is clean, salvage, rebuilt, or carries other brands that impact resale value." },
        { name: "Salvage, Rebuilt, and Flood Titles", desc: "Learn if the car was declared a total loss by insurance or damaged by flooding." },
        { name: "Lemon Law Buybacks", desc: "Find out if the manufacturer bought the car back due to unfixable mechanical defects." }
      ]
    },
    {
      title: "Accident History",
      desc: "Collision records show every time the car was damaged, with dates, and how serious each incident was for safety. Know if the airbags were deployed and if the vehicle was towed from accident scenes.",
      items: [
        { name: "Reported Collisions and Damage", desc: "View dates, locations, and descriptions of accidents reported to insurance companies and police departments nationwide." },
        { name: "Severity Ratings", desc: "Understand if crashes were minor bumps or serious collisions that could compromise the vehicle’s structural integrity." },
        { name: "Airbag Deployment Records", desc: "Know if airbags went off during crashes, indicating severe impacts that may have caused hidden frame damage." }
      ]
    },
    {
      title: "Odometer Readings",
      desc: "Mileage history helps you spot fraud and understand how heavily the car was actually driven over time. Sudden mileage drops that don’t match the car’s age expose odometer rollback.",
      items: [
        { name: "Mileage Verification Timeline", desc: "Track odometer readings from registration renewals, inspections, and service visits to verify the current reading is accurate." },
        { name: "Rollback Detection", desc: "Catch instances where the mileage suddenly decreased, proving someone tampered with the odometer to increase the value illegally." }
      ]
    },
    {
      title: "Ownership History",
      desc: "Ownership records tell you how many people owned the car, how long each owner kept it, and where they registered it. See if the vehicle started as a rental car, lease vehicle, taxi, police car, or government fleet vehicle.",
      items: [
        { name: "Number of Previous Owners", desc: "Find out if this is a one-owner car or if it passed through many hands quickly." },
        { name: "Registration State Changes", desc: "See which states the car was registered in, which can indicate geographic damage risks like rust." }
      ]
    },
    {
      title: "Vehicle Service Records",
      desc: "Maintenance and service records show how well previous owners took care of the car throughout its life. Regular service records suggest the previous owner took good care of the car.",
      items: [
        { name: "Service and Maintenance History", desc: "View reported oil changes, repairs, and routine maintenance performed at dealerships and repair shops that keep records." },
        { name: "Inspection Records", desc: "See state inspection results and emissions testing that can reveal mechanical problems or modifications made to the vehicle." }
      ]
    },
    {
      title: "Theft and Recovery Records",
      desc: "Theft records protect you from accidentally buying a stolen car that could be seized by police later. We check if the car ever appeared on hot sheets, when police recovered it if stolen, and whether thieves damaged it during the theft.",
      items: [
        { name: "Stolen Vehicle Check", desc: "Verify the car was never reported stolen or is not currently listed as a missing vehicle." },
        { name: "Recovery Status", desc: "Learn if the car was previously stolen and recovered, which may affect insurance rates and resale difficulty." }
      ]
    },
    {
      title: "Recall Information",
      desc: "Recall data alerts you to safety defects that need repair before the car is safe to drive daily. We list recall campaigns by date, what problems they address, and whether repair records show the dealer completed the fix.",
      items: [
        { name: "Open Safety Recalls", desc: "See manufacturer recalls that haven’t been fixed yet, ranging from minor issues to life-threatening defects that need immediate attention." },
        { name: "Completed Recall Repairs", desc: "Confirm which recalls were already addressed by previous owners or dealerships before you took ownership of the vehicle." }
      ]
    },
    {
      title: "Lien and Loan Records",
      desc: "Financial records show if anyone else has a legal claim to the vehicle that could affect ownership. We show current lienholder information and past financing records so you know if someone still owes money on the car.",
      items: [
        { name: "Active Liens", desc: "Discover if banks, credit unions, or lenders have unpaid loans secured by the vehicle as collateral." },
        { name: "Lien Release Status", desc: "Confirm all previous loans were paid off and lienholders released their legal claims properly." }
      ]
    },
    {
      title: "Auction History",
      desc: "Auction records reveal where the car was sold and what condition it was in at wholesale. See photos from auction listings, which sometimes show damage that was repaired before the car reached you.",
      items: [
        { name: "Auction Sale Records and Photos", desc: "See if the car went through dealer auctions, the photos taken, and what disclosures were made about its condition." },
        { name: "Wholesale Price History", desc: "View what dealers paid for the car at auction compared to what they’re asking you to pay." }
      ]
    }
  ]

  return (
    <section className="py-24 bg-light-bg">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">What's Included in a Vehicle History Report?</h2>
          <p className="text-lg text-text-secondary">Our comprehensive vehicle history check pulls information from dozens of sources like insurance companies, government agencies, auto auctions, repair shops, and law enforcement databases across North America to give you the complete story about any car.</p>
        </FadeIn>
        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, i) => (
            <motion.div variants={fadeUpVariant} key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-card-border hover:shadow-custom hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold text-primary-navy mb-3">{section.title}</h3>
              <p className="text-sm text-text-secondary mb-6">{section.desc}</p>
              <ul className="space-y-4">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <h4 className="font-semibold text-primary-navy text-sm flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary-accent shrink-0 mt-0.5" />
                      {item.name}
                    </h4>
                    <p className="text-sm text-text-secondary mt-1 ml-6">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </StaggerContainer>
        <FadeIn direction="up" delay={0.2} className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="h-12 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-base transition-all hover:scale-105 active:scale-95">Check Vehicle History</Button>
          <Button variant="outline" className="h-12 px-8 rounded-lg font-semibold text-base border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white transition-all hover:scale-105 active:scale-95">View Sample Report</Button>
        </FadeIn>
      </div>
    </section>
  )
}

export function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">The Benefit of Checking a Used Vehicle’s History</h2>
          <p className="text-lg text-text-secondary">Buying a used car without checking its history is like buying a house without looking inside first. You need to know what you’re getting into before spending your hard-earned money. Here are some benefits to buyers and sellers:</p>
        </FadeIn>
        <StaggerContainer className="grid md:grid-cols-2 gap-12">
          <motion.div variants={fadeUpVariant} className="bg-light-bg rounded-2xl p-8 border border-card-border">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                <Users className="h-5 w-5" />
              </div>
              Buyers
            </h3>
            <p className="text-text-secondary mb-6">Smart buyers always check a vehicle’s past before making a purchase decision. Here’s how a car history report protects you from expensive mistakes.</p>
            <ul className="space-y-6">
              <li>
                <h4 className="font-bold text-primary-navy">Avoid Hidden Problems and Costly Surprises</h4>
                <p className="text-sm text-text-secondary mt-1">Find out about past damage, mechanical issues, and repairs that the seller might not mention. This saves you from inheriting someone else’s nightmare.</p>
              </li>
              <li>
                <h4 className="font-bold text-primary-navy">Check If a Car Has Been in an Accident</h4>
                <p className="text-sm text-text-secondary mt-1">See every reported collision and crashes that totaled the vehicle. Accident damage can cause long-term problems with alignment, and structural integrity.</p>
              </li>
              <li>
                <h4 className="font-bold text-primary-navy">Verify Odometer Readings and Prevent Fraud</h4>
                <p className="text-sm text-text-secondary mt-1">Compare mileage records over time to catch tampering and rollbacks that make a car seem newer than it is. Avoid paying more than a car is worth.</p>
              </li>
              <li>
                <h4 className="font-bold text-primary-navy">Protect Your Family's Safety</h4>
                <p className="text-sm text-text-secondary mt-1">Review recall information to make sure the vehicle meets standards. No amount of money saved is worth putting your loved ones in an unsafe car.</p>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="bg-light-bg rounded-2xl p-8 border border-card-border">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-navy/10 flex items-center justify-center text-primary-navy">
                <Banknote className="h-5 w-5" />
              </div>
              Sellers & Dealers
            </h3>
            <p className="text-text-secondary mb-6">Honest sellers use vehicle history reports to prove their car’s condition and build buyer confidence. Transparency makes the selling process faster and smoother for everyone involved.</p>
            <ul className="space-y-6">
              <li>
                <h4 className="font-bold text-primary-navy">Build Trust with Potential Buyers</h4>
                <p className="text-sm text-text-secondary mt-1">Showing buyers the complete VIN history up front to show you have nothing to hide about the vehicle makes them feel comfortable to buy.</p>
              </li>
              <li>
                <h4 className="font-bold text-primary-navy">Sell Faster with Transparency</h4>
                <p className="text-sm text-text-secondary mt-1">Buyers make decisions more quickly when they can see the facts in black and white rather than wondering if you’re telling the truth.</p>
              </li>
              <li>
                <h4 className="font-bold text-primary-navy">Justify Your Asking Price</h4>
                <p className="text-sm text-text-secondary mt-1">Use a clean vehicle history to show why a car deserves the price you’re asking for it. A vehicle with no accidents is worth more than a car with bad history.</p>
              </li>
              <li>
                <h4 className="font-bold text-primary-navy">Reduce Liability and Future Complaints</h4>
                <p className="text-sm text-text-secondary mt-1">Provide proof of the vehicle’s condition to protect yourself from buyers claiming you hid problems, preventing them from saying you lied about the car’s past.</p>
              </li>
            </ul>
          </motion.div>
        </StaggerContainer>
        <div className="mt-12 text-center">
          <Button className="h-12 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-base">Lookup Vehicle History</Button>
        </div>
      </div>
    </section>
  )
}

export function WhyVinCheck() {
  const specs = [
    "Accident History",
    "Odometer Rollback",
    "Salvage Title",
    "Flood Damage",
    "Theft Records",
    "Lien Records",
    "Recall Information",
    "Service History",
    "Ownership History"
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">Why Do a VIN Check?</h2>
          <p className="text-lg text-text-secondary">A VIN check is the most important step when buying a used car. It protects you from hidden problems and ensures you make a smart purchase.</p>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {specs.map((spec, i) => (
            <motion.div key={i} variants={fadeUpVariant} className="flex items-center gap-3 bg-light-bg p-4 rounded-xl border border-card-border">
              <CheckCircle2 className="h-5 w-5 text-primary-accent shrink-0" />
              <span className="font-medium text-primary-navy">{spec}</span>
            </motion.div>
          ))}
        </StaggerContainer>
        <FadeIn direction="up" delay={0.2} className="text-center max-w-2xl mx-auto">
          <p className="text-text-secondary mb-6">If you’re buying a used car, simply upgrade to get the full vehicle history report.</p>
          <Button className="h-12 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-base">Decode VINs for Free</Button>
        </FadeIn>
      </div>
    </section>
  )
}

export function WhereIsVin() {
  return (
    <section className="py-24 bg-light-bg">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">Where is the VIN Number on a Car?</h2>
          <p className="text-lg text-text-secondary">Your car’s VIN appears in several easy-to-find spots both on the vehicle itself and on your important paperwork.</p>
        </FadeIn>
        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeUpVariant} className="bg-white rounded-2xl p-8 shadow-sm border border-card-border hover:shadow-custom hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-bold text-primary-navy mb-6">On the Car</h3>
            <p className="text-text-secondary mb-6">You can find the VIN stamped or printed in these common locations on every vehicle:</p>
            <ul className="space-y-4">
              <li><strong className="text-primary-navy">Dashboard Near Windshield:</strong> <span className="text-text-secondary">Stand outside on the driver’s side and look through the windshield at the dashboard’s lower corner.</span></li>
              <li><strong className="text-primary-navy">Driver's Door Frame:</strong> <span className="text-text-secondary">Open the driver’s door all the way and check the door frame for a white sticker.</span></li>
              <li><strong className="text-primary-navy">Under the Hood:</strong> <span className="text-text-secondary">Lift the hood and look at the engine’s front part or nearby metal surfaces for stamped numbers.</span></li>
              <li><strong className="text-primary-navy">Engine Block:</strong> <span className="text-text-secondary">Check the actual engine, where manufacturers sometimes stamp the VIN directly onto the metal.</span></li>
              <li><strong className="text-primary-navy">Frame Rail:</strong> <span className="text-text-secondary">Look underneath the car on the metal frame.</span></li>
            </ul>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="bg-white rounded-2xl p-8 shadow-sm border border-card-border hover:shadow-custom hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-bold text-primary-navy mb-6">In the Car Documents</h3>
            <p className="text-text-secondary mb-6">The VIN gets printed on all your official vehicle paperwork for identification and record-keeping purposes:</p>
            <ul className="space-y-4">
              <li><strong className="text-primary-navy">Vehicle Registration:</strong> <span className="text-text-secondary">Your state registration card shows the VIN in the vehicle information section.</span></li>
              <li><strong className="text-primary-navy">Title Certificate:</strong> <span className="text-text-secondary">Find the VIN on the ownership paper from the DMV.</span></li>
              <li><strong className="text-primary-navy">Insurance Policy:</strong> <span className="text-text-secondary">The full insurance policy document lists the VIN to identify exactly which vehicle gets covered.</span></li>
              <li><strong className="text-primary-navy">Service Records:</strong> <span className="text-text-secondary">Repair shops and mechanics write the VIN on the receipts and invoices.</span></li>
              <li><strong className="text-primary-navy">Owner's Manual:</strong> <span className="text-text-secondary">Check the first few pages of your car’s manual where the dealer wrote the VIN.</span></li>
            </ul>
          </motion.div>
        </StaggerContainer>
      </div>
    </section>
  )
}
