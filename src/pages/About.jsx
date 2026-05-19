import { motion } from "framer-motion";
import { Lightbulb, Users, Briefcase, Rocket, Cpu } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import sanika from "../assets/sanika.jpg";

const journey = [
  { icon: Lightbulb, t: "Idea Started", d: "The vision for Softzenix was born." },
  { icon: Users, t: "Team Formation", d: "Assembling a passionate, skilled team." },
  { icon: Briefcase, t: "First Client", d: "Delivered our first successful product." },
  { icon: Rocket, t: "Product Expansion", d: "Scaling services across industries." },
  { icon: Cpu, t: "AI Integration", d: "Bringing intelligence into every product." },
];

const values = ["Innovation", "Transparency", "Creativity", "Scalability", "Trust"];

export default function About() {
  return (
    <PageTransition>
      <section className="pt-20 pb-16 max-w-7xl mx-auto px-6">
        <SectionTitle eyebrow="About Softzenix" title="A modern technology startup" subtitle="Softzenix is focused on building scalable digital products, AI-powered applications, and high-performance software solutions using the MERN stack." />
      </section>

      {/* FOUNDER */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="absolute inset-0 bg-grad-brand opacity-30 blur-3xl rounded-full" />
            <div className="relative grad-border rounded-3xl overflow-hidden">
              <img src={sanika} alt="Sanika Rahangdale, Founder of Softzenix" className="w-full h-auto object-cover bg-gradient-to-br from-brand/40 to-brand-cyan/20" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-xs uppercase tracking-widest text-brand font-semibold">Founder & CEO</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Sanika Rahangdale</h2>
            <p className="text-texts mt-5 leading-relaxed">
              Sanika Rahangdale is a passionate developer and entrepreneur focused on creating futuristic digital experiences through modern technologies and AI-driven solutions. She leads Softzenix with a clear vision — make premium, intelligent software accessible to ambitious startups and growing businesses.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["React", "Node.js", "AI", "Product", "Design"].map((t) => (
                <span key={t} className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-texts">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-20 bg-surface/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <SectionTitle eyebrow="Our Journey" title="From idea to AI-powered company" />
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand via-brand-violet to-brand-cyan" />
            {journey.map((j, i) => (
              <motion.div
                key={j.t}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-10 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-10" : "md:pr-10 md:text-right md:flex-row-reverse"}`}
              >
                <div className="w-12 h-12 rounded-full bg-grad-brand grid place-items-center flex-shrink-0 shadow-lg shadow-brand/40 z-10">
                  <j.icon size={18} />
                </div>
                <div className="card-soft flex-1">
                  <h3 className="font-display font-semibold">{j.t}</h3>
                  <p className="text-texts text-sm mt-1">{j.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <SectionTitle eyebrow="Core Values" title="What we believe in" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grad-border rounded-2xl p-6 text-center"
            >
              <p className="font-display font-semibold text-lg grad-text">{v}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
