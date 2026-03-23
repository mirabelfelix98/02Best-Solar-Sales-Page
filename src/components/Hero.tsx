import { motion } from "motion/react";
import { ArrowRight, Sun, Zap, Battery, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-deep-blue text-white overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/90 to-deep-blue/95"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block py-1.5 px-3 md:py-2 md:px-6 rounded-full bg-solar-yellow text-deep-blue font-bold text-[10px] md:text-sm tracking-wide mb-4 md:mb-6 shadow-[0_0_10px_rgba(255,215,0,0.4)] md:shadow-[0_0_15px_rgba(255,215,0,0.4)] uppercase"
            >
              You're Not Paying for Power. You're Paying for Someone Else's Profit.
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Your Generator Is Quietly Draining <span className="text-solar-yellow">More Than Just Fuel.</span>
            </h1>
            
            <img 
              src="https://raw.githubusercontent.com/mirabelfelix98/My-workflow/main/1772324567186.png" 
              alt="Solar Energy Illustration" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl mb-10 border-4 border-white/10"
              fetchPriority="high"
              decoding="async"
            />

            <div className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed space-y-6 text-left md:text-justify max-w-4xl mx-auto">
              <p>
                You dey wake up every morning, generator still dey run for compound, fuel dey finish fast, AC dey blow hot, and fridge no dey keep things properly. Kids dey try read for night, lights dey flicker, and you dey stress dey try manage everything before NEPA commot light again. You dey check your business, small shop, or school, and you dey reason say if generator stop, wahala don start: cold room spoil, customers complain, staff dey tired. Na so your day dey always start and end — with stress and noise you no ask for.
              </p>
              <p>
                You feel this — the tension, the frustration, the low-level anger at fuel bills wey dey climb every month. You sabi say there’s solution somewhere, but every small solar or inverter you don try before just dey fail quick. You dey tired, you dey vex, and deep down you dey wonder why everything dey complicated for one simple thing: steady, reliable power.
              </p>
            </div>
            
            <motion.a
              href="#form"
              onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-booking-form')); }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 bg-solar-yellow text-deep-blue font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition-colors"
            >
              Start Your Solar Installation
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            
            <p className="mt-4 text-sm text-gray-400">
              Join thousands enjoying 24/7 power in Nigeria,Africa and beyond.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
