import TopStrip from "@/components/TopStrip"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Backstage from "@/components/Backstage"
import ForWho from "@/components/ForWho"
import InstructorVideo from "@/components/InstructorVideo"
import Modules from "@/components/Modules"
import Testimonials from "@/components/Testimonials"
import HowItWorks from "@/components/HowItWorks"
import Pricing from "@/components/Pricing"
import Instructor from "@/components/Instructor"
import FAQ from "@/components/FAQ"
import LegalNotice from "@/components/LegalNotice"
import Footer from "@/components/Footer"
import FloatingCTA from "@/components/FloatingCTA"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopStrip />
      <Navigation />
      <main>
        <Hero />
        <Backstage />
        <ForWho />
        <InstructorVideo />
        <Modules />
        <Testimonials />
        <HowItWorks />
        <Pricing />
        <Instructor />
        <FAQ />
        <LegalNotice />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
