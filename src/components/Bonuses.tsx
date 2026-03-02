import { motion } from "motion/react";
import { Gift, Shield, Zap, Users, BookOpen } from "lucide-react";

export default function Bonuses() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-deep-blue">
              THE EDGE (OUR BONUSES)
            </h2>
            <p className="text-lg text-gray-600">
              If you buy through me, you get extras wey make the system even more valuable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Zap,
                title: "Free Energy Audit",
                desc: "We check your appliances and energy needs, so system dey perfectly sized."
              },
              {
                icon: Shield,
                title: "Extended Maintenance",
                desc: "6 months extra support. Free follow-ups and small fixes after installation."
              },
              {
                icon: Gift,
                title: "Quick Install Upgrade",
                desc: "Priority scheduling to get your system running faster."
              },
              {
                icon: BookOpen,
                title: "Mini Solar Training",
                desc: "Learn how to maximize battery life and save energy."
              },
              {
                icon: Users,
                title: "WhatsApp Support Group",
                desc: "Connect with other solar users, get tips, and troubleshoot instantly."
              }
            ].map((bonus, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-solar-yellow/5 rounded-xl border border-solar-yellow/20"
              >
                <div className="bg-solar-yellow/20 p-3 rounded-full text-solar-orange shrink-0">
                  <bonus.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-deep-blue mb-2">{bonus.title}</h3>
                  <p className="text-gray-600 text-sm">{bonus.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
