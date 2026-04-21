import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionCTA from "./SectionCTA";
import { Clock, Heart, TrendingUp, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Tu récupères du temps de CEO, pas de gestionnaire.",
    text: "Les heures passées à gérer des détails, répondre dans tous les sens et courir après l'information deviennent des heures pour créer de nouvelles offres, signer de meilleurs clients, structurer ton équipe.",
    span: "col-span-1 md:col-span-2", // wide card
  },
  {
    icon: Heart,
    title: "Tes clients restent plus longtemps et recommandent ton agence.",
    text: "Un client qui voit son projet avancer en temps réel, qui valide en un clic et qui ne se sent jamais dans le flou ne va pas « comparer les agences » toutes les trois semaines. Il reste, il rachète, il parle de toi.",
    span: "col-span-1",
  },
  {
    icon: TrendingUp,
    title: "Tu peux scaler sans exploser.",
    text: "Chaque nouveau projet démarre selon le même process, avec les mêmes étapes, les mêmes points de contrôle. Ce n'est plus toi qui fais tenir le système. C'est le système qui tient ton agence.",
    span: "col-span-1",
  },
  {
    icon: Zap,
    title: "Ton agence mérite mieux qu'un patchwork d'outils.",
    text: "Un seul système intégré remplace la dizaine d'outils que tu utilises aujourd'hui. Tout communique, tout est synchronisé, et ton équipe sait exactement où trouver l'information.",
    span: "col-span-1 md:col-span-2", // wide card
  },
];

const BenefitsSection = () => (
  <section id="benefices" className="section-spacing section-padding">
    <div className="max-w-6xl mx-auto">
      {/* Header — left-aligned with CTA on right, SonicFrames style */}
      <AnimatedSection>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Pourquoi NovaSpace
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight text-balance">
              Ce que ça change concrètement{" "}
              <span className="text-gradient-gold">pour toi.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed text-[15px]">
            NovaSpace transforme ta façon de gérer ton agence en remplaçant le chaos par un système clair, automatisé et premium.
          </p>
        </div>
      </AnimatedSection>

      {/* Bento grid — SonicFrames "Pourquoi nous choisir" style */}
      <div className="grid md:grid-cols-3 gap-4">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`group ${b.span}`}
          >
            <div className="relative h-full rounded-2xl border border-border bg-card p-8 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.15)]">
              {/* Subtle top gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                  <b.icon size={22} className="text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-foreground mb-3 leading-snug">
                  {b.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {b.text}
                </p>
              </div>

              {/* Decorative corner dots */}
              <div className="absolute top-4 right-4 flex gap-1.5 opacity-30">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary/25" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatedSection delay={0.5}>
        <div className="flex justify-center">
          <SectionCTA />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default BenefitsSection;
