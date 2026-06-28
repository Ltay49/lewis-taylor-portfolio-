import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-zinc-200/50 backdrop-blur-md bg-white/80">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-zinc-900 tracking-tight">
          Lewis<span className="text-indigo-600">.</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-zinc-600">
          <Link href="/#projects" className="hover:text-zinc-900 transition-colors">
            Projects
          </Link>
          <Link href="/#experience" className="hover:text-zinc-900 transition-colors">
            Experience
          </Link>
          <Link href="/#about" className="hover:text-zinc-900 transition-colors">
            About
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
