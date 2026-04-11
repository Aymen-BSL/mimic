import { FrameShell } from "@/app/frame-shell";

const FEATURE_BG =
  "https://www.figma.com/api/mcp/asset/dccc60dc-0628-4a43-bfca-8310b5f04adb";

const overviewCards = [
  {
    icon: "https://www.figma.com/api/mcp/asset/fe8589a2-f28d-4d2a-8cd9-5f2f9c0207aa",
    title: "Data Generation",
    body: "Create realistic synthetic datasets tailored to your use cases, without exposing sensitive information.",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/230c161d-4d5c-446f-bb99-a42b24a6c9f2",
    title: "Model Training",
    body: "Train and fine-tune models faster with balanced, bias-aware data designed for performance.",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/07ac4683-1440-41ee-8351-ae0072b1dd63",
    title: "Privacy & Compliance",
    body: "Protect user data while meeting regulatory standards with built-in anonymization and governance.",
  },
];

export function LandingOverview() {
  return (
    <FrameShell
      id="product"
      className="w-full p-0"
    >
      <section className="bg-[var(--paper)]">
        <div className="px-6 py-8 sm:px-8 lg:px-10 lg:py-[39px]">
          <div className="max-w-[760px] space-y-6">
            <h2 className="max-w-[620px] font-mono text-[clamp(2.8rem,5vw,4.6rem)] leading-[0.95] tracking-[-0.08em] text-[var(--ink)]">
              Smarter data, all in one place.
            </h2>
            <p className="max-w-[740px] font-mono text-base leading-[1.45] tracking-[-0.05em] text-[var(--muted)] lg:text-lg">
              Power your AI models with high-quality, privacy-safe synthetic data
              generated, validated, and deployed from a single platform. Accelerate
              training, improve accuracy, and reduce risk across every machine
              learning workflow.
            </p>
          </div>
        </div>

        <section className="overview-visual relative overflow-hidden border-t-2 border-black/7">
          <img
            alt=""
            className="absolute inset-0 h-full w-full object-cover grayscale contrast-125 saturate-0"
            src={FEATURE_BG}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,248,243,0.03),rgba(247,248,243,0.03))]" />
          <div className="relative z-10 flex flex-col gap-4 p-6 sm:p-8 lg:hidden">
            {overviewCards.map((card) => (
              <OverviewCard key={card.title} card={card} />
            ))}
          </div>

          <div className="relative z-10 hidden h-full lg:block">
            <div className="absolute left-[39px] top-[50px] w-[347px]">
              <OverviewCard card={overviewCards[0]} compact />
            </div>
            <div className="absolute left-[410px] top-[126px] w-[347px]">
              <OverviewCard card={overviewCards[1]} compact />
            </div>
            <div className="absolute left-[781px] top-[204px] w-[347px]">
              <OverviewCard card={overviewCards[2]} compact />
            </div>
          </div>
        </section>
      </section>
    </FrameShell>
  );
}

function OverviewCard({
  card,
  compact = false,
}: {
  card: (typeof overviewCards)[number];
  compact?: boolean;
}) {
  return (
    <article className={`feature-card ${compact ? "lg:min-h-0" : ""}`}>
      <div className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center bg-black/8 p-[5px] backdrop-blur-sm">
          <img alt="" className="h-full w-full object-contain" src={card.icon} />
        </span>
        <h3 className="font-mono text-base tracking-[-0.05em] text-[var(--ink)]">
          {card.title}
        </h3>
      </div>
      <p className="font-mono text-[0.98rem] leading-[1.45] tracking-[-0.05em] text-[var(--muted)]">
        {card.body}
      </p>
    </article>
  );
}
