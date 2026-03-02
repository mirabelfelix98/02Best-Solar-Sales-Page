import { motion } from "motion/react";
import { CheckCircle2, Battery, Zap, Sun, Settings, ArrowRight } from "lucide-react";

export default function Solution() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-solar-orange font-bold tracking-wider uppercase text-sm">The Shift</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-deep-blue">
              The Right Solar System <br/> <span className="text-solar-orange">Tailored For You</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Most people miss this: you no need one-size-fits-all panels wey dey fail in months. You need a custom solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop" 
                alt="Solar Installation" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-deep-blue">02Best Solar Enterprise</h3>
              <p className="text-gray-700 mb-6">
                We provide complete solar systems designed for Nigerian homes and businesses. We don't just sell parts; we sell peace of mind.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Solar panels to capture sunlight efficiently",
                  "Batteries to store energy for night and outages",
                  "Inverters to run your appliances safely",
                  "Professional installation and setup",
                  "Ongoing maintenance and support"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Sun, title: "Quality Panels", desc: "High efficiency capture" },
              { icon: Battery, title: "Strong Batteries", desc: "Long-lasting storage" },
              { icon: Zap, title: "Smart Inverters", desc: "Protect your appliances" },
              { icon: Settings, title: "Pro Install", desc: "Clean, safe wiring" },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <feature.icon className="w-10 h-10 mx-auto mb-4 text-solar-orange" />
                <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <motion.a
              href="https://wa.link/mkd0q6"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 bg-deep-blue text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
            >
              Get Your Custom Solar Plan
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
