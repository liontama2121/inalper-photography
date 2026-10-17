# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Primary: photo editors, sports federations, event organizers and agencies looking to hire a sports photographer for an assignment. They arrive from Instagram, referrals or search, often on a phone, and decide in seconds whether the work is at the level they need.
Secondary: athletes and fans browsing the work.

## Product Purpose
Portfolio site for Inaldo Pérez (brand IPEREZPHOTO / @inalper), sports photographer based in Los Angeles, California (user, 2026-10-16), with a career built covering Colombian and international sport. Success = a qualified visitor sees enough real work to trust him and starts a conversation (WhatsApp first, email, Instagram).

## Positioning
Action sports photography with credentials: published by AFP, El Tiempo, Caracol TV, RCN and El Heraldo; coverage of South American Games and World Games (Cali 2013); more than 15 disciplines and 10+ years active.

## Operating Context
- Photos live in `public/photos/<category>/` and are scanned at build time; adding a photo = dropping a file. ~580 photos across 17 categories (juegos-mundiales and natacion are the largest).
- Contact details are a single source in `src/lib/contact.js`.
- Blog exists with no posts yet (empty state is real).
- Site copy is in English (inbound leads are mostly international).

## Capabilities and Constraints
- Astro 6 static, anime.js v4 for all animation, plain CSS with custom properties, no Tailwind.
- Deploy on Cloudflare Pages; 25 MiB per file hard limit.
- Routes are stable: `/`, `/portfolio`, `/about`, `/contact`, `/blog`, `/blog/[slug]`.
- Must respect `prefers-reduced-motion`.

## Brand Commitments
- Logo: `public/IPEREZLOGO.png` wordmark with shutter "O".
- Colors pinned by the user: Canon black and red.
- The `frame/` image sequence is not to be used (user decision 2026-10-16).

## Evidence on Hand
- Real photos: `public/photos/**`. 467 of 559 carry real EXIF (Canon EOS 6D, 90D, 6D Mark II, EOS-1D X Mark II, 1D Mark IV, R7 among others); ~156 filenames carry real captions.
- Portrait: `public/inaldo-portrait.jpg`.
- Press names (text only, no logo files in `public/logos/`).
- No testimonials, client quotes, pricing or rates exist; do not fabricate them.

## Product Principles
1. The photographs are the proof; every page leads with real images.
2. Hiring is one tap away on every page.
3. Credentials stated plainly, never inflated.
4. Fast on a phone over mobile data.
