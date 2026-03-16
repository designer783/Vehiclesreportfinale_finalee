import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ScrollToTop } from "./components/ScrollToTop"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { GenericPage } from "./pages/GenericPage"
import { Login } from "./pages/Login"
import { WindowSticker } from "./pages/WindowSticker"
import { VinCheck } from "./pages/VinCheck"
import { VinDecoder } from "./pages/VinDecoder"
import { LicensePlate } from "./pages/LicensePlate"
import { ClassicWindowSticker } from "./pages/ClassicWindowSticker"
import { SampleReport } from "./pages/SampleReport"
import { Pricing } from "./pages/Pricing"
import { Blog } from "./pages/Blog"
import { ComponentShowcase } from "./pages/ComponentShowcase"
import { PrivacyPolicy } from "./pages/PrivacyPolicy"
import { FAQ } from "./pages/FAQ"
import { Dealers } from "./pages/Dealers"
import { RequestRefund } from "./pages/RequestRefund"
import { TermsConditions } from "./pages/TermsConditions"

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="window-stickers" element={<WindowSticker />} />
          <Route path="vin-check" element={<VinCheck />} />
          <Route path="vin-decoder" element={<VinDecoder />} />
          <Route path="license-plate" element={<LicensePlate />} />
          <Route path="classic-window-stickers" element={<ClassicWindowSticker />} />
          <Route path="sample" element={<SampleReport />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="component" element={<ComponentShowcase />} />
          <Route path="about" element={<GenericPage title="About Us" />} />
          <Route path="contact-us" element={<GenericPage title="Contact Us" />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="dealer" element={<Dealers />} />
          <Route path="request-refund" element={<RequestRefund />} />
          <Route path="terms" element={<TermsConditions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
