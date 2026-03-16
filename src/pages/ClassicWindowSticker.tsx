import { ClassicHero, WhatIsClassicSticker, WhatInfoClassicSticker } from "@/src/components/ClassicWindowStickerSections1"
import { ClassicBenefits, HowToLookupClassic, WhereToFindClassicVin } from "@/src/components/ClassicWindowStickerSections2"
import { ClassicVsModernTable, ClassicCarBrands, ClassicAdditionalTools } from "@/src/components/ClassicWindowStickerSections3"
import { ClassicCta, ClassicFaq } from "@/src/components/ClassicWindowStickerSections4"

export function ClassicWindowSticker() {
  return (
    <>
      <ClassicHero />
      <WhatIsClassicSticker />
      <WhatInfoClassicSticker />
      <ClassicBenefits />
      <HowToLookupClassic />
      <WhereToFindClassicVin />
      <ClassicVsModernTable />
      <ClassicCarBrands />
      <ClassicAdditionalTools />
      <ClassicCta />
      <ClassicFaq />
    </>
  )
}
