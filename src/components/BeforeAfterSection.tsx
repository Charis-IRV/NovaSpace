import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionCTA from "./SectionCTA";
import { X, Check, ArrowRight } from "lucide-react";

const beforeItems = [
  "Ton client t'appelle ou t'écrit pour savoir où en est son projet.",
  "Tu réexpliques à chaque prestataire ce qu'il doit faire et dans quel ordre.",
  "Tu valides absolument tout toi-même, par peur que quelque chose t'échappe.",
  "Nouvel outil, nouveau client, nouveau freelance = nouveau désordre.",
  "Tu refuses des opportunités parce que tu sais que l'interne ne suivra pas.",
  "Tes clients ne savent pas exactement ce qui se passe.",
];

const afterItems = [
  "Il se connecte à son portail client et voit tout en temps réel, sans te déranger.",
  "Chaque prestataire reçoit automatiquement ses tâches, avec le contexte et les échéances.",
  "Tu ne valides que ce qui compte vraiment, le reste se déroule selon un process clair.",
  "Nouveau client = même expérience fluide et maîtrisée, du onboarding à la livraison.",
  "Tu peux accepter plus de clients sans t'épuiser, ton système absorbe la charge.",
  "Ils voient chaque étape, comprennent ce qui est fait, ce qui arrive, et te font confiance.",
];

const BeforeAfterSection = () => (
  <section className="section-spacing section-padding">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <div className="text-center mb-10">
          <div className="line-accent mx-auto mb-8" />
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Avant NovaSpace.{" "}
            <span className="text-gradient-gold">Après NovaSpace.</span>
          </h2>
        </div>
      </AnimatedSection>

      {/* Two columns - ACA Agency style */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* BEFORE Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-2xl border border-destructive/20 bg-card p-8 md:p-10 h-full">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <X size={18} className="text-destructive" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">
                Avant NovaSpace
              </h3>
            </div>

            {/* Items */}
            <div className="space-y-5">
              {beforeItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                    <X size={12} className="text-destructive" />
                  </div>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* AFTER Column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl border border-primary/30 bg-card p-8 md:p-10 h-full relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px]" />
            
            {/* Header */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check size={18} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground">
                  Après NovaSpace
                </h3>
              </div>

              {/* Items */}
              <div className="space-y-5">
                {afterItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check size={12} className="text-primary" />
                    </div>
                    <p className="text-foreground text-[15px] leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Transition arrow */}
      <AnimatedSection delay={0.4}>
        <div className="flex justify-center my-8">
          <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
            <ArrowRight size={20} className="text-primary-foreground" />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <div className="flex justify-center">
          <SectionCTA />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default BeforeAfterSection;
