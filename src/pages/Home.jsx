import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Globe, Layers, Palette, Cloud, Code2, Zap, Shield, Cpu, Rocket } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import ParticleField from "../components/ParticleField.jsx";
import Typewriter from "../components/Typewriter.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

const stats = [
  { v: "50+", l: "Projects" },
  { v: "20+", l: "Clients" },
  { v: "99%", l: "Satisfaction" },
  { v: "AI", l: "Powered" },
];

const techs = ["React", "Node.js", "MongoDB", "Express", "AI / ML", "Cloud"];

const why = [
  { icon: Rocket, t: "Modern Development", d: "Latest stack, best practices, blazing performance." },
  { icon: Cpu, t: "AI Integration", d: "Smart automation and AI-powered experiences." },
  { icon: Zap, t: "Fast Performance", d: "Optimized for speed across every device." },
  { icon: Layers, t: "Scalable Architecture", d: "Built to grow with your business." },
  { icon: Shield, t: "Security Focused", d: "Industry-grade security at every layer." },
  { icon: Sparkles, t: "Premium Design", d: "Apple-inspired aesthetics, futuristic feel." },
];

const services = [
  { icon: Globe, t: "Web Development" },
  { icon: Layers, t: "MERN Stack" },
  { icon: Sparkles, t: "AI Solutions" },
  { icon: Palette, t: "UI/UX Design" },
  { icon: Cloud, t: "SaaS Platforms" },
  { icon: Code2, t: "API Development" },
];

const process = ["Research", "Design", "Development", "Deployment", "Support"];

const testimonials = [
  { name: "Ananya Kapoor", role: "Founder, NovaTech", q: "Softzenix delivered our MVP in record time with stunning design." },
  { name: "Vikram Joshi", role: "CTO, FinEdge", q: "Their AI integration transformed our customer support overnight." },
  { name: "Meera Nair", role: "Product Lead, Skylark", q: "Premium quality, smooth communication, futuristic UI." },
];

export default function Home() {
  return (
    <PageTransition>
      {/* HERO */}
      <section className="relative min-h-[92vh] grid-bg overflow-hidden">
        <div className="absolute inset-0"><ParticleField /></div>
        <div className="absolute inset-0 bg-grad-radial pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border border-brand/40 text-brand bg-brand/10"
          >
            <Sparkles size={12} /> AI-Powered Software Studio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-extrabold tracking-tight mt-6 leading-[1.05]"
          >
            Building the Future of <br />
            <Typewriter words={["Smart Digital Solutions", "AI-Powered Apps", "Scalable SaaS", "Modern Web"]} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto mt-6 text-texts text-lg"
          >
            We create scalable software, AI-powered systems, and modern web experiences for startups and businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact" className="btn-primary">Start Project <ArrowRight size={16} /></Link>
            <Link to="/services" className="btn-outline">Explore Services</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((s) => (
              <div key={s.l} className="glass rounded-2xl p-5">
                <div className="text-3xl font-display font-bold grad-text">{s.v}</div>
                <div className="text-xs text-texts mt-1 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TRUSTED TECH */}
      <section className="py-16 border-y border-white/5 bg-surface/30">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-texts mb-8">Trusted Technologies</p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          {techs.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="font-display text-xl md:text-2xl font-semibold text-texts hover:text-white transition"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <SectionTitle eyebrow="Why Softzenix" title="Engineered for the future" subtitle="A team obsessed with quality, performance, and beautiful experiences." />
        <div className="grid md:grid-cols-3 gap-6">
          {why.map((w, i) => (
            <motion.div
              key={w.t}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-soft group"
            >
              <div className="w-12 h-12 rounded-xl bg-grad-brand grid place-items-center mb-4 group-hover:scale-110 transition">
                <w.icon size={20} />
              </div>
              <h3 className="font-display font-semibold text-lg">{w.t}</h3>
              <p className="text-texts text-sm mt-2">{w.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-surface/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle eyebrow="Featured Services" title="What we build" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grad-border card-soft cursor-pointer"
              >
                <s.icon className="text-brand mb-3" />
                <h3 className="font-semibold">{s.t}</h3>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">View all services <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <SectionTitle eyebrow="Process" title="From idea to launch" />
        <div className="relative grid md:grid-cols-5 gap-6">
          {process.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto w-14 h-14 rounded-full bg-grad-brand grid place-items-center font-bold text-lg shadow-lg shadow-brand/30">
                {i + 1}
              </div>
              <p className="mt-3 font-semibold">{p}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-surface/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle eyebrow="Clients" title="Loved by founders" />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-soft relative overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand/20 rounded-full blur-3xl" />
                <p className="text-textp">“{t.q}”</p>
                <div className="mt-5 pt-5 border-t border-white/10">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-texts">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-3xl p-12 md:p-16 text-center relative overflow-hidden grad-border"
        >
          <div className="absolute inset-0 bg-grad-brand opacity-10" />
          <h2 className="relative font-display text-3xl md:text-5xl font-bold">
            Let's build something <span className="grad-text">extraordinary</span> together.
          </h2>
          <p className="relative text-texts mt-4 max-w-xl mx-auto">Tell us your idea — we'll turn it into a beautiful, scalable product.</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Start a Project <ArrowRight size={16} /></Link>
            <Link to="/team" className="btn-outline">Meet the Team</Link>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
