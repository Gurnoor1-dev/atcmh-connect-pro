import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Eligibility from "@/components/Eligibility";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure the DOM has fully rendered before calculating position
      const timeoutId = setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        
        if (element) {
          const navbarHeight = 80; // Adjusted for your navbar thickness
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [hash]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="eligibility">
        <Eligibility />
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
