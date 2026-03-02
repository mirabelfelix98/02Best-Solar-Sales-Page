import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="py-20 bg-deep-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See What Others Are Saying
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Thousands of homeowners and business operators across Lagos, Abuja, Port Harcourt, and Enugu don dey enjoy this system.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          >
            <Quote className="w-8 h-8 text-solar-yellow mb-4" />
            <p className="text-gray-300 mb-6 italic">
              "My friend for Abuja don dey run AC, fridge, and lights for 2 years without generator wahala. E dey clear say this solution dey real."
            </p>
            <div className="font-bold text-solar-yellow">Abuja Resident</div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          >
            <Quote className="w-8 h-8 text-solar-yellow mb-4" />
            <p className="text-gray-300 mb-6 italic">
              "Fuel cost don drop by half and customers dey happy say business dey run smooth. No more noise interrupting our service."
            </p>
            <div className="font-bold text-solar-yellow">Hotel Owner, PH</div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          >
            <Quote className="w-8 h-8 text-solar-yellow mb-4" />
            <p className="text-gray-300 mb-6 italic">
              "I was skeptical because of past bad experience, but 02Best Solar guide me properly. Now my family sleeps well at night."
            </p>
            <div className="font-bold text-solar-yellow">Homeowner, Lagos</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
