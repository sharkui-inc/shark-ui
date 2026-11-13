# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

React developers evaluating or using Shark UI who need composed, production-oriented
interfaces they can inspect, install, and own. That includes builders of AI chat and
agent UIs who need reference compositions, not only standalone primitives. Docs cover
multiple frameworks; Next.js is the primary docs and preview surface.

## Product Purpose

Shark UI is a shadcn-style component registry built on Ark UI and Tailwind CSS v4. It
provides accessible primitives, AI components, examples, themes, blocks, and templates
that developers copy into their own codebases. Success means a developer can quickly
understand a composition, preview it responsively, inspect every file, and install it
with the shadcn CLI.

## Positioning

Shark UI brings the copy-and-own registry workflow to Ark UI, with compositions and
documentation that follow Ark's APIs instead of porting Radix assumptions.

## Operating Context

Developers browse documentation, customize the live theme on `/themes`, explore
composed blocks on `/blocks`, and use full-app template previews as reference. They
inspect live examples and every required file, choose a package manager, and install
registry items through the `@shark` namespace.

## Capabilities and Constraints

- Next.js App Router with a fully static `output: "export"` deployment.
- React, Ark UI, Tailwind CSS v4, and the shadcn registry schema.
- Registry-facing source remains copyable and installable without a runtime Shark UI
  package.
- Block and template previews must remain interactive inside same-origin iframes.
- Some installable chart compositions exist outside the published block browser
  catalog and must stay compatible.
- The interface and public documentation are written in English.

## Brand Commitments

Preserve the existing Shark UI visual system, semantic tokens, typography, header,
customization controls, and concise technical English voice (DX-first, no marketing
hype). Visual authority lives in [`DESIGN.md`](DESIGN.md); day-to-day UI rules live in
[`public/design.md`](public/design.md).

## Evidence on Hand

- Component, AI-component, helper, utility, and hook documentation under
  `content/docs`, with live registry examples under `registry/react/examples`.
- Theme customization for primary color, base/gray scale, radius, fonts, presets,
  primary tone, theme locks, copy-theme output, and light/dark mode.
- Published block catalog under `/blocks` (including sidebar compositions) sourced
  from `registry/react/blocks`.
- Chart compositions under `registry/react/blocks/chart` remain installable via
  registry JSON but are not part of the published block browser catalog.
- Full-app template previews under `app/templates/` (chat, dashboard, mail, music,
  tasks); a smaller set of installable registry templates under
  `registry/react/templates`.

## Product Principles

- Compose existing Shark primitives before introducing bespoke UI.
- Show the real result and every file required to reproduce it.
- Keep registry metadata, preview rendering, and installation output aligned.
- Preserve accessibility, responsive behavior, and RTL-safe layout choices.
- Favor static, cacheable delivery and load expensive previews only when needed.

## Accessibility & Inclusion

Interactive catalog controls, file navigation, live previews, and composed blocks
must remain keyboard accessible, expose meaningful labels, and respect reduced-motion
and document direction conventions.
