const events = [
  {
    date: "Dec 2016 – Sep 2018",
    role: "Medical Absence Coordinator / Data Clerk",
    company: "NHS",
    description:
      "Coordinated medical absence cover across specialties, then moved into a data processing role — compiling statistics from NHS divisions and issuing to national statistics websites. Built early experience with SQL and Excel.",
  },
  {
    date: "Sep 2018 – Sep 2024",
    role: "Assistant Site Manager",
    company: "Titan Interior Solutions",
    description:
      "Started as an apprentice site supervisor and progressed through the ranks over six years. Managed up to 20 operatives, liaised with main contractors and architects, formulated reports for commercial and regional directors, and planned project delivery in line with budgets and handovers.",
  },
  {
    date: "Sep 2024 – Jan 2025",
    role: "Student Developer",
    company: "Northcoders",
    description:
      "Intensive full-stack bootcamp covering JavaScript, TypeScript, Node.js, React, SQL, and agile practices. Graduated with a final project built independently.",
  },
  {
    date: "May 2025 – Jun 2025",
    role: "React Native App Developer",
    company: "Tech Returners",
    description:
      "Built an iOS app for creating personal art exhibition curations, using free University and Art Museum APIs. Implemented Expo Router navigation, MongoDB/Mongoose backend, pagination, filtering, and a responsive accessible UI.",
  },
  {
    date: "Sep 2025 – Feb 2026",
    role: "Junior Developer",
    company: "Shipster (OddSphere Ltd)",
    description:
      "Joined as a junior developer, working independently from day one with full task ownership. Contributed to courier integrations, source control workflows, and internal tooling.",
  },
  {
    date: "Feb 2026 – Present",
    role: "Developer",
    company: "Shipster (OddSphere Ltd)",
    description:
      "Promoted to Developer. Built a dynamic WinForms UI builder using C# reflection and custom attribute tags — replacing manual UI construction across 100+ courier plugins. Extended the pattern into an MVC web architecture. Built an in-house debugging tool for JSON, XML, Base64, URL-encoded, and ZPL data, actively used by the team for courier integration work.",
    current: true,
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="px-6 pb-24">
      <div className="max-w-5xl mx-auto border-t border-white/10 pt-16">
        <h2 className="text-2xl font-bold text-white mb-12">Experience</h2>

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10" />

          <div className="flex flex-col gap-10">
            {events.map((event, i) => (
              <div key={i} className="pl-8 relative">
                <div
                  className={`absolute left-0 top-1.5 w-2 h-2 rounded-full -translate-x-[3.5px] border ${
                    event.current
                      ? "bg-indigo-500 border-indigo-400"
                      : "bg-zinc-700 border-zinc-500"
                  }`}
                />

                <p className="text-xs font-mono text-zinc-500 mb-1">{event.date}</p>

                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="text-white font-semibold">{event.role}</h3>
                  <span className="text-zinc-600">·</span>
                  <span className={`text-sm ${event.current ? "text-indigo-400" : "text-zinc-400"}`}>
                    {event.company}
                  </span>
                  {event.current && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                      Current
                    </span>
                  )}
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
