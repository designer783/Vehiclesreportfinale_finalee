import { Link } from "react-router-dom"
import { ArrowRight, FileKey, ShieldCheck, FileText, Search } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "./ui/FadeIn"

export function ClassicVsModernTable() {
  const comparisons = [
    { info: "Vehicle specifications", classic: true, modern: true },
    { info: "Original MSRP", classic: true, modern: true },
    { info: "Mechanical features", classic: true, modern: true },
    { info: "Exterior color", classic: true, modern: true },
    { info: "Interior color", classic: false, modern: true },
    { info: "Safety and security", classic: false, modern: true },
    { info: "Options & packages", classic: true, modern: true },
    { info: "Fuel economy", classic: false, modern: true },
    { info: "Warranty information", classic: false, modern: true },
    { info: "NHTSA safety ratings", classic: false, modern: true },
    { info: "Price breakdown", classic: false, modern: true },
    { info: "Number produced", classic: true, modern: false },
    { info: "QR code", classic: true, modern: true },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <FadeIn direction="down" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            Do Window Stickers for Modern and Classic Cars Differ?
          </h2>
          <p className="text-lg text-text-secondary">
            Modern and classic window stickers contain different information because rules changed over time. “Classic cars” here means vehicles built before VINs became standardized to 17 digits. Here’s what to expect from both stickers:
          </p>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.2} className="overflow-x-auto rounded-xl border border-card-border shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-bg-secondary border-b border-card-border">
                <th className="py-4 px-6 font-bold text-primary-navy">Information</th>
                <th className="py-4 px-6 font-bold text-primary-navy text-center">Classic Car Sticker</th>
                <th className="py-4 px-6 font-bold text-primary-navy text-center">Modern Car Sticker</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr key={index} className="border-b border-card-border last:border-0 hover:bg-bg-secondary/50 transition-colors">
                  <td className="py-4 px-6 text-text-secondary font-medium">{row.info}</td>
                  <td className="py-4 px-6 text-center">
                    {row.classic ? <span className="text-green-500 font-bold text-xl">✔</span> : <span className="text-red-500 font-bold text-xl">✖</span>}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.modern ? <span className="text-green-500 font-bold text-xl">✔</span> : <span className="text-red-500 font-bold text-xl">✖</span>}
                  </td>
                </tr>
              ))}
              <tr className="border-t-2 border-card-border bg-bg-secondary/30">
                <td className="py-4 px-6 font-bold text-primary-navy">View sample</td>
                <td className="py-4 px-6 text-center">
                  <Link to="/sample" className="text-primary-accent hover:underline font-medium">Sample classic sticker</Link>
                </td>
                <td className="py-4 px-6 text-center">
                  <Link to="/sample" className="text-primary-accent hover:underline font-medium">Sample Modern sticker</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </FadeIn>
      </div>
    </section>
  )
}

export function ClassicCarBrands() {
  const brands = [
    "Arrow", "Auburn", "Buick", "Cadillac", "Chandler", "Checker", "Chevrolet", "Chrysler", "Cord", "Cunningham", "Davis", "Desoto", "Dodge", "Duesenberg", "Dupont", "Durant", "Elcar", "Erskine", "Essex", "Ford", "Franklin", "Gardner", "Graham", "Hudson", "Imperial", "Jordan", "Kaiser", "Kissel", "Knight", "Lasalle", "Lincoln", "Locomobile", "Marmon", "Mercury", "Moon", "Mustang", "Nash", "Oakland", "Oldsmobile", "Overland", "Packard", "Paige", "Peerless", "Plymouth", "Pontiac", "Reo", "Roamer", "Rolls Royce", "Stearns", "Studebaker"
  ];

  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            Get Classic Window Sticker by VIN for All Pre-1981 Car Models
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our tools allow the reproduction of window stickers for any classic vehicles manufactured since 1910. Select a brand below to get started:
          </p>
        </FadeIn>
        
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-6xl mx-auto text-center">
          {brands.map((brand, index) => (
            <motion.div variants={fadeUpVariant} key={index} className="p-3 bg-white rounded-lg border border-card-border hover:bg-primary-accent/5 hover:border-primary-accent/30 transition-colors cursor-pointer shadow-sm">
              <span className="text-primary-navy font-medium text-sm">{brand}</span>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export function ClassicAdditionalTools() {
  const tools = [
    {
      title: "VIN Decoder",
      desc: "Decode any VIN for free to reveal basic details like the year, make, model, engine, and transmission.",
      linkText: "Decode VIN",
      href: "/vin-decoder",
      icon: <FileKey className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "VIN Check",
      desc: "Lookup records for accidents, thefts, mileage, titles, liens, and more from the car’s past life.",
      linkText: "Check VIN",
      href: "/vin-check",
      icon: <ShieldCheck className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "Window Sticker Lookup",
      desc: "Finds original factory stickers for any post-1981 vehicle with 17-digit VIN numbers.",
      linkText: "Get Window Sticker",
      href: "/window-stickers",
      icon: <FileText className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "License Plate Lookup",
      desc: "Enter the plate number to access the full vehicle history when you don’t have the VIN available.",
      linkText: "Lookup License Plate",
      href: "/license-plate",
      icon: <Search className="h-6 w-6 text-primary-accent" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            Additional Tools for More Vehicle Information
          </h2>
          <p className="text-lg text-text-secondary">
            Try out our other services and learn more about any vehicle history and details:
          </p>
        </FadeIn>
        
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div variants={fadeUpVariant} key={index} className="bg-bg-secondary p-8 rounded-2xl shadow-sm border border-card-border flex flex-col h-full hover:shadow-md transition-shadow group">
              <div className="h-12 w-12 rounded-full bg-primary-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-primary-navy mb-3 group-hover:text-primary-accent transition-colors">{tool.title}</h3>
              <p className="text-text-secondary mb-6 flex-grow">{tool.desc}</p>
              <Link to={tool.href} className="text-primary-accent font-semibold flex items-center hover:text-hover-accent transition-colors group-hover:translate-x-1">
                {tool.linkText} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
