import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import api from "../services/api.js";

const FALLBACK = [
  { title: "Web Development", description: "Modern responsive websites and scalable web applications using React and Node.js.", icon: "Globe" },
  { title: "MERN Stack Development", description: "Complete full-stack applications with MongoDB, Express, React, and Node.js.", icon: "Layers" },
  { title: "AI Integration", description: "Smart AI chatbots, automation systems, and intelligent business tools.", icon: "Sparkles" },
  { title: "UI/UX Design", description: "Premium modern user interfaces with excellent user experience.", icon: "Palette" },
  { title: "SaaS Development", description: "Cloud-ready SaaS platforms for startups and enterprises.", icon: "Cloud" },
  { title: "API Development", description: "Secure and scalable REST API development services.", icon: "Code2" },
];

export default function Services() {
  const [list, setList] = useState(FALLBACK);
  useEffect(() => {
    api.get("/services").then(r => setList(r.data?.length ? r.data : FALLBACK)).catch(() => {});
  }, []);
  return (
    <PageTransition>
      <section className="pt-24 pb-16 max-w-5xl mx-auto px-6 text-center">
        <SectionTitle eyebrow="Services" title="Everything you need to ship" subtitle="From idea to launch — we cover design, development, AI, and infrastructure." />
      </section>
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((s, i) => {
            const Icon = Icons[s.icon] || Icons.Sparkles;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="grad-border card-soft group"
              >
                <div className="w-14 h-14 rounded-2xl bg-grad-brand grid place-items-center mb-5 group-hover:scale-110 transition">
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-xl">{s.title}</h3>
                <p className="text-texts mt-2">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </PageTransition>
  );
}
