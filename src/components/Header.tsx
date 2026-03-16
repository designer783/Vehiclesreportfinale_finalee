import { Button } from "@/src/components/ui/button"
import { Car, Menu, X, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  const navLinks = [
    { to: "/window-stickers", label: "Window Sticker" },
    { to: "/vin-check", label: "VIN Number Check Report" },
    { to: "/vin-decoder", label: "VIN Decoder" },
    { to: "/license-plate", label: "License Plate Lookup" },
    { to: "/classic-window-stickers", label: "Classic Window Stickers" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-card-border bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo-blue.png" alt="Vehicles Report" className="h-10 w-auto" />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary">
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-primary-accent transition-colors">
              Products <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-card-border bg-white p-2 shadow-custom opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {navLinks.map(link => (
                <Link key={link.to} to={link.to} className="block rounded-lg px-4 py-2 hover:bg-light-bg hover:text-primary-accent">{link.label}</Link>
              ))}
            </div>
          </div>
          <Link to="/sample" className="hover:text-primary-accent transition-colors">Sample report</Link>
          <Link to="/pricing" className="hover:text-primary-accent transition-colors">Pricing</Link>
          <Link to="/blogs" className="hover:text-primary-accent transition-colors">Blog</Link>
          <Link to="/component" className="hover:text-primary-accent transition-colors">Component</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="ghost" className="text-primary-navy hover:text-primary-accent">
            <Link to="/login">LOGIN</Link>
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-primary-navy"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-card-border px-4 py-4 space-y-2 shadow-lg">
          <button
            className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary-accent rounded-lg hover:bg-light-bg"
            onClick={() => setProductsOpen(prev => !prev)}
          >
            <span>Products</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
          </button>
          {productsOpen && (
            <div className="ml-4 space-y-1 border-l-2 border-primary-accent/20 pl-3">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm text-text-secondary hover:text-primary-accent hover:bg-light-bg rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
          <Link to="/sample" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary-accent rounded-lg hover:bg-light-bg">Sample report</Link>
          <Link to="/pricing" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary-accent rounded-lg hover:bg-light-bg">Pricing</Link>
          <Link to="/blogs" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary-accent rounded-lg hover:bg-light-bg">Blog</Link>
          <Link to="/component" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary-accent rounded-lg hover:bg-light-bg">Component</Link>
          <div className="pt-2 border-t border-card-border">
            <Button asChild className="w-full bg-primary-accent hover:bg-hover-accent text-white">
              <Link to="/login" onClick={() => setMobileOpen(false)}>LOGIN</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
