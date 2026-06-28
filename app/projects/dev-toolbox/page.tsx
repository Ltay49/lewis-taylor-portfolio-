import Link from "next/link";

export const metadata = { title: "Dev Toolbox — Lewis" };

export default function DevToolboxPage() {
  return (
    <div className="flex flex-col h-screen pt-14">
      {/* Back bar */}
      <div className="h-10 flex items-center px-6 border-b border-white/10 bg-zinc-900/80 backdrop-blur-sm shrink-0">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          ← Back to portfolio
        </Link>
      </div>

      {/* Toolbox fills the rest of the viewport */}
      <iframe
        src="/dev-toolbox/index.html"
        className="flex-1 w-full border-0"
        title="Dev Toolbox"
      />
    </div>
  );
}
