import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import ctaVisual from "@/assets/cta-visual.jpg";

const FinalCTASection = () => (
  <section id="cta-final" className="section-spacing section-padding relative overflow-hidden">
    {/* Background glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(40_95%_45%/0.08)_0%,transparent_70%)]" />

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="line-accent mb-8" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight text-balance">
            Ton agence mérite mieux qu'un{" "}
            <span className="text-gradient-gold">patchwork d'outils.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Tu mérites mieux que des journées passées à éteindre des feux. Réserve 30 minutes. On dessine ton système.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            L'appel est gratuit, sans engagement. En 30 minutes, tu repars avec une vision claire de ce qu'il faut mettre en place 
            pour que ton agence fonctionne avec moins de friction et plus de marge — que tu travailles avec nous ou non.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10"
          >
            <a
              href="https://calendly.com/novaspace661/30min"
              className="group inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-10 py-5 rounded-full text-lg font-bold hover:opacity-90 transition-all duration-300 animate-glow-pulse"
            >
              <Calendar size={22} />
              PRENDRE UN RENDEZ-VOUS
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="mt-6 text-sm text-muted-foreground">
              30 min · Gratuit · Sans engagement · Places limitées ce mois-ci
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-border glow-gold">
            <img
              src={ctaVisual}
              alt="Transformation business NovaSpace"
              width={800}
              height={900}
              loading="lazy"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FinalCTASection;
