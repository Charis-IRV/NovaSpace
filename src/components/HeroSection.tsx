import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import iconPrincipal from "@/assets/icon-principal.png";

const badges = [
  { icon: Check, label: "Livraison en 30 jours" },
  { icon: Check, label: "100% sur-mesure" },
  { icon: Check, label: "Zéro template" },
  { icon: Check, label: "Satisfaction garantie" },
];

/* Floating hexagonal decorative elements inspired by SonicFrames */
const FloatingHex = ({
  className,
  delay,
  children,
}: {
  className: string;
  delay: number;
  children?: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 1.2, ease: "easeOut" }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
      className="relative"
    >
      {/* Hexagon shape */}
      <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl rotate-12 border border-primary/15 bg-card/40 backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_-10px_hsl(var(--primary)/0.1)]">
        <div className="text-foreground/60 font-bold text-lg -rotate-12">
          {children}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 mb-20">
    {/* Background — deep gradient with primary glow */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.06] via-background to-background" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/8 rounded-full blur-[160px]" />
    {/* Grid lines background */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />

    {/* Floating decorative elements — SonicFrames style */}
    <FloatingHex className="top-[18%] -left-6 md:left-[6%] hidden md:flex" delay={0.8}>
      <img src={iconPrincipal} alt="" className="w-10 h-10 object-contain opacity-60" />
    </FloatingHex>
    <FloatingHex className="top-[30%] -left-2 md:left-[3%] hidden md:flex" delay={1.1}>
      <span className="text-primary/50 text-sm font-medium">NS</span>
    </FloatingHex>
    <FloatingHex className="top-[20%] -right-6 md:right-[5%] hidden md:flex" delay={0.9}>
      <span className="text-primary/50 text-sm font-medium">⚡</span>
    </FloatingHex>
    <FloatingHex className="top-[38%] -right-2 md:right-[8%] hidden md:flex" delay={1.3}>
      <span className="text-primary/40 text-xs">Portail d'Agence</span>
    </FloatingHex>

    {/* Content */}
    <div className="relative z-10 max-w-5xl mx-auto section-padding pt-12 pb-8 text-center">
      {/* Micro-copy badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 border border-border rounded-full px-5 py-2 mb-8"
      >
        <span className="text-sm text-muted-foreground">
          Pour les agences de services qui veulent passer au niveau supérieur.
        </span>
      </motion.div>

      {/* Headline — large, bold, with gradient keyword */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-balance"
      >
        On construit le système qui fait tourner ton agence{" "}
        <span className="text-gradient-gold">en automatique.</span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
      >
        Fini les Slack qui débordent, les Notion que personne ne lit, les WhatsApp à toute heure.
        Un portail privé qui fait tourner ton agence en automatique, pendant que toi tu fais grandir le business.
      </motion.p>

      {/* CTA button — SonicFrames style: single prominent rounded button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8"
      >
        <a
          href="https://calendly.com/novaspace661/30min"
          className="group inline-flex items-center justify-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.5)] hover:scale-[1.03]"
        >
          Planifier un Appel Offert
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </a>
      </motion.div>

      {/* Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        {badges.map((b) => (
          <div
            key={b.label}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <b.icon size={14} className="text-primary" />
            {b.label}
          </div>
        ))}
      </motion.div>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
