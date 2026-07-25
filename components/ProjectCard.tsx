"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";

const cardClass =
  "group flex flex-col bg-zinc-900 border border-white/10 rounded-xl overflow-hidden hover:border-indigo-500/60 transition-colors";

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

        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 border border-white/10 text-zinc-400"
            >
              {tag}
            </span>
          ))}
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
