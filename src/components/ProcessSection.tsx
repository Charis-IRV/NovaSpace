import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionCTA from "./SectionCTA";
import processDiagnostic from "@/assets/process-diagnostic.jpg";
import processBuild from "@/assets/process-build.jpg";
import processLaunch from "@/assets/process-launch.jpg";

const steps = [
  {
    num: "01",
    title: "Diagnostic stratégique",
    text: "On commence par comprendre ton agence : ton modèle, tes offres, ton process actuel, tes outils, ton équipe, ton niveau de charge. On identifie ce qui fonctionne déjà, ce qui bloque et où ton système fuit.",
    image: processDiagnostic,
  },
  {
    num: "02",
    title: "Architecture et construction de ton portail",
    text: "On conçoit l'architecture idéale pour ton agence : espaces clients, fondateur, équipe, prestataires, workflows, automatisations. Puis on construit ton portail, à tes couleurs, à ton nom, selon ta façon de travailler. Aucun modèle standard, uniquement du sur-mesure.",
    image: processBuild,
  },
  {
    num: "03",
    title: "Tests, ajustements et lancement",
    text: "On teste ensemble avec de vrais scénarios, on ajuste les détails, on te montre comment tout piloter simplement. Ensuite, on lance sur tes vrais clients et ton équipe, sans rupture, sans stress.",
    image: processLaunch,
  },
];

const ProcessSection = () => (
  <section id="processus" className="section-spacing section-padding">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <div className="text-center mb-10">
          <div className="line-accent mx-auto mb-8" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight text-balance">
            En 30 jours, ton agence{" "}
            <span className="text-gradient-gold">change de dimension.</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="space-y-8">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="group"
          >
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30" style={{ boxShadow: 'var(--shadow-card)' }}>
              {/* Image side */}
              <div className={`relative h-64 md:h-auto overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card/40 to-transparent md:bg-none" />
                {/* Step number overlay */}
                <div className="absolute top-6 left-6">
                  <span className="text-gradient-gold font-heading font-bold text-5xl opacity-30">
                    {s.num}
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className={`flex flex-col justify-center p-8 md:p-12 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-gradient-gold font-heading font-bold text-sm tracking-widest uppercase">
                    Étape {s.num}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {s.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatedSection delay={0.3}>
        <p className="mt-8 text-lg font-semibold text-foreground text-center">
          En 30 jours, tu passes d'une agence qui tient « à la main » à une agence qui tourne sur{" "}
          <span className="text-gradient-gold">un système solide.</span>
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <div className="flex justify-center">
          <SectionCTA />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ProcessSection;
