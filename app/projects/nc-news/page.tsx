import Link from "next/link";

export const metadata = { title: "NC News — Lewis Taylor" };

export default function NCNewsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-24">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
      >
        ← Back to projects
      </Link>

      <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
        <h1 className="text-4xl font-bold text-white">NC News</h1>
        <a
          href="https://github.com/Ltay49/be-nc-news-LT"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-white/10 text-zinc-300 hover:border-white/30 hover:text-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {["REST API", "PostgreSQL", "Express", "React", "Jest", "Supertest"].map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 border border-white/10 text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-10 text-zinc-300 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">What is it?</h2>
          <p>
            NC News was my first ever project — a Reddit-style news platform built during my time at Northcoders. Users can browse articles by topic, vote on articles and comments, post new comments, and delete their own. It was the first time I had built a backend API from scratch and then consumed it with my own frontend — that moment of making a real fetch call to something I&apos;d built myself was a big one.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">The Backend</h2>
          <p className="mb-4">
            The API is built with <strong className="text-white">Node.js and Express</strong>, backed by <strong className="text-white">PostgreSQL</strong>. I wrote all the SQL by hand — no ORM — which forced me to actually understand joins, aggregations, and parameterised queries rather than hiding behind an abstraction.
          </p>
          <p>
            Key features of the backend include:
          </p>
          <ul className="mt-3 flex flex-col gap-2 pl-4">
            {[
              "Full CRUD on articles and comments",
              "Sorting and filtering via query params (sort_by, order_by, topic)",
              "ILIKE-based topic search — case-insensitive, partial match",
              "Aggregated comment_count per article using LEFT JOIN + COUNT",
              "Custom error handling middleware for 400 / 404 / 500 responses",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-indigo-400 mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Testing</h2>
          <p className="mb-4">
            The backend has a comprehensive test suite written with <strong className="text-white">Jest and Supertest</strong>. Each test run seeds a fresh test database using <code className="text-indigo-300 text-sm">beforeEach</code>, so tests are always isolated and reproducible.
          </p>
          <p>
            The suite covers happy paths and error cases across every endpoint — including invalid data types, non-existent IDs, and malformed requests. I also wrote unit tests for the seeding utility functions (<code className="text-indigo-300 text-sm">convertTimestampToDate</code>, <code className="text-indigo-300 text-sm">createRef</code>, <code className="text-indigo-300 text-sm">formatComments</code>) to verify data transformation logic independently of the API layer.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">The Frontend</h2>
          <p>
            The frontend is built with <strong className="text-white">React and React Router</strong>, using Axios to consume the API. It supports browsing all articles, filtering by topic from the nav dropdown, voting on articles and comments, posting and deleting comments, and a basic user sign-in flow via context. The original styling was basic — I revisited it recently and gave it a full dark-theme redesign as part of putting this portfolio together.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-zinc-900 p-6">
          <p className="text-sm text-zinc-500 text-center">
            Screenshots coming soon — the backend is hosted on Render (free tier, may need a moment to spin up on first load).
          </p>
        </section>

      </div>
    </div>
  );
}
