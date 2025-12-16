import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ZohoIntegration from "@/components/ZohoIntegration";
import Index from "./pages/Index";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import Directors from "./pages/Directors";
import Team from "./pages/Team";
import Subsidiaries from "./pages/Subsidiaries";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import InvestorRelations from "./pages/InvestorRelations";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import LegalHub from "./pages/LegalHub";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import DigitalSpaceCapital from "./pages/subsidiaries/DigitalSpaceCapital";
import DSCAssetManagement from "./pages/subsidiaries/DSCAssetManagement";
import DSCMicrofinanceBank from "./pages/subsidiaries/DSCMicrofinanceBank";
import NaingateInsurance from "./pages/subsidiaries/NaingateInsurance";
import EmisonRealEstate from "./pages/subsidiaries/EmisonRealEstate";
import EasyPay from "./pages/subsidiaries/EasyPay";
import Digikolo from "./pages/subsidiaries/Digikolo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ZohoIntegration />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/directors" element={<Directors />} />
          <Route path="/team" element={<Team />} />
          <Route path="/subsidiaries" element={<Subsidiaries />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/subsidiaries/digital-space-capital" element={<DigitalSpaceCapital />} />
          <Route path="/subsidiaries/dsc-asset-management" element={<DSCAssetManagement />} />
          <Route path="/subsidiaries/dsc-microfinance-bank" element={<DSCMicrofinanceBank />} />
          <Route path="/subsidiaries/naingate-insurance" element={<NaingateInsurance />} />
          <Route path="/subsidiaries/emison-real-estate" element={<EmisonRealEstate />} />
          <Route path="/subsidiaries/easy-pay" element={<EasyPay />} />
          <Route path="/subsidiaries/digikolo" element={<Digikolo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/legal" element={<LegalHub />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
