import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Deye solar Batteries/Panels",
    location: "",
    image: "https://raw.githubusercontent.com/mirabelfelix98/My-workflow/main/InShot_20260227_134211340.jpg",
    desc: "Engineered for Power. Built for Endurance. Trusted for Life. When power fails, performance should not. Deye solar Batteries & Solar Panels are not just energy products — they are precision-engineered power systems built for reliability, durability, and uncompromising performance. This is energy you can depend on.",
    detailedDesc: `Engineered for Power. Built for Endurance. Trusted for Life.
When power fails, performance should not.
Deye solar Batteries & Solar Panels are not just energy products — they are precision-engineered power systems built for reliability, durability, and uncompromising performance.
This is energy you can depend on.

⚡ Relentless Battery Performance
Deye solar Batteries are designed to deliver:
• Deep, stable discharge without rapid degradation
• Extended life cycles for long-term reliability
• Fast recharge efficiency
• Consistent output even under heavy load

From homes to offices, from commercial installations to premium residential setups — Deye Solar stands firm where ordinary batteries collapse.
No sudden failures.
No weak backups.
No excuses.
Just dependable power — every single time.

☀️ High-Efficiency Solar Panels
Deye Solar Panels are crafted with advanced cell technology that maximizes sunlight absorption and conversion efficiency.
They deliver:
• Superior energy output even in low-light conditions
• Weather-resistant durability
• Long operational lifespan
• Optimal performance in high-temperature environments

Rain. Heat. Harmattan dust.
Deye Solar is built for real conditions — not laboratory promises.

🛡 Engineered for Longevity
Power systems should be an investment, not a recurring expense.
Deye Solar products are manufactured with premium-grade materials, reinforced internal protection systems, and strict quality control standards to ensure:
• Reduced maintenance costs
• Longer service life
• Maximum return on investment

This is power that protects your appliances, safeguards your operations, and secures your peace of mind.

Why Professionals Choose Deye solar...
Because performance matters.
Because downtime is expensive.
Because reliability is non-negotiable.
Installers, energy consultants, and premium homeowners choose Deye Solar because it delivers what it promises — stable, uninterrupted, efficient energy.

Deye Solar
Power Without Compromise.
Performance Without Fear.
Energy You Can Trust.`
  },
  {
    id: 2,
    title: "Sumec Firman solar Batteries/Panels",
    location: "",
    image: "https://raw.githubusercontent.com/mirabelfelix98/My-workflow/main/InShot_20260227_120733367.jpg",
    desc: "Engineered for Power. Built for Confidence. Designed to Last. When power matters, compromise is not an option. Sumec Firman Solar Batteries are built for those who demand stability, endurance, and long-term reliability. Designed with advanced deep-cycle technology, these batteries deliver consistent output, superior discharge performance, and extended lifespan — even under heavy daily usage.",
    detailedDesc: `Engineered for Power. Built for Confidence. Designed to Last.
When power matters, compromise is not an option.
Sumec Firman Solar Batteries are built for those who demand stability, endurance, and long-term reliability. Designed with advanced deep-cycle technology, these batteries deliver consistent output, superior discharge performance, and extended lifespan — even under heavy daily usage.
This isn’t just backup power.
This is uninterrupted living.

Whether for homes, offices, commercial spaces, or industrial operations, Sumec Firman batteries provide:
• Long-lasting deep cycle performance
• High efficiency energy retention
• Faster recharge capability
• Strong resistance to heat and voltage fluctuations
• Minimal maintenance requirements
• Proven durability in demanding environments

From sunrise to midnight, your power remains steady, smooth, and dependable.
With Sumec Firman, you’re not buying a battery.
You’re securing peace of mind.

☀️ SUMEC FIRMAN SOLAR PANELS
Maximum Sun. Maximum Output. Maximum Reliability.
The sun never sends a bill.
Sumec Firman ensures you collect every advantage from it.
Sumec Firman Solar Panels are engineered for high conversion efficiency, superior light absorption, and strong weather resistance. Built with premium photovoltaic cells and reinforced frames, these panels are designed to perform in both extreme heat and challenging weather conditions.
Every ray counts. And Sumec Firman makes sure none is wasted.

Key Advantages:
• High energy conversion efficiency
• Durable tempered glass surface
• Strong corrosion-resistant aluminum frame
• Excellent performance under high temperatures
• Long operational lifespan
• Stable and reliable energy generation

From residential rooftops to commercial installations, Sumec Firman panels deliver consistent output you can depend on — year after year.

🔋☀️ The Complete Power Solution
Pair Sumec Firman Batteries with Sumec Firman Solar Panels, and you create a fully integrated energy system built for:
✔ Stability
✔ Longevity
✔ Performance
✔ Financial freedom from unreliable power supply

This is not just solar equipment.
This is energy independence.`
  },
  {
    id: 3,
    title: "Itel solar Batteries and Panels",
    location: "",
    image: "https://raw.githubusercontent.com/mirabelfelix98/My-workflow/main/IMG-20260227-WA0008.jpg",
    desc: "Reliable Power. Unmatched Confidence. When power matters, compromise is not an option. ITEL Solar Batteries & Panels are engineered for homes and businesses that demand stability, durability, and performance — without excuses. Built with advanced energy storage technology and high-efficiency solar cells, ITEL delivers consistent, dependable power when you need it most.",
    detailedDesc: `Reliable Power. Unmatched Confidence.
When power matters, compromise is not an option.
ITEL Solar Batteries & Panels are engineered for homes and businesses that demand stability, durability, and performance — without excuses. Built with advanced energy storage technology and high-efficiency solar cells, ITEL delivers consistent, dependable power when you need it most.
This is not just backup power.
This is energy security.

⚡ Why ITEL Solar?
1. Long-Lasting Battery Performance
Designed for deep-cycle efficiency, ITEL solar batteries store more energy and discharge steadily — giving you longer hours of uninterrupted power.

2. High-Efficiency Solar Panels
ITEL panels are built to capture maximum sunlight, even in less-than-perfect weather conditions. More sunlight captured means more energy generated, and more savings for you.

3. Built for Real-Life Conditions
From heat resistance to voltage stability, ITEL systems are designed to perform reliably in demanding environments.

4. Smart Energy Optimization
Optimized charging cycles protect battery life and improve overall system longevity — reducing maintenance costs and increasing long-term value.

Power You Can Trust. Performance You Can Feel.
Whether you’re powering:
Your home
Your office
Your shop
Or a full business operation

ITEL Solar gives you the confidence that your lights stay on, your appliances stay protected, and your productivity never stops.

The Premium Choice for Sustainable Energy
ITEL Solar isn’t just about electricity.
It’s about independence.
It’s about peace of mind.
It’s about taking control of your power.

Choose smarter energy.
Choose long-term reliability.
Choose ITEL Solar Batteries & Panels.`
  },
  {
    id: 4,
    title: "Felicity solar accessories",
    location: "",
    image: "https://raw.githubusercontent.com/mirabelfelix98/My-workflow/main/InShot_20260228_130215311.jpg",
    desc: "When it comes to dependable solar energy, Felicity Solar doesn’t compete — it dominates. Built with advanced energy storage technology and engineered for long-term performance, Felicity Solar Batteries and Panels are designed for those who refuse to live at the mercy of unstable power. This isn’t just solar. This is energy confidence.",
    detailedDesc: `Power Without Limits. Energy Without Fear.
When it comes to dependable solar energy, Felicity Solar doesn’t compete — it dominates.
Built with advanced energy storage technology and engineered for long-term performance, Felicity Solar Batteries and Panels are designed for those who refuse to live at the mercy of unstable power.
This isn’t just solar.
This is energy confidence.

🔋 Felicity Solar Batteries – Storage You Can Trust
Felicity batteries are built for endurance, deep cycling, and consistent output. Whether you choose lithium or high-performance tubular options, you get:
• Long lifespan with minimal degradation
• Fast charging efficiency
• Stable voltage delivery
• Low maintenance design
• Smart protection against overcharge & deep discharge

No sudden failures.
No performance excuses.
Just uninterrupted power — day and night.
Because true power should never be uncertain.

☀️ Felicity Solar Panels – Maximum Output, Every Ray Counts
Felicity panels are manufactured using high-efficiency photovoltaic cells that convert sunlight into usable power with superior accuracy and durability.
You get:
• High energy conversion rate
• Strong resistance to heat and harsh weather
• Anti-corrosion aluminum frame
• Long-term output reliability
• Performance even in low-light conditions

Rain or shine, your system keeps producing.

Why Felicity Solar?
Because your home, office, or business deserves:
✔ Stability
✔ Savings
✔ Sustainability
✔ Long-term performance

Felicity Solar products are globally trusted and engineered to meet modern energy demands without compromise.
When you install Felicity, you’re not just buying solar.
You’re investing in peace of mind.`
  },
  {
    id: 5,
    title: "SRNE solar Battries/panels",
    location: "",
    image: "https://raw.githubusercontent.com/mirabelfelix98/My-workflow/main/InShot_20260228_131034562.jpg",
    desc: "Engineered Power. Intelligent Energy. Absolute Reliability. When energy fails, everything stops. But with SRNE Solar Batteries and Panels, power doesn’t just continue — it performs. SRNE is not built for average users. It is built for homeowners, businesses, and serious energy investors who demand stability, durability, and intelligent performance from their solar systems. This is energy you can depend on.",
    detailedDesc: `Engineered Power. Intelligent Energy. Absolute Reliability.
When energy fails, everything stops.
But with SRNE Solar Batteries and Panels, power doesn’t just continue — it performs.
SRNE is not built for average users. It is built for homeowners, businesses, and serious energy investors who demand stability, durability, and intelligent performance from their solar systems.
This is energy you can depend on.

🔋 SRNE Solar Batteries
Long-Life Storage. Zero Compromise Performance.
SRNE batteries are designed with advanced lithium technology to deliver:
Deep cycle performance without rapid degradation
High energy density for maximum storage in compact design
Intelligent Battery Management System (BMS) for safety and stability
Extended lifespan with consistent output

From the first charge to the thousandth cycle, SRNE maintains performance integrity. No sudden drops. No unstable supply. No performance excuses.
It’s not just storage.
It’s structured power management.

Whether powering a home, office, factory, or estate, SRNE batteries provide:
✔ Reliable backup during outages
✔ Smooth power flow for sensitive electronics
✔ Reduced generator dependence
✔ Long-term cost efficiency

This is energy that works quietly in the background — protecting your comfort, your business, and your peace of mind.

☀ SRNE Solar Panels
Precision Engineered. Maximum Harvest.
Power begins at the source — and SRNE panels are built to extract every possible ray of value from the sun.
Manufactured with high-efficiency photovoltaic cells, SRNE panels deliver:
Strong output even under low-light conditions
Durable anti-reflective glass surface
Weather-resistant construction
Long-term performance consistency

Rain. Heat. Harmattan dust. Coastal humidity.
SRNE panels are engineered to withstand demanding climates while maintaining stable production.
This is not seasonal performance.
This is year-round energy capture.

Why SRNE Stands Above
In a market filled with overstated promises and underperforming products, SRNE distinguishes itself through:
Intelligent engineering
Verified durability
Performance stability
Long operational lifespan
Safety-first design

SRNE is not about flashy claims.
It is about measurable performance.

Built for Those Who Think Long-Term
Energy is not an expense.
It is infrastructure.
And infrastructure must be dependable.
SRNE Solar Batteries and Panels are for property owners and decision-makers who understand that real value is found in:
• Stability
• Efficiency
• Durability
• Intelligent system integration

When you choose SRNE, you are not just buying solar equipment.
You are securing uninterrupted productivity and long-term power confidence.`
  },
  {
    id: 6,
    title: "Colasolar solar Batteries & Panels",
    location: "",
    image: "https://raw.githubusercontent.com/mirabelfelix98/My-workflow/main/InShot_20260228_132030091.jpg",
    desc: "Power Without Compromise. Energy Without Limits. When the grid fails… When darkness interrupts business… When unstable power threatens your comfort…",
    detailedDesc: `COLASOLAR™
Power Without Compromise. Energy Without Limits.
When the grid fails…
When darkness interrupts business…
When unstable power threatens your comfort…
ColaSolar stands unmoved.
ColaSolar Solar Batteries and Panels are engineered for people who demand certainty — homeowners, business owners, institutions, and leaders who refuse to gamble with electricity.
This is not backup power.
This is power independence.

⚡ Unstoppable Performance
ColaSolar batteries are built with advanced deep-cycle technology designed for:
Long lifespan durability
Rapid charging efficiency
Stable power output
Zero performance drop under heavy load
From air conditioners to industrial equipment, ColaSolar delivers clean, consistent energy — day after day, year after year.

☀ Premium-Grade Solar Panels
Every ColaSolar panel is crafted using high-efficiency photovoltaic cells that:
Capture maximum sunlight
Perform even in low-light conditions
Withstand harsh weather
Maintain peak efficiency over time
No weak output.
No overheating issues.
No early failure.
Just reliable solar performance.

🛡 Built to Last. Backed by Guarantee.
ColaSolar products are manufactured under strict quality control standards and tested for real-world durability.
When you install ColaSolar, you are investing in:
Long-term energy savings
Reduced dependency on unstable grids
Silent operation
Low maintenance
Peace of mind
This is energy security you can trust.

🔥 Why ColaSolar?
Because cheap power solutions fail when you need them most.
ColaSolar is for those who understand that:
Quality is cheaper in the long run
Reliability is non-negotiable
Energy is the backbone of productivity
We don’t sell batteries.
We deliver power confidence.

Own Your Power.
Stop adjusting your life around electricity.
Install ColaSolar Solar Batteries & Panels and experience energy the way it should be:
Stable.
Silent.
Strong.
Secure.
ColaSolar — The Power You Can Trust.`
  }
];

export default function Catalogue() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-solar-orange font-bold tracking-wider uppercase text-sm">Our Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-deep-blue">
            See Our Work In Action
          </h2>
          <p className="text-xl text-gray-600">
            From cozy homes to bustling businesses, we don deliver steady power give plenty people. Check out some of our recent installations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none group-hover:pointer-events-auto">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-white font-medium flex items-center gap-2 cursor-pointer hover:text-solar-orange transition-colors"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-deep-blue mb-1">{project.title}</h3>
                    {project.location && (
                      <p className="text-sm text-solar-orange font-medium">{project.location}</p>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
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
            Get A Quote For Your Project
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full transition-colors z-10 shadow-sm"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>
              
              <div className="h-64 sm:h-80 relative">
                 <img 
                   src={selectedProject.image} 
                   alt={selectedProject.title}
                   className="w-full h-full object-cover"
                   loading="lazy"
                   decoding="async"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 sm:p-8">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                      {selectedProject.location && (
                        <p className="text-white/90 font-medium">{selectedProject.location}</p>
                      )}
                    </div>
                 </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="prose prose-lg max-w-none text-gray-600">
                  {(selectedProject.detailedDesc || selectedProject.desc).split('\n').map((line, i) => (
                    line.trim() ? <p key={i} className="mb-4 leading-relaxed">{line}</p> : <br key={i} />
                  ))}
                </div>
                

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
