import { motion } from "framer-motion";
import { Eye, Globe2, Cloud, Network, Bot } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

const goals = [
  { icon: Bot, t: "AI SaaS Products", d: "Launch our own AI-first SaaS platforms." },
  { icon: Globe2, t: "Global Client Network", d: "Serve clients across continents." },
  { icon: Cloud, t: "Cloud Infrastructure", d: "Edge-ready, globally distributed systems." },
  { icon: Network, t: "Startup Ecosystem", d: "Build a community of partners and founders." },
  { icon: Eye, t: "Automation Systems", d: "Help businesses automate the repetitive." },
];

export default function Vision() {
  return (
    <PageTransition>
      <section className="pt-24 pb-16 max-w-5xl mx-auto px-6 text-center">
        <SectionTitle eyebrow="Our Vision" title="A globally recognized technology company" subtitle="To become a globally recognized technology company delivering next-generation digital products powered by creativity, AI, and modern engineering." />
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((g, i) => (
            <motion.div
              key={g.t}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-soft"
            >
              <div className="w-12 h-12 rounded-xl bg-grad-brand grid place-items-center mb-4"><g.icon size={20} /></div>
              <h3 className="font-display font-semibold text-lg">{g.t}</h3>
              <p className="text-texts text-sm mt-2">{g.d}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
