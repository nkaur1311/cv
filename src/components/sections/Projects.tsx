import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { config } from "@/portfolio.config";

const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Projects() {
  const featured = config.projects.filter((p) => p.featured);
  const others = config.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-xs font-mono font-medium tracking-widest text-primary uppercase mb-4"
        >
          Work
        </motion.p>
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="section-heading text-4xl md:text-5xl text-foreground mb-14"
        >
          Featured Projects
        </motion.h2>

        {/* Featured — large cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {featured.map((project, i) => (
            <motion.div
              key={project.name}
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group p-7 rounded-2xl border border-border bg-card card-hover flex flex-col gap-4"
              data-testid={`project-featured-${i}`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif font-light text-2xl text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <div className="flex gap-2 shrink-0">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                      aria-label="GitHub repo"
                      data-testid={`link-repo-${project.name.toLowerCase()}`}
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                      aria-label="Live project"
                      data-testid={`link-live-${project.name.toLowerCase()}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 font-light">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <>
            <motion.h3
              variants={fadeUp}
              custom={featured.length + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-widest mb-6"
            >
              Other Projects
            </motion.h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map((project, i) => (
                <motion.div
                  key={project.name}
                  variants={fadeUp}
                  custom={i + featured.length + 3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="group p-5 rounded-xl border border-border bg-card card-hover flex flex-col gap-3"
                  data-testid={`project-other-${i}`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-light text-lg text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h4>
                    <div className="flex gap-1">
                      {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                          className="p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                          <Github size={14} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                          className="p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors" aria-label="Live">
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1 font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs font-mono rounded bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
