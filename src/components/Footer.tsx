import { Car, Facebook, Instagram, Linkedin, Phone, HelpCircle, Youtube } from "lucide-react"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-primary-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo-white.png" alt="Vehicles Report" className="h-10 w-auto" />
            </Link>
            <p className="text-white/60 text-sm max-w-xs">
              Don't leave the history behind on your vehicle. Check for accidents, title issues, repairs, and more.
            </p>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-accent" />
                <span>(800)-709-6297</span>
              </div>
              <div className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-primary-accent" />
                <a href="https://vehiclehistoryreports.freshdesk.com/en/support/home" className="hover:text-white transition-colors">Help desk</a>
              </div>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/vehiclesreportcom" className="text-white/60 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/company/vehicles-report/" className="text-white/60 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/vehiclesreport/" className="text-white/60 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="https://www.youtube.com/channel/UCgNt3drSJeZI57XjBrhvk9w" className="text-white/60 hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold font-heading mb-4 text-lg">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/blogs" className="hover:text-white transition-colors">Article</Link></li>
              <li><Link to="/sample" className="hover:text-white transition-colors">Sample</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-heading mb-4 text-lg">Products</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/window-stickers" className="hover:text-white transition-colors">Get window sticker</Link></li>
              <li><Link to="/vin-check" className="hover:text-white transition-colors">VIN Check</Link></li>
              <li><Link to="/vin-decoder" className="hover:text-white transition-colors">VIN Decoder</Link></li>
              <li><Link to="/license-plate" className="hover:text-white transition-colors">License plate lookup</Link></li>
              <li><Link to="/classic-window-stickers" className="hover:text-white transition-colors">Classic window sticker</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-heading mb-4 text-lg">Legal</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/dealer" className="hover:text-white transition-colors">Dealers</Link></li>
              <li><Link to="/request-refund" className="hover:text-white transition-colors">Request a Refund</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/40 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} VehiclesReport. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Data provided by NMVTIS and other trusted sources.</p>
        </div>
      </div>
    </footer>
  )
}
