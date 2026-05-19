import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, Loader2 } from "lucide-react";
import api from "../services/api.js";

export default function FloatingAIChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [msgs, setMsgs] = useState([
    { role: "assistant", content: "Hi! I'm the Softzenix AI assistant. How can I help you today?" },
  ]);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...msgs, { role: "user", content: text }];
    setMsgs(next);
    setInput("");
    setLoading(true);
    try {
      const { data } = await api.post("/ai/query", {
        message: text,
        history: msgs.filter(m => m.role !== "system"),
      });
      setMsgs([...next, { role: "assistant", content: data.reply }]);
    } catch (e) {
      setMsgs([...next, { role: "assistant", content: "Sorry — the AI service is unavailable right now. Please try again later." }]);
    } finally { setLoading(false); }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-grad-brand shadow-lg shadow-brand/40 grid place-items-center"
      >
        {open ? <X /> : <MessageSquare />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[92vw] h-[520px] glass rounded-2xl flex flex-col overflow-hidden"
          >
            <div className="p-4 border-b border-white/10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-grad-brand grid place-items-center"><Sparkles size={16} /></div>
              <div>
                <p className="font-semibold text-sm">Softzenix AI</p>
                <p className="text-xs text-texts">Always here to help</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                    m.role === "user"
                      ? "bg-grad-brand text-white"
                      : "bg-white/5 border border-white/10"
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && <div className="flex items-center gap-2 text-texts text-xs"><Loader2 className="animate-spin" size={14} /> thinking…</div>}
              <div ref={endRef} />
            </div>

            <div className="p-3 border-t border-white/10 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask anything…"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm outline-none focus:border-brand"
              />
              <button onClick={send} disabled={loading} className="w-10 h-10 rounded-full bg-grad-brand grid place-items-center disabled:opacity-50">
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
