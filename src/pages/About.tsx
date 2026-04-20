import React from "react";
import { Terminal, Shield, Zap, Target, Linkedin, ExternalLink } from "lucide-react";

export default function About() {
  const experiences = [
    { icon: <Target className="w-5 h-5" />, title: "Bug Bounty Hunter", org: "HackerOne", link: "https://hackerone.com/sh4d0w121" },
    { icon: <Target className="w-5 h-5" />, title: "Bug Bounty Hunter", org: "Bugcrowd", link: "https://bugcrowd.com/h/sh4d0w121" },
    { icon: <Zap className="w-5 h-5" />, title: "CTF Team Member", org: "Team deathwing (VIT)", link: "#" },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-16">
      <header className="space-y-6">
        <div className="w-12 h-12 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-12">
          <Terminal className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h1 className="font-display font-semibold text-5xl md:text-6xl tracking-tight">Pranil Gholap.</h1>
          <p className="text-lg font-mono text-brand-600 font-bold uppercase tracking-widest">sh4d0w121</p>
        </div>
        <p className="text-xl leading-relaxed text-slate-500 dark:text-slate-400">
          I am a SY Computer Engineering student at Vishwakarma Institute of Technology. 
          A cybersecurity enthusiast focusing on offensive security, CTF player for team <b>deathwing</b>, 
          and a bug bounty hunter.
        </p>
        
        <div className="flex gap-4">
          <a 
            href="https://www.linkedin.com/in/pranil-gholap-a39245339/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-sm font-medium"
          >
            <Linkedin className="w-4 h-4 text-blue-600" /> LinkedIn
          </a>
        </div>
      </header>

      <section className="prose prose-slate dark:prose-invert">
        <p>
          I started this blog to document my journey in the world of cybersecurity. 
          From solving CTF challenges with <b>deathwing</b> to participating in bug bounty programs, 
          I love diving deep into technical writeups, exploit research, and systems security.
        </p>

        <h3 className="font-serif font-bold text-2xl mt-12 mb-6">Expertise & Focus</h3>
        <ul className="grid gap-4 list-none pl-0">
          <li className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold block">Offensive Security</span>
              <span className="text-sm text-slate-500">Focusing on web exploitation, binary analysis, and penetration testing.</span>
            </div>
          </li>
          <li className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold block">CTF & Research</span>
              <span className="text-sm text-slate-500">Actively playing CTFs and researching new vulnerability patterns.</span>
            </div>
          </li>
        </ul>
      </section>

      <section className="space-y-6 pt-12 border-t border-slate-100 dark:border-slate-800">
        <h3 className="font-serif font-bold text-2xl">Presence</h3>
        <div className="grid gap-6">
          {experiences.map((exp, i) => (
            <a 
              key={i} 
              href={exp.link} 
              target={exp.link !== "#" ? "_blank" : undefined}
              rel={exp.link !== "#" ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between group p-3 -mx-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  {exp.icon}
                </div>
                <div>
                  <span className="font-medium block">{exp.title}</span>
                  <span className="text-sm text-slate-500">{exp.org}</span>
                </div>
              </div>
              {exp.link !== "#" ? <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-slate-600" /> : <span className="text-xs font-mono text-slate-400">ACTIVE</span>}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
