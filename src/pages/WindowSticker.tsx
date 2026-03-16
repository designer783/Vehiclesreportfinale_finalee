import { WindowStickerHero, WhyWindowStickersMatter, WhatIsWindowSticker, WhatInfoOnSticker } from "@/src/components/WindowStickerSections1"
import { WindowStickerBenefits, WindowStickerVsMonroney, HowToGetWindowSticker, SampleWindowStickers, WindowStickerAdditionalTools, SupportedMakes, WindowStickerCta, WindowStickerFaq } from "@/src/components/WindowStickerSections2"

export function WindowSticker() {
  return (
    <>
      <WindowStickerHero />
      <WhyWindowStickersMatter />
      <WhatIsWindowSticker />
      <WhatInfoOnSticker />
      <WindowStickerBenefits />
      <WindowStickerVsMonroney />
      <HowToGetWindowSticker />
      <SampleWindowStickers />
      <WindowStickerAdditionalTools />
      <SupportedMakes />
      <WindowStickerCta />
      <WindowStickerFaq />
    </>
  )
}
