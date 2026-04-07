import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-28 py-5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
          {/* <div className="w-7 h-7 rounded-full border-2 border-foreground/60 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full border border-foreground/60" />
          </div> */}
          <span className="font-mono text-foreground text-lg tracking-tight">IH</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <span key={link} className="flex items-center">
              <button
                onClick={() => scrollTo(link)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm px-3 py-1"
              >
                {link}
              </button>
              {i < navLinks.length - 1 && <span className="text-muted-foreground/40">•</span>}
            </span>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden liquid-glass w-10 h-10 rounded-full flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 liquid-glass rounded-2xl p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-muted-foreground hover:text-foreground transition-colors text-left text-lg"
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
