import Link from "next/link";

export const metadata = { title: "TekMate — Lewis Taylor" };

const tags = ["React Native", "TypeScript", "Node.js", "Express", "Google Cloud Vision", "GPT-4o", "AsyncStorage", "iOS"];

export default function TekMatePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-24">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
      >
        ← Back to projects
      </Link>

      <h1 className="text-4xl font-bold text-white mb-3">TekMate</h1>

      <div className="flex flex-wrap gap-2 mb-10">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 border border-white/10 text-zinc-400">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-10 text-zinc-300 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">What is it?</h2>
          <p>
            A mobile site management app built from personal experience working in construction. TekMate digitises the manual paperwork and day-to-day admin that site managers deal with — CSCS card scanning, daily activity briefs, handover tracking, document control, workforce analytics, and worker inductions — all in one place.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Why?</h2>
          <p>
            Construction sites still run on paper. CSCS cards get checked by eye, DABS get filled in by hand, and handover snags live in spreadsheets nobody keeps up to date. Having been on sites myself, I wanted to build something that removed those friction points — not a generic project management tool, but something built specifically around how construction sites actually work.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Key features</h2>
          <ul className="flex flex-col gap-3 pl-4">
            {[
              "CSCS card scanning — take a photo of a card front and back, Google Cloud Vision OCR extracts the name, registration number, expiry date and qualification, GPT-4o structures the output into a clean data record",
              "Programme upload — photograph a programme sheet and the backend parses task rows using Vision OCR and regex, extracting level, task, start and end dates automatically",
              "DABS (Daily Activity Briefing Sheets) — create multi-entry briefing reports with descriptions, attendees, levels, areas, tasks, and signature pads per operative",
              "Handover tracking — log handover items per section with comments, task assignments, due dates, and completion photos",
              "Worker directory — searchable and filterable operative list with multi-select grouping saved to device storage",
              "Dashboard — live stats card showing weeks left, total operatives, pending handovers, open/closed/complete snags, and a workforce split pie chart",
              "Safety leaderboard — ranked H&S champions board with animated entries and period toggle (Week / Month / Overall)",
              "Expandable footer navigation — drag gesture to reveal a full second and third row of navigation options",
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <span className="text-indigo-400 mt-0.5">→</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">How the OCR pipeline works</h2>
          <p className="mb-3">
            This was the most technically interesting part of the project. A CSCS card photo is uploaded to the Express backend, where Google Cloud Vision extracts all text from the image. That raw text is then passed to GPT-4o with a structured prompt asking it to identify and return the relevant fields as JSON — name, registration number, expiry date, and card type.
          </p>
          <p>
            The same approach powers the programme parser: Vision reads the text off a photographed programme sheet, and a regex pass extracts task rows matching the relevant trade. The result is a structured list of tasks with dates that would otherwise have to be entered manually.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">What I learned</h2>
          <ul className="flex flex-col gap-3 pl-4">
            {[
              "React Native — building for iOS including native build tooling, Xcode, and the Metro bundler",
              "PanResponder and Animated API for gesture-driven UI (the draggable footer navigation)",
              "Google Cloud Vision API for OCR on real-world documents",
              "Combining OCR output with an LLM to reliably structure messy text into typed data",
              "AsyncStorage for local-first data persistence across sessions",
              "Stack navigation with typed route parameters using React Navigation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-indigo-400 mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Screenshots</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: "/images/TM8_Home.png", alt: "TekMate home dashboard" },
              { src: "/images/TM8_Leaderboard.png", alt: "TekMate safety leaderboard" },
              { src: "/images/TM8_Dabs.png", alt: "TekMate DABS report" },
            ].map(({ src, alt }) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt={alt}
                className="w-full rounded-xl border border-white/10 object-cover"
              />
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-zinc-900 p-6">
          <p className="text-sm text-zinc-500 text-center">
            Concept project — built to explore React Native and AI-assisted document parsing.
          </p>
        </section>

      </div>
    </div>
  );
}
