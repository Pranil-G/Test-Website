import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { posts } from "../data/posts";
import { format } from "date-fns";
import { Clock, Calendar, Tag as TagIcon, X } from "lucide-react";

export default function Tags() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();
  
  const filteredPosts = filter 
    ? posts.filter(p => p.tags.includes(filter))
    : posts;

  return (
    <div className="space-y-16">
      <header className="space-y-6">
        <h1 className="font-serif font-bold text-4xl md:text-5xl">Explore by Tags.</h1>
        
        <div className="flex flex-wrap gap-3">
          {allTags.map((tag) => (
            <Link
              key={tag}
              to={`/tags?filter=${tag}`}
              className={`px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest transition-all ${
                filter === tag
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
              }`}
            >
              {tag}
            </Link>
          ))}
          {filter && (
            <Link
              to="/tags"
              className="px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest bg-red-50 text-red-500 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 flex items-center gap-2"
            >
              <X className="w-3 h-3" /> Clear
            </Link>
          )}
        </div>
      </header>

      <section className="space-y-12">
        <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-slate-400 font-bold">
          <TagIcon className="w-4 h-4" />
          {filter ? `Posts tagged with "${filter}"` : "All Posts"}
          <span className="ml-auto opacity-50">({filteredPosts.length} results)</span>
        </div>

        <div className="grid gap-12">
          {filteredPosts.map((post) => (
            <div key={post.id} className="group border-l-2 border-slate-100 dark:border-slate-800 pl-8 transition-colors hover:border-slate-300 dark:hover:border-slate-600">
              <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                <span>{format(new Date(post.date), "MMM d, yyyy")}</span>
                <span className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-800" />
                <span>{post.readingTime}</span>
              </div>
              <Link to={`/blog/${post.slug}`}>
                <h3 className="font-serif font-bold text-xl group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                  {post.title}
                </h3>
              </Link>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 line-clamp-1 max-w-xl">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
