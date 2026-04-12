import { GridBackground } from "@/components/grid-background";
import { LandingHero } from "@/app/landing-hero";
import { LandingLogos } from "@/app/landing-logos";
import { LandingOverview } from "@/app/landing-overview";
import { LandingPipeline } from "@/app/landing-pipeline";
import { LandingComparison } from "@/app/landing-comparison";
import { LandingEnterprise } from "@/app/landing-enterprise";
import { LandingTestimonials } from "@/app/landing-testimonials";
import { LandingFaq } from "@/app/landing-faq";
import { LandingCtaFooter } from "@/app/landing-cta-footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--paper)]">
      {/* Aceternity-style grid: absolute child that fills <main> and scrolls with it */}
      <GridBackground />
      {/*
        The single centered column.
          max-w-[1170px] = 15 × 78 px = exactly 15 grid cells wide.
          GridBackground's background-position shifts the grid so its vertical
          lines land on the left/right borders of this column at every width.

        pt = 1 grid row of visible background before the first section starts.
      */}
      <div
        className="relative z-10 mx-auto flex w-full max-w-[1170px] flex-col"
        style={{ paddingTop: "var(--cell)" }}
      >
        <LandingHero />

        {/* Hero → Logos: 1-cell gap (visually paired / connected sections) */}
        <div style={{ marginTop: "var(--cell)" }}>
          <LandingLogos />
        </div>

        {/* Logos → Overview: 3-cell gap (independent sections) */}
        <div style={{ marginTop: "var(--gap)" }}>
          <LandingOverview />
        </div>

        {/* Overview → Pipeline: 3-cell gap */}
        <div style={{ marginTop: "var(--gap)" }}>
          <LandingPipeline />
        </div>

        <div style={{ marginTop: "var(--gap)" }}>
          <LandingComparison />
        </div>

        <div style={{ marginTop: "var(--gap)" }}>
          <LandingEnterprise />
        </div>

        <div style={{ marginTop: "var(--gap)" }}>
          <LandingTestimonials />
        </div>

        <div style={{ marginTop: "var(--gap)" }}>
          <LandingFaq />
        </div>

        <div style={{ marginTop: "var(--gap)" }}>
          <LandingCtaFooter />
        </div>

        {/* Trailing 3-cell gap so the last section doesn't butt against the bottom */}
        <div style={{ height: "var(--gap)" }} />
      </div>
    </main>
  );
}
