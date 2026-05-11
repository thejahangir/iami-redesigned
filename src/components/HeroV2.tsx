import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Star, Users, Building2, UserCheck } from "lucide-react";
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
      className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-[#FAFBFE]"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="text-left">
            {/* Top Badge Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-white/60 backdrop-blur-md shadow-sm mb-8"
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
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-black tracking-tight font-heading leading-tight mb-6"
            >
              <span className="whitespace-nowrap">Technical Interviews</span> <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-accent animate-gradient">On Demand</span>
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
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 font-medium max-w-xl"
            >
              Leverage expert-led, structured interviews that make every tech hire faster, fairer, and backed by proven skill insights. 
              Save time, cut costs, and simplify recruitment with streamlined, interview-as-a-service solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4"
            >
              <Button size="lg" className="h-14 w-full sm:w-auto px-8 text-lg font-bold bg-[#F4B44A] text-white shadow-2xl shadow-[#F4B44A]/20 hover:scale-[1.02] hover:bg-[#F4B44A]/90 transition-transform">
                Register as Employer
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 w-full sm:w-auto px-8 text-lg font-bold border-2 backdrop-blur-md bg-white/30 hover:bg-white/50 transition-all">
                Register as Candidate
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Glass Stats Cards */}
          <div className="relative flex flex-col justify-center items-center gap-4 h-full mt-12 lg:mt-0">
            {[
              { value: "5,80,000+", label: "Completed interviews", icon: <UserCheck className="w-7 h-7 text-primary" /> },
              { value: "370+", label: "Companies registered", icon: <Building2 className="w-7 h-7 text-[#F4B44A]" /> },
              { value: "3,200+", label: "Interviewers", icon: <Users className="w-7 h-7 text-accent" /> }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
                transition={{ 
                  x: { duration: 0.8, delay: 0.5 + (i * 0.2) },
                  opacity: { duration: 0.8, delay: 0.5 + (i * 0.2) },
                  y: { duration: 4, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className={cn(
                  "p-6 rounded-[2rem] bg-white/50 backdrop-blur-3xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] relative overflow-hidden group hover:bg-white/70 transition-colors w-full max-w-[340px]",
                  i === 1 ? "lg:translate-x-6" : i === 2 ? "lg:-translate-x-4" : ""
                )}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-0" />
                
                {/* Decorative blob */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors pointer-events-none z-0" />

                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex-shrink-0 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <h3 className="text-3xl lg:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-br from-[#F4B44A] to-primary">
                      {stat.value}
                    </h3>
                    <p className="text-muted-foreground text-xs font-bold uppercase tracking-wider mt-1">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2;
