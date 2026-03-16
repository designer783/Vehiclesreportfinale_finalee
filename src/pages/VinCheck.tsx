import { VinCheckHero, FreeVinCheckSpecs, WhatIsVinCheckText, WhatInfoIncluded } from "@/src/components/VinCheckSections1"
import { HowToRunVinCheck, WhereIsVinList, VinCheckBenefits, RealStory } from "@/src/components/VinCheckSections2"
import { VinCheckAdditionalTools, VinCheckCta, VinCheckFaq } from "@/src/components/VinCheckSections3"

export function VinCheck() {
  return (
    <>
      <VinCheckHero />
      <FreeVinCheckSpecs />
      <WhatIsVinCheckText />
      <WhatInfoIncluded />
      <HowToRunVinCheck />
      <WhereIsVinList />
      <VinCheckBenefits />
      <RealStory />
      <VinCheckAdditionalTools />
      <VinCheckCta />
      <VinCheckFaq />
    </>
  )
}
