import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionCTA from "./SectionCTA";

// Images
import demoClient from "@/assets/demo-client.png";
import demoPresta from "@/assets/demo-presta.png";
import demoFounder from "@/assets/demo-founder.png";

const steps = [
  {
    image: demoClient,
    title: "Tes clients",
    text: "Se connectent, suivent l’avancement, valident les livrables et posent leurs questions sans jamais te relancer.",
  },
  {
    image: demoPresta,
    title: "Ton équipe",
    text: "Reçoit automatiquement les tâches, priorités et deadlines sans dépendre de toi pour avancer.",
  },
  {
    image: demoFounder,
    title: "Toi",
    text: "Tu vois instantanément ce qui avance, ce qui bloque, et où intervenir sans perdre du temps.",
  },
];

/* =========================
   STEP COMPONENT PREMIUM
========================= */
const Step = ({ step, i, isLast }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  // Focus effect
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 1, 0.25]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);

  // Active color
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#94a3b8", "hsl(var(--primary))", "#94a3b8"]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.4 }}
      className="
        relative
        grid grid-cols-1 md:grid-cols-[90px_1fr_1fr]
        gap-6 md:gap-10
        items-start md:items-center
        py-10
        snap-center
      "
    >
      {/* ================= TIMELINE ================= */}
      <div className="relative flex md:flex-col items-center justify-start">

        {/* HALO ANIMÉ */}
        <motion.div
          className="absolute w-16 h-16 rounded-full blur-xl opacity-40"
          style={{ backgroundColor: bgColor }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />

        {/* POINT */}
        <motion.div
          style={{ backgroundColor: bgColor }}
          className="
            w-10 h-10 md:w-12 md:h-12
            rounded-full flex items-center justify-center
            font-bold text-xs md:text-sm
            text-white z-10
            relative
          "
        >
          {String(i + 1).padStart(2, "0")}
        </motion.div>

        {/* LINE (BACKGROUND) */}
        {!isLast && (
          <div className="hidden md:block w-[2px] h-40 bg-border mt-2 relative">
            {/* LINE PROGRESS ANIMÉE */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-primary"
              style={{
                height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
              }}
            />
          </div>
        )}
      </div>

      {/* ================= IMAGE ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          overflow-hidden rounded-2xl
          bg-card border border-border
          group
        "
      >
        <img
          src={step.image}
          alt={step.title}
          className="
            w-full
            h-[200px] sm:h-[240px] md:h-[320px]
            object-cover
            transition-transform duration-700
            group-hover:scale-[1.05]
          "
        />
      </motion.div>

      {/* ================= TEXT ================= */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-foreground">
          {step.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base max-w-md">
          {step.text}
        </p>
      </motion.div>
    </motion.div>
  );
};

/* =========================
   MAIN SECTION
========================= */
const SolutionSection = () => {
  return (
    <section
      id="solution"
      className="
        section-spacing section-padding
        scroll-smooth
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-24">

        {/* HEADER */}
        <div className="text-center">
          <div className="line-accent mx-auto mb-8" />

          <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight text-balance">
            Enfin un système où{" "}
            <span className="text-gradient-gold">tout est clair.</span>
            <br />
            Pour tes clients. Ton équipe. Et toi.
          </h2>

          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            NovaSpace conçoit pour ton agence un portail privé entièrement sur mesure,
            pensé pour éliminer le chaos et centraliser toute ton organisation.
          </p>
        </div>

        {/* ================= STEPS (SNAP SCROLL CONTAINER) ================= */}
        <div
          className="
            flex flex-col
            gap-10 md:gap-20
            snap-y snap-mandatory
          "
        >
          {steps.map((step, i) => (
            <Step
              key={i}
              step={step}
              i={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>


      </div>
    </section>
  );
};

export default SolutionSection;