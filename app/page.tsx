import { LandingHero } from "@/app/landing-hero";
import { LandingLogos } from "@/app/landing-logos";
import { LandingOverview } from "@/app/landing-overview";
import { LandingPipeline } from "@/app/landing-pipeline";

export default function Home() {
  return (
    <main className="grid-surface min-h-screen">
      {/*
        The single centered column.
          max-w-[1170px] = 15 × 78 px = exactly 15 grid cells wide.
          background-position in globals.css shifts the grid so vertical lines
          land on the left/right borders of this column at every viewport width.

        pt = 1 grid row of visible background before the first section starts.
      */}
      <div
        className="mx-auto flex w-full max-w-[1170px] flex-col"
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

        {/* Trailing 3-cell gap so the last section doesn't butt against the bottom */}
        <div style={{ height: "var(--gap)" }} />
      </div>
    </main>
  );
}
