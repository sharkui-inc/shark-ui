# Theme presets accessibility audit

**Scope:** the nine named presets in the theme editor and the `/themes` selector/page. This combines token calculations, static inspection, and a limited browser/keyboard check. No screen reader was used.

**Reference:** EN 301 549 v3.2.1 web requirements (WCAG 2.1 AA) and relevant WCAG 2.2 AA criteria as a supplementary target. The EAA's applicable requirements and presumption of conformity depend on legal scope and harmonised standards. This focused review is not an EAA legal opinion, a full-site audit, or a declaration of conformity. See [Directive (EU) 2019/882](https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng), [EN 301 549 v3.2.1](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf), and [WCAG 2.2](https://www.w3.org/TR/wcag/).

## Summary

- **Confirmed control contrast concern:** the shared border/input recipes are only 5–10% color mixes against their surfaces. Across the nine presets, light-mode border contrast is about **1.19:1** and input contrast **1.24–1.25:1**; dark-mode border contrast is **1.15–1.17:1** and input contrast **1.22–1.24:1**. These are below the **3:1** non-text contrast threshold when those boundaries are needed to identify controls.
- **Confirmed accessible-name issue:** the browser accessibility tree exposes Randomize and View code as unnamed icon-only buttons. Their icons are hidden from assistive technology, and tooltip text does not provide a dependable accessible name.
- All nine presets have defined base palettes. Calculated body-text and primary-button text pairs exceed WCAG AA thresholds in both color schemes.
- Browser check confirmed preset selection works with Arrow Down + Enter and that the sample preset control has a visible focus outline in light and dark modes. A screen reader was not used.

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

#### P1 — Randomize and View code controls lack accessible names

In `app/(app)/themes/_components/theme-selector/theme-selector.tsx`, the Randomize and View code buttons contain only `aria-hidden` icons. Neither button has an accessible label. The associated tooltip copy does not establish the button's accessible name.

**Relevant criteria:** WCAG 4.1.2 Name, Role, Value (EN 301 549 clause 9.4.1.2). **Suggested fix:** add concise `aria-label` values (“Randomize theme” and “View theme code”) or visible text. Confirm names in the accessibility tree.

#### P1 — Input and structural borders are too subtle to identify controls

The theme surface recipes in `styles/themes.css` set light-mode `--border` to an 8% mix and `--input` to a 10% mix of the darkest base shade into the background; dark mode uses 6% and 8% mixes of the lightest shade. In the default neutral theme, the calculated light-mode ratios are about **1.19:1** for `--border` and **1.24:1** for `--input`; dark-mode ratios are about **1.16:1** and **1.23:1**, respectively. Other supported palettes use the same low-separation recipe. Where a field boundary is necessary to identify the control, these values are below 3:1.

**Relevant criterion:** WCAG 1.4.11 Non-text Contrast. **Suggested fix:** strengthen the input/control boundary token to reach at least 3:1 against the adjacent surface, or provide an equally clear non-color boundary. Keep decorative separators distinct from control boundaries when assessing.

| Preset | Border light | Input light | Border dark | Input dark |
| --- | ---: | ---: | ---: | ---: |
| Default | 1.19:1 | 1.24:1 | 1.16:1 | 1.23:1 |
| Marlim | 1.19:1 | 1.25:1 | 1.15:1 | 1.22:1 |
| Aqua | 1.19:1 | 1.24:1 | 1.15:1 | 1.22:1 |
| Coral | 1.19:1 | 1.24:1 | 1.16:1 | 1.23:1 |
| Areia | 1.19:1 | 1.24:1 | 1.16:1 | 1.23:1 |
| Ostra | 1.19:1 | 1.24:1 | 1.16:1 | 1.23:1 |
| Alga | 1.19:1 | 1.24:1 | 1.17:1 | 1.24:1 |
| Espuma | 1.19:1 | 1.24:1 | 1.16:1 | 1.23:1 |
| Boia | 1.19:1 | 1.24:1 | 1.16:1 | 1.23:1 |

#### P2 — Focus indicator needs full keyboard-state verification

Selects and tabs declare a 2px ring using `ring/24` plus a `ring/64` focus border. The theme select's outline was visibly distinguishable in the browser in both light and dark modes, and its popup opened and closed by keyboard. This was a visual sample; composited contrast, clipping, and visibility across all controls, all presets, and preview tabs have not been measured.

**Relevant criteria:** WCAG 2.4.7 Focus Visible and 1.4.11 Non-text Contrast; WCAG 2.2 AA 2.4.11 Focus Not Obscured and 2.5.8 Target Size (Minimum) should also be checked for the actual page. **Suggested follow-up:** keyboard-test the preset select, customization controls, lock buttons, action buttons, and tabs in light/dark mode; verify visible focus remains unobscured and has at least 3:1 contrast where required.

#### P2 — Screen-reader and responsive behavior remain unverified

The theme selector groups its controls in a `fieldset` with a screen-reader-only legend, uses shared Field labels and Ark Select/Listbox primitives, and the page provides a screen-reader-only H1 and a named preview section. This is a promising semantic structure, but accessible name/description wiring, live theme preview announcements, state announcements, tab behavior, and mobile behavior cannot be proven from source alone.

**Browser observation:** the accessibility tree exposes the page heading, named preview section, Theme settings fieldset, and labeled preset/base/primary controls. The lock controls are exposed as named checkboxes, and Tone as named Light/Dark radio buttons. **Still unverified:** actual screen-reader output, accessible descriptions, live preview announcements, tab behavior, and mobile reflow. Test with at least one screen reader/browser pairing.

## Coverage and limitations

- The nine presets were enumerated from `THEME_PRESETS`; body-text and primary-button text pairs were calculated for light and dark modes using every referenced base and primary ramp.
- A local browser was used to inspect the page in light and dark modes, select presets by keyboard (including Marlim, Ostra, and Alga), and inspect the accessibility tree. The selected preset was restored to Default.
- Border/input contrast is calculated for every base palette. Focus was visually checked on a sample selector; hover/pressed states, disabled states, gradients, every preview template, zoom/reflow, target size, forced-colors mode, and assistive-technology interoperability were not exhaustively tested.
- This report evaluates the theme editor and its named presets only. It does not establish whole-site or EAA conformity.
