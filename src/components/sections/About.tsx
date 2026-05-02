import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail } from "lucide-react";
import { config } from "@/portfolio.config";

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bg = useTransform(scrollYProgress, [0, 1], ["hsl(var(--background))", "hsl(var(--background))"]);

  return (
    <section id="about" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left col */}
          <div>
            <motion.p
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-xs font-mono font-medium tracking-widest text-primary uppercase mb-4"
            >
              About Me
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="section-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight"
            >
              The person behind
              <br />
              <em className="not-italic font-light">the keyboard.</em>
            </motion.h2>
            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="w-12 h-px mb-8"
              style={{
                background: "linear-gradient(90deg, hsl(var(--primary)), transparent)",
              }}
            />
            <motion.p
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-base text-muted-foreground leading-relaxed whitespace-pre-line font-light"
            >
              {config.about}
            </motion.p>
            {config.email && (
              <motion.a
                variants={fadeUp}
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                href={`mailto:${config.email}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                data-testid="link-email"
              >
                <Mail size={14} />
                {config.email}
              </motion.a>
            )}
          </div>

          {/* Right col — stat cards stagger in */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Years Experience", value: "5+" },
              { label: "Projects Shipped", value: "20+" },
              { label: "Technologies", value: `${config.skills.reduce((acc, s) => acc + s.items.length, 0)}+` },
              { label: "Cups of Coffee", value: "∞" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="p-6 rounded-2xl border border-border bg-card card-hover"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <p className="text-4xl font-serif font-light gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
