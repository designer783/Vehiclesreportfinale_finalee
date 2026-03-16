import { LicensePlateHero, WhyChooseUs, WhatIsLicensePlateSearch } from "@/src/components/LicensePlateSections1"
import { WhatInfoProvided } from "@/src/components/LicensePlateSections2"
import { Benefits, HowToRun, WhenToCheck } from "@/src/components/LicensePlateSections3"
import { LicensePlateDesign, IsItLegal, StatesList, OtherTools, LicensePlateCta, LicensePlateFaq } from "@/src/components/LicensePlateSections4"

export function LicensePlate() {
  return (
    <>
      <LicensePlateHero />
      <WhyChooseUs />
      <WhatIsLicensePlateSearch />
      <WhatInfoProvided />
      <Benefits />
      <HowToRun />
      <WhenToCheck />
      <LicensePlateDesign />
      <IsItLegal />
      <StatesList />
      <OtherTools />
      <LicensePlateCta />
      <LicensePlateFaq />
    </>
  )
}
