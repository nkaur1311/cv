import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { config } from "@/portfolio.config";
import type { Testimonial } from "@/portfolio.config";
import { fadeUpVariants } from "@/lib/animation";

const fadeUp = fadeUpVariants(36, 0.7, 0.1);

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index + 2}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      data-testid={`testimonial-${index}`}
      className="flex flex-col gap-5 p-7 rounded-2xl border border-border bg-card card-hover"
    >
      {/* Quote mark */}
      <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <Quote size={16} />
      </div>

      {/* Quote text */}
      <blockquote className="font-serif font-light text-lg leading-relaxed text-foreground flex-1">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        {t.photoUrl ? (
          <img
            src={t.photoUrl}
            alt={t.name}
            className="w-10 h-10 rounded-full object-cover shrink-0 bg-secondary"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = "flex";
            }}
          />
        ) : null}

        {/* Initials fallback */}
        <div
          className={`w-10 h-10 rounded-full bg-primary/15 text-primary text-xs font-semibold items-center justify-center shrink-0 ${
            t.photoUrl ? "hidden" : "flex"
          }`}
        >
          {t.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}
        </div>

        <div className="min-w-0">
          <p className="text-sm font-medium text-foreground truncate">{t.name}</p>
          <p className="text-xs text-muted-foreground truncate">
            {t.title}
            {t.company ? ` · ${t.company}` : ""}
          </p>
        </div>

        {t.relationship && (
          <span className="ml-auto font-mono text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full border border-border whitespace-nowrap shrink-0">
            {t.relationship}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  if (!config.testimonials || config.testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-xs font-mono font-medium tracking-widest text-primary uppercase mb-4"
        >
          Testimonials
        </motion.p>
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="section-heading text-4xl md:text-5xl text-foreground mb-10"
        >
          What People Say
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {config.testimonials.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
