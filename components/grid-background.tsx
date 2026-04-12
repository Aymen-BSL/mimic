import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
}

/**
 * Aceternity-style grid background.
 *
 * Place this as the first child of a `position: relative` container.
 * The grid renders via CSS background-image (same technique as the
 * original Aceternity GridBackgroundDemo), using our design-system
 * CSS variables so cell size and line colour stay in sync with the
 * rest of the layout.
 *
 * Background-position is shifted so the vertical grid lines land
 * exactly on the left / right borders of the centred 1170 px column
 * (1170 = 15 × 78 px cells) at every viewport width.
 */
export function GridBackground({ className }: GridBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 z-0", className)}
      style={{
        backgroundImage: [
          "linear-gradient(to right, var(--grid-line) 1px, transparent 1px)",
          "linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
        ].join(", "),
        backgroundSize: "var(--cell) var(--cell)",
        // Align vertical lines with the 1170 px section container's edges on desktop.
        // On viewports narrower than 1170 px the column fills the full width, so
        // we clamp to 0 to avoid a negative shift that would misalign the grid.
        backgroundPosition: "max(0px, calc((100% - 1170px) / 2)) 0",
      }}
    />
  );
}
