---
name: IPEREZPHOTO
description: Pitchside accreditation for sports photographer Inaldo Pérez. Canon black ground, Canon red bib fields, white wide-black lettering.
colors:
  canon-red: "#cc0000"
  canon-red-hot: "#e3120b"
  on-red: "#ffffff"
  on-red-soft: "#ffe5e3"
  canon-black: "#0b0b0c"
  panel: "#141416"
  panel-raised: "#1c1c1f"
  rule-line: "#2a2a2e"
  paper-white: "#f4f4f2"
  ash: "#b4b4b8"
  smoke: "#8c8c92"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(44px, 8vw, 104px)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 125"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(64px, 12vw, 180px)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 62"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(22px, 2.6vw, 36px)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 125"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(16px, 1.4vw, 19px)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
    fontVariation: "\"wdth\" 112"
  data:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 500
    letterSpacing: "0.02em"
    fontFeature: "\"tnum\" 1"
rounded:
  none: "0px"
spacing:
  hairline: "1px"
  wall-gap: "4px"
  gutter: "clamp(16px, 4vw, 48px)"
  nav-h: "64px"
  zone-row-h: "76px"
  section: "clamp(96px, 12vw, 160px)"
  max: "1360px"
components:
  button-red:
    backgroundColor: "{colors.canon-red}"
    textColor: "{colors.on-red}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "48px"
  button-red-hover:
    backgroundColor: "{colors.canon-red-hot}"
    textColor: "{colors.on-red}"
  button-ink:
    backgroundColor: "{colors.canon-black}"
    textColor: "{colors.paper-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "48px"
  button-ink-hover:
    backgroundColor: "{colors.panel-raised}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.paper-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "48px"
  zone:
    backgroundColor: "{colors.canon-black}"
    textColor: "{colors.ash}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "76px"
  zone-hover:
    backgroundColor: "{colors.panel}"
  zone-active:
    backgroundColor: "{colors.canon-red}"
    textColor: "{colors.on-red}"
  zone-code-chip:
    backgroundColor: "{colors.canon-red}"
    textColor: "{colors.on-red}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "8px 12px 2px"
  nav-link:
    textColor: "{colors.ash}"
    typography: "{typography.label}"
    padding: "6px 0"
  nav-link-active:
    textColor: "{colors.paper-white}"
  bib:
    backgroundColor: "{colors.canon-black}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.none}"
    padding: "24px 24px 26px"
    width: "min(540px, calc(100% - 2 * var(--gutter)))"
  channel-primary:
    backgroundColor: "{colors.canon-red}"
    textColor: "{colors.on-red}"
    rounded: "{rounded.none}"
    padding: "48px 28px"
  channel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.none}"
    padding: "32px 28px"
---

# Design System: IPEREZPHOTO

## Overview

**Creative North Star: "The Pitchside Accreditation"**

The site is the photographer's press credential and bib, not a gallery template. Everything is issued, coded and stamped: each discipline carries a three-letter zone code, accreditations read as access rows, the About page is an issued credential card, and the home opens on one draggable wall of every frame with a red bib block pinned bottom-left. The ground is Canon black because photographs are judged on black; there is one dark theme on purpose and no light mode.

Red is never a thin accent. It arrives as a solid field (the bib's PHOTO band, an active zone, the primary contact channel, the full-width closing section) and always carries white lettering. Type does the rest: one variable family, Archivo, swung across its width axis so wide-black lettering (125) names people and moments while condensed-black lettering (62) carries zone codes and towering section headings. Martian Mono appears only where the content is genuinely data: counts, frame numbers, zone codes on file.

Density is high where the photos are (4px seams on the wall and gallery) and generous everywhere else (section rhythm of 96 to 160px). Motion is anime.js only, quick and decisive: an exponential ease-out, a burst-fill of frames from the focus point outward, an AF bracket that locks and blinks twice.

**Key Characteristics:**
- Canon black ground, Canon red as solid fields carrying white type
- Every corner square, enforced globally
- One variable family swinging between wide (125) and condensed (62) at weight 900
- Mono reserved for real data
- Photographs packed on 4px seams; chrome separated by 1px rules
- Credential grammar: zone codes, access rows, issued cards, bib blocks

## Colors

A two-voice palette: near-black neutrals for the ground and a single saturated Canon red that only ever appears as a filled field.

### Primary
- **Canon Red** (`canon-red`): The bib field. Primary buttons, the PHOTO band on the bib and credential card, the active zone, zone-code chips, the primary contact channel, the full-width closing section, the AF bracket, active-nav underline, link underlines, text selection.
- **Hot Red** (`canon-red-hot`): Hover state of red fields only. Never used at rest.
- **On Red** (`on-red`): Lettering on red. Always pure white.
- **On Red Soft** (`on-red-soft`): Secondary copy sitting on a red field (contact channel note, closing-section paragraph).

### Neutral
- **Canon Black** (`canon-black`): Page ground, nav, bib body, zone row, drawer, theme-color.
- **Panel** (`panel`): First step up: photo placeholders, lightbox rail, secondary contact channels, zone hover.
- **Panel Raised** (`panel-raised`): Hover for ink buttons and panel channels.
- **Rule Line** (`rule-line`): 1px dividers between zones, nav bottom, footer rules, scrollbar thumb.
- **Paper White** (`paper-white`): Primary text, headings, focus ring, 3px top rules on lists, the credential card's ground.
- **Ash** (`ash`): Secondary text: ledes, body paragraphs in bios and posts, nav links at rest.
- **Smoke** (`smoke`): Tertiary text: counts, meta, empty-state heading, footer base line.

### Named Rules
**The Bib Field Rule.** Red is a filled block carrying white type, never a hairline, glow or tint. The only sub-field uses of red are the 3px active-nav underline, the 3px red AF corner brackets and red underline decoration on text links.

**The Judged-On-Black Rule.** One dark theme. Do not add a light mode or light page sections; the single light surface is the issued credential card on About, which is an object, not a section.

## Typography

**Display Font:** Archivo variable (wdth 62 to 125, wght 400 to 900), fallback system-ui
**Body Font:** Archivo, same file
**Label/Mono Font:** Martian Mono 500, fallback ui-monospace

**Character:** One family carrying two voices by width alone: wide-black for names and moments, condensed-black for codes and towering headings. Mono is the stamp of the credential, used sparingly and only for true data.

### Hierarchy
- **Display** (900, wdth 125, `clamp(44px, 8vw, 104px)` page heads, 0.92 line-height, uppercase, -0.02em): Page H1s, bib name, PHOTO band, drawer links, closing headline.
- **Headline** (900, wdth 62, up to `clamp(64px, 12vw, 180px)`, 0.88, uppercase): Section headings (Accredited at, On file, Coverage) and every zone code.
- **Title** (900, wdth 125, `clamp(22px, 2.6vw, 36px)`, uppercase): Access-row titles, coverage event names, post titles.
- **Body** (400, 16px, 1.55): Default copy. Long reading (bio, posts) steps up to 17 to 19px at 1.7 to 1.8 line-height, capped at 62 to 68ch.
- **Lede** (400, `clamp(16px, 1.4vw, 19px)`, Ash, max 52ch): One line under page heads.
- **Label** (600 to 700, wdth 112, 14 to 15px, uppercase): Buttons, nav links, text links, contact tags.
- **Data** (Martian Mono 500, 10 to 12px, tabular numerals): Counts, frame numbers (`Frame 001 of 093`), credential field keys.

### Named Rules
**The Width-Is-Intensity Rule.** Choose width by role: wide (125) for who and what, condensed (62) for codes and section mass. Zone codes widen from 62 to 100 on hover. Do not introduce a second display family.

**The Real-Data Rule.** Martian Mono only for values that are actually counted or numbered. Never for decorative labels or eyebrows.

## Layout

A 1360px max container with a fluid gutter (`clamp(16px, 4vw, 48px)`) and a 64px fixed nav. The home first viewport is a full 100dvh wall: a CSS grid of 4:3 cells (168x126 desktop, 112x84 phone) on 4px gaps, one lead frame per discipline spanning 2x2, translated by drag with inertia. Below 768px or on coarse pointers the wall becomes a horizontal strip whose rows fit the stage height exactly. The bib overlays bottom-left on desktop and spans full width above the zone row on phones.

The zone row is one unbroken 76px line (64px on phones) that scrolls sideways and never wraps; labels drop on phones, leaving code and count. The portfolio is a 4/3/2-column masonry on the same 4px seams (3px on small phones) with a sticky zone row under the nav. Content sections breathe on `clamp(96px, 12vw, 160px)`. Lists are ruled: a 3px Paper White top rule then 1px Rule Line separators (access rows, coverage, blog empty state). Breakpoints in use: 1200, 900, 860, 768, 480, 420, 400px.

## Elevation & Depth

Flat by default; depth comes from tonal steps (black, panel, panel raised) and 1px rules. Shadows exist only on objects that float above photographs, and they are soft and ambient, never offset.

### Shadow Vocabulary
- **Bib lift** (`box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55)`; phone `0 -16px 40px rgba(0, 0, 0, 0.5)`): The home bib over the wall.
- **Credential lift** (`box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5)`): The issued card on About.
- **Float** (`box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45)`): Floating WhatsApp button.

### Named Rules
**The Only-Over-Photos Rule.** A shadow is allowed only on an object that sits over imagery or is a held object (bib, credential card, floating hire button). Panels, rows and buttons stay flat.

## Shapes

Every corner is square, enforced globally (`border-radius: 0` on every element). Form comes from rectangles and rules: 1px dividers, 3px top rules on lists, solid red rectangles as chips and bands. The one recurring non-rectangular mark is the AF point: four red 18px corner brackets (3px stroke) that frame the focused photo. Outline buttons use an inset 1px box-shadow rather than a border so sizes never shift.

## Components

### Buttons
Stamped and blunt: uppercase, wide-ish, no curve.
- **Shape:** Square corners (0px), 48px min height, 22px side padding, 18px icon with 10px gap.
- **Primary (Red):** Canon Red field, white label. The default hire action ("Hire Inaldo", always with the WhatsApp icon).
- **Hover / Focus:** Red shifts to Hot Red; press nudges 1px down at 0.98 scale. Focus is a 2px Paper White outline at 3px offset.
- **Ink:** Canon Black field, used only on top of a red section.
- **Line:** Transparent with an inset 1px Smoke edge; hover sharpens to Paper White with a 6% white wash. Secondary actions (Portfolio, Load more).

### Zone Row (signature)
One unbroken toolbar of discipline zones, "ALL" first. Each zone: condensed-black code (34px, 28px phone), uppercase label (12px, 600), mono count (11px, Smoke). Rest is Ash on black with 1px right rules; hover lifts to Panel and widens the code; active becomes a solid red field with all text white. Used on the home wall (pans and dims the wall to 14% grayscale outside the zone) and as the sticky portfolio filter.

### Zone-Code Chip
A solid red rectangle carrying a condensed-black code in white: access rows, lightbox rail (72px, 36px phone), portfolio hover tag (slides up from the frame's bottom-left corner with a mono frame number), credential card zones (inverted: black chip, mono code).

### Bib
The home's identity block: a red PHOTO band in wide-black, then a black body with the name in wide-black, one Ash credit line (40ch) and a red + line button pair. Carries `data-hire`, which hides the floating WhatsApp button while visible.

### Cards / Containers
- **Credential Card (About):** The single light object. Paper White ground, red PHOTO band, 3:4 portrait, name in wide-black, mono field keys, black zone chips. Sticky on desktop.
- **Contact Channels:** Full-width ruled rows on 4px seams. Primary (WhatsApp) is a red field with taller padding; others are Panel. Value set huge in condensed-black; corner arrow drifts up-right on hover.
- **Access Rows:** Code chip, wide-black title, Ash description on a three-column grid; single column under 768px.

### Navigation
Fixed 64px black bar with 1px bottom rule. Logo left; uppercase links (14px, 600, wdth 112) in Ash, Paper White on hover and current, current marked by a 3px red underline flush to the bar's bottom. The hire button fills the bar's full height at the right edge. Under 900px links collapse to a square burger opening a full-screen black drawer with wide-black links (current underlined by a 6px red inset) that stagger in from the left.

### Lightbox (playback screen)
Near-opaque black stage (98%) with a 320px Panel rail: square close and prev/next buttons (64px, red on hover), zone-code chip, discipline name, mono frame count, the file's caption (uppercase, only when the filename carries one), a 2×2 exposure grid (Shutter, Aperture, ISO, Focal) on Ink cells with 1px Seam gaps, then body, lens and date in mono. Exposure comes only from real EXIF (`scripts/thumbs.mjs`); missing fields show `--`, a photo with none hides the grid. Double-click / double-tap magnifies ×2 at the pointer with a red `×2` tag. Under 900px the rail drops to a bottom bar with the exposure grid as one 4-column row.

### Viewfinder Readout
Top-left of the home wall: a black strip of mono cells (zone-code chip in red, shutter, aperture, ISO, focal) showing the real EXIF of the frame under the AF point. During the boot burst the chip counts `r0` to `r<total>` like a body's frame readout.

### Shutter
Seven horizontal matte-black blades (last one edged 3px red) that drop from the top to close and keep travelling down to open: a vertical-travel focal-plane shutter. Runs between internal pages (close 240ms, open 320ms on arrival) and in the viewer (open 150/230ms, next/prev 110/170ms). `window.shutter.fire(cb, { close, open })` is the shared API. Skipped under reduced motion.

### Floating Hire
56px square red button (48px phone) bottom-right with the WhatsApp icon, shown only when no on-page hire CTA is in view.

### Motion
anime.js v4 for every entrance; CSS transitions only for hover/state colour changes. House ease is `cubic-bezier(0.16, 1, 0.3, 1)` in CSS and `outExpo` in anime.js. Scroll reveals rise 32px over 900ms with a 70ms stagger. Home boot: burst-fill rings at 85ms steps, 1.12 to 1 scale, then AF lock (bracket scale 1.5 to 1, two blinks). The AF point hunts and locks on every move: brackets overshoot (1.14, 0.97, 1) in Paper White and snap to red at 240ms. Tapping a frame half-presses first (AF lock, ~340ms), then the shutter fires into the viewer. Every script checks `prefers-reduced-motion` and skips; reveal targets are visible unless JS opts in.

## Do's and Don'ts

### Do:
- **Do** put red down as a solid field with white type: buttons, bands, active zones, chips, the closing section.
- **Do** keep every corner at 0px and separate chrome with 1px Rule Line dividers.
- **Do** give each discipline its three-letter zone code and set it condensed-black (wdth 62, 900).
- **Do** set names and moments wide-black (wdth 125, 900, uppercase, 0.92 line-height).
- **Do** pack photographs on 4px seams over Panel placeholders.
- **Do** keep a red "Hire Inaldo" WhatsApp action reachable on every page.
- **Do** animate entrances with anime.js and an exponential ease-out, and honour reduced motion.

### Don't:
- **Don't** use red as a thin accent, outline, glow or tint behind text.
- **Don't** round corners or add pill shapes.
- **Don't** add a light theme or light page sections.
- **Don't** set Martian Mono on anything that is not a real count, number or code.
- **Don't** add a second display typeface; vary Archivo's width instead.
- **Don't** add shadows to flat panels, rows or buttons, or use hard offset shadows.
- **Don't** wrap the zone row onto a second line.
