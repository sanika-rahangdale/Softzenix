import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import api from "../services/api.js";
import { setAuth } from "../redux/store.js";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); setErr("");
    try {
      const { data } = await api.post("/auth/register", form);
      dispatch(setAuth(data));
      nav("/");
    } catch (e) { setErr(e.response?.data?.message || "Registration failed"); }
    finally { setLoading(false); }
  };

  return (
    <PageTransition>
      <section className="min-h-[70vh] grid place-items-center px-6 py-16">
        <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} onSubmit={submit} className="card-soft grad-border w-full max-w-md space-y-4">
          <h1 className="font-display text-3xl font-bold">Create account</h1>
          <p className="text-texts text-sm">Join Softzenix in seconds.</p>
          <input required placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand" />
          <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand" />
          <input required type="password" placeholder="Password (min 6)" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand" />
          <button disabled={loading} className="btn-primary w-full justify-center">
            {loading ? <Loader2 className="animate-spin" size={16} /> : "Create account"}
          </button>
          {err && <p className="text-red-400 text-sm">{err}</p>}
          <p className="text-sm text-texts text-center">Have an account? <Link to="/login" className="text-brand">Sign in</Link></p>
        </motion.form>
      </section>
    </PageTransition>
  );
}
