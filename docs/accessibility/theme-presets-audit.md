# Theme presets accessibility audit

**Scope:** the nine named presets in the theme editor and the `/themes` selector/page. This combines token calculations, static inspection, and a limited browser/keyboard check. No screen reader was used.

**Reference:** EN 301 549 v3.2.1 web requirements (WCAG 2.1 AA) and relevant WCAG 2.2 AA criteria as a supplementary target. The EAA's applicable requirements and presumption of conformity depend on legal scope and harmonised standards. This focused review is not an EAA legal opinion, a full-site audit, or a declaration of conformity. See [Directive (EU) 2019/882](https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng), [EN 301 549 v3.2.1](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf), and [WCAG 2.2](https://www.w3.org/TR/wcag/).

## Summary

- **Contrast calibration:** border/input contrast was raised from the original recipes. Across the nine presets, light-mode `--border` is **1.24–1.25:1** and `--input` is **1.30:1**; dark-mode `--border` is **1.22–1.24:1** and `--input` is **1.29–1.32:1**. This keeps the borders understated while increasing separation; values remain below **3:1** when a boundary is needed to identify a control, so the change does not resolve WCAG 1.4.11 in those cases.
- **Resolved accessible-name finding:** Randomize and View code now have accessible names, confirmed in the `/themes` accessibility tree. Screen-reader announcement quality was not tested.
- All nine presets have defined base palettes. Calculated body-text and primary-button text pairs exceed WCAG AA thresholds in both color schemes.
- Browser check confirmed preset selection works with Arrow Down + Enter and that the sample preset control has a visible focus outline in light and dark modes. In this round, keyboard checks also confirmed the homepage skip link precedes navigation, Preview/Tasks tabs respond to arrow keys, and the command palette opens with ⌘K and returns focus to its trigger on Escape. A screen reader was not used.

## Contrast results

Ratios below are calculated from all referenced Tailwind color ramps in `node_modules/tailwindcss/theme.css`, converted from OKLCH to sRGB and evaluated with the WCAG relative-luminance formula. Presets use `primaryTone: light`; generated dark-mode rules preserve shade 400 with shade 950 foreground for chromatic primary colors. `Body` is base-800 on base-50 in light mode and base-100 on the generated dark surface (95% base-950 + 5% base-50) in dark mode. WCAG AA thresholds: 4.5:1 for normal text, 3:1 for large text and relevant non-text controls.

| Preset | Base / primary | Body text light | Body text dark | Primary control text, both modes | Result |
| --- | --- | ---: | ---: | ---: | --- |
| Default | neutral / neutral | 14.48:1 | 16.59:1 | 14.48:1 light; 13.86:1 dark | Pass for calculated text pairs |
| Marlim | slate / blue | 14.00:1 | 16.94:1 | 5.58:1 | Pass for calculated text pairs |
| Aqua | gray / teal | 14.07:1 | 16.83:1 | 7.76:1 | Pass for calculated text pairs |
| Coral | zinc / rose | 14.26:1 | 16.56:1 | 5.48:1 | Pass for calculated text pairs |
| Areia | stone / yellow | 14.56:1 | 16.54:1 | 9.29:1 | Pass for calculated text pairs |
| Ostra | mauve / purple | 14.87:1 | 16.11:1 | 5.39:1 | Pass for calculated text pairs |
| Alga | olive / lime | 13.79:1 | 16.14:1 | 9.51:1 | Pass for calculated text pairs |
| Espuma | mist / cyan | 14.25:1 | 16.15:1 | 7.40:1 | Pass for calculated text pairs |
| Boia | taupe / orange | 14.61:1 | 16.04:1 | 6.58:1 | Pass for calculated text pairs |

### Detailed findings

#### P1 — Randomize and View code controls lacked accessible names (resolved)

The original inspection found that the icon-only Randomize and View code buttons had no accessible name; tooltip copy did not provide one. The code now adds accessible names, and the browser accessibility tree exposed “Randomize theme” and “View theme code”.

**Relevant criterion:** WCAG 4.1.2 Name, Role, Value (EN 301 549 clause 9.4.1.2). **Status:** corrected in code and confirmed in the browser accessibility tree; not tested with a screen reader.

#### P1 — Input and structural borders are below the non-text contrast threshold

The theme surface recipes use 10% and 12% mixes of the darkest base shade for light-mode `--border` and `--input`; dark mode uses 8% and 10% mixes of the lightest shade, respectively. This increases separation while retaining Shark UI's palettes. It remains below 3:1 where a field boundary is necessary to identify a control.

**Relevant criterion:** WCAG 1.4.11 Non-text Contrast. The decorative `--border` token remains distinct from `--input`; both require a separate visual treatment where they identify functional boundaries.

| Preset | Border light | Input light | Border dark | Input dark |
| --- | ---: | ---: | ---: | ---: |
| Default | 1.24:1 | 1.30:1 | 1.23:1 | 1.31:1 |
| Marlim | 1.25:1 | 1.30:1 | 1.22:1 | 1.29:1 |
| Aqua | 1.24:1 | 1.30:1 | 1.22:1 | 1.30:1 |
| Coral | 1.24:1 | 1.30:1 | 1.23:1 | 1.31:1 |
| Areia | 1.24:1 | 1.30:1 | 1.23:1 | 1.31:1 |
| Ostra | 1.24:1 | 1.30:1 | 1.23:1 | 1.31:1 |
| Alga | 1.24:1 | 1.30:1 | 1.24:1 | 1.32:1 |
| Espuma | 1.24:1 | 1.30:1 | 1.23:1 | 1.31:1 |
| Boia | 1.24:1 | 1.30:1 | 1.23:1 | 1.31:1 |

These calculations use the WCAG relative-luminance formula after converting Tailwind OKLCH ramp values to sRGB and compositing the stated `color-mix()` percentages. The values are a visual calibration and are not a WCAG pass. For reference, see [shadcn theming](https://ui.shadcn.com/docs/theming) and [WCAG 1.4.11 understanding](https://www.w3.org/WAI/WCAG22/understanding/non-text-contrast.html).

#### P2 — Focus indicator needs full keyboard-state verification

Selects and tabs declare a 2px ring using `ring/24` plus a `border-ring/64` focus border. The theme select's outline was visibly distinguishable in the browser in both light and dark modes, and its popup opened and closed by keyboard. This was a visual sample; composited contrast, clipping, and visibility across all controls, all presets, and preview tabs have not been measured.

**Relevant criteria:** WCAG 2.4.7 Focus Visible and 1.4.11 Non-text Contrast; WCAG 2.2 AA 2.4.11 Focus Not Obscured and 2.5.8 Target Size (Minimum) should also be checked for the actual page. **Suggested follow-up:** keyboard-test the preset select, customization controls, lock buttons, action buttons, and tabs in light/dark mode; verify visible focus remains unobscured and has at least 3:1 contrast where required.

#### P2 — Screen-reader behavior and theme-page reflow remain unverified

The theme selector groups its controls in a `fieldset` with a screen-reader-only legend, uses shared Field labels and Ark Select/Listbox primitives, and the page provides a screen-reader-only H1 and a named preview section. This is a promising semantic structure, but accessible name/description wiring, live theme preview announcements, state announcements, tab behavior, and mobile behavior cannot be proven from source alone.

**Browser observation:** the accessibility tree exposes the page heading, named preview section, Theme settings fieldset, and labeled preset/base/primary controls. The lock controls are exposed as named checkboxes, and Tone as named Light/Dark radio buttons. Preset selection was tested by keyboard. At 320 × 800 CSS px `/themes` loaded without document-level horizontal overflow, but the available screenshot showed insufficient page content to judge the usability/reflow of the full selector; this is not a reflow pass. The color-area thumb measured 18 × 18 CSS px in the DOM and needs a WCAG 2.2 2.5.8 review that includes spacing and exceptions. **Still unverified:** VoiceOver output, accessible descriptions, live preview announcements, complete tab behavior, and readable/operable reflow. The host lacked access to native Safari/Firefox and Windows/Edge, so neither screen-reader speech nor forced colors were verified. Mail and Chat checks in the site audit do not validate this page.

**axe snapshot:** `/themes` was included in the site-wide local run (Chrome 154 headless, 1280 × 900, initial rendered state) and had no axe violations in that snapshot. This is a result for one rendered state only; it does not replace browser/AT review or prove the focus, selector, or responsive states conform. The run methodology and site-wide triage are in [the site audit](site-a11y-audit.md#automação-axe--triagem-concluída-para-a-rodada-local-defeitos-e-pendências-registrados).

## Site-wide follow-up relevant to the theme page

The site audit's current local axe batch found no violations on `/themes` in its initial rendered state, and a fresh spot check also returned zero violations. This does not establish compliance of every selector state, theme combination, viewport, or assistive-technology interaction. The site-wide report records open issues on other routes and the blocked checks for real 400% zoom, VoiceOver speech, and Windows/Edge forced colors.

## Coverage and limitations

- The nine presets were enumerated from `THEME_PRESETS`; body-text and primary-button text pairs were calculated for light and dark modes using every referenced base and primary ramp.
- A local browser was used to inspect the page in light and dark modes, select presets by keyboard (including Marlim, Ostra, and Alga), and inspect the accessibility tree. The selected preset was restored to Default. Further keyboard sampling confirmed the global skip link, one tablist arrow-key transition, command-palette Escape/focus return, and dialog initial focus/close/return; these are site-level samples, not complete coverage of `/themes`.
- Border/input contrast figures are retained from the earlier calculation; this round did not recalculate or change colors. Focus was visually checked on a sample selector; hover/pressed states, disabled states, gradients, every preview template, real 400% browser zoom, target spacing, forced-colors mode, and assistive-technology interoperability were not exhaustively tested. No screen-reader validation was available.
- This report evaluates the theme editor and its named presets only. It does not establish whole-site or EAA conformity.
