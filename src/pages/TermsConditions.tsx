import React from "react"
import { FadeIn, StaggerContainer, fadeUpVariant } from "@/src/components/ui/FadeIn"
import { motion } from "framer-motion"

export function TermsConditions() {
  const sections = [
    {
      id: "agreement",
      title: "1. AGREEMENT",
      content: "Welcome to Detailed Vehicle History! The representations of our services and products available through this website do not constitute a binding offer. By clicking “CHECK RECORDS” or “GET YOUR REPORT” or “SEARCH” or “SHOW ME MY REPORT” or “YES, CONTINUE TO MY REPORT” You agree to be bound to these Terms of Use (the”Agreement”), constituting a legally binding agreement by and between Detailed Vehicle History, (hereinafter, ” Detailed Vehicle History” or “We” or “Our”) and you (in either case, “You” or “Your”) concerning Your use of Vehicles Report website (the “Website”) and the services available through the Website (the “Services”).\n\nWe encourage you to print the Agreement or copy it to your computer’s hard drive for your reference. With a customer’s order, the customer submits a binding offer for the formation of a contract. Following the order, Vehicles Report will process the customer’s order and send a confirmation email to acknowledge the receipt of the customer’s order. This acknowledgement of receipt does not constitute an acceptance of the order. The order is accepted with the provision of the requested goods or services."
    },
    {
      id: "privacy",
      title: "2. PRIVACY POLICY",
      content: "Vehicles Report collects identifying and billing information including name, address, credit card information and e-mail address when consumers register for our services. Any personally identifiable information you provide to us including your email and phone number may be used to notify you of new products, product changes or offer discounts up to 50%.\n\nBy providing your information, you may also receive electronic communications, including SMS communications (for informational purposes only) or, email (for all permissible commercial purposes) from Vehicles Report partner firms which may include third party marketing companies, affiliates, advertising agencies, and data aggregation companies regarding our or their services. You may opt-out of receiving electronic communications at any time by following the unsubscribe instructions contained in each communication, but you must contact the third-parties directly to do so."
    },
    {
      id: "changes",
      title: "3. CHANGES TO AGREEMENT AND PRIVACY POLICY",
      content: "Internet technology and the applicable laws, rules, and regulations change frequently. Accordingly, Vehicles Report reserves the right to change this agreement and its privacy policy at any time upon notice to you, to be given by the posting of a new version or a change notice on the website. It is your responsibility to review this agreement and the privacy policy periodically.\n\nIf at any time you find either unacceptable, you must immediately leave the website and cease using the services. Unless Vehicles Report obtains your express consent, any revised privacy policy will apply only to information collected by Vehicles Report after such time as the revised Privacy Policy takes effect, and not to information collected under any earlier Privacy Policies."
    },
    {
      id: "eligibility",
      title: "4. ELIGIBILITY",
      content: "By using the website or services, you represent and warrant that you are at least 18 years old and are otherwise legally qualified to enter into and form contracts under applicable law. Any individual using the Website or Services on behalf of a company further represents and warrants that they are authorized to act and enter into contracts on behalf of that company. This Agreement is void where prohibited."
    },
    {
      id: "role",
      title: "5. Vehicles Report ROLE",
      content: "Without limitation, you agree that Vehicles Report is merely a technology solution that serves as a third-party platform and you use the Website and Services at Your own risk, without limitation and pursuant to Section: ASSUMPTION OF RISK; RELEASE. Vehicles Report role is limited because Vehicles Report is not directly involved in creating or storing the underlying information in our reports.\n\nVehicles Report does not necessarily prescreen the content and/or information provided to users. Vehicle History Report does not take or transfer ownership of items or liability attaching thereto. For additional information, please carefully review Section: DISCLAIMERS; LIMITATION OF LIABILITY."
    },
    {
      id: "license",
      title: "6. LICENSE",
      content: "Unless otherwise stated, Vehicles Report owns the intellectual property rights for all material on https://vehiclesreport.com/. All intellectual property rights are reserved. You may view and/or print pages from Vehicles Report for your own personal use subject to restrictions set in these terms and conditions.\n\nYou must not: Republish material from https://vehiclesreport.com/; Sell, rent or sub-license material from https://vehiclesreport.com/; Reproduce, duplicate or copy material from https://vehiclesreport.com/; Redistribute content from Vehicles Report (unless content is specifically made for redistribution)."
    },
    {
      id: "reliance",
      title: "7. NO RELIANCE ON THIRD PARTY CONTENT",
      content: "The information on the Website is provided for information purposes only. The Website and Services are provided only as a technology solution and shall not be liable for any delay or failure to make available the Report. Vehicles Report does not: Guarantee the accuracy, completeness, or usefulness of any third-party information; Adopt, endorse, or accept responsibility for any third party opinion."
    },
    {
      id: "assumption",
      title: "8. ASSUMPTION OF RISK; RELEASE",
      content: "You knowingly and freely assume all risk when using the website and services. You, on behalf of yourself, your personal representatives, and your heirs, hereby voluntarily agree to release, waive, discharge, hold harmless, defend, and indemnify Vehicles Report and its stockholders, officers, directors, employees, agents, affiliates, consultants, representatives, sublicenses, successors, and assigns from any and all claims."
    }
  ]

  const additionalSections = [
    {
      id: "user-info",
      title: "9. USER INFORMATION; PASSWORD PROTECTION",
      content: "To access and/or use the Website and use the Services, You may be asked to provide certain registration details or other information. You represent and warrant that all user information you provide in connection with your use of the Website and Services will be current, complete, and accurate, and that you will update that information as necessary to maintain its completeness and accuracy."
    },
    {
      id: "fees",
      title: "10. RESERVED RIGHTS FOR VEHICLES REPORT FEES",
      content: "You acknowledge and agree that Vehicles Report reserves the right to charge for access to the Website and use of the Services, in accordance with the Vehicles Report Fees that are clearly disclosed throughout the Website."
    },
    {
      id: "refunds",
      title: "21. Refunds & Disputes",
      content: "Vehicles Report’s commitment to customer satisfaction extends to our refund policy for vehicle history reports and window stickers. Substantially Inaccurate or Incomplete Information: If the provided vehicle history report contains inaccuracies or lacks any data, a refund will NOT be considered. Unavailable Data: In instances where we are unable to generate a report due to data unavailability, customers may be eligible for a refund."
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <FadeIn direction="up">
          <div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-lg border border-slate-100">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-navy mb-4">Terms & Conditions</h1>
            <p className="text-text-tertiary font-bold mb-12 uppercase tracking-widest">Effective Date: 2024</p>
            
            <div className="space-y-12 text-text-secondary leading-relaxed text-base md:text-lg">
              {/* Contact Info */}
              <FadeIn direction="up" delay={0.1}>
                <div className="bg-primary-navy rounded-3xl p-8 text-white border border-white/10 shadow-xl">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary-accent flex items-center justify-center text-sm">i</span>
                    Customer Support
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8 text-sm md:text-base">
                    <div className="space-y-2">
                      <p className="font-bold opacity-60">Speak to a representative:</p>
                      <p className="text-xl font-bold">Call: (800) 657-2953</p>
                      <p className="opacity-80">Open 7 days a week</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-bold opacity-60">Correspondence Address:</p>
                      <p>4023 Kennett Pike #50326</p>
                      <p>Wilmington, DE 19807</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <StaggerContainer className="space-y-12">
                {[...sections, ...additionalSections].map((section) => (
                  <motion.section key={section.id} variants={fadeUpVariant} className="scroll-mt-32 border-b border-slate-100 pb-12 last:border-0">
                    <h2 className="text-2xl font-bold text-primary-navy mb-6 font-heading flex items-center gap-4">
                      {section.title}
                    </h2>
                    <div className="whitespace-pre-line text-text-secondary">
                      {section.content}
                    </div>
                  </motion.section>
                ))}
              </StaggerContainer>

              <FadeIn direction="up">
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 text-center">
                  <p className="font-bold text-primary-navy mb-4">Have questions about these terms?</p>
                  <p className="text-sm text-text-secondary mb-6">Our support team is available 24/7 to help clarify any part of this agreement.</p>
                  <a href="/contact" className="inline-flex items-center justify-center h-12 px-8 bg-primary-accent hover:bg-hover-accent text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-accent/20">
                    Contact Support
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
