import { Hero } from "@/src/components/Hero"
import { Features } from "@/src/components/Features"
import { HowItWorks } from "@/src/components/HowItWorks"
import { WhyChooseUs } from "@/src/components/WhyChooseUs"
import { WhatIsVinCheck, WhatsIncluded, Benefits, WhereIsVin } from "@/src/components/HomeSections1"
import { ComparisonTable, VehicleTypes, AdditionalTools, CtaSection, FaqSection, BlogSection } from "@/src/components/HomeSections2"
import { FadeIn } from "@/src/components/ui/FadeIn"

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WhatIsVinCheck />
      <WhatsIncluded />
      <Benefits />
      <HowItWorks />
      <WhereIsVin />
      <WhyChooseUs />
      <ComparisonTable />
      <VehicleTypes />
      <AdditionalTools />
      <CtaSection />
      <FaqSection />
      <BlogSection />
    </>
  )
}
