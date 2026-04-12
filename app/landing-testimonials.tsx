import { BriefcaseBusiness, Building2 } from "lucide-react";

import { FrameShell } from "@/app/frame-shell";

const testimonialQuote =
  "Switching to synthetic datasets completely changed our workflow. We reduced data preparation time from weeks to hours, improved model accuracy on edge cases, and eliminated privacy concerns overnight. It gave our AI team the freedom to experiment faster than ever.";

export function LandingTestimonials() {
  return (
    <FrameShell
      id="company"
      className="w-full px-6 py-8 sm:px-8 lg:px-10 lg:py-10"
    >
      <section className="space-y-8 lg:space-y-7">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
          <TestimonialPortraitImage
            alt="Portrait of testimonial customer 1"
            src="/imagery/testimonial-person-1.png"
          />
          <TestimonialCard />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
          <TestimonialCard />
          <TestimonialPortraitImage
            alt="Portrait of testimonial customer 2"
            src="/imagery/testimonial-person-2.png"
          />
        </div>
      </section>
    </FrameShell>
  );
}

function TestimonialPortraitImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      alt={alt}
      className="h-[360px] w-full object-cover sm:h-[400px] lg:h-[356px]"
      src={src}
    />
  );
}

function TestimonialCard() {
  return (
    <article className="flex h-[360px] flex-col justify-between border border-black/8 bg-[rgba(255,255,255,0.92)] px-5 py-5 sm:h-[400px] sm:px-6 sm:py-6 lg:h-[356px] lg:px-5 lg:py-5">
      <p className="max-w-[520px] font-mono text-[clamp(0.98rem,1.1vw,1rem)] leading-[1.32] tracking-[-0.05em] text-[var(--muted)]">
        {testimonialQuote}
      </p>

      <div className="grid gap-5 pt-5 sm:grid-cols-2 sm:gap-6 lg:pt-5 lg:gap-6">
        <MetaBlock icon={BriefcaseBusiness} label="Head of Machine Learning" />
        <MetaBlock icon={Building2} label="Enterprise SaaS Company" />
      </div>
    </article>
  );
}

function MetaBlock({
  icon: Icon,
  label,
}: {
  icon: typeof BriefcaseBusiness;
  label: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="relative inline-flex h-12 w-9 shrink-0 items-center justify-center border border-black/8 bg-white text-black">
        <span className="absolute bottom-[-1px] left-[5px] h-8 w-px bg-black/10" />
        <span className="absolute bottom-[-1px] left-[11px] h-12 w-px bg-black/10" />
        <span className="absolute bottom-[-1px] left-[17px] h-6 w-px bg-black/10" />
        <Icon size={16} strokeWidth={1.8} />
      </span>
      <p className="font-mono text-[clamp(1rem,2vw,1.05rem)] leading-[1.25] tracking-[-0.05em] text-[var(--ink)]">
        {label}
      </p>
    </div>
  );
}
