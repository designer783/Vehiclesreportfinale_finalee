import { VinDecoderHero, WhatIsVinDecoder, WhatVinDecoderTells } from "@/src/components/VinDecoderSections1"
import { VinMeaning, WhereToFindVin, HowToReadVin, ImportanceOfVinDecoder } from "@/src/components/VinDecoderSections2"
import { AdvancedVinDecoder, HowToDecode, WhyChooseUs } from "@/src/components/VinDecoderSections3"
import { VinDecoderAdditionalTools, SmartBuyerCta, DecodeByMakes, VinDecoderFaq } from "@/src/components/VinDecoderSections4"

export function VinDecoder() {
  return (
    <>
      <VinDecoderHero />
      <WhatIsVinDecoder />
      <WhatVinDecoderTells />
      <VinMeaning />
      <WhereToFindVin />
      <HowToReadVin />
      <ImportanceOfVinDecoder />
      <AdvancedVinDecoder />
      <HowToDecode />
      <WhyChooseUs />
      <VinDecoderAdditionalTools />
      <SmartBuyerCta />
      <DecodeByMakes />
      <VinDecoderFaq />
    </>
  )
}
