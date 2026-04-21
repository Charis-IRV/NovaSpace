import { motion } from "framer-motion";
import iconPrincipal from "@/assets/icon-principal.png";

const HeroVisual = () => (
  <section className="relative -mt-10 pb-10 section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        {/* Main container - Figma portfolio style */}
        <div className="relative rounded-3xl overflow-hidden bg-card border border-border" style={{ boxShadow: '0 25px 60px -12px hsl(var(--primary) / 0.12), 0 0 0 1px hsl(var(--border))' }}>
          {/* Inner composition */}
          <div className="relative flex items-center justify-center py-12 md:py-16">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
            
            {/* Glow behind logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            
            {/* Logo composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center gap-8"
            >
              <div className="relative">
                {/* Outer ring */}
                <div className="absolute -inset-8 rounded-full border border-primary/10" />
                <div className="absolute -inset-16 rounded-full border border-primary/5" />
                
                <img
                  src={iconPrincipal}
                  alt="NovaSpace Icon"
                  width={120}
                  height={120}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>

              {/* Brand text */}
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium">
                  Système sur-mesure pour agences
                </p>
              </div>
            </motion.div>

            {/* Corner decorations */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-primary/20 rounded-tl-lg" />
            <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-primary/20 rounded-tr-lg" />
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-primary/20 rounded-bl-lg" />
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-primary/20 rounded-br-lg" />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroVisual;
