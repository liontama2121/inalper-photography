// Build-time photo index shared by the home wall and the portfolio.
// Folder name = category slug. Adding a photo = dropping it in its folder;
// `npm run dev` / `npm run build` regenerate thumbnails first.
import fs from 'node:fs';
import path from 'node:path';

// Pretty label, three-letter zone code (credential grammar) and order.
export const ZONES = {
  rugby: { label: 'Rugby', code: 'RUG' },
  atletismo: { label: 'Track and Field', code: 'TNF' },
  natacion: { label: 'Swimming', code: 'SWM' },
  taekwondo: { label: 'Taekwondo', code: 'TKD' },
  gimnasia: { label: 'Gymnastics', code: 'GYM' },
  surf: { label: 'Surf', code: 'SRF' },
  ciclismo: { label: 'Cycling', code: 'CYC' },
  boxeo: { label: 'Boxing', code: 'BOX' },
  basketball: { label: 'Basketball', code: 'BSK' },
  futbol: { label: 'Soccer', code: 'SOC' },
  patinaje: { label: 'Skating', code: 'SKT' },
  halterofilia: { label: 'Weightlifting', code: 'WLF' },
  esgrima: { label: 'Fencing', code: 'FEN' },
  'juegos-mundiales': { label: 'World Games', code: 'WGM' },
  eventos: { label: 'Events', code: 'EVT' },
  paisajes: { label: 'Landscapes', code: 'LND' },
  naturaleza: { label: 'Nature', code: 'NAT' },
};
const ORDER = Object.keys(ZONES);

const prettify = (s) => s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
const zoneOf = (cat) => ZONES[cat] || { label: prettify(cat), code: cat.slice(0, 3).toUpperCase() };

const IMG_RE = /\.(jpe?g|png|webp|avif)$/i;

// Many files are named with the real caption ("COLOMBIA Vs PTO RICO FINAL 4").
// Camera-generated names (IMG_1234, DJI_0085, G0017885) and generic folder
// words carry no caption.
const NO_CAPTION = /^(img|dji|dsc|dscn|g0|gopr|mg|_mg|p\d)[_-]?\d*$|^\d+$/i;
const GENERIC = new Set(['deportes', 'deportes portada', 'portada']);
function captionOf(file) {
  const base = file
    .replace(IMG_RE, '')
    .replace(/\s*-\s*(copia|copy)$/i, '')
    .replace(/\s*\(\d+\)\s*x?$/, '')
    .replace(/\s+x$/, '')
    .replace(/\s+\d+\s*$/, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (!base || NO_CAPTION.test(base) || GENERIC.has(base.toLowerCase())) return '';
  // A caption is several words; anything with long digit runs is an export name.
  if (!/\s/.test(base) || /\d{4,}/.test(base) || !/[a-z]{3}/i.test(base)) return '';
  return base;
}

const photosDir = path.join(process.cwd(), 'public', 'photos');
const manifestPath = path.join(process.cwd(), 'src', 'lib', 'photos.manifest.json');

let manifest = {};
try { manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8')); } catch {}

const thumbsReady = fs.existsSync(path.join(process.cwd(), 'public', 'thumbs'));
const thumb = (size, cat, file) =>
  thumbsReady ? `/thumbs/${size}/${cat}/${encodeURIComponent(file.replace(IMG_RE, '.webp'))}` : `/photos/${cat}/${encodeURIComponent(file)}`;

let scanned = [];
if (fs.existsSync(photosDir)) {
  for (const cat of fs.readdirSync(photosDir)) {
    const dir = path.join(photosDir, cat);
    if (!fs.statSync(dir).isDirectory()) continue;
    const files = fs.readdirSync(dir).filter((f) => IMG_RE.test(f)).sort();
    if (files.length) scanned.push({ cat, files });
  }
}
// Known zones first in ORDER, unknown folders appended alphabetically.
scanned.sort((a, b) => {
  const ia = ORDER.indexOf(a.cat), ib = ORDER.indexOf(b.cat);
  if (ia !== -1 && ib !== -1) return ia - ib;
  if (ia !== -1) return -1;
  if (ib !== -1) return 1;
  return a.cat.localeCompare(b.cat);
});

export const zones = scanned.map((s) => ({ cat: s.cat, ...zoneOf(s.cat), count: s.files.length }));

export const photos = scanned.flatMap((s) =>
  s.files.map((file, n) => {
    const m = manifest[`${s.cat}/${file}`] || {};
    return {
      cat: s.cat,
      ...zoneOf(s.cat),
      n: n + 1, // frame number inside its zone
      of: s.files.length,
      w: m.w || 3,
      h: m.h || 2,
      shot: m.shot || null, // real EXIF: cam, lens, mm, ss, f, iso, date
      caption: captionOf(file),
      src: `/photos/${s.cat}/${encodeURIComponent(file)}`,
      sm: thumb('sm', s.cat, file),
      md: thumb('md', s.cat, file),
    };
  })
);

// Camera bodies found in the EXIF, most used first.
export const bodies = (() => {
  const n = {};
  photos.forEach((p) => p.shot?.cam && (n[p.shot.cam] = (n[p.shot.cam] || 0) + 1));
  return Object.entries(n).sort((a, b) => b[1] - a[1]).map(([cam, count]) => ({ cam, count }));
})();
