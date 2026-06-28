"use client";

import { useState } from "react";
import { getSortedProjects, type SortOrder } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const sortOptions: { value: SortOrder; label: string }[] = [
  { value: "date", label: "Date" },
  { value: "fave", label: "Favourites" },
];

export default function ProjectGrid() {
  const [sort, setSort] = useState<SortOrder>("date");
  const projects = getSortedProjects(sort);

  return (
    <section id="projects" className="px-6 pb-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Projects</h2>

          {/* Sort toggle */}
          <div className="flex items-center gap-1 bg-zinc-900 border border-white/10 rounded-lg p-1">
            {sortOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setSort(opt.value)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  sort === opt.value
                    ? "bg-indigo-600 text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
