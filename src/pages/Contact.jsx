import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import api from "../services/api.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ loading: false, done: false, error: null });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, done: false, error: null });
    try {
      await api.post("/contact", form);
      setStatus({ loading: false, done: true, error: null });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({ loading: false, done: false, error: err.response?.data?.message || "Failed to send" });
    }
  };

  return (
    <PageTransition>
      <section className="pt-24 pb-16 max-w-5xl mx-auto px-6 text-center">
        <SectionTitle eyebrow="Contact" title="Let's build something together" subtitle="Tell us about your project — we'll get back within 24 hours." />
      </section>

      <section className="pb-24 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          {[
            { icon: Mail, t: "Email", d: "hello@softzenix.com" },
            { icon: Phone, t: "Phone", d: "+91 98765 43210" },
            { icon: MapPin, t: "Location", d: "India" },
          ].map((it) => (
            <div key={it.t} className="flex items-start gap-4 card-soft">
              <div className="w-12 h-12 rounded-xl bg-grad-brand grid place-items-center flex-shrink-0"><it.icon size={20} /></div>
              <div>
                <p className="text-xs uppercase tracking-widest text-texts">{it.t}</p>
                <p className="font-semibold mt-1">{it.d}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={submit} className="card-soft space-y-4 grad-border">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Name" value={form.name} onChange={update("name")} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand" />
            <input required type="email" placeholder="Email" value={form.email} onChange={update("email")} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand" />
          </div>
          <input placeholder="Subject" value={form.subject} onChange={update("subject")} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand" />
          <textarea required rows={5} placeholder="Your message…" value={form.message} onChange={update("message")} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand resize-none" />
          <button type="submit" disabled={status.loading} className="btn-primary w-full justify-center">
            {status.loading ? <><Loader2 className="animate-spin" size={16} /> Sending…</> : status.done ? <><CheckCircle2 size={16} /> Sent!</> : <>Send Message <Send size={16} /></>}
          </button>
          {status.error && <p className="text-red-400 text-sm">{status.error}</p>}
        </motion.form>
      </section>
    </PageTransition>
  );
}
