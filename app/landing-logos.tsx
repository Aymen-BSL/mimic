import { FrameShell } from "@/app/frame-shell";

const PARTNER_LOGOS = [
  {
    alt: "Voxel Labs",
    src: "https://www.figma.com/api/mcp/asset/9427abc8-8622-4496-b3c4-4ae3a8323ac5",
  },
  {
    alt: "Warpspeed",
    src: "https://www.figma.com/api/mcp/asset/c72e518c-fbc1-45e2-b95e-16d555a9254d",
  },
  {
    alt: "Mastermail",
    src: "https://www.figma.com/api/mcp/asset/9dbf6745-34c7-4f68-83e3-e6d3ca237c6f",
  },
  {
    alt: "Leapyear",
    src: "https://www.figma.com/api/mcp/asset/10c780ab-7328-4f85-baba-271b9f221f6a",
  },
  {
    alt: "Lightspeed",
    src: "https://www.figma.com/api/mcp/asset/9fd9ccc5-ecaf-49a3-8227-024d5199fd57",
  },
];

export function LandingLogos() {
  return (
    <FrameShell className="bg-[var(--paper)]">
      <div className="grid grid-cols-2 divide-x divide-y divide-black/7 sm:grid-cols-3 lg:grid-cols-5 lg:divide-y-0">
        {PARTNER_LOGOS.map((logo) => (
          <div
            key={logo.alt}
            className="flex h-[78px] items-center justify-center px-6 py-4 opacity-60"
          >
            <img alt={logo.alt} className="max-h-11 w-auto object-contain" src={logo.src} />
          </div>
        ))}
      </div>
    </FrameShell>
  );
}
