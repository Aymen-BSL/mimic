"use client";

import Link from "next/link";
import { useState } from "react";

import { FrameShell } from "@/app/frame-shell";

const BRAND_MARK =
  "https://www.figma.com/api/mcp/asset/4d922e6f-8dd7-4b7f-b91a-31ffe5de85c9";

const navItems = [
  { href: "#product", label: "Product", active: true },
  { href: "#company", label: "Company" },
  { href: "#solutions", label: "Solutions" },
  { href: "#resources", label: "Resources" },
  { href: "#pricing", label: "Pricing" },
];

export function LandingHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="flex w-full flex-col">
      <FrameShell className="border-b-0" corners="top">
        <header className="relative px-6 py-5 sm:px-8 lg:px-10 mt-0.5">
          {/* Top bar: logo + hamburger (mobile) / logo + nav (desktop) */}
          <div className="flex items-center justify-between lg:justify-start lg:gap-0">
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

            {/* Desktop nav */}
            <nav className="ml-auto hidden gap-5 font-mono text-sm tracking-[-0.05em] text-[var(--muted)] lg:flex">
              {navItems.map((item) =>
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={
                      item.active
                        ? "text-[var(--ink)]"
                        : "transition-colors hover:text-[var(--ink)]"
                    }
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    key={item.label}
                    aria-disabled="true"
                    className="cursor-default"
                  >
                    {item.label}
                  </span>
                ),
              )}
            </nav>

            {/* Hamburger button (mobile only) */}
            <div className="lg:hidden">
              <button
                aria-controls="mobile-nav"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="hamburger-btn lg:hidden"
                onClick={() => setMenuOpen((v) => !v)}
                type="button"
              >
                <span
                  className={`hamburger-bar ${menuOpen ? "hamburger-bar--top-open" : ""}`}
                />
                <span
                  className={`hamburger-bar ${menuOpen ? "hamburger-bar--mid-open" : ""}`}
                />
                <span
                  className={`hamburger-bar ${menuOpen ? "hamburger-bar--bot-open" : ""}`}
                />
              </button>
            </div>
          </div>

          {/* Mobile nav drawer */}
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className={`mobile-nav lg:hidden ${menuOpen ? "mobile-nav--open" : ""}`}
          >
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`mobile-nav-item ${item.active ? "mobile-nav-item--active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  key={item.label}
                  aria-disabled="true"
                  className="mobile-nav-item mobile-nav-item--disabled"
                >
                  {item.label}
                </span>
              ),
            )}
          </nav>
        </header>
      </FrameShell>

      <div className="relative isolate min-h-[420px] overflow-hidden sm:min-h-[520px] lg:min-h-[700px] mt-0.4">
        <img
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          src="/imagery/hero-art.png"
        />
        <div className="absolute inset-0" />
        <div className="relative z-10 flex min-h-[420px] sm:min-h-[520px] lg:min-h-[700px] items-center px-6 py-10 sm:px-8 lg:px-[68px] lg:py-16">
          <div className="max-w-[400px] md:max-w-[420px] lg:max-w-[560px] space-y-6 lg:space-y-8">
            <h1 className="max-w-[392px] md:max-w-[420px] lg:max-w-[540px] font-mono font-light text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.92] tracking-[-0.08em] text-white">
              Generate Better Data, Build Better AI
            </h1>
            <p className="max-w-[392px] font-mono text-[clamp(0.9rem,2.5vw,1.125rem)] leading-[1.45] tracking-[-0.05em] text-white/60">
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
