# Inalper Photography — CLAUDE.md

## Skills activas
- `C:\Users\Admin\.claude\skills\public\frontend-design\SKILL.md` — caveman mode

## Stack
- Next.js 14 App Router (`/app`)
- Tailwind CSS (sin librerías de componentes)
- anime.js v3 — TODAS las animaciones
- next/image — todas las imágenes

## Reglas de animación
- Importar anime.js SIEMPRE dinámicamente dentro de `useEffect`:
  ```js
  useEffect(() => {
    import('animejs').then(({ default: anime }) => { ... })
  }, [])
  ```
- NUNCA usar CSS transitions para hover/filter — usar anime.js
- Todos los componentes animados necesitan `"use client"` en la primera línea

## Estructura
```
app/
  layout.js          ← Space Grotesk font, Navbar, CustomCursor
  page.js            ← Homepage (Hero + PortfolioGrid + LogoMarquee + CTA)
  about/page.js
  contact/page.js
  portfolio/[slug]/
    page.js          ← Server component con generateStaticParams
    GalleryGrid.js   ← Client component con lightbox
components/
  Navbar.js          ← Fixed, slide-down on load
  Hero.js            ← Fullscreen, letra-por-letra con anime.js
  PortfolioGrid.js   ← Filtro por categoría + stagger
  PortfolioCard.js   ← Hover con anime.js (scale + overlay)
  Lightbox.js        ← Modal fullscreen con nav prev/next
  LogoMarquee.js     ← Scroll infinito horizontal
  CustomCursor.js    ← Dot + ring con lag via rAF
  ScrollReveal.js    ← IntersectionObserver + anime.js
lib/
  photos.js          ← Data: categorías y fotos (placeholders Picsum)
  anime.js           ← Helpers de parámetros de animación
```

## Fotos reales
Cuando lleguen fotos reales de Inaldo, colocar en:
```
public/photos/[categoria]/foto.jpg
```
Y actualizar `lib/photos.js` para apuntar a `/photos/[categoria]/...` en lugar de picsum.

## Categorías
All, Rugby, Taekwondo, Skating, Surf, Artistic Gymnastics, Swimming,
Cycling, Boxing, Basketball, Athletics, Weightlifting, World Games,
Events, Landscapes, Soccer, Nature

## Comandos
```bash
npm run dev    # desarrollo
npm run build  # producción
npm run start  # servir build
```
