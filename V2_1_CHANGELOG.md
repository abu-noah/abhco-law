# ABH&Co. — V2.1 Changelog
## What Changed from V2 → V2.1

This is a **design patch**. The V2 structure, content, and architecture are preserved.
V2.1 addresses the six patch requests: logo, lighter tone, menu button, floating button,
motion/dazzle, and team imagery.

---

## 1. LOGO SYSTEM — FULLY REDESIGNED

The weak "arch-gate" mark from V2 is replaced by a new **acronym-based crest system**
centred on **ABH** and **ABH&Co.**

**New concept — "The ABH Crest":**
- An arch-topped cartouche (refined legal seal / UAE architectural arch)
- Gold double-line frame with a keystone diamond at the apex and base
- **ABH** set in Cormorant Garamond 600 serif caps
- **& CO.** beneath a gold threshold rule
- Reads as a serious luxury legal brand; works in Arabic and English contexts

**New / regenerated files in `assets/`:**
| File | Purpose |
|---|---|
| `logo-mark.svg` | Primary crest monogram (transparent, inherits text colour) |
| `logo-wordmark.svg` | Horizontal "ABH &Co." wordmark with flanking gold rules |
| `logo-bilingual.svg` | Flagship vertical lockup (crest + Arabic + English) |
| `logo-gold-on-cream.svg` | Crest lockup — ink/gold on cream |
| `logo-cream-on-dark.svg` | Crest lockup — cream/gold on charcoal |
| `logo-gold-on-black.svg` | Updated dark flagship lockup (legacy filename) |
| `logo-black-on-cream.svg` | Updated light flagship lockup (legacy filename) |
| `favicon.svg` | Simplified crest, optimised for 16–32px |
| `social-avatar.svg` | Crest on cream, 400×400 |
| `whatsapp-avatar.svg` | Crest on charcoal + arabesque, 400×400 |
| `instagram-profile-avatar.svg`, `linkedin-profile-logo.svg`, `tiktok-profile-avatar.svg` | Crest avatars |
| `og-preview.svg` | Updated 1200×630 share card with new crest |

The inline SVGs in the **navbar, hero, and footer** were swapped to the new crest.
The hero crest now animates with a draw-on stroke effect (see §5).
Old V2 marks are preserved for reference in `assets/_v2_old/` (not required for deploy).

> Platform **banners** (`linkedin-banner.svg`, `facebook-cover.svg`, `x-profile-banner.svg`,
> `youtube-banner.svg`) still carry the older treatment and should be re-exported from the new
> crest before any social launch. Not used on the website itself.

---

## 2. LIGHTER / BRIGHTER VISUAL TONE

V2's dark and charcoal-heavy sections were the main complaint. V2.1 moves decisively to
ivory / cream / parchment.

| Section | V2 | V2.1 |
|---|---|---|
| UAE Coverage | Charcoal + arabesque (dark) | **Parchment (light)** — white emirate chips, gold "Ajman" primary chip |
| Consultation Intake | Charcoal section + dark wizard card | **Parchment section + light wizard card** (white/cream, ink text, gold accents) |
| Contact | Solid black | **Parchment** — white cards, gold-deep icons, ink text |
| Social strip | Black | Refined **charcoal** (paired with footer) |
| Footer | Pure black | Refined **charcoal + arabesque** (single grounding anchor) |
| Hero base | Faded to charcoal | Faded to **warm parchment** vignette |

New CSS additions: `--parchment`, `--parchment-deep`, `--arabesque-light-url` tokens and a
`.section--parchment` style (warm gradient + faint gold lattice + hairline gold borders).
The site now has **one** intentional dark area — the footer — instead of five.

---

## 3. PREMIUM MENU BUTTON

The small 3-bar hamburger is replaced by a **pill-style menu trigger**:
- Larger touch target, gold border, gold-tinted fill
- Visible label ("القائمة" / "Menu") beside a 2-bar icon
- Fills solid gold and morphs the bars into an X when open

---

## 4. FLOATING BACK-TO-TOP BUTTON

New circular floating button (bottom corner):
- **Scroll-progress ring** — a gold arc fills as the user scrolls the page
- Elegant spring entrance/exit (appears after ~60% of one viewport)
- Sits clear of the sticky mobile CTA bar (raised to `bottom: 84px` on mobile)
- Smooth scroll to top on click; respects `prefers-reduced-motion`

---

## 5. MOTION / DAZZLE

- **Hero crest draw-on**: the frame strokes draw themselves, then keystones, ABH, rule, and "& CO." fade in sequence
- **Gold divider shimmer**: a light sweep travels across the hero divider
- **Section rule shimmer**: each section's gold rule glints once on reveal
- **CTA glow pulse**: the primary "Request Consultation" button has a soft gold halo pulse
- **Service card corner flourish**: a gold corner draws in on hover
- **Primary emirate chip float**: gentle vertical float on the "Ajman" chip
- **Refined card reveals**: subtle scale + fade on scroll
- **Crest hover** in navbar; **portrait zoom** on team cards
- All dazzle is disabled under `prefers-reduced-motion`

---

## 6. TEAM IMAGERY

Initials avatars are replaced by **editorial duotone portrait illustrations** showing actual people:
- UAE-appropriate styling (kandura + ghutra + agal; shayla; formal suit)
- Polished flat-illustration style on warm parchment with a faint gold arch
- Files: `assets/team/member-1.svg` … `member-4.svg`
- Portraits gently zoom on card hover

> These remain **mock** people for preview and must be replaced with the firm's real
> staff photos before launch. No "placeholder" wording appears anywhere on the site.

---

## PRESERVED FROM V2 (unchanged)
Arabic-first RTL structure · English toggle · sticky mobile CTA · 5-step intake wizard ·
8 services · UAE coverage · testimonials · FAQ accordion · social strip · footer draft notice ·
`noindex, nofollow` · all contact details · mock-site status.

---

*ABH&Co. V2.1 — Design patch — Unofficial draft for review.*
