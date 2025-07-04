import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import About from "@/components/About";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white text-lg">Loading Pentarix...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      {/* Padding to prevent content hiding under fixed navbar */}
      <main className="pt-16">
        <section id="home" className="scroll-mt-16">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-16">
          <About />
        </section>

        <section id="services" className="scroll-mt-16">
          <Services />
        </section>

        <section id="career" className="scroll-mt-16">
          <Career />
        </section>

        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Index;
