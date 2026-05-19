import { motion } from "framer-motion";
import { Target, Users, Cpu, Sparkles, Heart } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

const cards = [
  { icon: Target, t: "Innovation First", d: "Push boundaries with every product we ship." },
  { icon: Users, t: "Client Success", d: "Your wins are how we measure ours." },
  { icon: Cpu, t: "Future Technologies", d: "AI, cloud, and the next wave — always." },
  { icon: Sparkles, t: "AI Integration", d: "Smart, helpful intelligence in every feature." },
  { icon: Heart, t: "UX Excellence", d: "Premium experiences that users love." },
];

export default function Mission() {
  return (
    <PageTransition>
      <section className="pt-24 pb-16 max-w-5xl mx-auto px-6 text-center">
        <SectionTitle eyebrow="Our Mission" title="Empowering businesses through intelligent software" subtitle="Our mission is to empower startups and businesses with intelligent, scalable, and visually stunning software solutions that accelerate digital transformation." />
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-soft grad-border"
            >
              <div className="w-12 h-12 rounded-xl bg-grad-brand grid place-items-center mb-4"><c.icon size={20} /></div>
              <h3 className="font-display font-semibold text-lg">{c.t}</h3>
              <p className="text-texts text-sm mt-2">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
