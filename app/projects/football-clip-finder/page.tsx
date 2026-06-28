import Link from "next/link";

export const metadata = { title: "Football Clip Finder — Lewis Taylor" };

const tags = ["Python", "FastAPI", "Whisper", "React", "TypeScript", "Supabase", "AWS S3", "Redis", "JWT", "RLS"];

export default function FootballClipFinderPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-24">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
      >
        ← Back to projects
      </Link>

      <h1 className="text-4xl font-bold text-white mb-3">Football Clip Finder</h1>

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
            A full-stack web app that makes archive football commentary searchable. Upload a clip, Whisper transcribes the audio into timestamped segments, and you can search for any word — a player name, &quot;goal&quot;, &quot;penalty&quot; — and jump straight to that moment in the video. Users have their own vault of clips and can share access with other users.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Why?</h2>
          <p>
            Archive football footage is hours long and finding a specific moment means scrubbing through manually. The idea was to use speech-to-text to make old commentary as searchable as text — letting you find every mention of a player or moment without watching the whole thing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">How it works</h2>
          <ul className="flex flex-col gap-3 pl-4">
            {[
              "User signs up and receives a JWT — all subsequent requests are authenticated via Bearer token",
              "Video is uploaded to a FastAPI backend, saved temporarily for Whisper to process",
              "OpenAI Whisper transcribes the audio into segments with start/end timestamps",
              "The video file is uploaded permanently to AWS S3 — survives server restarts and deploys",
              "Transcript and metadata are saved to Supabase (PostgreSQL) with Row Level Security enforced at the database level",
              "Redis caches transcript lookups server-side so repeated requests skip the database entirely",
              "The React frontend displays the transcript as clickable segments — clicking one jumps the video player to that timestamp",
              "Users can share their vault with another user by email, giving them read-only access to all clips",
            ].map((step) => (
              <li key={step} className="flex items-start gap-2 text-sm">
                <span className="text-indigo-400 mt-0.5">→</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Security</h2>
          <p className="mb-3">
            Security is enforced at two layers. The FastAPI backend validates the JWT on every request using Supabase Auth. But beyond that, Row Level Security policies in the database mean even if the backend code had a bug that forgot to filter by user, the database itself would refuse to return data the logged-in user isn&apos;t allowed to see.
          </p>
          <p>
            AWS credentials, Supabase keys, and all secrets live only in environment variables — never in source code.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Honest limitations</h2>
          <p>
            Whisper does its best with old TV broadcast audio but proper nouns — especially player names — don&apos;t always come through cleanly. Teddy Sheringham might appear as &quot;Teddy Sherry and Ham&quot;. This is a real constraint of running the <code className="text-indigo-300 text-sm">base</code> model on noisy 1990s audio. Upgrading to <code className="text-indigo-300 text-sm">small</code> or <code className="text-indigo-300 text-sm">medium</code> improves accuracy at the cost of processing time. Upload is also synchronous — the request stays open for the full transcription, which typically takes 1–2 minutes.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-zinc-900 p-6">
          <p className="text-sm text-zinc-500 text-center">
            Demo coming soon — deployment in progress. Screenshots to follow.
          </p>
        </section>

      </div>
    </div>
  );
}
