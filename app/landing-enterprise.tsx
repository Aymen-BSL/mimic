import { CloudUpload, Lock, Shield, Workflow } from "lucide-react";

import { FrameShell } from "@/app/frame-shell";

const enterpriseFeatures = [
  { icon: Shield, label: "SOC 2 Ready" },
  { icon: Workflow, label: "GDPR Compliant Architecture" },
  { icon: Lock, label: "Role-Based Access" },
  { icon: CloudUpload, label: "On-Premise or Cloud Deployment" },
];

export function LandingEnterprise() {
  return (
    <FrameShell
      className="w-full p-0 border-none shadow-none"
      cornerTone="light"
    >
      <div className="bg-[#101010] text-white px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,445px)] lg:items-center">
          <div className="space-y-6 lg:space-y-5">
            <EnterpriseDiagram />

            <div className="max-w-[520px] space-y-4">
              <h2 className="font-mono text-[clamp(2.8rem,6vw,4.8rem)] leading-[0.92] tracking-[-0.08em] text-white">
                Enterprise
                <br />
                Section
              </h2>
              <p className="max-w-[500px] font-mono text-[1.02rem] leading-[1.4] tracking-[-0.05em] text-white/58 lg:text-[1.1rem]">
                Everything you need to generate, validate, and deploy synthetic
                data at scale.
              </p>
            </div>
          </div>

          <div className="space-y-7 pr-2 lg:space-y-8">
            {enterpriseFeatures.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-white text-black">
                  <Icon size={20} strokeWidth={1.85} />
                </span>
                <p className="pt-0.5 font-mono text-[clamp(1.55rem,2.8vw,2rem)] leading-[1.12] tracking-[-0.06em] text-white">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </FrameShell>
  );
}

function EnterpriseDiagram() {
  return (
    <svg
      aria-hidden="true"
      className="h-[220px] w-full border border-[#272727] bg-[#101010] sm:h-[280px] lg:h-[252px]"
      fill="none"
      viewBox="0 0 540 285"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_848)">
        <rect
          height="68"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="2"
          transform="rotate(30 -76.7585 -138.135)"
          width="436"
          x="-76.7585"
          y="-138.135"
        />
        <rect
          height="68"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="2"
          transform="matrix(0.866025 0.5 0.5 -0.866025 -148.759 -16.16)"
          width="436"
          x="1.36603"
          y="-0.366025"
        />
        <rect
          height="68"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="2"
          transform="rotate(165 712.197 99.1235)"
          width="436"
          x="712.197"
          y="99.1235"
        />
        <rect
          height="68"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="2"
          transform="matrix(-0.965926 0.258819 0.258819 0.965926 674.445 -39.038)"
          width="436"
          x="-0.707107"
          y="1.22474"
        />
        <rect
          height="68"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="2"
          transform="rotate(-150 611.837 423.591)"
          width="436"
          x="611.837"
          y="423.591"
        />
        <rect
          height="68"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="2"
          transform="matrix(-0.866025 -0.5 -0.5 0.866025 681.837 299.616)"
          width="436"
          x="-1.36603"
          y="0.366025"
        />
        <path
          d="M248 77.0005L265.5 142.309L170.5 167.764"
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
        />
        <path
          d="M178 171.93L267.307 148L285 214.032"
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
        />
        <path
          d="M291.127 212.5L273.36 146.192L369.36 120.737"
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
        />
        <path
          d="M361.86 116.57L272.552 140.5L255.002 75.0005"
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
        />
        <path
          d="M301.501 79.0015L266.531 138.669L188.005 93.6209"
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
        />
        <path
          d="M179.5 95.1801L263.466 143.657L229.561 202.382"
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
        />
        <path
          d="M234.925 205.918L268.731 147.363L352.001 195.438"
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
        />
        <path
          d="M359.997 193.17L271.479 142.063L305.498 81.9999"
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="2"
        />
        <rect
          height="68"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="2"
          transform="rotate(-15 -173.119 189.335)"
          width="436"
          x="-173.119"
          y="189.335"
        />
        <rect
          height="68"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="2"
          transform="matrix(0.965926 -0.258819 -0.258819 -0.965926 -137.366 325.496)"
          width="436"
          x="0.707107"
          y="-1.22474"
        />
        <rect
          fill="#D9D9D9"
          height="20"
          transform="rotate(28.9911 265.998 129)"
          width="20"
          x="265.998"
          y="129"
        />
      </g>
      <rect height="283" stroke="#272727" strokeWidth="2" width="538" x="1" y="1" />
      <defs>
        <clipPath id="clip0_1_848">
          <rect fill="white" height="285" width="540" />
        </clipPath>
      </defs>
    </svg>
  );
}


