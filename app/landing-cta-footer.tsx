import Link from "next/link";

import { FrameShell } from "@/app/frame-shell";

const BRAND_MARK =
  "https://www.figma.com/api/mcp/asset/4d922e6f-8dd7-4b7f-b91a-31ffe5de85c9";

const footerNav = [
  { href: "#product", label: "Product", active: true },
  { href: "#company", label: "Company" },
  { href: "#solutions", label: "Solutions" },
  { href: "#resources", label: "Resources" },
  { href: "#pricing", label: "Pricing" },
];

const socialNav = [
  { href: "#", label: "Twitter" },
  { href: "#", label: "LinkedIn" },
];

export function LandingCtaFooter() {
  return (
    <FrameShell
      id="pricing"
      className="w-full overflow-hidden px-6 py-8 sm:px-8 lg:px-10 lg:py-10"
    >
      <section className="space-y-12 lg:space-y-14">
        <div className="overflow-hidden">
          <div className="cta-marquee-track">
            <p className="cta-marquee-copy">
              <span>Let&apos;s innovate together</span>
              <span aria-hidden="true">•</span>
              <span>Let&apos;s innovate together</span>
              <span aria-hidden="true">•</span>
            </p>
            <p aria-hidden="true" className="cta-marquee-copy">
              <span>Let&apos;s innovate together</span>
              <span aria-hidden="true">•</span>
              <span>Let&apos;s innovate together</span>
              <span aria-hidden="true">•</span>
            </p>
          </div>
        </div>

        <div className="max-w-[670px] space-y-7 pl-1">
          <p className="max-w-[640px] font-mono text-[clamp(1.2rem,2.7vw,1.65rem)] leading-[1.35] tracking-[-0.05em] text-[var(--muted)]">
            No inflated operational overhead. No long-term resource lock-in.
            Just consistently high-performing, industry-grade creative output.
          </p>

          <Link href="#product" className="cta-button">
            <span>Start Generating</span>
            <span aria-hidden="true" className="text-xl leading-none">
              -&gt;
            </span>
          </Link>
        </div>

        <footer className="grid gap-8 border-t border-black/6 pt-8 lg:grid-cols-[1fr_auto_auto] lg:items-end lg:gap-12">
          <Link href="/" className="inline-flex items-center gap-3 self-start lg:self-end">
            <img
              alt="Mimic"
              className="h-7 w-[33px] object-contain"
              src={BRAND_MARK}
            />
            <span className="font-mono text-[1.45rem] tracking-[-0.04em] text-[var(--ink)]">
              Mimic
            </span>
          </Link>

          <div className="space-y-3 lg:justify-self-start">
            <p className="font-mono text-[0.95rem] tracking-[-0.05em] text-black/22">
              Explore
            </p>
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[1rem] tracking-[-0.05em] text-[var(--muted)]">
              {footerNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={
                    item.active
                      ? "font-medium text-[var(--ink)] before:mr-2 before:content-['•']"
                      : "transition-colors hover:text-[var(--ink)]"
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3 lg:justify-self-end">
            <p className="font-mono text-[0.95rem] tracking-[-0.05em] text-black/22">
              Socials
            </p>
            <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[1rem] font-medium tracking-[-0.05em] text-[var(--ink)]">
              {socialNav.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </footer>
      </section>
    </FrameShell>
  );
}
