import React from "react"
import { Badge } from "@/src/components/Badge"
import { Toggle } from "@/src/components/Toggle"
import { PricingCard } from "@/src/components/PricingCard"
import { BlogCard } from "@/src/components/BlogCard"
import { FAQAccordion } from "@/src/components/FAQAccordion"
import { SearchTools } from "@/src/components/SearchTools"
import { Hero } from "@/src/components/Hero"
import { Features } from "@/src/components/Features"
import { HowItWorks } from "@/src/components/HowItWorks"
import { WhyChooseUs } from "@/src/components/WhyChooseUs"
import { Footer } from "@/src/components/Footer"
import { Header } from "@/src/components/Header"
import { WhatIsVinCheck, WhatsIncluded, Benefits, WhereIsVin } from "@/src/components/HomeSections1"
import { ComparisonTable, VehicleTypes, AdditionalTools, CtaSection, FaqSection, BlogSection } from "@/src/components/HomeSections2"
import { VinCheckHero } from "@/src/components/VinCheckSections1"
import { VinDecoderHero } from "@/src/components/VinDecoderSections1"
import { LicensePlateHero } from "@/src/components/LicensePlateSections1"
import { ClassicHero } from "@/src/components/ClassicWindowStickerSections1"
import { WindowStickerHero } from "@/src/components/WindowStickerSections1"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { useState } from "react"
import { Link } from "react-router-dom"

/* ─── Reusable Preview Wrapper ─── */
function SectionPreview({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-primary-navy">{title}</h3>
      <div className="overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export function ComponentShowcase() {
  const [toggle1, setToggle1] = useState('personal')
  const [toggle2, setToggle2] = useState('history')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Showcase Header */}
      <div className="bg-primary-navy py-20 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">Design System &amp; Component Library</h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">A comprehensive guide to all reusable components, sections, and styles used across the Vehicles Report platform.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid gap-24">

          {/* ═══════════════════════════════════
              01 — Brand Identity
          ═══════════════════════════════════ */}
          <section id="brand">
            <h2 className="text-3xl font-bold text-primary-navy mb-8 border-b pb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-accent text-white text-sm">01</span>
              Brand Identity
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-text-secondary uppercase tracking-widest">Color Palette</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2"><div className="h-20 w-full bg-primary-navy rounded-xl shadow-inner"></div><p className="text-xs font-bold text-primary-navy">Primary (#0B1F3B)</p></div>
                  <div className="space-y-2"><div className="h-20 w-full bg-[#132A4A] rounded-xl shadow-inner"></div><p className="text-xs font-bold text-primary-navy">Secondary (#132A4A)</p></div>
                  <div className="space-y-2"><div className="h-20 w-full bg-primary-accent rounded-xl shadow-inner"></div><p className="text-xs font-bold text-primary-navy">Accent (#1F6FFF)</p></div>
                  <div className="space-y-2"><div className="h-20 w-full bg-[#3D8FFF] rounded-xl shadow-inner"></div><p className="text-xs font-bold text-primary-navy">Accent 2 (#3D8FFF)</p></div>
                  <div className="space-y-2"><div className="h-20 w-full bg-verification rounded-xl shadow-inner"></div><p className="text-xs font-bold text-primary-navy">Success (#00C2AB)</p></div>
                  <div className="space-y-2"><div className="h-20 w-full bg-[#D60000] rounded-xl shadow-inner"></div><p className="text-xs font-bold text-primary-navy">Error (#D60000)</p></div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-text-secondary uppercase tracking-widest">Typography</h3>
                <div className="space-y-4">
                  <div><p className="text-xs text-text-secondary mb-1">Heading (Sora Bold)</p><p className="text-4xl font-bold font-heading text-primary-navy">The quick brown fox</p></div>
                  <div><p className="text-xs text-text-secondary mb-1">Body (Barlow Regular)</p><p className="text-lg text-text-secondary leading-relaxed">Jumps over the lazy dog. Vehicle history reports provide comprehensive data.</p></div>
                  <div><p className="text-xs text-text-secondary mb-1">Data (JetBrains Mono)</p><p className="text-xl font-mono text-primary-navy tracking-wider uppercase">1HGCM82633A004352</p></div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════
              02 — Atomic Components
          ═══════════════════════════════════ */}
          <section id="atomic">
            <h2 className="text-3xl font-bold text-primary-navy mb-8 border-b pb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-accent text-white text-sm">02</span>
              Atomic Components
            </h2>
            <div className="grid gap-10">
              {/* Badges */}
              <div>
                <h3 className="text-lg font-bold text-primary-navy mb-4">Badges &amp; Status Labels</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Badge variant="primary">Popular</Badge>
                  <Badge variant="orange">Save 66%</Badge>
                  <Badge variant="green">Verified</Badge>
                  <Badge variant="outline">New Article</Badge>
                </div>
              </div>

              {/* Buttons */}
              <div>
                <h3 className="text-lg font-bold text-primary-navy mb-4">Buttons &amp; Actions</h3>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="space-y-2"><p className="text-[10px] font-bold text-text-secondary uppercase">Primary</p><Button className="bg-primary-accent hover:bg-hover-accent text-white font-bold px-8 py-6 rounded-xl">Get Report</Button></div>
                  <div className="space-y-2"><p className="text-[10px] font-bold text-text-secondary uppercase">Navy</p><Button className="bg-primary-navy hover:bg-slate-800 text-white font-bold px-8 py-6 rounded-xl">Search VIN</Button></div>
                  <div className="space-y-2"><p className="text-[10px] font-bold text-text-secondary uppercase">Outline</p><Button variant="outline" className="border-slate-200 text-primary-navy font-bold px-8 py-6 rounded-xl">Learn More</Button></div>
                  <div className="space-y-2"><p className="text-[10px] font-bold text-text-secondary uppercase">Ghost</p><Button variant="ghost" className="text-primary-navy hover:text-primary-accent font-bold px-8 py-6 rounded-xl">Sign In</Button></div>
                </div>
              </div>

              {/* Inputs */}
              <div>
                <h3 className="text-lg font-bold text-primary-navy mb-4">Form Inputs</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2"><p className="text-[10px] font-bold text-text-secondary uppercase">Standard Input</p><Input placeholder="Enter VIN Number" className="h-14 rounded-xl border-slate-200 focus:ring-primary-accent" /></div>
                  <div className="space-y-2"><p className="text-[10px] font-bold text-text-secondary uppercase">Data Input (Mono)</p><Input placeholder="VIN" className="h-14 rounded-xl border-slate-200 font-mono uppercase tracking-widest" /></div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════
              03 — Interactive Components
          ═══════════════════════════════════ */}
          <section id="interactive">
            <h2 className="text-3xl font-bold text-primary-navy mb-8 border-b pb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-accent text-white text-sm">03</span>
              Interactive Components
            </h2>
            <div className="grid gap-10">
              {/* Toggles */}
              <div>
                <h3 className="text-lg font-bold text-primary-navy mb-6">Selection Toggles</h3>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="space-y-2"><p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Pill Toggle (with Badge)</p><Toggle options={[{ label: 'Personal', value: 'personal' }, { label: 'Business', value: 'business' }]} value={toggle1} onChange={setToggle1} badge="Save 66%" /></div>
                  <div className="space-y-2"><p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Switch Toggle</p><Toggle variant="switch" options={[{ label: 'Vehicle History', value: 'history' }, { label: 'Window Sticker', value: 'sticker' }]} value={toggle2} onChange={setToggle2} /></div>
                </div>
              </div>

              {/* Accordion */}
              <div>
                <h3 className="text-lg font-bold text-primary-navy mb-6">FAQ Accordion</h3>
                <FAQAccordion
                  openIndex={openFaq}
                  onToggle={(i) => setOpenFaq(openFaq === i ? null : i)}
                  items={[
                    { q: "What is included in a vehicle history report?", a: "A comprehensive vehicle history report includes detailed specifications, accident history, title records, mileage verification, service records, and more." },
                    { q: "What is a window sticker, and what does it include?", a: "A window sticker (Monroney sticker) provides the original factory specifications, MSRP, standard equipment, optional packages, and fuel economy ratings." }
                  ]}
                />
              </div>

              {/* Search Tools */}
              <div>
                <h3 className="text-lg font-bold text-primary-navy mb-6">Search &amp; Lookup Tools</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2"><p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Sidebar Variant</p><SearchTools variant="sidebar" /></div>
                  <div className="space-y-2"><p className="text-xs font-bold text-text-secondary uppercase tracking-wider">Hero Variant</p><SearchTools variant="hero" /></div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════
              04 — Composite Cards
          ═══════════════════════════════════ */}
          <section id="cards">
            <h2 className="text-3xl font-bold text-primary-navy mb-8 border-b pb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-accent text-white text-sm">04</span>
              Composite Cards
            </h2>
            <div className="grid gap-12">
              {/* Pricing Cards */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary-navy">Pricing Packages</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <PricingCard name="1 Report" save="67% < Carfax" price="$19.99" unit="/report" total="Total: $19.99 Full price" buttonText="Get report" />
                  <PricingCard name="10 Reports" save="Save 60%" price="$8.00" unit="/reports" total="Total: $199.90 $79.99" popular={true} buttonText="Get reports" />
                  <PricingCard name="50 Reports" save="Save 65%" price="$7.00" unit="/reports" total="Total: $999.50 $350.00" buttonText="Get reports" />
                </div>
              </div>

              {/* Blog Cards */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary-navy">Blog &amp; Content Cards</h3>
                <div className="grid gap-8">
                  <div>
                    <p className="text-xs font-bold text-text-secondary uppercase mb-4">Horizontal Layout</p>
                    <BlogCard id={1} title="Best Used Volvo to Buy in 2025" author="Gracia Anindita" date="May 26, 2025" excerpt="If you're considering buying a used car, you've likely faced the common dilemma: reliability versus cost..." image="https://picsum.photos/seed/volvo/800/500" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs font-bold text-text-secondary uppercase mb-4">Vertical Layout</p>
                      <BlogCard variant="vertical" id={2} title="Car With a Lien: What It Means" author="Gracia Anindita" date="April 23, 2025" excerpt="Buying a used car can be an exciting way to save money, but it's challenging." image="https://picsum.photos/seed/lien/800/500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-secondary uppercase mb-4">Mini Layout</p>
                      <div className="space-y-4">
                        <BlogCard variant="mini" id={3} title="Red Flags When Buying a Used Truck" author="Gracia Anindita" date="April 21, 2025" excerpt="" image="https://picsum.photos/seed/truck/800/500" />
                        <BlogCard variant="mini" id={4} title="What is a Lien on a Car?" author="Gracia Anindita" date="April 19, 2025" excerpt="" image="https://picsum.photos/seed/carlien/800/500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════
              05 — Hero Sections (All Pages)
          ═══════════════════════════════════ */}
          <section id="heroes">
            <h2 className="text-3xl font-bold text-primary-navy mb-8 border-b pb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-accent text-white text-sm">05</span>
              Hero Sections — All Pages
            </h2>
            <div className="grid gap-12">
              <SectionPreview title="Home Page Hero"><Hero /></SectionPreview>
              <SectionPreview title="VIN Check Hero"><VinCheckHero /></SectionPreview>
              <SectionPreview title="VIN Decoder Hero"><VinDecoderHero /></SectionPreview>
              <SectionPreview title="License Plate Lookup Hero"><LicensePlateHero /></SectionPreview>
              <SectionPreview title="Classic Window Sticker Hero"><ClassicHero /></SectionPreview>
              <SectionPreview title="Window Sticker Hero"><WindowStickerHero /></SectionPreview>
            </div>
          </section>

          {/* ═══════════════════════════════════
              06 — Home Page Sections
          ═══════════════════════════════════ */}
          <section id="home-sections">
            <h2 className="text-3xl font-bold text-primary-navy mb-8 border-b pb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-accent text-white text-sm">06</span>
              Home Page Sections
            </h2>
            <div className="grid gap-12">
              <SectionPreview title="Features Grid"><Features /></SectionPreview>
              <SectionPreview title="How It Works"><HowItWorks /></SectionPreview>
              <SectionPreview title="Why Choose Us"><WhyChooseUs /></SectionPreview>
              <SectionPreview title="What's Included"><WhatsIncluded /></SectionPreview>
              <SectionPreview title="Benefits Split"><Benefits /></SectionPreview>
              <SectionPreview title="Where Is VIN"><WhereIsVin /></SectionPreview>
              <SectionPreview title="Comparison Table"><ComparisonTable /></SectionPreview>
              <SectionPreview title="Vehicle Types"><VehicleTypes /></SectionPreview>
              <SectionPreview title="Additional Tools"><AdditionalTools /></SectionPreview>
              <SectionPreview title="CTA Section"><CtaSection /></SectionPreview>
            </div>
          </section>

          {/* ═══════════════════════════════════
              07 — Navigation & Footer
          ═══════════════════════════════════ */}
          <section id="navigation">
            <h2 className="text-3xl font-bold text-primary-navy mb-8 border-b pb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-accent text-white text-sm">07</span>
              Navigation &amp; Footer
            </h2>
            <div className="grid gap-12">
              <SectionPreview title="Main Header (with mobile menu)"><Header /></SectionPreview>
              <SectionPreview title="Main Footer"><Footer /></SectionPreview>
            </div>
          </section>

        </div>
      </div>

      {/* Showcase Footer */}
      <div className="bg-slate-900 py-12 text-white border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <p className="text-slate-500 text-sm">Vehicles Report Design System v2.0.0</p>
        </div>
      </div>
    </div>
  )
}
