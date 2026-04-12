# Figma Resume Plan

Project: `mimic`

Figma source:
`https://www.figma.com/design/v701ojuhZgsHwgAcH4qsuS/Untitled?node-id=1-4&t=BvnCCIJv4wReoV6I-4`

## What Is Already Implemented

These sections are already represented in the codebase and appear to come from prior Figma MCP captures:

- Hero and navigation: [app/landing-hero.tsx](/c:/Me/Work/mimic/app/landing-hero.tsx)
- Partner logo strip: [app/landing-logos.tsx](/c:/Me/Work/mimic/app/landing-logos.tsx)
- Overview section: [app/landing-overview.tsx](/c:/Me/Work/mimic/app/landing-overview.tsx)
- Pipeline/features section: [app/landing-pipeline.tsx](/c:/Me/Work/mimic/app/landing-pipeline.tsx)
- Shared frame wrapper: [app/frame-shell.tsx](/c:/Me/Work/mimic/app/frame-shell.tsx)
- Global page rhythm/tokens: [app/globals.css](/c:/Me/Work/mimic/app/globals.css)

Existing implementation patterns:

- Reuse `FrameShell` for bordered paper panels and corner markers
- Reuse the grid rhythm from `--cell` and `--gap`
- Keep the current mono-heavy typography and paper/ink token palette
- Use Figma MCP asset URLs directly instead of introducing placeholder assets
- Keep the home route assembled in [app/page.tsx](/c:/Me/Work/mimic/app/page.tsx)

## Why Work Stopped

The authenticated Figma account is on a `starter` team and Figma MCP read tools are rate-limited for that plan. During this session, `get_design_context` and `get_screenshot` for node `1:4` both returned the Starter-plan tool-limit error before any new frame data could be captured.

## Resume Steps

1. Retry `get_design_context` for file `v701ojuhZgsHwgAcH4qsuS`, node `1:4`.
2. Retry `get_screenshot` for the same node before editing code.
3. If the full page response is truncated, run `get_metadata` on `1:4` and fetch only the remaining child frames that are not already implemented.
4. Compare those child frames to the existing four sections so we only build the true remainder of the landing page.
5. Implement the remaining sections with the existing `FrameShell`, spacing tokens, routing pattern, and section stacking in `app/page.tsx`.
6. Validate desktop and mobile against the Figma screenshot, then run Playwright-based checks once Playwright is available in the environment.

## Validation Notes

- A live local app was reachable at `http://127.0.0.1:3000` during this session.
- `npm run lint` passed with image-element warnings only.
- Playwright validation could not be completed in this session because Playwright was not present locally, and an escalated `npx playwright` run was not approved.
