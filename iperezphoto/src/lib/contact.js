// Single source of truth for contact details — used by the floating
// WhatsApp button (Layout) and the Contacto page.

export const PHONE_DISPLAY = '+1 (661) 349-1404';
export const PHONE_E164 = '16613491404'; // wa.me wants digits only, no + or spaces
export const EMAIL = 'inalpecas@gmail.com';
export const INSTAGRAM = '@iperezphoto';
export const INSTAGRAM_URL = 'https://instagram.com/iperezphoto';

// Prefilled first message. English on purpose: most inbound leads that
// reach the site are international, so the opening line reads for them.
export const WA_GREETING =
  "Hi Inaldo! I came from your photography portfolio and I'd like to get in touch.";

export const WA_LINK = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(WA_GREETING)}`;
export const MAIL_LINK = `mailto:${EMAIL}`;
