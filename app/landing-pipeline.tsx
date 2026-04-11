import { FrameShell } from "@/app/frame-shell";

const PIPELINE_BG =
  "https://www.figma.com/api/mcp/asset/6ba309b8-c531-4fca-9500-118437daccb5";

const pipelineFeatures = [
  {
    step: "1",
    title: "Statistical Fidelity",
    body: "Maintain correlations and distributions from your original data while generating entirely new samples.",
    align: "right" as const,
  },
  {
    step: "2",
    title: "Real-Time Generation",
    body: "Generate millions of records in minutes with our optimized pipeline.",
    align: "left" as const,
  },
  {
    step: "3",
    title: "Seamless Integration",
    body: "API-first design integrates with your existing ML stack and data platforms.",
    align: "right" as const,
  },
];

export function LandingPipeline() {
  return (
    <FrameShell
      id="solutions"
      className="w-full px-6 py-8 sm:px-8 lg:px-10 lg:py-10"
    >
      <div className="space-y-16">
        <div className="mx-auto max-w-[790px] space-y-6 text-center">
          <h2 className="font-mono text-[clamp(2.7rem,5vw,4.3rem)] leading-[0.98] tracking-[-0.08em] text-[var(--ink)]">
            Powerful Features for Every ML Pipeline
          </h2>
          <p className="mx-auto max-w-[690px] font-mono text-base leading-[1.45] tracking-[-0.05em] text-[var(--muted)] lg:text-xl">
            Everything you need to generate, validate, and deploy synthetic data
            at scale.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {pipelineFeatures.map((feature, index) => (
            <PipelineFeature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </FrameShell>
  );
}

function PipelineFeature({
  step,
  title,
  body,
  align,
  index,
}: {
  step: string;
  title: string;
  body: string;
  align: "left" | "right";
  index: number;
}) {
  const mediaFirst = align === "right";

  return (
    <div
      className={`grid items-center gap-8 lg:grid-cols-[minmax(0,572px)_438px] lg:gap-10 ${
        mediaFirst ? "" : "lg:grid-cols-[438px_minmax(0,572px)]"
      }`}
    >
      {mediaFirst ? <PipelinePanel index={index} /> : null}
      <div className={`${mediaFirst ? "" : "lg:order-first"} space-y-6`}>
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <div className="inline-flex h-8 min-w-8 items-center justify-center bg-[#141414] px-3 font-mono text-sm tracking-[-0.05em] text-white">
              {step}
            </div>
            <div className="hidden h-[2px] flex-1 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.1)_50%,transparent_50%,transparent_100%)] bg-[length:100%_6px] bg-repeat-x lg:block" />
          </div>
          <h3 className="font-mono text-[clamp(2rem,3vw,3rem)] leading-[1.05] tracking-[-0.07em] text-[var(--ink)]">
            {title}
          </h3>
          <p className="max-w-[438px] font-mono text-base leading-[1.45] tracking-[-0.05em] text-[var(--muted)] lg:text-xl">
            {body}
          </p>
        </div>
      </div>
      {!mediaFirst ? <PipelinePanel index={index} /> : null}
    </div>
  );
}

function PipelinePanel({ index }: { index: number }) {
  return (
    <div
      className="pipeline-panel-frame relative min-h-[320px] overflow-hidden border border-black/8 bg-cover bg-center p-6 sm:min-h-[390px] sm:p-8"
      style={{ backgroundImage: `url(${PIPELINE_BG})` }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.12),rgba(255,255,255,0.04))]" />
      <div className="relative z-10 mx-auto max-w-[480px] border border-white/20 bg-[rgba(255,255,255,0.12)] p-4 backdrop-blur-md shadow-[0_36px_90px_-40px_rgba(0,0,0,0.85)]">
        {index === 0 ? <StatisticalPanel /> : null}
        {index === 1 ? <GenerationPanel /> : null}
        {index === 2 ? <IntegrationPanel /> : null}
      </div>
    </div>
  );
}

function StatisticalPanel() {
  return (
    <div className="space-y-4 bg-[#343434] p-3 text-white">
      <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[0.72rem] tracking-[-0.05em] text-white/80">
        <span>Statistical Fidelity Check</span>
        <span className="inline-flex items-center gap-2 bg-[#22643e] px-2 py-1 text-[0.62rem] uppercase tracking-[0.15em] text-white">
          <span className="inline-block h-2 w-2 bg-white" />
          High Fidelity 98.8%
        </span>
      </div>
      <div className="inline-flex items-center gap-2 bg-[#4b4b4b] px-2 py-1 font-mono text-[0.66rem] tracking-[-0.05em] text-white/70">
        <span>Variable: annual_income</span>
        <span>v</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <div className="rounded-none border border-white/12 p-3">
          <svg viewBox="0 0 430 170" className="h-[170px] w-full" aria-hidden="true">
            <path
              d="M0 146 L45 140 L80 122 L122 97 L160 58 L195 26 L223 19 L258 49 L290 92 L328 126 L374 142 L430 148"
              fill="none"
              stroke="rgba(255,255,255,0.78)"
              strokeWidth="2.2"
            />
            <path
              d="M0 154 H430"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
              strokeDasharray="6 8"
            />
            <path
              d="M28 0 V170"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              strokeDasharray="5 8"
            />
          </svg>
        </div>
        <div className="space-y-2 font-mono text-[0.64rem] tracking-[-0.05em] text-white/55">
          <p>Mean: Source 54.2 / Mimic 54.1</p>
          <p>Std Dev: Source 12.2 / Mimic 12.3</p>
        </div>
      </div>
    </div>
  );
}

function GenerationPanel() {
  return (
    <div className="space-y-4 bg-[#343434] p-3 text-white">
      <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[0.72rem] tracking-[-0.05em] text-white/80">
        <span>Generation Job: &quot;Customer_Transactions_10M&quot;</span>
        <span className="inline-flex items-center gap-2 bg-[#22643e] px-2 py-1 text-[0.62rem] uppercase tracking-[0.15em] text-white">
          <span className="inline-block h-2 w-2 animate-pulse bg-white" />
          Running
        </span>
      </div>
      <div className="space-y-2 border border-white/10 bg-[#4b4b4b] p-2">
        <div className="h-8 overflow-hidden bg-white">
          <div className="generation-progress h-full w-[85%]" />
        </div>
        <p className="text-center font-mono text-[0.72rem] tracking-[-0.05em] text-black/60">
          85%
        </p>
      </div>
      <div className="grid gap-4 font-mono text-[0.74rem] tracking-[-0.05em] text-white sm:grid-cols-2">
        <div>
          <p className="text-white/45">Records Generated:</p>
          <p>8,540,000 / 10,000,000</p>
        </div>
        <div>
          <p className="text-white/45">Time Elapsed:</p>
          <p>00:01:24</p>
        </div>
      </div>
      <div className="space-y-2">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.15em] text-white/45">
          Logs
        </p>
        <div className="bg-[#262626] p-3 font-mono text-[0.68rem] leading-[1.6] tracking-[-0.05em] text-white">
          <p>
            <span className="text-white/45">[14:32:01]</span> INFO: Batch 850/1000
            committed to stream.
          </p>
          <p>
            <span className="text-white/45">[14:32:02]</span> INFO: Generating batch
            851... (10k records, &lt;50ms)
          </p>
          <p>
            <span className="text-white/45">[14:32:02]</span> INFO: Batch 851
            committed to stream.
          </p>
        </div>
      </div>
    </div>
  );
}

function IntegrationPanel() {
  return (
    <div className="space-y-4 bg-[#343434] p-3 text-white">
      <div className="border-b border-white/10 pb-3 font-mono text-[0.72rem] tracking-[-0.05em] text-white/80">
        Integrations &amp; API Keys
      </div>
      <div className="flex gap-4 border-b border-white/10 font-mono text-[0.64rem] tracking-[-0.04em] text-white/50">
        <span className="border-b border-white pb-2 text-white">Active Connectors</span>
        <span className="pb-2">API Documentation</span>
        <span className="pb-2">Webhooks</span>
      </div>
      <div className="space-y-3 font-mono text-[0.64rem] tracking-[-0.04em]">
        <ConnectorRow name="Production_DB_Replica" status="Connected (2m ago)" />
        <ConnectorRow name="s3://mimic-training-data" status="Connected" />
      </div>
      <div className="space-y-2">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.15em] text-white/45">
          Quick Start: Python SDK
        </p>
        <div className="bg-[#262626] p-3 font-mono text-[0.68rem] leading-[1.55] tracking-[-0.04em] text-white">
          <p>
            <span className="text-[#86b48f]">import</span> mimic_data{" "}
            <span className="text-[#86b48f]">as</span> md
          </p>
          <p className="text-white/45"># Connect to the pipeline</p>
          <p>client = md.Client(api_key=&quot;mk_live_8392...&quot;)</p>
          <p className="text-white/45"># Pull synthetic batch</p>
          <p>df = client.pull(source=&quot;Production_DB&quot;, privacy_budget=0.5)</p>
        </div>
      </div>
    </div>
  );
}

function ConnectorRow({ name, status }: { name: string; status: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-2 text-white">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-4 w-4 border border-white/20 bg-white/10" />
        <span>{name}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-2 text-white/70">
          <span className="h-2 w-2 bg-[#98d59d]" />
          {status}
        </span>
        <span className="border border-white px-2 py-1 text-white">Configure</span>
      </div>
    </div>
  );
}
