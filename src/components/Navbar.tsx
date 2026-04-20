import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Terminal } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { cn } from "../lib/utils";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: "Blog", path: "/" },
    { name: "Tags", path: "/tags" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-50/80 dark:bg-[#0a0c10]/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-1 px-2 rounded-md bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-mono text-sm font-bold transition-all group-hover:bg-brand-600">
            {">_"}
          </div>
          <span className="font-display font-bold text-lg tracking-tight">sh4d0w121</span>
        </Link>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-[13px] font-bold uppercase tracking-widest transition-all hover:text-brand-600",
                  location.pathname === link.path
                    ? "text-brand-600 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-brand-600"
                    : "text-slate-400"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
