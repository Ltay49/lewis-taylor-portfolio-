import { notFound } from "next/navigation";
import projects from "@/data/projects";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects
    .filter((p) => !p.external)
    .map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || project.external) notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 pt-28 pb-24">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
      >
        ← Back to projects
      </Link>

      <h1 className="text-4xl font-bold text-white mb-3">{project.title}</h1>
      <p className="text-zinc-400 text-lg mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-10">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 border border-white/10 text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Embed or detailed content goes here */}
      <div className="rounded-xl border border-white/10 bg-zinc-900 p-8 text-zinc-500 text-sm text-center">
        Project content / embed goes here
      </div>
    </div>
  );
}
