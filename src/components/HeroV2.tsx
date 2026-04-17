import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Play, Sparkles, Star, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import heroBg from "@/src/assets/img/hero-bg.png";

const HeroV2 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.15, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FAFBFE]"
    >
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover grayscale opacity-100 mix-blend-multiply"
        />
        {/* Gradient Overlay for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBFE]/80 via-[#FAFBFE]/40 to-[#FAFBFE] z-10" />
      </motion.div>

      {/* Immersive Background Architecture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Animated Mesh Gradients */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-primary/10 rounded-full blur-[120px] opacity-60" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -30, 0],
            x: [0, -80, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-accent/15 rounded-full blur-[140px] opacity-50" 
        />
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-info/5 rounded-full blur-[100px]" />
        
        {/* Modern Dot Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Badge Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-white/50 backdrop-blur-sm shadow-sm mb-8"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-[8px] font-bold">
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <span className="text-xs font-bold text-muted-foreground mr-1">Trusted by 500+ Teams</span>
          <div className="w-1 h-1 rounded-full bg-primary/30" />
          <div className="flex items-center text-primary font-bold text-xs">
            <Star className="w-3 h-3 mr-1 fill-primary" /> 
            4.9/5 Rating
          </div>
        </motion.div>

        {/* Main Title Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl lg:text-8xl font-black tracking-tight font-heading leading-tight mb-8"
          >
            Elite Hiring, <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-accent animate-gradient">Reimagined.</span>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -bottom-2 left-0 h-3 bg-accent/20 -z-10 rounded-full" 
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
          >
            Scale your engineering culture with expert-led technical interviews. 
            The gold standard for identifying world-class talent.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button size="lg" className="h-16 px-10 text-xl font-bold bg-primary text-white shadow-2xl shadow-primary/20 hover:scale-[1.02] transition-transform">
              Book a Strategy Call
              <ChevronRight className="ml-2 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-xl font-bold border-2 backdrop-blur-md bg-white/30 hover:bg-white/50 transition-all">
              <Play className="mr-3 w-5 h-5 fill-primary text-primary" />
              See how it works
            </Button>
          </motion.div>
        </div>

        {/* Dynamic Glass Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-24">
          {[
            { icon: <Zap className="text-primary" />, title: "Hyper-Speed", desc: "Reduce time-to-hire by 65%" },
            { icon: <Shield className="text-accent" />, title: "Unbiased", desc: "Data-driven objective scoring" },
            { icon: <Sparkles className="text-info" />, title: "Elite Network", desc: "Curated domain specialists" }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + (i * 0.1) }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-left group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-20 flex flex-col items-center gap-2 opacity-30"
        >
          <span className="text-[10px] uppercase font-black tracking-[0.3em] text-muted-foreground">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroV2;
