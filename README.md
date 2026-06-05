# ABH&Co. — Law Firm Website
### عبدالله بن حارب ومشاركوه | محامون ومستشارون قانونيون في عجمان

> **⚠ DRAFT STATUS:** This is an unofficial private preview build.  
> The `noindex, nofollow` meta tags are active on all pages.  
> Do **not** publish or share the URL publicly until Abdullah Yousuf Binharib Almheiri gives written approval.

---

## File Tree

```
abh-co-website/
├── index.html          ← One-page bilingual site (Arabic RTL / English LTR)
├── styles.css          ← Full design system: palette, typography, layout, responsive
├── script.js           ← Language toggle · Navbar · Mobile menu · Scroll reveal
├── README.md           ← This file
└── assets/             ← Place all images and media here (currently empty)
    ├── portrait.jpg        ← Replace placeholder once Abdullah approves headshot crop
    ├── office-sign.jpg     ← Office signage photo (optimise before adding)
    └── og-image.jpg        ← 1200×630px Open Graph cover image (create before launch)
```

---

## Local Preview

No build tools required. Open directly in any modern browser:

```bash
# Option A — double-click
open index.html

# Option B — local dev server (avoids font CORS warnings)
npx serve .
# or
python3 -m http.server 8000
```

---

## Deploying to GitHub Pages (Free github.io URL)

### Step 1 — Create the Repository

1. Log in at [github.com](https://github.com).
2. Click **New repository**.
3. Name it exactly: `abhco-law` (or any slug — this becomes the URL path).
4. Set visibility: **Public** (required for free GitHub Pages).
5. Do **not** initialise with a README (you already have one).
6. Click **Create repository**.

### Step 2 — Upload Files

**Via GitHub web interface (simplest):**
1. Open the new repository.
2. Click **Add file → Upload files**.
3. Drag and drop all files from this folder (`index.html`, `styles.css`, `script.js`, `README.md`, and the `assets/` folder).
4. Commit message: `Initial draft — private preview`.
5. Click **Commit changes**.

**Via Git CLI:**
```bash
cd abh-co-website
git init
git add .
git commit -m "Initial draft — private preview"
git remote add origin https://github.com/YOUR_USERNAME/abhco-law.git
git branch -M main
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. In the repository, go to **Settings → Pages** (left sidebar).
2. Under **Source**, select **Deploy from a branch**.
3. Branch: `main` | Folder: `/ (root)`.
4. Click **Save**.
5. Wait ~60 seconds. Your site will be live at:

```
https://YOUR_USERNAME.github.io/abhco-law/
```

### Step 4 — Update og:url

Once you have the live URL, open `index.html` and update this line:

```html
<!-- Find this in <head> and replace TODO with the real URL -->
<meta property="og:url" content="https://YOUR_USERNAME.github.io/abhco-law/">
```

### Optional — Custom Domain

If Abdullah wants `abh-law.ae` or similar:
1. Purchase the domain from any registrar (e.g. GoDaddy, Namecheap).
2. In GitHub **Settings → Pages → Custom domain**, enter the domain.
3. At your DNS provider, add a CNAME record pointing to `YOUR_USERNAME.github.io`.
4. Enable **Enforce HTTPS** in GitHub Pages settings.

---

## Pre-Launch Verification Checklist

Abdullah must confirm each item before the `noindex` meta tags are removed and the site goes live.

### Identity & Legal Copy

- [ ] **Firm name** — Confirm Arabic: عبدالله بن حارب ومشاركوه and English: ABDALLAH BIN HAREB AND COMPANY
- [ ] **Lawyer name** — Confirm full Arabic: عبدالله يوسف عبدالله بن حارب المهيري
- [ ] **MOJ Registration No.** — Confirm: 2638
- [ ] **Court level** — Confirm: First Instance and Appeal
- [ ] **Legal form** — Confirm: L.L.C - S.P.S / ذ.م.م - ش.ش.و

### Contact Details

- [ ] **Phone** — Confirm: +971 55 600 0708
- [ ] **WhatsApp** — Confirm: +971 56 960 5060
- [ ] **Email** — Verify exact spelling of `Almheiri.Counsel@outlook.com` against the physical office sign
- [ ] **Office address** — Confirm: Office No. 15, Ajman, UAE
- [ ] **Google Maps link** — Confirm pin is correct: `https://maps.app.goo.gl/FLP5Xd1eoKTyL4YUA`

### Notary Services

- [ ] **Notary registration** — Verify Abdullah's notary listing via [MOJ official portal](https://www.moj.gov.ae) or [Dubai Courts](https://www.dc.gov.ae) before upgrading wording beyond "خدمات الكاتب العدل متوفرة"

### Structured Data (JSON-LD)

The structured data block is commented out in `index.html` (lines 31–53). Before enabling:
- [ ] Insert final website URL in `"url"` field
- [ ] Confirm and add GPS coordinates in `"geo"` field
- [ ] Add confirmed office hours in `"openingHours"` field
- [ ] Uncomment the entire `<script type="application/ld+json">` block

### Images & Media

- [ ] **Portrait** — Supply a cropped headshot from the MOJ advocate card (crop out all case data, QR codes, registration numbers). Replace the `.portrait-placeholder` div in `index.html` with:
  ```html
  <img src="assets/portrait.jpg"
       alt="المحامي عبدالله يوسف عبدالله بن حارب المهيري — Advocate Abdullah Yousuf Binharib Almheiri"
       class="portrait-img"
       width="340" height="400" loading="eager">
  ```
- [ ] **Office signage photo** — Add to `assets/` and insert in About section if desired
- [ ] **OG image** — Create a 1200×630px image and add to `assets/og-image.jpg`, then update `<meta property="og:image">` in `index.html`

### Go-Live Actions (after all boxes checked)

- [ ] Remove `<meta name="robots" content="noindex, nofollow">` (line 8 of `index.html`)
- [ ] Remove `<meta name="googlebot" content="noindex, nofollow">` (line 9 of `index.html`)
- [ ] Remove footer draft badge: delete the `<div class="draft-badge">…</div>` block
- [ ] Enable structured data: uncomment JSON-LD block
- [ ] Set `og:url` to the real URL
- [ ] Submit URL to [Google Search Console](https://search.google.com/search-console) for indexing

---

## Design Reference

| Token | Value |
|---|---|
| Primary dark | `#1a1a1a` |
| Gold accent | `#C9A84C` |
| Cream background | `#F8F5EF` |
| Arabic display font | Amiri |
| Arabic body font | Tajawal |
| English display font | Cormorant Garamond |
| English body font | EB Garamond |

Default language: Arabic (RTL). Language toggle button in navbar switches to English (LTR).

---

## Notes on Arabic Copy

All Arabic text in `index.html` uses formal UAE legal register. Do not use automated translation to modify it — have a UAE legal professional or native Arabic speaker review any changes before publishing.

---

*Build: June 2026 — Unofficial draft for private review only*  
*"مسودة غير رسمية للمراجعة — غير معتمدة للنشر"*
