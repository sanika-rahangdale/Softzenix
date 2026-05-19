import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Sparkles, Rocket, Crown } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

const plans = [
  {
    icon: Sparkles,
    name: "Starter",
    price: "₹24,999",
    tag: "One-time",
    desc: "Perfect for landing pages and MVPs.",
    features: [
      "Single-page React website",
      "Responsive modern design",
      "Basic SEO setup",
      "Contact form",
      "1 round of revisions",
      "7-day delivery",
    ],
    cta: "Start with Starter",
    highlight: false,
  },
  {
    icon: Rocket,
    name: "Growth",
    price: "₹74,999",
    tag: "One-time",
    desc: "Full MERN web app for growing startups.",
    features: [
      "Multi-page MERN application",
      "Authentication (JWT)",
      "MongoDB database + admin panel",
      "AI assistant integration",
      "Premium animations",
      "3 rounds of revisions",
      "21-day delivery",
    ],
    cta: "Choose Growth",
    highlight: true,
  },
  {
    icon: Crown,
    name: "Enterprise",
    price: "Custom",
    tag: "Talk to us",
    desc: "Scalable SaaS, custom AI, dedicated team.",
    features: [
      "Custom SaaS architecture",
      "Advanced AI workflows",
      "Cloud deployment + CI/CD",
      "Payments & subscriptions",
      "Dedicated project manager",
      "Unlimited revisions",
      "Priority support",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const faqs = [
  { q: "Do you offer monthly retainers?", a: "Yes — for ongoing development, support, and feature additions we offer flexible monthly plans." },
  { q: "Which technologies do you use?", a: "We build on the MERN stack (MongoDB, Express, React, Node) and integrate Gemini / OpenAI for AI features." },
  { q: "How do payments work?", a: "50% upfront and 50% on delivery for fixed-scope projects. Enterprise plans are milestone-based." },
  { q: "Do you provide source code?", a: "Absolutely — you own 100% of the code we ship for you." },
];

export default function Pricing() {
  return (
    <PageTransition>
      <section className="pt-24 pb-16 max-w-5xl mx-auto px-6 text-center">
        <SectionTitle
          eyebrow="Pricing"
          title="Simple, transparent plans"
          subtitle="Choose a package that fits your stage. Every plan includes premium design, clean code, and on-time delivery."
        />
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative card-soft flex flex-col ${p.highlight ? "grad-border scale-[1.02] shadow-2xl shadow-brand/30" : ""}`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold rounded-full bg-grad-brand text-white">
                  Most Popular
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-grad-brand grid place-items-center mb-4">
                <p.icon size={20} />
              </div>
              <h3 className="font-display font-bold text-2xl">{p.name}</h3>
              <p className="text-texts text-sm mt-1">{p.desc}</p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold grad-text">{p.price}</span>
                <span className="text-xs text-texts uppercase tracking-wider">{p.tag}</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-textp">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 justify-center ${p.highlight ? "btn-primary" : "btn-outline"}`}
              >
                {p.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-surface/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle eyebrow="FAQ" title="Frequently asked questions" />
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="card-soft"
              >
                <p className="font-semibold">{f.q}</p>
                <p className="text-texts text-sm mt-2">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Not sure which plan? <span className="grad-text">Let's talk.</span>
        </h2>
        <p className="text-texts mt-3">We'll recommend the perfect fit for your project in a free 15-minute call.</p>
        <Link to="/contact" className="btn-primary mt-6">Book a call</Link>
      </section>
    </PageTransition>
  );
}
