import { Outlet } from "react-router-dom"
import { Header } from "@/src/components/Header"
import { Footer } from "@/src/components/Footer"
import { ChatWidget } from "@/src/components/ChatWidget"

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-text-primary bg-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
