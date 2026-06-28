const items = [
  {
    tool: "Google Vision API",
    context: "TekMate",
    description:
      "Integrated OCR to automatically extract data from CSCS cards, replacing manual data entry on construction sites.",
  },
  {
    tool: "OpenAI API",
    context: "TekMate",
    description:
      "Used GPT to parse and normalise scruffy handwritten form entries into structured data for storage and reporting.",
  },
  {
    tool: "RAG Pipeline",
    context: "Personal project",
    description:
      "Building a Retrieval-Augmented Generation system — embedding documents into a vector store and querying them with an LLM for context-aware responses. Work in progress.",
    wip: true,
  },
  {
    tool: "OpenAI Whisper",
    context: "Personal experiment",
    description:
      "Used Whisper to transcribe commentary from archive football footage into timestamped segments. Built a searchable transcript UI — type any word and jump straight to that moment in the clip.",
  },
  {
    tool: "Claude Code",
    context: "This portfolio",
    description:
      "Orchestrated an AI coding agent to scaffold this Next.js site, integrate live projects, and iterate on features — treating AI as a development tool rather than a toy.",
  },
];

export default function AIPipeline() {
  return (
    <section id="ai" className="px-6 pb-24">
      <div className="max-w-5xl mx-auto border-t border-white/10 pt-16">
        <h2 className="text-2xl font-bold text-white mb-2">AI Integration</h2>
        <p className="text-zinc-500 text-sm mb-12">
          Practical experience wiring AI APIs into real products.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-5 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-white font-semibold text-sm">{item.tool}</span>
                <div className="flex items-center gap-2">
                  {item.wip && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400">
                      WIP
                    </span>
                  )}
                  <span className="text-xs font-mono text-zinc-500">{item.context}</span>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
