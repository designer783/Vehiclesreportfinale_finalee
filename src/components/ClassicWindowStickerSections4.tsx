import { Button } from "@/src/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/ui/accordion"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "./ui/FadeIn"

export function ClassicCta() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up" className="p-12 md:p-20 text-center relative overflow-hidden border border-primary-accent/10 bg-slate-900 rounded-3xl shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-accent/20 to-purple-600/20 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
              Get a Reproduction Window Sticker for Any Classic Car
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Don’t wait until it’s late before finding out a vintage car’s factory build details. Order your original reproduction window sticker to confirm options, features, MSRP, and more.
            </p>
            <Button className="h-14 px-10 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Lookup Sticker Now
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export function ClassicFaq() {
  const faqs = [
    {
      question: "Are classic window stickers legal?",
      answer: "Yes, reproduction window stickers are completely legal as long as they’re marked as reproductions and not fake originals. They’re meant for documentation, car shows, and personal records, not to deceive anyone about your vehicle."
    },
    {
      question: "Can I get a window sticker without a VIN?",
      answer: "While a VIN is the most accurate way to generate a window sticker, for classic cars without a standard 17-digit VIN, we can often generate a sticker using the year, make, model, and other identifying numbers like engine or chassis serial numbers."
    },
    {
      question: "Does a window sticker increase car value?",
      answer: "Yes, having documentation like a reproduction window sticker or build sheet can significantly increase a classic car's value. It proves the authenticity of the vehicle's original features, colors, and options, which collectors highly value."
    },
    {
      question: "Are reproduction window stickers accepted at car shows?",
      answer: "Absolutely. Reproduction window stickers are widely accepted and encouraged at classic car shows. They provide spectators and judges with valuable information about how the car was originally equipped from the factory."
    },
    {
      question: "What's the difference between a build sheet and a window sticker?",
      answer: "A build sheet is an internal factory document used by assembly line workers to know what parts to install. A window sticker (Monroney label) is the consumer-facing document placed on the car window at the dealership showing the MSRP, standard equipment, and options."
    },
    {
      question: "Is a classic window sticker worth it?",
      answer: "For most classic car owners, buyers, and restorers, it is highly worth it. The cost of the sticker is minimal compared to the value it adds in terms of documentation, provenance, and the sheer enjoyment of knowing your vehicle's exact original specifications."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <FadeIn direction="down" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            Frequently Asked Questions About Classic Window Stickers
          </h2>
        </FadeIn>
        
        <StaggerContainer className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <motion.div variants={fadeUpVariant} key={index}>
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="bg-white border border-card-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-primary-navy hover:text-primary-accent py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-secondary pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
