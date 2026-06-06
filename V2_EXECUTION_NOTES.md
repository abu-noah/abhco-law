# ABH&Co. V2 — Execution Notes
## For: ChatGPT Deployment Agent

---

## MISSION

Replace the live V1 site at:  
https://abu-noah.github.io/abhco-law/  
with V2 from this package.

**Target repo:** https://github.com/abu-noah/abhco-law  
**Deployment method:** GitHub Pages (same repo, same branch)  
**Action:** Upload all V2 files, replacing all V1 files

---

## EXACT DEPLOYMENT STEPS FOR AGENT

### Step 1 — Clone or access the repo
```
https://github.com/abu-noah/abhco-law
```

### Step 2 — Remove all V1 files from repo root
Delete or replace:
- Any existing `index.html`
- Any existing `.css` files
- Any existing `.js` files
- Any existing `assets/` or `images/` folders from V1

### Step 3 — Upload all V2 files to repo root
```
index.html       → repo root /
styles.css       → repo root /
script.js        → repo root /
README.md        → repo root /
V2_CHANGELOG.md  → repo root /
V2_EXECUTION_NOTES.md → repo root /
assets/          → repo root /assets/  (entire folder)
```

### Step 4 — Commit with this exact message
```
chore: deploy ABH&Co. V2 website (draft, noindex active)
```

### Step 5 — Verify deployment
- Wait ~60 seconds for GitHub Pages to rebuild
- Visit: https://abu-noah.github.io/abhco-law/
- Confirm V2 hero is visible (ivory background, arch gate mark, Arabic heading)
- Confirm draft notice bar appears at top
- Confirm language toggle button is visible

---

## VERIFICATION CHECKLIST FOR AGENT

After deploying, verify the following:

- [ ] `index.html` loads without 404
- [ ] Draft notice bar visible at top of page
- [ ] Arch gate logo mark renders correctly
- [ ] Arabic text renders (Noto Naskh Arabic font loads)
- [ ] "EN" toggle visible in navbar
- [ ] All 8 service cards display
- [ ] Intake wizard progresses through steps 1–5
- [ ] WhatsApp button generates correct deep link
- [ ] Mobile sticky CTA appears after scrolling
- [ ] FAQ accordion opens/closes

---

## UNVERIFIED DETAILS — NEED FIRM CONFIRMATION

### CRITICAL (Block public launch)
| Item | Current Value | Required Action |
|---|---|---|
| Email address | `Almheiri.Counsel@outlook.com` | Verify exact spelling from physical office sign before any contact forms go live |
| MOJ Reg. No. | `2638` | Confirm with firm before making public |
| Notary availability | Mentioned on-site | Firm to verify current registration status via MOJ portal |
| LLC designation | `L.L.C - S.P.S / ذ.م.م - ش.ش.و` | Confirm correct legal form designation |

### NON-BLOCKING (Can launch without, enhance later)
| Item | Status | Action |
|---|---|---|
| GPS coordinates | Not in JSON-LD | Add to structured data after confirming |
| Real office hours | Not in JSON-LD | Add after firm provides |
| og:url | Set to assets/og-preview.svg | Replace with https://abu-noah.github.io/abhco-law/ |
| Portrait headshot | SVG initials placeholder | Replace when photo provided with approval |
| Custom domain | Not configured | Optional — add CNAME if desired |

---

## SOCIAL MEDIA LINKS — AWAITING FIRM APPROVAL

All social icons on the website currently point to `href="#"` (unlinked).  
**Only the WhatsApp link is active** (+971 56 960 5060).

Before activating any social links, the firm must:
1. Register and confirm each account is official
2. Provide verified URLs to update in `index.html`

| Platform | Suggested Handle | Official URL | Status |
|---|---|---|---|
| LinkedIn | ABH&Co. Law | — | Needs firm approval |
| Instagram | @abhco.law | — | Needs firm approval |
| X (Twitter) | @abhco_law | — | Needs firm approval |
| Facebook | ABHCoLaw | — | Needs firm approval |
| TikTok | @abhco.law | — | Needs firm approval |
| YouTube | @ABHCoLegal | — | Needs firm approval |
| WhatsApp | +971 56 960 5060 | https://wa.me/971569605060 | ✓ Active |

**In `index.html`, social links are marked `href="#"` — replace each `#` with the confirmed URL.**

---

## EXTERNAL DEPENDENCIES

| Dependency | Type | URL | Fallback |
|---|---|---|---|
| Noto Naskh Arabic | Font | fonts.googleapis.com | 'Arabic Typesetting', serif |
| Cormorant Garamond | Font | fonts.googleapis.com | Garamond, 'Times New Roman' |
| Montserrat | Font | fonts.googleapis.com | 'Helvetica Neue', Arial |
| Google Fonts CDN | CDN | fonts.gstatic.com | CSS-declared fallbacks above |

**All icons:** Inline SVG — no external icon library dependency.  
**No CDN libraries, no tracking scripts, no analytics.**

---

## DRAFT PROTECTIONS — DO NOT REMOVE UNTIL APPROVAL

These are active in `index.html`:

```html
<!-- Lines 11-12: Remove only after firm approval -->
<meta name="robots" content="noindex, nofollow">
<meta name="googlebot" content="noindex, nofollow">
```

```html
<!-- Line ~45: Remove draft bar div after approval -->
<div id="draft-bar" role="alert">
  مسودة غير رسمية للمراجعة...
</div>
```

```html
<!-- Footer draft notices: Remove after approval -->
<span class="footer-draft ...">مسودة غير رسمية للمراجعة</span>
```

```html
<!-- Lines 31-53: Uncomment JSON-LD only after approval + filling URL/coords/hours -->
<!-- <script type="application/ld+json"> ... </script> -->
```

---

## MOCK CONTENT — MUST BE REPLACED BEFORE PUBLIC LAUNCH

| Element | Location | What to Replace |
|---|---|---|
| Team member 2 | `#team` section | Sarah Mohammed Al Suwaidi → real staff or remove card |
| Team member 3 | `#team` section | Omar Khalid Al Rashidi → real staff or remove card |
| Team member 4 | `#team` section | Fatima Nasser Al Hamadi → real staff or remove card |
| Testimonial 1 | `#testimonials` section | م. محمد العبيدلي → real approved testimonial |
| Testimonial 2 | `#testimonials` section | خلود ناصر → real approved testimonial |
| Testimonial 3 | `#testimonials` section | James Harrison → real approved testimonial |
| Portrait images | All team cards | SVG initials → real headshots (provided by firm) |

---

## ASSET MANIFEST

| File | Type | Used In |
|---|---|---|
| `assets/favicon.svg` | SVG | `<link rel="icon">` |
| `assets/logo-mark.svg` | SVG | Navbar (inline), Hero (inline) |
| `assets/logo-bilingual.svg` | SVG | Footer (inline) |
| `assets/logo-gold-on-black.svg` | SVG | Available for dark contexts |
| `assets/logo-black-on-cream.svg` | SVG | Available for light/print contexts |
| `assets/logo-ar.svg` | SVG | Arabic-only wordmark (available) |
| `assets/logo-en.svg` | SVG | English-only wordmark (available) |
| `assets/social-avatar.svg` | SVG | Social media profile (export as PNG) |
| `assets/whatsapp-avatar.svg` | SVG | WhatsApp Business profile photo |
| `assets/linkedin-profile-logo.svg` | SVG | LinkedIn company page |
| `assets/linkedin-banner.svg` | SVG | LinkedIn banner (1128×191) |
| `assets/instagram-profile-avatar.svg` | SVG | Instagram profile |
| `assets/facebook-cover.svg` | SVG | Facebook cover (820×312) |
| `assets/x-profile-banner.svg` | SVG | X/Twitter banner (1500×500) |
| `assets/tiktok-profile-avatar.svg` | SVG | TikTok profile |
| `assets/youtube-banner.svg` | SVG | YouTube channel art (2560×1440) |
| `assets/og-preview.svg` | SVG | OpenGraph preview (1200×630) |

**Note:** Platforms that require PNG for uploads (LinkedIn, YouTube, Facebook, Instagram) need SVGs exported at the sizes listed in `SOCIAL_ASSET_GUIDE.md`.

---

## FINAL APPROVAL CHECKLIST (17 items)

Abdullah must sign off on each item before launch:

1. [ ] Logo mark and wordmark approved
2. [ ] Arabic firm name spelling confirmed
3. [ ] English firm name confirmed
4. [ ] Color palette (Emirates gold #C9A84C) approved
5. [ ] Email address confirmed from physical sign
6. [ ] MOJ Reg. No. 2638 approved for public display
7. [ ] LLC designation confirmed
8. [ ] Notary service availability confirmed
9. [ ] Team section: real members or removal confirmed
10. [ ] Testimonials: real testimonials provided or section removed
11. [ ] Portrait headshot provided or SVG placeholder approved
12. [ ] Social media handles confirmed and URLs provided
13. [ ] JSON-LD schema fields filled: URL, coordinates, hours
14. [ ] og:url updated to real domain
15. [ ] noindex/nofollow tags approved for removal
16. [ ] Draft notice bar approved for removal
17. [ ] Full mobile review completed on device

---

*ABH&Co. V2 Execution Notes — Generated by Claude AI — Unofficial Draft*
