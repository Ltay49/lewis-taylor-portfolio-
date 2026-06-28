"use client";

import { useView } from "./ViewContext";
import Hero from "./Hero";
import ProjectGrid from "./ProjectGrid";
import About from "./About";
import Timeline from "./Timeline";
import AIPipeline from "./AIPipeline";
import JsonView from "./JsonView";

export default function HomeClient() {
  const { jsonMode, toggle } = useView();

  return (
    <>
      {/* pt-14 clears the fixed header (h-14), extra pt-6 for breathing room */}
      <div className="pt-14">
        <div className="max-w-5xl mx-auto px-6 pt-6 pb-2 flex justify-end">
          <button
            onClick={toggle}
            className="text-xs font-mono px-3 py-1.5 rounded-md border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
          >
            {jsonMode ? "{ } format" : "< > raw"}
          </button>
        </div>

        {jsonMode ? (
          <JsonView />
        ) : (
          <>
            <Hero />
            <ProjectGrid />
            <AIPipeline />
            <Timeline />
            <About />
          </>
        )}
      </div>
    </>
  );
}
