type FrameShellProps = {
  children: React.ReactNode;
  className?: string;
  cornerTone?: "light" | "dark";
  id?: string;
};

export function FrameShell({
  children,
  className = "",
  cornerTone = "light",
  id,
}: FrameShellProps) {
  return (
    <section
      id={id}
      className={`section-shell relative ${
        cornerTone === "dark" ? "border-white/10" : ""
      } ${className}`}
    >
      <FrameCorners tone={cornerTone} />
      {children}
    </section>
  );
}

function FrameCorners({ tone = "light" }: { tone?: "light" | "dark" }) {
  const lineClass =
    tone === "dark" ? "bg-white/28 text-white/28" : "bg-black/24 text-black/24";

  const positions = [
    "left-0 top-0 -translate-x-1/2 -translate-y-1/2",
    "right-0 top-0 translate-x-1/2 -translate-y-1/2",
    "left-0 bottom-0 -translate-x-1/2 translate-y-1/2",
    "right-0 bottom-0 translate-x-1/2 translate-y-1/2",
  ];

  return (
    <>
      {positions.map((position) => (
        <span
          key={position}
          className={`pointer-events-none absolute ${position} h-[17px] w-[17px]`}
        >
          <span
            className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 ${lineClass}`}
          />
          <span
            className={`absolute left-0 top-1/2 h-px w-full -translate-y-1/2 ${lineClass}`}
          />
        </span>
      ))}
    </>
  );
}
