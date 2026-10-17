# Inalper Photography — CLAUDE.md

## Skills activas
- `C:\Users\Admin\.claude\skills\public\frontend-design\SKILL.md` — caveman mode

## Stack
- Astro 6 (SSG, sin adapter) — el sitio vive en la raíz del repo
- anime.js v4 — TODAS las animaciones
- CSS plano con custom properties (`src/styles/global.css`), sin Tailwind
- Deploy: Cloudflare Pages (branch `pro/inalper_site`, output `dist`)

## Reglas de animación
- Importar anime.js v4 con named exports:
  ```js
  import { animate, stagger } from 'animejs';
  ```
- En Astro el JS de cliente va en `<script>` al final del `.astro` — no lleva directiva
- NUNCA usar CSS transitions para animaciones de entrada — usar anime.js
- Respetar `prefers-reduced-motion`: todos los scripts chequean `reduce` y saltan la animación

## Estructura
```
src/
  layouts/Layout.astro       ← head, fuentes (Archivo + Martian Mono), Nav, Footer, WA flotante, scroll-reveal
  components/
    Nav.astro / Footer.astro
    PressWall.astro          ← hero del home: muro arrastrable con TODAS las fotos + ráfaga + punto AF
    ZoneRow.astro            ← fila única de disciplinas (código de zona + conteo), nunca hace wrap
    Lightbox.astro           ← visor compartido; se abre con evento 'lb:open'
    Icon.astro               ← íconos Phosphor (bold) inline
    Shutter.astro            ← obturador de plano focal (entre páginas y en el visor): window.shutter.fire()
  pages/
    index.astro              ← muro + prensa + acreditaciones + cierre rojo
    portfolio.astro          ← filtros por zona + masonry + "Load more"; acepta /portfolio#<categoria>
    about.astro / contact.astro / blog/
  lib/
    photos.js                ← escanea public/photos/ en build; ZONES = etiqueta + código por categoría
    credentials.js           ← prensa y eventos reales (no inventar)
    contact.js               ← fuente única de teléfono, email, redes, link de WA
  styles/global.css          ← tokens (negro/rojo Canon), tipografía, botones
scripts/thumbs.mjs           ← genera public/thumbs/{sm,md}/ (WebP 320/640) + manifest con medidas y EXIF real
public/photos/[categoria]/*.jpg
PRODUCT.md / DESIGN.md       ← contexto de producto y sistema visual (impeccable)
legacy-next/                 ← prototipo Next.js viejo, no se despliega
```

## Fotos
- `photos.js` lee `public/photos/` en build. Agregar foto = copiarla a su carpeta.
- `npm run dev` / `npm run build` corren `scripts/thumbs.mjs` antes (predev/prebuild).
  `public/thumbs/` y el manifest son generados y están en .gitignore.
- Categoría nueva: agregarla a `ZONES` en `src/lib/photos.js` (etiqueta + código de 3 letras).
- **Máximo 25 MiB por archivo** (límite duro de Cloudflare Pages). Las fotos van
  redimensionadas a 2560px de lado largo, calidad 85.

## Diseño
- Negro/rojo Canon: `--ink #0b0b0c`, `--red #cc0000`. Rojo como campo sólido con texto blanco, no como texto chico.
- Esquinas rectas en todo. Sin cursor custom, sin em-dashes en copy.
- Un solo CTA de contratación: "Hire Inaldo" (WhatsApp).

## Categorías
rugby, atletismo, natacion, taekwondo, gimnasia, surf, ciclismo, boxeo,
basketball, futbol, patinaje, halterofilia, esgrima, juegos-mundiales,
eventos, paisajes, naturaleza

## Comandos
```bash
npm run dev      # desarrollo (localhost:4321)
npm run build    # producción → dist/
npm run preview  # servir el build
```
