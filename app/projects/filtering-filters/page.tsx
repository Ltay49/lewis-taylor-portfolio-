import Link from "next/link";

export const metadata = { title: "Filtering Filters — Lewis Taylor" };

const tags = ["Node.js", "TypeScript", "Express", "SERP API", "Google AI Overview", "Web Scraping"];

export default function FilteringFiltersPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-24">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
      >
        ← Back to projects
      </Link>

      <div className="flex items-center gap-3 mb-3">
        <h1 className="text-4xl font-bold text-white">Filtering Filters</h1>
        <span className="text-xs px-2.5 py-1 rounded-full border border-indigo-500/40 text-indigo-400 bg-indigo-500/10 shrink-0">
          Commercial Brief
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 border border-white/10 text-zinc-400">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-10 text-zinc-300 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Background</h2>
          <p>
            This was built to a commercial brief from a filter distributor. The business sells commercial filters — oil, fuel, air — across multiple brands, and one of the most common customer queries is: <em>&quot;I have this part number, what else fits?&quot;</em> Cross-referencing filter SKUs between brands is a slow manual process that their team were doing by hand. The ask was to automate it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">What it does</h2>
          <p>
            Enter any commercial filter part number and the tool finds equivalent filters across major brands — Donaldson, Fleetguard, Baldwin, Mann. It returns the matching SKUs, which brand they&apos;re from, and where the match was sourced from.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">How it works</h2>
          <p className="mb-4">The lookup runs in two stages, with results merged and deduplicated at the end:</p>
          <ul className="flex flex-col gap-4 pl-4">
            <li className="flex items-start gap-2 text-sm">
              <span className="text-indigo-400 mt-0.5 shrink-0">1</span>
              <span>
                <strong className="text-white">Trusted site scrape</strong> — the backend hits specialist cross-reference databases directly, constructing URLs from the part number and preferred brand prefixes. If a matching page exists, the HTML is cleaned and a regex pass extracts brand/SKU pairs from the results section, filtering out noise words and entries with no numeric component.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <span className="text-indigo-400 mt-0.5 shrink-0">2</span>
              <span>
                <strong className="text-white">Google AI Overview + organic results</strong> — if the direct scrape comes up short, the SerpAPI queries Google. The AI Overview text blocks are parsed for cross-reference data, including following a <code className="text-indigo-300">page_token</code> to fetch the full expanded overview when one is available. Organic snippet text is also scanned as a fallback.
              </span>
            </li>
          </ul>
          <p className="mt-4 text-sm">
            Results are filtered to the preferred brand list before being returned — so the output is commercially relevant, not just every match that exists.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">The problem it solves</h2>
          <p>
            Filter cross-referencing is a genuine pain point in the industry. A customer rings with a Fleetguard part number and wants to know if you stock a Mann equivalent. Without a tool like this, someone has to check a physical cross-reference book or manually search multiple websites. This automates that lookup in seconds.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Why it&apos;s interesting technically</h2>
          <ul className="flex flex-col gap-3 pl-4">
            {[
              "Two-layer fallback strategy — direct scrape first, Google as a backup — means results are as accurate as possible without a paid database subscription",
              "Google's AI Overview is not a standard search result — accessing and parsing it requires the page_token follow-up call, which most implementations miss",
              "The regex extraction had to be carefully tuned to avoid false positives — filter SKUs follow loose conventions and the surrounding text is noisy",
              "Brand filtering is a deliberate commercial decision built into the logic, not an afterthought",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-indigo-400 mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Where it was going</h2>
          <p className="mb-3">
            The long-term plan was to seed a SQL database with every search result. The first time someone searches a part number, the tool hits the external sources as normal — but the results get written to a local table before being returned. Next time that SKU is searched, the database answers instantly without touching the scraper or the SERP API at all.
          </p>
          <p className="mb-3">
            Over time, as more part numbers get searched, the database fills up organically. Common SKUs would be cached after the first hit. API costs would drop toward zero. The system would stop depending on third-party uptime entirely.
          </p>
          <p>
            The schema would have been straightforward — a <code className="text-indigo-300 text-sm">cross_references</code> table with the searched SKU, the matching brand, the equivalent SKU, and the source. The caching layer would sit in the search route: check the DB first, fall back to the scraper only on a miss, write results back on the way out.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Screenshots</h2>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs text-zinc-500 mb-2">Tool output — C10010 search results</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/comFil.png" alt="Filtering Filters tool output" className="w-full rounded-xl border border-white/10" />
            </div>
            <div>
              <p className="text-xs text-zinc-500 mb-2">Google AI Overview for the same part number — matches confirmed</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/AIoverview.png" alt="Google AI Overview cross-reference results" className="w-full rounded-xl border border-white/10" />
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6">
          <p className="text-sm text-amber-400/80 text-center">
            Built to a commercial brief. The project was not taken further by the client — but the problem it solves is real and the tool works.
          </p>
        </section>

      </div>
    </div>
  );
}
