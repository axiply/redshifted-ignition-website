import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Initiatives } from "@/components/Initiatives";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Initiatives />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
