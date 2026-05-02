import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { config } from "@/portfolio.config";
import { fadeUpVariants } from "@/lib/animation";

const fadeUp = fadeUpVariants(36, 0.7, 0.12);

export function Education() {
  if (!config.education || config.education.length === 0) return null;

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-xs font-mono font-medium tracking-widest text-primary uppercase mb-4"
        >
          Education
        </motion.p>
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="section-heading text-4xl md:text-5xl text-foreground mb-10"
        >
          Academic Background
        </motion.h2>

        <div className="flex flex-col gap-4">
          {config.education.map((edu, i) => (
            <motion.div
              key={`${edu.institution}-${i}`}
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex items-center gap-6 p-6 rounded-2xl border border-border bg-card card-hover"
              data-testid={`education-${i}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <GraduationCap size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif font-light text-xl text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5 tracking-wide">
                  {edu.institution}
                </p>
              </div>
              <span className="font-mono text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full border border-border whitespace-nowrap shrink-0">
                {edu.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
