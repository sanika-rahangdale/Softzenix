import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      className="pointer-events-none fixed z-[1] w-[420px] h-[420px] rounded-full blur-3xl opacity-40 transition-transform duration-300"
      style={{
        left: pos.x - 210,
        top: pos.y - 210,
        background: "radial-gradient(circle, rgba(99,102,241,0.45), transparent 60%)",
      }}
    />
  );
}
