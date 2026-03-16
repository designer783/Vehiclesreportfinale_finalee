import React from "react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { ShieldCheck, TrendingUp, Users, BarChart3, CheckCircle2, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "@/src/components/ui/FadeIn"

export function Dealers() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200 pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <FadeIn direction="down">
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-primary-navy mb-6">
              The Smart Solutions for Car Dealerships
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl font-semibold text-primary-accent mb-4">
              Accurate Data. Better decision. Better Results
            </p>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Vehicle history data & Window sticker for automotive dealers
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4} className="mt-12 flex justify-center">
            <div className="animate-bounce p-2 bg-slate-100 rounded-full">
              <ArrowDown className="h-6 w-6 text-primary-navy" />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Lead Generation Section */}
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <FadeIn direction="up" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-navy mb-4">
              What is your interest? Tell us about your dealership
            </h2>
            <p className="text-text-secondary">Fill out our dealer form to Get Started</p>
          </div>
          
          <form className="space-y-6 max-w-md mx-auto">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary-navy">Dealership Name</label>
              <Input placeholder="Enter your dealership name" className="h-12" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary-navy">Contact Email</label>
              <Input type="email" placeholder="email@dealership.com" className="h-12" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-primary-navy">Phone Number</label>
              <Input placeholder="(555) 000-0000" className="h-12" />
            </div>
            <Button className="w-full h-12 bg-primary-accent hover:bg-hover-accent text-white font-bold text-lg rounded-xl">
              Join Us
            </Button>
            <p className="text-center text-sm text-text-tertiary">
              Don’t have an account? <a href="#" className="text-primary-accent font-semibold hover:underline">Sign up</a>
            </p>
          </form>
        </FadeIn>
      </div>

      {/* Services Section */}
      <div className="bg-primary-navy py-24 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn direction="down" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-primary-accent text-sm font-bold mb-6">
              <ShieldCheck className="h-4 w-4" />
              Don’t end up buying a stolen vehicle
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Products and Services</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              At Vehiclesreport, we are constantly thinking of ways to make every experience better for dealerships.
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left" className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-accent">Grow your business to the next level</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Vehiclesreport is powered by the most up-to-date technologies, and tools. Let’s leverage your presence in auto sales industry combining experience and accuracy.
              </p>
              <Button className="h-14 px-10 bg-white text-primary-navy hover:bg-slate-100 font-bold text-lg rounded-xl transition-all">
                Book a demo
              </Button>
            </FadeIn>
            <FadeIn direction="right" className="bg-white/5 rounded-3xl p-8 border border-white/10">
              <img 
                src="https://picsum.photos/seed/dealership/600/400" 
                alt="Dealership Solutions" 
                className="rounded-2xl w-full h-auto shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="container mx-auto px-4 py-24 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-primary-navy mb-4">Protect Your Dealership</h4>
            <p className="text-text-secondary leading-relaxed">
              Discover potential damage before every purchase. Our vehicle history data helps you to better understand and buy used vehicles that best meet your dealership needs.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-emerald-600" />
            </div>
            <h4 className="text-xl font-bold text-primary-navy mb-4">Boost Buyer Confidence</h4>
            <p className="text-text-secondary leading-relaxed">
              Our vehicle history report can help your customers to be more confident in your dealership and to erase doubt about the cars in your inventory.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="text-xl font-bold text-primary-navy mb-4">Make Smart Inventory Decision</h4>
            <p className="text-text-secondary leading-relaxed">
              Our vehicle data can enhance your inventory decisions by helping you spot hidden or potential issues before the purchase of a car.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
              <CheckCircle2 className="h-6 w-6 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-primary-navy mb-4">Sell Only Healthy Cars</h4>
            <p className="text-text-secondary leading-relaxed">
              Promote the premium image of your dealership by buying and selling vehicles that interest your customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
