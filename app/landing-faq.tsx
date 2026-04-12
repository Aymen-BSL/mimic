"use client";

import { useState } from "react";

import { FrameShell } from "@/app/frame-shell";

const faqItems = [
  {
    question: "1. How does this differ from traditional data sourcing?",
    answer:
      "Instead of waiting on sensitive production datasets, Mimic lets teams generate privacy-safe synthetic data on demand. That means faster iteration, lower compliance friction, and more control over rare scenarios.",
  },
  {
    question: "2. How accurate is the generated synthetic data?",
    answer:
      "The platform is built to preserve the behavior that matters most for model development, including important distributions, correlations, and edge-case coverage for testing and training workflows.",
  },
  {
    question: "3. What kind of results can I expect?",
    answer:
      "Teams typically see quicker experimentation, cleaner validation loops, and better model readiness because they can train and test on data designed for their exact use cases.",
  },
  {
    question: "4. How fast is the turnaround time?",
    answer:
      "Generation and validation workflows are designed to run in minutes, not weeks, so product, data, and ML teams can move without waiting for manual data preparation cycles.",
  },
  {
    question: "5. Can this scale with my business?",
    answer:
      "Yes. Mimic is designed for both fast-moving teams and enterprise deployments, with support for repeatable generation pipelines, integration into existing ML stacks, and deployment flexibility.",
  },
];

export function LandingFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <FrameShell
      id="resources"
      className="w-full px-6 py-8 sm:px-8 lg:px-10 lg:py-10"
    >
      <section className="mx-auto max-w-[890px] space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={item.question}
              className="border border-black/10 bg-[rgba(255,255,255,0.62)]"
            >
              <button
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left lg:px-5"
                onClick={() =>
                  setOpenIndex((current) => (current === index ? -1 : index))
                }
                type="button"
              >
                <div className="space-y-3">
                  <h3 className="font-mono text-[clamp(1.05rem,2vw,1.18rem)] leading-[1.2] tracking-[-0.05em] text-[var(--muted)]">
                    {item.question}
                  </h3>
                  {isOpen ? (
                    <p className="max-w-[760px] font-mono text-[0.95rem] leading-[1.35] tracking-[-0.05em] text-[var(--muted)]">
                      {item.answer}
                    </p>
                  ) : null}
                </div>
                <span className="pt-0.5 font-mono text-[1.7rem] leading-none tracking-[-0.06em] text-[var(--muted)]">
                  {isOpen ? "×" : "+"}
                </span>
              </button>
            </article>
          );
        })}
      </section>
    </FrameShell>
  );
}
