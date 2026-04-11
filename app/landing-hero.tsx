import Link from "next/link";

import { FrameShell } from "@/app/frame-shell";

const BRAND_MARK =
  "https://www.figma.com/api/mcp/asset/4d922e6f-8dd7-4b7f-b91a-31ffe5de85c9";
/* const HERO_ART =
  "https://www.figma.com/api/mcp/asset/92661134-3503-4451-bd0d-06f81d91f68f"; */

const navItems = [
  { href: "#product", label: "Product", active: true },
  { label: "Company" },
  { href: "#solutions", label: "Solutions" },
  { label: "Resources" },
  { label: "Pricing" },
];

export function LandingHero() {
  return (
    <section className="flex w-full flex-col">
      <FrameShell className="border-b-0" corners="top">
        <header className="flex flex-col gap-4 px-6 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <Link href="/" className="inline-flex items-center gap-3">
            <img
              alt="Mimic"
              className="h-7 w-[33px] object-contain"
              src={BRAND_MARK}
            />
            <span className="font-mono text-[1.45rem] tracking-[-0.04em] text-[var(--ink)]">
              Mimic
            </span>
          </Link>
          <nav className="-mx-2 flex gap-5 overflow-x-auto px-2 pb-1 font-mono text-sm tracking-[-0.05em] text-[var(--muted)] lg:justify-end">
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className={
                    item.active
                      ? "text-[var(--ink)]"
                      : "hover:text-[var(--ink)]"
                  }
                >
                  {item.label}
                </Link>
              ) : (
                <span key={item.label} aria-disabled="true">
                  {item.label}
                </span>
              ),
            )}
          </nav>
        </header>
      </FrameShell>

      <div className="relative isolate min-h-[480px] overflow-hidden sm:min-h-[560px] lg:min-h-[627px]">
        <img
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          src="/imagery/hero-art.png"
        />
        <div className="absolute inset-0" />
        <div className="relative z-10 flex h-full items-center px-6 py-10 sm:px-8 lg:px-[68px] lg:py-16">
          <div className="max-w-[480px] space-y-6 lg:space-y-8">
            <h1 className="max-w-[460px] font-mono text-[clamp(3.2rem,6vw,4.9rem)] leading-[0.92] tracking-[-0.08em] text-white">
              Generate Better Data, Build Better Ai
            </h1>
            <p className="max-w-[392px] font-mono text-base leading-[1.45] tracking-[-0.05em] text-white/60 sm:text-lg">
              Create high-quality synthetic datasets that protect privacy while
              accelerating your machine learning projects.
            </p>
            <Link href="#product" className="hero-button">
              <span>Start Generating</span>
              <span aria-hidden="true" className="text-xl leading-none">
                -&gt;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
