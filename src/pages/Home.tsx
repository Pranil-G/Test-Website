import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import { format } from "date-fns";
import { Clock, Calendar, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-24">
      <header className="space-y-6">
        <div className="flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-2">
          <span className="w-12 h-[1px] bg-slate-200 dark:bg-slate-800" />
          By Pranil Gholap (sh4d0w121)
        </div>
        <h1 className="font-display font-semibold text-5xl md:text-6xl tracking-tight leading-[1.1] text-slate-900 dark:text-white">
          Technical Research & <br />Security Writeups.
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          Exploring hardware security, kernel internals, and modern exploit development. 
          A journey through bytes and syscalls.
        </p>
      </header>

      <section className="space-y-12">
        <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800/60 pb-6">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 font-bold">
            Recent Publications
          </h2>
        </div>

        <div className="grid gap-20">
          {posts.map((post) => (
            <article key={post.id} className="group flex flex-col gap-5">
              <div className="flex items-center gap-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {format(new Date(post.date), "MMMM d, yyyy")}
                </div>
                <div className="flex items-center gap-1.5 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readingTime}
                </div>
              </div>

              <div className="space-y-4">
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="font-display font-semibold text-3xl md:text-4xl group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl text-lg">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/tags?filter=${tag}`}
                      className="px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-widest border border-slate-200 dark:border-slate-800 text-slate-500 hover:border-brand-500 hover:text-brand-600 transition-all"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="flex items-center gap-1 text-sm font-bold text-slate-900 dark:text-white group-hover:gap-2 transition-all opacity-0 group-hover:opacity-100"
                >
                  Read Full <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
