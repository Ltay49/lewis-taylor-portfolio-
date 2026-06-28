export default function Hero() {
  return (
    <section className="pt-16 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-indigo-400 text-sm font-medium mb-3 tracking-wide uppercase">
          Hey, I&apos;m
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight mb-6">
          Lewis Taylor
        </h1>
        <p className="text-zinc-300 text-lg sm:text-xl max-w-xl leading-relaxed">
          Software developer based in Manchester. Professionally building in C# and .NET at Shipster — personally shipping in TypeScript, React, and whatever solves the problem.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors"
          >
            See projects
          </a>
          <a
            href="mailto:lewistaylor01@outlook.com"
            className="px-5 py-2.5 border border-white/20 hover:border-white/40 text-zinc-200 text-sm font-medium rounded-lg transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
