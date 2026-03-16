import React from "react"
import { FadeIn } from "@/src/components/ui/FadeIn"

export function PrivacyPolicy() {
  const sections = [
    {
      title: "Your IP Address",
      content: "Each time that you visit the Site, our web server automatically recognizes your IP address and the web page from which you came. Your IP address is used to help identify you and to gather broad demographic information about you. We also use your IP address to help diagnose problems with our servers, to administer the Site and to better serve you in using the products, services and other features associated with the Site."
    },
    {
      title: "Cookies and Action Tags",
      content: "Cookies: The first time that a user provides an e-mail address in connection with his/her activities at the Site, we assign an identification number to that e-mail address and deploy a cookie to the applicable user’s PC.\n\nAction Tags, Web Beacons and other Data Collection Methods: An action tag or a web-beacon is a method used to track responses or actions by visitors who view certain advertisements or other information on the Site."
    },
    {
      title: "Personal Information That We Collect From You",
      content: "By registering with, or providing personal information to, the Site, users allow us and our affiliates to make their personally identifiable information available to third parties in accordance with the terms of this Privacy Policy. For the purposes of this Privacy Policy, Personal Information shall mean individually identifiable information from or about an individual."
    },
    {
      title: "How We Use Demographic Information and Aggregate Data",
      content: "We use demographic information to tailor the Site to the interests of our users. Demographic information is shared with third party advertisers so that they can tailor their advertisements to the appropriate audience."
    },
    {
      title: "Our Security Precautions",
      content: "We endeavor to safeguard and protect our user’s information. The privacy of your Personal Information is very important to us. The servers that we store personally identifiable information in are kept in a secure physical environment."
    }
  ]

  return (
    <div className="bg-white pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeIn direction="down">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-navy mb-4">Privacy Policy</h1>
          <p className="text-text-tertiary font-bold mb-12 uppercase tracking-widest">EFFECTIVE DATE: 08-06-2019</p>
        </FadeIn>
        
        <div className="prose prose-slate max-w-none space-y-12 text-text-secondary leading-relaxed">
          <FadeIn direction="up">
            <p className="text-lg md:text-xl text-text-secondary/80 font-medium">
              Thank you for visiting the Vehicles Report website. This notice outlines the privacy policies associated with the Site. By visiting this Site, you are accepting the practices described in this privacy policy.
            </p>
          </FadeIn>

          {sections.map((section, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
              <section className="border-l-4 border-primary-accent/20 pl-6 py-2">
                <h2 className="text-2xl font-bold text-primary-navy mb-6 font-heading">{section.title}</h2>
                <div className="whitespace-pre-line text-text-secondary leading-relaxed">
                  {section.content}
                </div>
              </section>
            </FadeIn>
          ))}

          <FadeIn direction="up">
            <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h2 className="text-2xl font-bold text-primary-navy mb-4">Contacting Us</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy, please contact our privacy team.
              </p>
              <a href="mailto:sales@verifymyvin.report" className="inline-flex items-center text-primary-accent font-bold hover:underline gap-2">
                <span className="w-8 h-8 rounded-full bg-primary-accent/10 flex items-center justify-center text-sm">@</span>
                sales@verifymyvin.report
              </a>
            </section>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
