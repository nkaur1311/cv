import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Skills } from "@/components/sections/Skills";
import { Languages } from "@/components/sections/Languages";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Publications } from "@/components/sections/Publications";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { config } from "@/portfolio.config";
import type { SectionId } from "@/portfolio.config";
import { Link2 } from "lucide-react";

interface PortfolioPageProps {
  theme: string;
  onToggleTheme: () => void;
  topOffset: number;
}

const SECTION_COMPONENTS: Record<SectionId, React.ComponentType> = {
  about:          About,
  stats:          Stats,
  skills:         Skills,
  languages:      Languages,
  experience:     Experience,
  projects:       Projects,
  education:      Education,
  certifications: Certifications,
  publications:   Publications,
  testimonials:   Testimonials,
  contact:        Contact,
};

export function PortfolioPage({ theme, onToggleTheme, topOffset }: PortfolioPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar theme={theme} onToggleTheme={onToggleTheme} topOffset={topOffset} />
      <Hero />
      {config.sections
        .filter((s) => s.show)
        .map(({ id }) => {
          const Section = SECTION_COMPONENTS[id];
          return Section ? <Section key={id} /> : null;
        })}
      {config.showPoweredBy && (
        <footer className="py-5 px-6 border-t border-border text-center">
          <a
            href="https://github.com/git-vita/git-vita.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground/60 hover:text-muted-foreground transition-colors"
          >
            <Link2 size={10} />
            Made with GitVita
          </a>
        </footer>
      )}
    </div>
  );
}
