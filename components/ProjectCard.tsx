"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";

const cardClass =
  "group flex flex-col bg-zinc-900 border border-white/10 rounded-xl overflow-hidden hover:border-indigo-500/60 transition-colors";

function LikeButton({ slug }: { slug: string }) {
  const [count, setCount] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(`liked:${slug}`);
    if (stored) setLiked(true);

    fetch(`/api/likes/${slug}`)
      .then((r) => r.json())
      .then((d) => setCount(d.count));
  }, [slug]);

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (liked) return;

    setLiked(true);
    setCount((c) => (c ?? 0) + 1);
    localStorage.setItem(`liked:${slug}`, "1");

    await fetch(`/api/likes/${slug}`, { method: "POST" });
  };

  return (
    <button
      onClick={handleLike}
      title={liked ? "Already liked" : "Like this project"}
      className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border transition-colors ${
        liked
          ? "border-indigo-500/60 text-indigo-400 bg-indigo-500/10"
          : "border-white/10 text-zinc-500 hover:border-indigo-500/40 hover:text-indigo-400"
      }`}
    >
      <span>{liked ? "♥" : "♡"}</span>
      <span>{count ?? "—"}</span>
    </button>
  );
}

function CardInner({ project }: { project: Project }) {
  return (
    <>
      <div className="h-44 bg-zinc-800 flex items-center justify-center text-zinc-600 text-sm select-none">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <span>No preview yet</span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-white font-semibold text-base group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h2>
          {project.external && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 shrink-0 mt-0.5 transition-colors"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          )}
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed flex-1">{project.description}</p>

        <div className="flex items-center justify-between pt-1">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 border border-white/10 text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <LikeButton slug={project.slug} />
        </div>
      </div>
    </>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  if (project.external) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer" className={cardClass}>
        <CardInner project={project} />
      </a>
    );
  }

  return (
    <Link href={project.url} className={cardClass}>
      <CardInner project={project} />
    </Link>
  );
}
