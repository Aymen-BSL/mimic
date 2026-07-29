import Image from "next/image";

import { FrameShell } from "@/app/frame-shell";

const PARTNER_LOGOS = [
  {
    alt: "Voxel Labs",
    height: 36,
    src: "/logos/voxel-labs.svg",
    width: 171,
  },
  {
    alt: "Warpspeed",
    height: 27,
    src: "/logos/warpspeed.svg",
    width: 180,
  },
  {
    alt: "Mastermail",
    height: 36,
    src: "/logos/mastermail.svg",
    width: 163,
  },
  {
    alt: "Leapyear",
    height: 29,
    src: "/logos/leapyear.svg",
    width: 146,
  },
  {
    alt: "Lightspeed",
    height: 25,
    src: "/logos/lightspeed.svg",
    width: 172,
  },
];

export function LandingLogos() {
  return (
    <FrameShell className="bg-[var(--paper)]">
      <div className="grid grid-cols-2 divide-x divide-y divide-black/7 sm:grid-cols-3 lg:grid-cols-5 lg:divide-y-0">
        {PARTNER_LOGOS.map((logo) => (
          <div
            key={logo.alt}
            className="logo-grid-cell flex min-w-0 items-center justify-center overflow-hidden px-4 py-2 sm:px-6"
          >
            <Image
              alt={logo.alt}
              className="h-auto max-h-9 max-w-full object-contain"
              height={logo.height}
              src={logo.src}
              width={logo.width}
            />
          </div>
        ))}
      </div>
    </FrameShell>
  );
}
