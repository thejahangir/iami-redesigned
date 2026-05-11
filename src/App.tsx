import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroV2 from "./components/HeroV2";
import HowItWorks from "./components/HowItWorks";
import ValueProposition from "./components/ValueProposition";
import Features from "./components/Features";
import UserSegments from "./components/UserSegments";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-[#4F7DBE] p-12 lg:p-24 text-center text-white"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-extrabold font-heading mb-8 leading-tight">
              Ready to transform your hiring process?
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Join hundreds of companies that trust IamInterviewed to find and hire top technical talent with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="h-16 px-10 text-xl bg-white text-[#4F7DBE] hover:bg-white/90 font-bold shadow-2xl">
                Get Started Now
                <ChevronRight className="ml-2 w-6 h-6" />
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 text-xl border-2 border-white/30 bg-transparent text-white hover:text-white font-bold hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[#4F7DBE] text-white shadow-xl shadow-[#4F7DBE]/30 hover:bg-[#4F7DBE]/90 hover:scale-110 hover:-translate-y-2 transition-all duration-300 flex items-center justify-center cursor-pointer"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <HeroV2 />
        <HowItWorks />
        <ValueProposition />
        <Features />
        <UserSegments />
        <Testimonials />
        <CTASection />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
