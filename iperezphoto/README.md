# IPEREZPHOTO — Inaldo Pérez

Sitio de fotografía deportiva. Astro 6 (SSG) + Anime.js v4 + vanilla JS. Dark/técnico premium.

## Comandos
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
npm run preview  # sirve /dist
```

## Deploy — Cloudflare Pages
- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Astro

## Secciones
Hero (foto fullscreen + entrada Anime.js) · Nav (transparente→blur, scrollspy,
drawer mobile) · Galería (masonry CSS columns, 16 categorías, filtro, lightbox)
· Sobre Mí · Prensa (doble marquee + eventos) · Contacto · Footer.
Cursor personalizado (desktop) + WhatsApp flotante.

## Fotos de galería
Escanea `public/photos/[categoria]/` en build time. Sin fotos reales muestra
30 placeholders ("PRÓXIMAMENTE", proporciones mixtas). Al dejar imágenes
(`.jpg/.png/.webp/.avif`) en las carpetas, aparecen automáticamente.

Categorías: rugby, atletismo, natacion, taekwondo, gimnasia, surf, ciclismo,
boxeo, basketball, patinaje, futbol, halterofilia, juegos-mundiales, eventos,
paisajes, naturaleza.

## Assets pendientes (los provee Inaldo)
- `public/IPEREZLOGO.png` — logo. Sin él, el nav usa wordmark de texto; favicon 404.
- `public/hero.jpg` — foto hero fullscreen. Sin ella, fondo oscuro con textura.
- `public/inaldo-portrait.jpg` — retrato sección Sobre Mí.
- `public/logos/*.png` — logos de prensa (blanco). Sin ellos, marquee usa texto.
- Reemplazar email, Instagram y WhatsApp `+57XXXXXXXXXX` en `Layout.astro`,
  `Contact.astro`, `Hero.astro`.

## Notas técnicas
- Tailwind se omitió: `@tailwindcss/vite` v4 choca con el rolldown-vite de
  Astro 6 (`Missing field tsconfigPaths`). El sistema de diseño es 100% CSS
  nativo con custom properties en `src/styles/global.css` — mismo resultado.
- `postcss.config.cjs` vacío evita que PostCSS herede config del proyecto padre.
- Anime.js v4 (named exports `animate`, `stagger`): hero, reveal, filtro,
  lightbox. Resto de interacciones en vanilla JS.
- Cero `border-radius`. Único acento: Canon red `#cc0000`.

Hecho con amor por JuanCode.
