import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";
import { format } from "date-fns";
import { Calendar, Clock, ChevronLeft, Share2, List } from "lucide-react";
import MarkdownRenderer from "../components/Markdown";
import { cn } from "../lib/utils";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const [activeId, setActiveId] = useState("");
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>([]);

  useEffect(() => {
    if (post) {
      // Basic TOC generation by looking for Markdown headers in the content string
      const lines = post.content.split("\n");
      const headers = lines
        .filter((line) => line.startsWith("#"))
        .map((line) => {
          const level = line.match(/^#+/)?.[0].length || 0;
          const text = line.replace(/^#+\s*/, "");
          const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
          return { id, text, level };
        });
      setToc(headers);

      // Add IDs to the actual DOM for scrolling (simplified approach)
      // In a real app we might use a custom markdown processor to inject IDs
    }
  }, [post]);

  if (!post) {
    return (
      <div className="text-center py-24">
        <h1 className="text-2xl font-serif font-bold">Post not found</h1>
        <Link to="/" className="text-blue-500 mt-4 inline-block">Back Home</Link>
      </div>
    );
  }

  const postIndex = posts.findIndex(p => p.id === post.id);
  const prevPost = posts[postIndex + 1];
  const nextPost = posts[postIndex - 1];

  return (
    <div className="flex flex-col lg:flex-row gap-12 relative">
      {/* Sticky Table of Contents (Desktop Sidebar) */}
      <aside className="hidden lg:block w-64 shrink-0 h-fit sticky top-32">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            <List className="w-4 h-4" />
            Table of Contents
          </div>
          <nav className="flex flex-col gap-3">
            {toc.map((header) => (
              <a
                key={header.id}
                href={`#${header.id}`}
                className={cn(
                  "text-sm transition-all hover:text-slate-900 dark:hover:text-white",
                  header.level === 1 ? "font-bold" : "pl-4 text-slate-500 dark:text-slate-400",
                  activeId === header.id ? "text-slate-900 border-l-2 border-slate-900 pl-4" : ""
                )}
              >
                {header.text}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      <article className="flex-grow max-w-2xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-slate-900 dark:hover:text-white mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <header className="space-y-6 mb-12">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
                #{tag}
              </span>
            ))}
          </div>
          
          <h1 className="font-display font-semibold text-5xl md:text-6xl tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-8 border-y border-slate-200/60 dark:border-slate-800/60">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Calendar className="w-4 h-4" />
                {format(new Date(post.date), "MMMM d, yyyy")}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </div>
            </div>
            
            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Share">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </header>

        <section className="prose prose-slate dark:prose-invert max-w-none">
          <MarkdownRenderer content={post.content} />
        </section>

        <footer className="mt-24 pt-12 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between gap-8">
            {prevPost ? (
              <Link to={`/blog/${prevPost.slug}`} className="flex flex-col gap-2 group max-w-[45%]">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Previous Post</span>
                <span className="font-serif font-bold group-hover:underline text-lg line-clamp-1">{prevPost.title}</span>
              </Link>
            ) : <div />}

            {nextPost ? (
              <Link to={`/blog/${nextPost.slug}`} className="flex flex-col gap-2 group items-end text-right max-w-[45%]">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Next Post</span>
                <span className="font-serif font-bold group-hover:underline text-lg line-clamp-1">{nextPost.title}</span>
              </Link>
            ) : <div />}
          </div>
        </footer>
      </article>
    </div>
  );
}
