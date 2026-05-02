import { useState, useEffect } from "react";
import { Download, Share2, MapPin, ArrowDown, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { config } from "@/portfolio.config";

function Avatar() {
  if (config.avatarUrl) {
    return (
      <img
        src={config.avatarUrl}
        alt={config.name}
        className="w-28 h-28 rounded-2xl object-cover ring-2 ring-primary/30"
        data-testid="img-avatar"
      />
    );
  }
  const initials = config.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      className="w-28 h-28 rounded-2xl flex items-center justify-center text-3xl font-serif font-bold text-primary-foreground ring-2 ring-primary/30"
      style={{
        background: "linear-gradient(135deg, hsl(var(--primary)), hsl(250 84% 80%))",
      }}
      data-testid="div-avatar-initials"
    >
      {initials}
    </div>
  );
}

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const delay = 600;
    const speed = 38;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <p className="text-base md:text-lg text-muted-foreground max-w-xl font-light tracking-wide leading-relaxed">
      {displayed}
      {!done && (
        <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle animate-pulse" />
      )}
    </p>
  );
}

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = `${window.location.origin}${config.resumeUrl}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: `${config.name} - Resume`, url });
      } catch {}
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleScrollDown = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 dark:opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--primary) / 0.12) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Glow blob */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, hsl(var(--primary)), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Avatar />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center gap-3"
        >
          {config.openToWork && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Open to opportunities
            </span>
          )}

          {/* Name — editorial serif */}
          <h1 className="text-6xl md:text-8xl font-serif font-light tracking-tight text-foreground leading-none">
            {config.name.split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "italic" : ""}>
                {i > 0 ? " " : ""}{word}
              </span>
            ))}
          </h1>

          {/* Title — small caps / spaced sans */}
          <p className="text-sm font-medium tracking-[0.22em] text-primary uppercase mt-1">
            {config.title}
          </p>

          {config.tagline && <TypewriterText text={config.tagline} />}

          {config.location && (
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground tracking-wider uppercase font-medium mt-1">
              <MapPin size={12} />
              {config.location}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 flex-wrap justify-center"
        >
          {config.social.github && (
            <a
              href={config.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all"
              aria-label="GitHub"
              data-testid="link-github"
            >
              <FaGithub size={18} />
            </a>
          )}
          {config.social.linkedin && (
            <a
              href={config.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all"
              aria-label="LinkedIn"
              data-testid="link-linkedin"
            >
              <FaLinkedin size={18} />
            </a>
          )}
          {config.social.twitter && (
            <a
              href={config.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all"
              aria-label="Twitter"
              data-testid="link-twitter"
            >
              <FaXTwitter size={18} />
            </a>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 flex-wrap justify-center"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:opacity-90 transition-opacity"
            data-testid="button-view-work"
          >
            View My Work
          </a>
          <a
            href={config.resumeUrl}
            download={config.resumeFileName}
            className="flex items-center gap-2 px-7 py-3 rounded-xl border border-border text-foreground font-medium text-sm tracking-wide hover:bg-secondary hover:border-primary/40 transition-all"
            data-testid="button-download-resume-hero"
          >
            <Download size={14} />
            Download Resume
          </a>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-7 py-3 rounded-xl border border-border text-foreground font-medium text-sm tracking-wide hover:bg-secondary hover:border-primary/40 transition-all"
            data-testid="button-share-resume"
          >
            {copied ? (
              <>
                <CheckCircle size={14} className="text-green-500" />
                Link Copied
              </>
            ) : (
              <>
                <Share2 size={14} />
                Share Resume
              </>
            )}
          </button>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll down"
        data-testid="button-scroll-down"
      >
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
}
