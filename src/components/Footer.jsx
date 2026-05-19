import { Link } from "react-router-dom";
import { Sparkles, Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface/40 backdrop-blur-md mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl">
            <span className="w-9 h-9 rounded-xl bg-grad-brand grid place-items-center"><Sparkles size={18} /></span>
            <span className="grad-text">Softzenix</span>
          </Link>
          <p className="text-texts text-sm mt-4">Building smart digital experiences with modern technology and AI.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-texts">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/mission" className="hover:text-white">Mission</Link></li>
            <li><Link to="/vision" className="hover:text-white">Vision</Link></li>
            <li><Link to="/team" className="hover:text-white">Team</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-texts">
            <li>Web Development</li>
            <li>MERN Stack</li>
            <li>AI Integration</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <p className="text-sm text-texts mb-3">hello@softzenix.com<br/>+91 98765 43210</p>
          <div className="flex gap-3">
            {[Github, Linkedin, Twitter, Mail].map((I, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg border border-white/10 grid place-items-center hover:border-brand hover:text-brand transition">
                <I size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-texts">
        © {new Date().getFullYear()} Softzenix — Founded by Sanika Rahangdale. All rights reserved.
      </div>
    </footer>
  );
}
