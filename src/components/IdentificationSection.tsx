import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionCTA from "./SectionCTA";
import identificationVisual from "@/assets/identification-visual.jpg";
import { Shield, Eye, Cpu } from "lucide-react";

const bulletPoints = [
  {
    icon: Shield,
    title: "Gestion des demandes",
    text: "Tes clients t'écrivent directement dès qu'ils ont une question.",
  },
  {
    icon: Eye,
    title: "Validation bloquée",
    text: "Ton équipe attend tes validations, tes instructions, tes briefs de dernière minute.",
  },
  {
    icon: Cpu,
    title: "Opérationnel vs Stratégie",
    text: "Tu passes tes journées à gérer l'opérationnel, alors que ta place devrait être sur la stratégie.",
  },
];

const IdentificationSection = () => (
  <section className="section-spacing section-padding relative overflow-hidden">
    <div className="max-w-6xl mx-auto">
      {/* Header — centered, Seta Finance style */}
      <AnimatedSection>
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Le constat
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12] text-balance max-w-4xl mx-auto">
            Tu diriges une agence. Mais tu as l'impression de{" "}
            <span className="text-gradient-gold">tout porter sur ton dos.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ce que tu vis n'est pas un problème de motivation. C'est un problème de système.
          </p>
        </div>
      </AnimatedSection>

      {/* Two-column layout: cards left, image right — Seta Finance style */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Cards column */}
        <div className="space-y-4">
          {bulletPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="relative rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.12)] overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20">
                    <point.icon size={18} className="text-primary" />
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <AnimatedSection delay={0.6}>
            <SectionCTA />
          </AnimatedSection>
        </div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-border">
            <img
              src={identificationVisual}
              alt="Fondateur d'agence débordé par les notifications et tâches"
              width={800}
              height={800}
              loading="lazy"
              className="w-full"
            />
            {/* Subtle gold glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default IdentificationSection;
