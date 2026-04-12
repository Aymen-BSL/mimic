import { FrameShell } from "@/app/frame-shell";

const comparisonRows = [
  {
    category: "Privacy",
    real: "Sensitive, regulated",
    synthetic: "No real identities",
  },
  {
    category: "Compliance",
    real: "Legal friction",
    synthetic: "Low regulatory risk",
  },
  {
    category: "Scalability",
    real: "Limited supply",
    synthetic: "Unlimited generation",
  },
  {
    category: "Edge Cases",
    real: "Rare & unpredictable",
    synthetic: "Fully simulated",
  },
  {
    category: "Speed",
    real: "Slow collection",
    synthetic: "On-demand",
  },
  {
    category: "Cost",
    real: "Expensive to source",
    synthetic: "Cost-efficient",
  },
  {
    category: "Bias Control",
    real: "Hard to rebalance",
    synthetic: "Programmable",
  },
  {
    category: "Experimentation",
    real: "Risky",
    synthetic: "Safe & flexible",
  },
];

export function LandingComparison() {
  return (
    <FrameShell className="w-full px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
      <section className="space-y-8 lg:space-y-11">
        <h2 className="font-mono text-[clamp(2.2rem,5vw,4rem)] leading-[0.98] tracking-[-0.07em] text-[var(--ink)]">
          Why Synthetic Data Wins
        </h2>

        <div className="overflow-x-auto border border-black/10 bg-[rgba(255,255,255,0.5)]">
          <table className="min-w-full border-collapse font-mono">
            <thead>
              <tr className="bg-[#111111] text-left text-white">
                <th className="px-4 py-4 text-base font-normal tracking-[-0.05em] lg:px-5">
                  Category
                </th>
                <th className="px-4 py-4 text-base font-normal tracking-[-0.05em] lg:px-5">
                  Real Data
                </th>
                <th className="px-4 py-4 text-base font-normal tracking-[-0.05em] lg:px-5">
                  Synthetic Data
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr
                  key={row.category}
                  className={
                    index % 2 === 1 ? "bg-[#efeee4]" : "bg-[rgba(255,255,255,0.65)]"
                  }
                >
                  <td className="px-4 py-4 text-[1rem] tracking-[-0.05em] text-[var(--ink)] lg:px-5 lg:text-[1.05rem]">
                    {row.category}
                  </td>
                  <td className="px-4 py-4 text-[1rem] tracking-[-0.05em] text-[var(--muted)] lg:px-5 lg:text-[1.05rem]">
                    {row.real}
                  </td>
                  <td className="px-4 py-4 text-[1rem] tracking-[-0.05em] text-[var(--muted)] lg:px-5 lg:text-[1.05rem]">
                    {row.synthetic}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </FrameShell>
  );
}
