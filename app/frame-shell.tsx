type FrameShellProps = {
  children: React.ReactNode;
  className?: string;
  cornerTone?: "light" | "dark";
  /** Which corners show the star markers. Defaults to "both". */
  corners?: "top" | "bottom" | "both";
  id?: string;
};

export function FrameShell({
  children,
  className = "",
  cornerTone = "light",
  corners = "both",
  id,
}: FrameShellProps) {
  const shellClass =
    cornerTone === "dark" ? "section-shell--dark" : "section-shell";

  return (
    <section
      id={id}
      className={`${shellClass} relative ${
        cornerTone === "dark" ? "border-white/10" : ""
      } ${className}`}
    >
      <FrameCorners tone={cornerTone} corners={corners} />
      {children}
    </section>
  );
}

function FrameCorners({
  tone = "light",
  corners = "both",
}: {
  tone?: "light" | "dark";
  corners?: "top" | "bottom" | "both";
}) {
  const fill = tone === "dark" ? "rgba(255,255,255,0.45)" : "#A3A4A1";

  const allPositions = [
    {
      key: "tl",
      side: "top",
      cls: "left-0 top-0 -translate-x-1/2 -translate-y-1/2",
    },
    {
      key: "tr",
      side: "top",
      cls: "right-0 top-0 translate-x-1/2 -translate-y-1/2",
    },
    {
      key: "bl",
      side: "bottom",
      cls: "left-0 bottom-0 -translate-x-1/2 translate-y-1/2",
    },
    {
      key: "br",
      side: "bottom",
      cls: "right-0 bottom-0 translate-x-1/2 translate-y-1/2",
    },
  ];

  const visible = allPositions.filter(
    (p) => corners === "both" || p.side === corners,
  );

  return (
    <>
      {visible.map(({ key, cls }) => (
        <span key={key} className={`pointer-events-none absolute ${cls} z-20`}>
          <svg
            aria-hidden="true"
            fill="none"
            height="17"
            viewBox="0 0 17 17"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3.5C10 5.433 11.567 7 13.5 7H15.5C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10H13.5C11.567 10 10 11.567 10 13.5V15.5C10 16.3284 9.32843 17 8.5 17C7.67157 17 7 16.3284 7 15.5V13.5C7 11.567 5.433 10 3.5 10H1.5C0.671573 10 0 9.32843 0 8.5C0 7.67157 0.671573 7 1.5 7H3.5C5.433 7 7 5.433 7 3.5V1.5C7 0.671573 7.67157 0 8.5 0C9.32843 0 10 0.671573 10 1.5V3.5Z"
              fill={fill}
            />
          </svg>
        </span>
      ))}
    </>
  );
}
