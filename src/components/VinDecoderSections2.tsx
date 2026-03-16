import { Button } from "@/src/components/ui/button"
import { ShieldCheck, MapPin, FileText, Search, Settings, Car } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, fadeUpVariant } from "./ui/FadeIn"

export function VinMeaning() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="space-y-8">
          <FadeIn direction="down" className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy">
              VIN Number: Meaning and Importance
            </h2>
            <p className="text-lg text-text-secondary">
              VIN stands for Vehicle Identification Number, and it’s a special 17-character code that uniquely identifies every vehicle. Every car, truck, and SUV built after 1981 has this unique code stamped on it. When you’re buying a used car, the VIN tells you if the seller is being honest about what they’re selling.
            </p>
          </FadeIn>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-heading text-primary-navy">
              Why VINs Matter When Buying Used Cars
            </h3>
            
            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeUpVariant} className="bg-bg-secondary p-6 rounded-2xl border border-card-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary-accent/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-5 w-5 text-primary-accent" />
                  </div>
                  <h4 className="text-xl font-bold font-heading text-primary-navy">The VIN Never Lies</h4>
                </div>
                <p className="text-text-secondary">
                  Imagine someone sells you a “2020 Honda Accord” but it’s actually a 2018 model. That’s a big difference in value! The VIN never lies. It tells you the real year, the actual model, and exactly what’s under the hood.
                </p>
              </motion.div>
              
              <motion.div variants={fadeUpVariant} className="bg-bg-secondary p-6 rounded-2xl border border-card-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary-accent/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-5 w-5 text-primary-accent" />
                  </div>
                  <h4 className="text-xl font-bold font-heading text-primary-navy">The VIN Remains with the Car</h4>
                </div>
                <p className="text-text-secondary">
                  Sellers can change listings, repaint cars, and swap badges. But they can’t change the VIN without breaking the law. Smart buyers always use a VIN decoder to verify a vehicle’s details before handing over the cash.
                </p>
              </motion.div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhereToFindVin() {
  const locations = [
    {
      title: "On the Dashboard",
      desc: "Stand outside at the driver’s side. Look through the windshield at the bottom corner of the dashboard. You’ll see a small metal plate with the VIN stamped on it.",
      icon: <Car className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "On the Driver's Door Jamb",
      desc: "Open the driver’s door and look at the frame where the door latches. There’s a sticker that shows the VIN, along with tire pressure information and the month the car was built.",
      icon: <MapPin className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "Under the Hood",
      desc: "Pop the hood and look at the front of the engine. Some cars have the VIN stamped on the engine block. Others have it on the firewall (the metal wall between the engine and the inside of the vehicle.",
      icon: <Settings className="h-6 w-6 text-primary-accent" />
    },
    {
      title: "On Your Vehicle Documents",
      desc: "Your VIN appears on important paperwork: Title (the most important document), Registration card, Insurance card, Owner’s manual, Service records.",
      icon: <FileText className="h-6 w-6 text-primary-accent" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="down" className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            Where to Find the VIN Number?
          </h2>
          <p className="text-lg text-text-secondary">
            You can find the VIN in several spots on every vehicle. Here’s where to look:
          </p>
        </FadeIn>
        
        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map((loc, index) => (
            <motion.div variants={fadeUpVariant} key={index} className="flex gap-4 bg-white p-6 rounded-2xl shadow-sm border border-card-border">
              <div className="h-12 w-12 rounded-full bg-primary-accent/10 flex items-center justify-center shrink-0">
                {loc.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-primary-navy mb-2">{loc.title}</h3>
                <p className="text-text-secondary">{loc.desc}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
        
        <FadeIn direction="up" delay={0.2} className="mt-12 text-center">
          <Button className="h-14 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Where is VIN Number?
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}

export function HowToReadVin() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="space-y-12">
          <FadeIn direction="down" className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy">
              How to Read a VIN Number: The Complete Breakdown
            </h2>
            <p className="text-lg text-text-secondary">
              Every VIN is like a secret code. Once you know how to read it, you can access important details about any vehicle. Let’s break down what each number and letter means.
            </p>
            <div className="pt-4">
              <Button className="h-12 px-6 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold transition-all">
                Decode A Toyota VIN Number
              </Button>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="prose prose-lg max-w-none text-text-secondary">
            <p className="bg-bg-secondary p-4 rounded-lg font-mono text-center text-xl font-bold text-primary-navy border border-card-border">
              Let’s use a sample VIN to learn: 1G1ZD5ST8JF123456
            </p>
            <p className="text-center">We’ll go through this character by character so you understand exactly what you’re looking at.</p>
          </FadeIn>
          <div className="prose prose-lg max-w-none text-text-secondary">
            <h3 className="text-2xl font-bold font-heading text-primary-navy mt-10">Characters 1-3: World Manufacturer Identifier (WMI)</h3>
            <p>The first three characters tell you where the car was made and who built it. This section is called the World Manufacturer Identifier, but you can just think of it as the “origin code.”</p>

            <h4 className="text-xl font-bold font-heading text-primary-navy mt-6">1st Character: The Country Code</h4>
            <p>The first number or letter shows which country built the car.</p>
            <ul className="grid grid-cols-2 gap-2 list-none pl-0">
              <li><strong>1, 4, or 5</strong> = United States</li>
              <li><strong>2</strong> = Canada</li>
              <li><strong>3</strong> = Mexico</li>
              <li><strong>J</strong> = Japan</li>
              <li><strong>K</strong> = South Korea</li>
              <li><strong>S</strong> = England</li>
              <li><strong>W</strong> = Germany</li>
              <li><strong>V</strong> = France</li>
              <li><strong>Z</strong> = Italy</li>
            </ul>
            <p>In our example VIN (1G1ZD5ST8JF123456), the first character is “1”. That means this car was built in the United States.</p>

            <h4 className="text-xl font-bold font-heading text-primary-navy mt-6">2nd Character: The Manufacturer</h4>
            <p>The second character identifies the specific car company.</p>
            <ul className="grid grid-cols-2 gap-2 list-none pl-0">
              <li><strong>G</strong> = General Motors</li>
              <li><strong>F</strong> = Ford</li>
              <li><strong>C</strong> = Chrysler</li>
              <li><strong>H</strong> = Honda</li>
              <li><strong>T</strong> = Toyota</li>
              <li><strong>N</strong> = Nissan</li>
              <li><strong>B</strong> = BMW</li>
            </ul>
            <p>Our example has “G” in the second spot, so we know General Motors made this car.</p>

            <h4 className="text-xl font-bold font-heading text-primary-navy mt-6">3rd Character: Vehicle Type or Division</h4>
            <p>The third character gets more specific. It tells you which brand under that manufacturer or what type of vehicle it is.</p>
            <p>For General Motors:</p>
            <ul className="grid grid-cols-2 gap-2 list-none pl-0">
              <li><strong>1</strong> = Chevrolet</li>
              <li><strong>4</strong> = Buick</li>
              <li><strong>6</strong> = Cadillac</li>
              <li><strong>8</strong> = Saturn</li>
            </ul>
            <p>Our example VIN has “1” in the third position. So this is a Chevrolet made by General Motors in the United States.</p>

            <h3 className="text-2xl font-bold font-heading text-primary-navy mt-10">Characters 4-9: Vehicle Descriptor Section (VDS)</h3>
            <p>These six characters describe the actual vehicle and the check digit. This is where you learn about the body style, engine, model, and safety features.</p>
            
            <h4 className="text-xl font-bold font-heading text-primary-navy mt-6">What These Characters Tell You</h4>
            <p>Every car company uses positions 4-8 differently, but they all include similar information:</p>
            <ul>
              <li><strong>Body style:</strong> Is it a sedan, coupe, SUV, or truck?</li>
              <li><strong>Engine type:</strong> What size engine does it have?</li>
              <li><strong>Model:</strong> Is it a Civic, Camry, or F-150?</li>
              <li><strong>Safety features:</strong> Does it have airbags? What safety equipment came standard?</li>
              <li><strong>Restraint system:</strong> Information about seatbelts and safety systems.</li>
            </ul>
            <p>In our example, characters 4-8 are “ZD5ST”. For a Chevrolet, this might tell us it’s a Camaro with a specific engine size and body style. But here’s the catch: each manufacturer has their own code book.</p>

            <h4 className="text-xl font-bold font-heading text-primary-navy mt-6">Character 9: The Check Digit</h4>
            <p>Position 9 is special. It’s called the “check digit,” and it’s like a security feature. Car manufacturers use a mathematical formula to calculate this number, plugging other VIN characters into the formula. This proves the VIN is real and hasn’t been tampered with. It’s usually a number or just “X.”</p>

            <h3 className="text-2xl font-bold font-heading text-primary-navy mt-10">Characters 10-17: Vehicle Identifier Section (VIS)</h3>
            <p>These characters provide unique, specific information for each vehicle. It includes the model year, assembly plant, and a 6-digit production sequence number.</p>

            <h4 className="text-xl font-bold font-heading text-primary-navy mt-6">Character 10: The Model Year</h4>
            <p>Position 10 indicates the year the car was made and is represented by both letters and numbers. The year code chart table below will help you decode and find the model year of any vehicle.</p>
            
            <div className="overflow-x-auto my-8">
              <table className="min-w-full border-collapse border border-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-primary-navy">Code</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-primary-navy">Year</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-primary-navy">Code</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-primary-navy">Year</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-primary-navy">Code</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-primary-navy">Year</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-primary-navy">Code</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-primary-navy">Year</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-primary-navy">Code</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-primary-navy">Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 font-mono">A</td><td className="border border-gray-200 px-4 py-2">1980</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">L</td><td className="border border-gray-200 px-4 py-2">1990</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">Y</td><td className="border border-gray-200 px-4 py-2">2000</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">A</td><td className="border border-gray-200 px-4 py-2">2010</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">L</td><td className="border border-gray-200 px-4 py-2">2020</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 font-mono">B</td><td className="border border-gray-200 px-4 py-2">1981</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">M</td><td className="border border-gray-200 px-4 py-2">1991</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">1</td><td className="border border-gray-200 px-4 py-2">2001</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">B</td><td className="border border-gray-200 px-4 py-2">2011</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">M</td><td className="border border-gray-200 px-4 py-2">2021</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 font-mono">C</td><td className="border border-gray-200 px-4 py-2">1982</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">N</td><td className="border border-gray-200 px-4 py-2">1992</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">2</td><td className="border border-gray-200 px-4 py-2">2002</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">C</td><td className="border border-gray-200 px-4 py-2">2012</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">N</td><td className="border border-gray-200 px-4 py-2">2022</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 font-mono">D</td><td className="border border-gray-200 px-4 py-2">1983</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">P</td><td className="border border-gray-200 px-4 py-2">1993</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">3</td><td className="border border-gray-200 px-4 py-2">2003</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">D</td><td className="border border-gray-200 px-4 py-2">2013</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">P</td><td className="border border-gray-200 px-4 py-2">2023</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 font-mono">E</td><td className="border border-gray-200 px-4 py-2">1984</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">R</td><td className="border border-gray-200 px-4 py-2">1994</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">4</td><td className="border border-gray-200 px-4 py-2">2004</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">E</td><td className="border border-gray-200 px-4 py-2">2014</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">R</td><td className="border border-gray-200 px-4 py-2">2024</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 font-mono">F</td><td className="border border-gray-200 px-4 py-2">1985</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">S</td><td className="border border-gray-200 px-4 py-2">1995</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">5</td><td className="border border-gray-200 px-4 py-2">2005</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">F</td><td className="border border-gray-200 px-4 py-2">2015</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">S</td><td className="border border-gray-200 px-4 py-2">2025</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 font-mono">G</td><td className="border border-gray-200 px-4 py-2">1986</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">T</td><td className="border border-gray-200 px-4 py-2">1996</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">6</td><td className="border border-gray-200 px-4 py-2">2006</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">G</td><td className="border border-gray-200 px-4 py-2">2016</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">T</td><td className="border border-gray-200 px-4 py-2">2026</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 font-mono">H</td><td className="border border-gray-200 px-4 py-2">1987</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">V</td><td className="border border-gray-200 px-4 py-2">1997</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">7</td><td className="border border-gray-200 px-4 py-2">2007</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">H</td><td className="border border-gray-200 px-4 py-2">2017</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">V</td><td className="border border-gray-200 px-4 py-2">2027</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 font-mono">J</td><td className="border border-gray-200 px-4 py-2">1988</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">W</td><td className="border border-gray-200 px-4 py-2">1998</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">8</td><td className="border border-gray-200 px-4 py-2">2008</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">J</td><td className="border border-gray-200 px-4 py-2">2018</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">W</td><td className="border border-gray-200 px-4 py-2">2028</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 font-mono">K</td><td className="border border-gray-200 px-4 py-2">1989</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">X</td><td className="border border-gray-200 px-4 py-2">1999</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">9</td><td className="border border-gray-200 px-4 py-2">2009</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">K</td><td className="border border-gray-200 px-4 py-2">2019</td>
                    <td className="border border-gray-200 px-4 py-2 font-mono">X</td><td className="border border-gray-200 px-4 py-2">2029</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-yellow-800">
              Notice that I, O, Q, U, and Z never appear in the year code because they look too much like numbers. The letter I looks like 1. The letter O looks like 0. The letter Q looks like O. This prevents confusion and fraud.
            </p>
            <p>In our sample VIN, position 10 is “J”, meaning this car was made in 2018 (it could also be 1988, but we’d look at other clues to know which one.)</p>

            <h4 className="text-xl font-bold font-heading text-primary-navy mt-6">Character 11: The Assembly Plant</h4>
            <p>Position 11 shows which factory built the car. Every manufacturer has factories in different places, and each factory gets its own code letter. In our example, position 11 is “F”. For Chevrolet, this might be their Fairfax, Kansas plant, or their Flint, Michigan plant. Our free VIN decoder knows which one.</p>

            <h4 className="text-xl font-bold font-heading text-primary-navy mt-6">Characters 12-17: The Serial Number</h4>
            <p>The last six characters are the vehicle’s serial number. It’s what makes your specific car different from every other car of the same make and model. Two cars might be identical twins: same year, same model, same color, same options. But their serial numbers will be different.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ImportanceOfVinDecoder() {
  return (
    <section className="py-16 md:py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <FadeIn direction="down" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-navy mb-4">
            The Importance of Using a VIN Decoder
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Running a free VIN check helps everyone involved in buying and selling cars. Here’s how different people benefit:
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn direction="left" className="space-y-6">
            <h3 className="text-2xl font-bold font-heading text-primary-navy border-b pb-2">Buyers</h3>
            <p className="text-text-secondary">A quick VIN decoding can help used car buyers in the following ways:</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2">Verify the Seller is Telling the Truth</h4>
                <p className="text-text-secondary">Not all sellers lie, but some do. They might not even realize they’re giving you wrong information. The VIN number decoder catches these lies before you waste your time looking at the car.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2">Make Sure the Car Matches the Listing</h4>
                <p className="text-text-secondary">When you arrive to see the car, decode the VIN right there. If it matches what they advertised, great! If not, you can point out the mistake and negotiate a fair price based on the actual vehicle.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2">Check if the Price is Fair</h4>
                <p className="text-text-secondary">Our VIN decoding tool shows you the estimated market value. This gives you negotiating power. If they want $18,000 but similar cars sell for $15,000, you can make a lower offer. Why pay more than a car is worth?</p>
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2">Avoid Buying the Wrong Vehicle</h4>
                <p className="text-text-secondary">Decode a VIN number before you test drive. Make sure it’s actually what you want. Imagine you want a V6 engine for towing your boat, but the car actually has a 4-cylinder. You wouldn’t find out until it’s too late. These mistakes cost you time and money.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" className="space-y-6">
            <h3 className="text-2xl font-bold font-heading text-primary-navy border-b pb-2">Sellers and Dealers</h3>
            <p className="text-text-secondary">If you’re selling, a free VIN decoding can help you sell faster by providing these benefits:</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2">Show Buyers You Have Nothing to Hide</h4>
                <p className="text-text-secondary">When you include the VIN in your listing, buyers trust you more. You’re saying, “Here’s the VIN. Check it yourself. I’m not hiding anything.” Honest sellers who use our VIN lookup tool to verify their listings sell cars faster and get better prices.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2">Price Your Car Correctly</h4>
                <p className="text-text-secondary">Use our market value estimates to set a fair asking price. If you price too high, people scroll past your ad. If you price too low, you lose money. The VIN decoder shows what your specific vehicle is worth.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-primary-navy mb-2">Provide Accurate Information in Listings</h4>
                <p className="text-text-secondary">Get all the details right the first time. When you decode your VIN, you can copy the correct information into your listing. Accurate listings attract more serious buyers and fewer tire-kickers who end up wasting your time.</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.2} className="mt-12 text-center">
          <Button className="h-14 px-8 bg-primary-accent hover:bg-hover-accent text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Lookup VIN For Free
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
