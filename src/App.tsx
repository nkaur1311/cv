import { useState, useEffect } from "react";
import { PortfolioPage } from "@/pages/portfolio";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { config } from "@/portfolio.config";

function App() {
  const [theme, setTheme] = useState<string>(() => {
    const stored = localStorage.getItem("portfolio-theme");
    if (stored) return stored;
    if (config.defaultTheme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return config.defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      <CustomCursor />
      <PortfolioPage theme={theme} onToggleTheme={toggleTheme} />
    </>
  );
}

export default App;
