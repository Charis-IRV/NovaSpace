import AnimatedSection from "./AnimatedSection";
import SectionCTA from "./SectionCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "« J'utilise déjà Notion, Slack et d'autres outils. »",
    a: "Très bien. Le problème n'est pas les outils, c'est le fait que tu sois obligé de faire le lien entre eux. Ton portail NovaSpace vient structurer et centraliser : chaque outil retrouve sa place dans un système cohérent, visible par tous les bons acteurs.",
  },
  {
    q: "« J'ai peur de perdre le contrôle. »",
    a: "Tu ne perds pas le contrôle, tu le reprends. Ton tableau de bord te montre ce qui avance, ce qui bloque et où agir. La différence, c'est que tu choisis quand intervenir, au lieu d'être sollicité en permanence.",
  },
  {
    q: "« Je suis freelance, pas vraiment une grosse agence. »",
    a: "Si tu gères plusieurs clients ou plusieurs projets, tu as déjà les problèmes d'une agence — mais à taille humaine. On a une version adaptée pour toi : un espace pour toi, un pour tes clients, avec le même niveau de clarté et de professionnalisme.",
  },
  {
    q: "« Je n'ai pas encore beaucoup de clients. Est-ce que ce n'est pas trop tôt ? »",
    a: "C'est précisément le bon moment. Quand le flux de clients décolle, il est trop tard pour construire ton système sereinement. Tu poses les fondations maintenant, et tu es prêt quand la demande augmente.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-spacing section-padding bg-surface-elevated/50">
    <div className="max-w-3xl mx-auto">
      <AnimatedSection>
        <div className="line-accent mb-8" />
        <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight text-balance">
          Les questions que tu te poses{" "}
          <span className="text-gradient-gold">sûrement.</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Accordion type="single" collapsible className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="card-premium border border-border data-[state=open]:border-primary/30 transition-colors duration-300"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline px-2 text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed px-2 pb-2">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <div className="flex justify-center">
          <SectionCTA />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default FAQSection;
