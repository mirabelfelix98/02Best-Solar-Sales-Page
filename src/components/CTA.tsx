import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-solar-orange to-yellow-500 text-white text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The Invitation
          </h2>
          <p className="text-xl md:text-2xl mb-10 font-medium opacity-90">
            You get choice. You fit continue dey manage flickering lights, noisy generator, and fuel wahala — or you fit take small action now and enjoy quiet, reliable power every day.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <a 
              href="#form"
              onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-booking-form')); }}
              className="flex items-center gap-3 bg-deep-blue text-white px-8 py-5 rounded-full text-xl font-bold shadow-2xl hover:bg-gray-900 transition-colors"
            >
              Book Your Installation Now
              <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>

          <p className="mt-6 text-white/80 font-medium">
            Or contact us directly.
          </p>

          <div className="mt-16 p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Imagine Your Home Now</h3>
            <p className="text-lg opacity-90">
              Lights steady, fridge dey keep food cold, AC dey blow cold, generator don rest. Kids dey study, family dey relax. That na life when you no let NEPA or fuel wahala hold you back.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
