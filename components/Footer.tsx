export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-zinc-600 text-sm">
      <div className="max-w-5xl mx-auto">
        Built by Lewis — {new Date().getFullYear()}
      </div>
    </footer>
  );
}
