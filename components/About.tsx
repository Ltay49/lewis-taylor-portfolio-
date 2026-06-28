const stack: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "C#", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "React Native", "Next.js", "Expo", "Razor / WinForms", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "ASP.NET MVC", "REST APIs", "CORS", "Mongoose"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Firebase", "Supabase", "Azure Tables"],
  },
  {
    label: "Testing",
    items: ["Jest", "Supertest", "TDD"],
  },
  {
    label: "Hosting & Tools",
    items: ["Railway", "Netlify", "Render", "Atlas", "Git", "Claude Code"],
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 pb-24">
      <div className="max-w-5xl mx-auto border-t border-white/10 pt-16">
        <h2 className="text-2xl font-bold text-white mb-6">About</h2>

        <div className="grid sm:grid-cols-2 gap-10 mb-12">
          <p className="text-zinc-300 leading-relaxed">
            I&apos;m Lewis — a developer based in Manchester. After six years managing commercial
            interior fit-out projects, I made a deliberate decision to move into software.
            Within 18 months of graduating from Northcoders I went from bootcamp graduate to
            junior developer to developer at Shipster, working independently on C# tooling,
            MVC architecture, and courier integrations from day one.
          </p>
          <p className="text-zinc-400 leading-relaxed text-sm">
            I work across the full stack — professionally in C# and .NET, and on personal
            projects in TypeScript and React. I&apos;m drawn to building things that are
            genuinely useful: internal tools, games, AI-integrated apps, and anything that
            solves a real problem rather than just demonstrating a pattern.
          </p>
        </div>

        <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide mb-6">
          Stack
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {stack.map((group) => (
            <div key={group.label} className="flex flex-col gap-1.5">
              <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                {group.label}
              </p>
              <ul className="flex flex-col gap-1">
                {group.items.map((item) => (
                  <li key={item} className="text-zinc-400 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
