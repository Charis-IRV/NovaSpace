import AnimatedSection from "./AnimatedSection";
import SectionCTA from "./SectionCTA";
import {
  Monitor, LayoutDashboard, Users, CheckCircle,
  MessageSquare, Bell, GraduationCap, Headphones,
} from "lucide-react";

const items = [
  { icon: Monitor, text: "Un espace client, un espace fondateur et un espace prestataire, chacun pensé pour son usage." },
  { icon: LayoutDashboard, text: "Un tableau de bord global pour suivre tous tes projets en un coup d'œil." },
  { icon: Users, text: "Un espace équipe avec envoi automatique des tâches, priorités et deadlines." },
  { icon: CheckCircle, text: "La validation des livrables en un clic, au bon endroit, avec l'historique." },
  { icon: MessageSquare, text: "Un chat intégré pour centraliser les échanges liés aux projets." },
  { icon: Bell, text: "Des notifications automatiques aux moments clés, pour tes clients comme pour ton équipe." },
  { icon: GraduationCap, text: "Une formation complète pour toi et ton équipe, afin que tout le monde maîtrise l'outil." },
  { icon: Headphones, text: "Un accompagnement après le lancement pour t'aider à optimiser au fur et à mesure." },
];

const DeliverablesSection = () => (
  <section className="section-spacing section-padding bg-surface-elevated/50">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <div className="line-accent mb-8" />
        <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight text-balance">
          Concrètement, ton portail d'agence{" "}
          <span className="text-gradient-gold">NovaSpace inclut :</span>
        </h2>
      </AnimatedSection>

      <div className="mt-8 grid sm:grid-cols-2 gap-5">
        {items.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="card-premium-hover flex items-start gap-4 h-full">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon size={18} className="text-primary" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.7}>
        <div className="flex justify-center">
          <SectionCTA />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default DeliverablesSection;
