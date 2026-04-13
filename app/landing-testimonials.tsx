"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BriefcaseBusiness, Building2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

import { FrameShell } from "@/app/frame-shell";

const testimonialQuote =
  "Switching to synthetic datasets completely changed our workflow. We reduced data preparation time from weeks to hours, improved model accuracy on edge cases, and eliminated privacy concerns overnight. It gave our AI team the freedom to experiment faster than ever.";

export function LandingTestimonials() {
  const containerRef = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    gsap.utils.toArray(".test-row-anim").forEach((el: any) => {
      gsap.from(el.children, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="company" className="w-full space-y-[var(--cell)]">
      <div className="test-row-anim grid gap-[var(--cell)] lg:grid-cols-[5fr_9fr]">
        <TestimonialPortraitImage
          alt="Portrait of testimonial customer 1"
          src="/imagery/testimonial-person-1.png"
        />
        <TestimonialCard />
      </div>

      <div className="test-row-anim grid gap-[var(--cell)] lg:grid-cols-[9fr_5fr]">
        <TestimonialCard />
        <TestimonialPortraitImage
          alt="Portrait of testimonial customer 2"
          src="/imagery/testimonial-person-2.png"
        />
      </div>
    </section>
  );
}

function TestimonialPortraitImage({ src, alt }: { src: string; alt: string }) {
  return (
    <FrameShell className="flex w-full border-none p-0 shadow-none aspect-square sm:aspect-square lg:aspect-auto lg:h-[calc(6*var(--cell))]">
      <img
        alt={alt}
        className="h-full w-full object-cover object-[center_20%]"
        src={src}
      />
    </FrameShell>
  );
}

function TestimonialCard() {
  return (
    <FrameShell className="flex min-h-[360px] flex-col justify-between p-6 sm:min-h-[400px] sm:p-8 lg:min-h-0 lg:h-[calc(6*var(--cell))] lg:p-10">
      <p className="max-w-[520px] font-mono text-[clamp(0.98rem,1.1vw,1rem)] leading-[1.32] tracking-[-0.05em] text-[var(--muted)]">
        {testimonialQuote}
      </p>

      <div className="grid gap-5 pt-5 sm:grid-cols-2 sm:gap-6 lg:gap-6 lg:pt-5">
        <MetaBlock icon={BriefcaseBusiness} label="Head of Machine Learning" />
        <MetaBlock icon={Building2} label="Enterprise SaaS Company" />
      </div>
    </FrameShell>
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
    <div className="flex items-center gap-3">
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
