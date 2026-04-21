import AnimatedSection from "./AnimatedSection";
import SectionCTA from "./SectionCTA";
import { Ban } from "lucide-react";
import problemTime from "@/assets/problem-time.jpg";
import problemTeam from "@/assets/problem-team.jpg";
import problemClients from "@/assets/problem-clients.jpg";
import problemTools from "@/assets/problem-tools.jpg";

const problems = [
  { image: problemTime, text: "10+ heures par semaine à répondre aux mêmes questions." },
  { image: problemTeam, text: "Des prestataires qui restent bloqués, faute d'infos claires et centralisées." },
  { image: problemClients, text: "Des clients qui ne voient rien avancer et qui commencent à se demander s'ils ont fait le bon choix." },
  { image: problemTools, text: "Des outils partout, qui ne se parlent pas, et toi en « pont humain » au milieu." },
];

const ProblemSection = () => (
  <section id="probleme" className="section-spacing section-padding">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <div className="line-accent mb-8" />
        <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight max-w-3xl text-balance">
          Ce que ce chaos te coûte vraiment{" "}
          <span className="text-gradient-gold">chaque semaine.</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Ces heures perdues à expliquer, relancer, vérifier, recoller les morceaux entre les outils, 
          ce n'est pas juste fatigant. C'est du chiffre d'affaires en moins, des opportunités que tu refuses, 
          des clients qui doutent parce qu'ils ne voient pas clairement où en est leur projet.
        </p>
      </AnimatedSection>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {problems.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:-translate-y-1" style={{ boxShadow: 'var(--shadow-card)' }}>
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>
              {/* Text */}
              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.5}>
        <div className="mt-12 flex items-center gap-3 text-lg">
          <Ban size={20} className="text-primary" />
          <p className="font-semibold text-foreground">
            Pendant ce temps, tu ne peux pas prendre plus de clients. Et tu le sais.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <SectionCTA />
      </AnimatedSection>
    </div>
  </section>
);

export default ProblemSection;
