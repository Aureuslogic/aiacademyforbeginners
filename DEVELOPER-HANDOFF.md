# AI Academy for Beginners — Web Developer Handoff
## aiacademyforbeginners.com — Full Site Redesign 2026

---

## OVERVIEW

Complete redesign of 5 pages. All files are self-contained HTML — no external frameworks, no build step required. Each file includes all CSS and JavaScript inline. The only external dependency is Google Fonts (Plus Jakarta Sans), loaded via a standard `<link>` tag in each page head.

**Design system**: Dark glassmorphism — deep navy background (#050810), frosted glass surfaces, purple/cyan/green accent palette, Plus Jakarta Sans font, bento grid layouts, smooth fade-in animations via IntersectionObserver.

---

## FILES & TARGET URLs

| File | Replaces | Live URL |
|------|----------|----------|
| `aiacademy-redesign-2026.html` | Homepage | https://www.aiacademyforbeginners.com/ |
| `plans.html` | Plans/Pricing page | https://www.aiacademyforbeginners.com/plans/ |
| `faq.html` | FAQs page | https://www.aiacademyforbeginners.com/faqs/ |
| `contact-us.html` | Contact Us page | https://www.aiacademyforbeginners.com/contact-us/ |
| `about-sam.html` | About Sam page | https://www.aiacademyforbeginners.com/7-inspiring-secrets-from-sam-onigbanjo-gtm-architects/ |

---

## PAGE-BY-PAGE NOTES

### 1. Homepage — aiacademy-redesign-2026.html (129KB)
- Full redesign with dark glassmorphism, bento grid sections, animated stat counters
- 7 module curriculum with correct module titles
- Two pricing cards visible on homepage (£397 Core, links to plans page)
- 30+ question FAQ accordion (9 categories) embedded in page
- AI Tools deep-dive section (ChatGPT / Claude / Gemini tabs)
- Community section, testimonials, video placeholder slots, niches grid
- JSON-LD schema: Course, FAQPage, Speakable, HowTo
- AEO/SEO optimised meta tags and OG tags
- Email capture form (wire up to your email provider)
- Mobile menu fully functional

### 2. Plans Page — plans.html (47KB)
- THREE pricing tiers:
  - **Core** — £397/month → https://www.howtogeneratenewbusiness.com/revenue-1st-ai-community
  - **Growth** — £550/month → https://www.aiacademyforbeginners.com/order-form/
  - **Elite** — £950/month → https://www.aiacademyforbeginners.com/contact-us/ (application required)
- Full feature comparison table (3 columns, colour-coded)
- "What You'll Build" 6-card grid (marketing, web dev, productivity, web apps, automation, Voice AI)
- 30-day guarantee block
- 3 plan-badged testimonials
- 7-question FAQ accordion
- JSON-LD FAQPage schema

### 3. FAQ Page — faq.html (58KB)
- 44 questions across 9 colour-coded categories
- Live keyword search bar (filters questions as user types)
- Category filter pill buttons (show/hide sections)
- Sticky sidebar with scroll-tracking active state (desktop)
- 9 categories: AI Fundamentals, ChatGPT, Claude AI, Google Gemini, AI Agents & Automation, Voice AI & Avatars, AI Governance & Ethics, AI Marketing & Business, About the Academy
- Each category has its own distinct colour (border, icon, badge, answer stripe)
- JSON-LD FAQPage schema (structured data for Google AEO)

### 4. Contact Us — contact-us.html (21KB)
- Two-column layout: contact info cards + enquiry form
- 4 contact cards: Email, Community, Plans, Partnerships
- Contact form: Name, Email, Topic dropdown, Message (wire up to your form handler)
- Social strip: Facebook, YouTube, LinkedIn
- Quick-enrol card
- 4-question FAQ strip at bottom

### 5. About Sam — about-sam.html (30KB)
- Replaces the existing unbranded about page
- Hero with stats (50,000+ learners, 7 modules, 30+ countries, 5★)
- "7 Inspiring Lessons from Sam" — numbered editorial section with pull-quotes
- Credibility bar (4 stats)
- Career timeline (Early Career → AI Discovery → Academy Launch → Community Growth → 2026)
- Mission statement block
- Bottom CTA to enrol

---

## ENROLMENT LINK ROUTING

| Context | URL |
|---------|-----|
| £397 Core plan / general "Enrol now" / urgency bars / nav CTAs | https://www.howtogeneratenewbusiness.com/revenue-1st-ai-community |
| £550 Growth plan | https://www.aiacademyforbeginners.com/order-form/ |
| £950 Elite plan | https://www.aiacademyforbeginners.com/contact-us/ |

---

## CSS DESIGN TOKENS (shared across all pages)

```css
--bg: #050810
--surface: rgba(255,255,255,0.04)
--surface2: rgba(255,255,255,0.07)
--border: rgba(255,255,255,0.08)
--accent: #7c3aed        /* purple */
--accent-light: #a78bfa  /* light purple */
--accent2: #06b6d4       /* cyan */
--accent3: #10b981       /* green */
--gold: #f59e0b          /* gold */
--text: #f1f5f9
--text-secondary: #94a3b8
--text-muted: #64748b
--font: 'Plus Jakarta Sans', sans-serif
```

---

## THINGS TO WIRE UP

- [ ] Contact form (contact-us.html) — connect to email handler / Formspree / your CRM
- [ ] Email capture form (homepage) — connect to your email provider (Mailchimp, ConvertKit, etc.)
- [ ] Video slots on homepage — replace placeholder blocks with real embed iframes
- [ ] Order form URL (£550 Growth) — confirm https://www.aiacademyforbeginners.com/order-form/ is live
- [ ] Elite application page — £950 currently routes to /contact-us/ — create dedicated application form if needed
- [ ] Social media links in footer — confirm Facebook group, YouTube, LinkedIn URLs are correct
- [ ] Google Analytics / tracking pixels — add to `<head>` of each page

---

## NO EXTERNAL DEPENDENCIES

- No React, Vue, or any JS framework
- No jQuery
- No external CSS libraries
- Single external font: https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans
- All icons are Unicode emoji (no icon font needed)
- All animations use native CSS transitions + IntersectionObserver API

---

*Files delivered by AI Academy redesign project — June 2026*
