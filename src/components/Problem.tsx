import { motion } from "motion/react";
import { AlertTriangle, Clock, Frown, TrendingDown } from "lucide-react";

export default function Problem() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-blue">
              The Hidden Cost of "Managing"
            </h2>
            <p className="text-lg text-gray-600">
              You feel this — the tension, the frustration, the low-level anger at fuel bills wey dey climb every month.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-red-50 rounded-2xl border border-red-100"
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Money Drain</h3>
              <p className="text-gray-700">
                This generator wahala no dey only drain fuel money. E dey steal your hard-earned cash every week just to keep lights on.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-orange-50 rounded-2xl border border-orange-100"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Time Theft</h3>
              <p className="text-gray-700">
                Every week you dey fill tank, manage maintenance, check noisy engine. That's time you could spend with family or growing your business.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-gray-50 rounded-2xl border border-gray-100"
            >
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-700">
                <Frown className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Family Stress</h3>
              <p className="text-gray-700">
                Kids dey study for flickering lights, spouse dey complain say house no dey comfortable. The heat and noise affect everyone.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 bg-yellow-50 rounded-2xl border border-yellow-100"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-yellow-700">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Missed Opportunities</h3>
              <p className="text-gray-700">
                Meetings dey cancel, deliveries dey delayed, sensitive appliances dey spoil. You dey invest hope, but result no dey match effort.
              </p>
            </motion.div>
          </div>

          <div className="bg-deep-blue text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">THE INVISIBLE WALL (Why They're Stuck)</h3>
            <p className="text-gray-300 mb-6">
              You dey stuck because you don try plenty small solutions before. Cheap solar panels spoil quick, inverters dey fail, and nobody dey explain how to use them properly. You dey read online, watch YouTube tutorials, check reviews — but every advice dey confusing. Maybe you dey fear wasting money again, or you dey doubt if the next solution go actually work.
            </p>
            <p className="text-lg font-medium text-solar-yellow">
              I understand — you no dey lazy, you dey careful. You dey look for something real, reliable, and tailored to your home or business. That’s why you never act yet. Na not because you no wan solve the problem — na because nobody don show you a solution wey dey built for real Nigerian conditions, not generic panels wey dey sell everywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
