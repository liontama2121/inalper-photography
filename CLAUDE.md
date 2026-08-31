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
  layouts/Layout.astro       ← head, fuentes, Nav, Footer, botón flotante WA, scroll-reveal global
  components/
    Nav.astro
    Footer.astro
    CameraHud.astro          ← hero del home: visor de cámara en SVG + HUD animado
  pages/
    index.astro              ← home (solo monta CameraHud)
    portafolio.astro         ← escanea public/photos/ en build + filtros + lightbox
    sobre-mi.astro
    contacto.astro
    blog/index.astro
    blog/[slug].astro
  lib/
    contact.js               ← fuente única de teléfono, email, redes, link de WA
    posts.js                 ← data del blog
  styles/global.css          ← custom properties, tipografía, #wa-float
public/
  photos/[categoria]/*.jpg   ← las fotos reales
  IPEREZLOGO.png
legacy-next/                 ← prototipo Next.js viejo, no se despliega
```

## Fotos
- `portafolio.astro` lee `public/photos/` con `fs.readdirSync` en build time.
  Agregar una foto = copiarla a la carpeta de su categoría. No hay lista hardcodeada.
- Nombre de carpeta = slug de categoría; las etiquetas bonitas están en `LABELS`.
- **Máximo 25 MiB por archivo** (límite duro de Cloudflare Pages). Las fotos van
  redimensionadas a 2560px de lado largo, calidad 85. Fotos nuevas que vengan
  directo de cámara hay que bajarlas antes de commitear.

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
