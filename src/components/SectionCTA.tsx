import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SectionCTA = () => (
  <div className="mt-10">
    <a
      href="https://calendly.com/novaspace661/30min"
      className="group relative inline-flex items-center gap-3 bg-transparent border border-border text-foreground px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-500 hover:border-primary/50 hover:bg-primary/5"
    >
      <span>Réserver mon appel stratégique offert</span>
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-gold text-primary-foreground transition-transform duration-300 group-hover:translate-x-1">
        <ArrowRight size={16} />
      </span>
    </a>
  </div>
);

export default SectionCTA;
