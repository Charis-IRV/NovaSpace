import AnimatedSection from "./AnimatedSection";
import { ArrowRight, Sparkles } from "lucide-react";

const PricingSection = () => (
  <section className="section-spacing section-padding">
    <div className="max-w-3xl mx-auto text-center">
      <AnimatedSection>
        <div className="line-accent mx-auto mb-8" />
        <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight text-balance">
          Une offre claire.{" "}
          <span className="text-gradient-gold">Zéro surprise.</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="mt-12 card-premium border-primary/20 text-left relative overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={22} className="text-primary" />
              <h3 className="font-heading font-bold text-2xl text-foreground">Portail d'Agence NovaSpace</h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Ton espace privé complet, livré en 30 jours, conçu uniquement pour ton agence et ta manière de travailler.
            </p>

            <p className="mt-6 text-foreground font-medium">
              Tu ne paies pas pour un logiciel de plus. Tu investis dans le système qui permet à ton agence de tenir la croissance.
            </p>

            <a
              href="https://calendly.com/novaspace661/30min"
              className="mt-8 group inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-all duration-300 glow-gold"
            >
              Réserver mon appel stratégique offert
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Appel de 30 minutes, 100% gratuit. On analyse ensemble comment ton agence fonctionne aujourd'hui 
              et on te montre exactement ce qu'on peut construire pour toi. Tu repars avec un plan clair — que tu décides de travailler avec nous ou non.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default PricingSection;
