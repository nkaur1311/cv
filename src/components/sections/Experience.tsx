import { motion } from "framer-motion";
import { config } from "@/portfolio.config";
import { fadeUpVariants } from "@/lib/animation";

const fadeUp = fadeUpVariants(40, 0.75, 0.13);

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-xs font-mono font-medium tracking-widest text-primary uppercase mb-4"
        >
          Career
        </motion.p>
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="section-heading text-4xl md:text-5xl text-foreground mb-14"
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent hidden sm:block" />

          <div className="flex flex-col gap-10">
            {config.experience.map((job, i) => (
              <motion.div
                key={`${job.company}-${i}`}
                variants={fadeUp}
                custom={i + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="relative sm:pl-24"
                data-testid={`experience-${i}`}
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-4 top-6 w-8 h-8 rounded-full bg-background border-2 border-primary/50 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="p-7 rounded-2xl border border-border bg-card card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-serif font-light text-2xl text-foreground">
                        {job.role}
                      </h3>
                      <p className="text-primary text-sm tracking-wide mt-0.5 font-medium">
                        {job.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full border border-border whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 font-light">
                    {job.description}
                  </p>
                  {job.highlights && job.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {job.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
