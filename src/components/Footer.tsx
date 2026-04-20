import React from "react";
import { Github, Linkedin, Mail, ShieldAlert } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          <span className="font-serif font-bold text-lg flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-slate-400" />
            sh4d0w121 | Pranil Gholap
          </span>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Cybersecurity research, CTF writeups, and offensive security analysis.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/pranil-gholap-a39245339/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/Pranil-G" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="mailto:contact@example.com" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-slate-100 dark:border-slate-900 text-center">
        <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">
          © {new Date().getFullYear()} Pranil Gholap (sh4d0w121) | Technical Research
        </p>
      </div>
    </footer>
  );
}
