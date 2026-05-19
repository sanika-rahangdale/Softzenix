import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import api from "../services/api.js";
import sanika from "../assets/sanika.jpg";

const FALLBACK = [
  { name: "Sanika Rahangdale", role: "Founder & CEO", bio: "Visionary entrepreneur driving Softzenix forward.", image: sanika },
  { name: "Aarav Sharma", role: "UI/UX Designer", bio: "Creative design specialist crafting premium interfaces." },
  { name: "Rohan Mehta", role: "Full Stack Developer", bio: "MERN stack engineer building scalable products." },
  { name: "Priya Verma", role: "AI Engineer", bio: "AI integration specialist for intelligent automation." },
  { name: "Karan Singh", role: "Backend Developer", bio: "API and database specialist focused on performance." },
];

function initials(name) {
  return name.split(" ").map(s => s[0]).slice(0, 2).join("").toUpperCase();
}

export default function Team() {
  const [list, setList] = useState(FALLBACK);
  useEffect(() => {
    api.get("/team").then(r => {
      if (r.data?.length) {
        // ensure Sanika has the founder photo
        const merged = r.data.map(m => m.name?.toLowerCase().includes("sanika") ? { ...m, image: sanika } : m);
        setList(merged);
      }
    }).catch(() => {});
  }, []);
  return (
    <PageTransition>
      <section className="pt-24 pb-16 max-w-5xl mx-auto px-6 text-center">
        <SectionTitle eyebrow="The Team" title="Brilliant people, bold ideas" subtitle="The crew behind Softzenix — designers, engineers, and AI specialists working as one." />
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-soft text-center group"
            >
              <div className="mx-auto w-28 h-28 rounded-full overflow-hidden grad-border bg-grad-brand grid place-items-center mb-5 group-hover:scale-105 transition">
                {m.image ? (
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="font-display text-2xl font-bold">{initials(m.name)}</span>
                )}
              </div>
              <h3 className="font-display font-semibold text-lg">{m.name}</h3>
              <p className="text-brand text-sm">{m.role}</p>
              {m.bio && <p className="text-texts text-sm mt-2">{m.bio}</p>}
              <div className="flex justify-center gap-3 mt-4">
                {[Linkedin, Github, Twitter].map((I, k) => (
                  <a key={k} href="#" className="w-8 h-8 rounded-lg border border-white/10 grid place-items-center hover:border-brand hover:text-brand transition">
                    <I size={14} />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
