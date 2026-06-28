import projects from "@/data/projects";

const stack = ["TypeScript", "Node.js", "React", "Next.js", "PostgreSQL"];

const experience = [
  { company: "Titan Interiors", role: "Assistant Site Manager", period: "2018 – 2025" },
  { company: "NorthCoders", role: "Student Developer", period: "Sep 2025 – Feb 2026" },
  { company: "Tech Recruiters", role: "Technical Recruitment", period: "Mar 2026 – Apr 2026" },
  { company: "Oddsphere", role: "Junior Developer", period: "Sep 2026 – Feb 2027" },
  { company: "Oddsphere", role: "Developer", period: "Feb 2027 – Present" },
];

const about =
  "Developer who enjoys building useful tools and fun interactive experiences.";

/* Syntax-highlighted token components */
const Key = ({ k }: { k: string }) => (
  <span className="text-indigo-400">&quot;{k}&quot;</span>
);
const Str = ({ v }: { v: string }) => (
  <span className="text-emerald-400">&quot;{v}&quot;</span>
);
const Punct = ({ c }: { c: string }) => (
  <span className="text-zinc-500">{c}</span>
);
const Url = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sky-400 hover:text-sky-300 underline underline-offset-2 transition-colors"
  >
    &quot;{label}&quot;
  </a>
);

export default function JsonView() {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-24 pt-4">
      <pre className="font-mono text-sm sm:text-[15px] leading-8 text-zinc-300 whitespace-pre-wrap">
        <Punct c="{" />
        {"\n"}

        {/* greeting */}
        {"  "}
        <Key k="greeting" />
        <Punct c=": " />
        <Str v="Hey, i'm" />
        <Punct c="," />
        {"\n"}

        {/* name */}
        {"  "}
        <Key k="name" />
        <Punct c=": " />
        <Str v="Lewis" />
        <Punct c="," />
        {"\n"}

        {/* about */}
        {"  "}
        <Key k="about" />
        <Punct c=": " />
        <Str v={about} />
        <Punct c="," />
        {"\n"}

        {/* stack */}
        {"  "}
        <Key k="stack" />
        <Punct c=": [" />
        {"\n"}
        {stack.map((s, i) => (
          <span key={s}>
            {"    "}
            <Str v={s} />
            {i < stack.length - 1 && <Punct c="," />}
            {"\n"}
          </span>
        ))}
        {"  "}
        <Punct c="]," />
        {"\n"}

        {/* projects */}
        {"  "}
        <Key k="projects" />
        <Punct c=": [" />
        {"\n"}
        {projects.map((p, i) => (
          <span key={p.slug}>
            {"    "}
            <Punct c="{" />
            {"\n"}
            {"      "}
            <Key k="name" />
            <Punct c=": " />
            <Str v={p.title} />
            <Punct c="," />
            {"\n"}
            {"      "}
            <Key k="description" />
            <Punct c=": " />
            <Str v={p.description} />
            <Punct c="," />
            {"\n"}
            {"      "}
            <Key k="tags" />
            <Punct c=": [" />
            {p.tags.map((t, ti) => (
              <span key={t}>
                <Str v={t} />
                {ti < p.tags.length - 1 && <Punct c=", " />}
              </span>
            ))}
            <Punct c="]," />
            {"\n"}
            {"      "}
            <Key k="url" />
            <Punct c=": " />
            <Url href={p.external ? p.url : p.url} label={p.url} />
            {"\n"}
            {"    "}
            <Punct c="}" />
            {i < projects.length - 1 && <Punct c="," />}
            {"\n"}
          </span>
        ))}
        {"  "}
        <Punct c="]," />
        {"\n"}

        {/* experience */}
        {"  "}
        <Key k="experience" />
        <Punct c=": [" />
        {"\n"}
        {experience.map((e, i) => (
          <span key={i}>
            {"    "}
            <Punct c="{" />
            {"\n"}
            {"      "}
            <Key k="company" />
            <Punct c=": " />
            <Str v={e.company} />
            <Punct c="," />
            {"\n"}
            {"      "}
            <Key k="role" />
            <Punct c=": " />
            <Str v={e.role} />
            <Punct c="," />
            {"\n"}
            {"      "}
            <Key k="period" />
            <Punct c=": " />
            <Str v={e.period} />
            {"\n"}
            {"    "}
            <Punct c="}" />
            {i < experience.length - 1 && <Punct c="," />}
            {"\n"}
          </span>
        ))}
        {"  "}
        <Punct c="]" />
        {"\n"}

        <Punct c="}" />
      </pre>
    </section>
  );
}
