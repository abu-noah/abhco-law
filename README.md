# ABH&Co. Website V2
## Deployment & Handoff Guide for Execution Agent

---

### STATUS: DRAFT — NOT APPROVED FOR PUBLIC USE

All pages contain `noindex, nofollow` meta tags.  
**Do not remove these tags until Abdullah's written approval is received.**

Draft notice visible on all pages:  
`مسودة غير رسمية للمراجعة` / Unofficial draft for review

---

## WHAT IS THIS

This is **V2** of the ABH&Co. law firm website — a complete rebuild of:
- **Live V1:** https://abu-noah.github.io/abhco-law/
- **V1 Repo:** https://github.com/abu-noah/abhco-law

V2 replaces V1 via GitHub Pages on the same repository.

**Firm:** ABDALLAH BIN HAREB AND COMPANY (عبدالله بن حارب ومشاركوه)  
**Short brand:** ABH&Co.  
**Lawyer:** Abdullah Yousuf Abdullah Binharib Almheiri  
**MOJ Reg. No.:** 2638  
**Office:** No. 15, Ajman, UAE

---

## PACKAGE CONTENTS

```
ABHCo_V2_Claude_Website_Package/
├── index.html              ← Main site (Arabic-first, bilingual)
├── styles.css              ← Full V2 design system (~2,000 lines)
├── script.js               ← All interactivity (~400 lines)
├── README.md               ← This file
├── V2_CHANGELOG.md         ← V1 → V2 differences
├── V2_EXECUTION_NOTES.md   ← Items pending approval / unverified
└── assets/
    ├── favicon.svg
    ├── logo-mark.svg
    ├── logo-bilingual.svg
    ├── logo-gold-on-black.svg
    ├── logo-black-on-cream.svg
    ├── logo-ar.svg
    ├── logo-en.svg
    ├── social-avatar.svg
    ├── whatsapp-avatar.svg
    ├── linkedin-profile-logo.svg
    ├── linkedin-banner.svg
    ├── instagram-profile-avatar.svg
    ├── facebook-cover.svg
    ├── x-profile-banner.svg
    ├── tiktok-profile-avatar.svg
    ├── youtube-banner.svg
    └── og-preview.svg
```

---

## DEPLOYMENT — GITHUB PAGES (WEB UI)

**To replace V1 with V2:**

1. Go to: https://github.com/abu-noah/abhco-law
2. Upload all files in this package to the repository root
3. Confirm `index.html` is in the root (not a subfolder)
4. Upload the `assets/` folder with all SVGs
5. GitHub Pages will serve from the existing source branch automatically
6. Preview at: https://abu-noah.github.io/abhco-law/

**File upload steps (GitHub web UI):**
1. Click "Add file" → "Upload files"
2. Drag in: `index.html`, `styles.css`, `script.js`
3. Commit with message: `V2 website deploy — draft (noindex active)`
4. Repeat for `assets/` folder (or upload as folder drag)

---

## DEPLOYMENT — GITHUB CLI (ADVANCED)

```bash
# Clone the existing V1 repo
git clone https://github.com/abu-noah/abhco-law.git
cd abhco-law

# Remove old V1 files
rm -f *.html *.css *.js

# Copy V2 files in
cp /path/to/ABHCo_V2_Claude_Website_Package/* .
cp -r /path/to/ABHCo_V2_Claude_Website_Package/assets ./assets

# Commit and push
git add -A
git commit -m "Deploy: ABH&Co. V2 website (draft, noindex active)"
git push origin main
```

---

## BEFORE PUBLIC LAUNCH — REQUIRED CHECKLIST

These items MUST be completed and approved before removing noindex tags:

### FIRM APPROVAL REQUIRED
- [ ] Abdullah's written approval of the entire V2 site
- [ ] Confirm email address from physical office sign (currently: `Almheiri.Counsel@outlook.com`)
- [ ] Confirm MOJ Reg. No. 2638 is correct for public display
- [ ] Replace mock team members 2–4 with real staff (or remove section)
- [ ] Replace mock testimonials with real client-approved testimonials
- [ ] Confirm notary service availability and wording
- [ ] Confirm LLC designation: (ذ.م.م - ش.ش.و) / (L.L.C - S.P.S) for public display
- [ ] Confirm brand logo (arch gate concept) is approved

### TECHNICAL ITEMS
- [ ] Remove `noindex, nofollow` meta tags (lines 11–12 of `index.html`)
- [ ] Remove draft notice bar `<div id="draft-bar">` (or set `display:none`)
- [ ] Remove draft text from footer
- [ ] Add real portrait headshot for Abdullah Yousuf Almheiri
- [ ] Uncomment LegalService JSON-LD schema block (lines 31–53 of `index.html`)
- [ ] Fill JSON-LD: `og:url`, GPS coordinates, confirmed office hours
- [ ] Update `<meta property="og:image" content="...">` with real domain URL
- [ ] Update `og:url` meta with real GitHub Pages URL
- [ ] Confirm social media handles and update `href="#"` social links

### OPTIONAL ENHANCEMENTS
- [ ] Add real Google Maps embed for office location
- [ ] Add real PNG favicon at 32×32 and 16×16 (convert from `favicon.svg`)
- [ ] Export social SVGs to PNG for platform uploads (see `SOCIAL_ASSET_GUIDE.md`)
- [ ] Configure custom domain if desired (add CNAME file to repo)

---

## TECHNICAL NOTES

- **Stack:** Static HTML5 + CSS3 + vanilla JavaScript only
- **Fonts:** Google Fonts — Noto Naskh Arabic, Cormorant Garamond, Montserrat
- **Icons:** Inline SVG (no external icon libraries)
- **Language:** Arabic-first (RTL default), English toggle (LTR)
- **No backend, no database, no tracking, no paid services**
- **All contact actions:** Direct links (tel:, mailto:, wa.me/, Google Maps)
- **Intake form:** WhatsApp deep link + mailto only (no server)
- **GitHub Pages compatible:** Single `index.html` at root, all assets relative paths

---

## CONTACT DETAILS IN SITE (VERIFY BEFORE LAUNCH)

| Item | Value | Status |
|---|---|---|
| Phone | +971 55 600 0708 | ✓ Confirmed |
| WhatsApp | +971 56 960 5060 | ✓ Confirmed |
| Email | Almheiri.Counsel@outlook.com | ⚠ Verify from office sign |
| Google Maps | https://maps.app.goo.gl/FLP5Xd1eoKTyL4YUA | ✓ Confirmed |
| MOJ Reg. | 2638 | ⚠ Verify before publishing |
| Office | Office No. 15, Ajman | ✓ Confirmed |

---

*Generated by Claude AI — ABH&Co. V2 Website Build*  
*Draft status: Unofficial. Not approved for public use.*
