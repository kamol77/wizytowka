// ============================================================
//  JEDYNY PLIK, KTÓRY EDYTUJESZ DLA NOWEGO KLIENTA
//  1) wybierz preset  2) uzupełnij dane  3) zdjęcia do /public/images
//  Puste listy ([]) = przykładowe dane z presetu (cennik, atuty, kroki...).
//  Wpisz własne, a nadpiszą przykładowe.
// ============================================================
import { presets, type Preset } from './presets';

export const PRESET: keyof typeof presets = 'fizjo'; // barber | mechanik | wulkanizator | fizjo | wnetrza

export const client = {
  businessName: 'Lokalny Ekspert',
  city: 'Toruń',
  phone: '+48 600 000 000',
  email: 'kontakt@example.pl',
  address: { street: 'ul. Przykładowa 12', postal: '87-100', city: 'Toruń' },
  bookingUrl: 'https://booksy.com',     // Booksy, Calendly itp. '' = ukryj przyciski rezerwacji
  mapsUrl: 'https://maps.google.com',
  mapsEmbed: '',                        // Google Maps > Udostępnij > Umieść mapę > src z iframe
  rating: { value: 4.9, count: 126 },
  copy: {} as Partial<Preset['copy']>,  // nadpisz dowolny tekst, np. { heroTitle: '...' }
  heroImage: '',                        // np. '/images/hero.jpg'

  stats: [] as { value: string; label: string }[],
  services: [] as { title: string; desc: string; price: string; time?: string }[],
  perks: [] as string[],
  steps: [] as { title: string; desc: string }[],
  about: [] as string[],
  team: [] as { name: string; role: string; photo: string }[],

  gallery: [
    { src: '', alt: 'Realizacja 1' }, { src: '', alt: 'Realizacja 2' }, { src: '', alt: 'Realizacja 3' },
    { src: '', alt: 'Realizacja 4' }, { src: '', alt: 'Realizacja 5' },
  ],
  hours: [
    { day: 'Poniedziałek – piątek', time: '8:00 – 18:00' },
    { day: 'Sobota', time: '9:00 – 14:00' },
    { day: 'Niedziela', time: 'Zamknięte' },
  ],
  reviews: [
    { author: 'Marek z Torunia', text: 'Świetna obsługa, profesjonalizm i szybki kontakt. Polecam.', rating: 5 },
    { author: 'Katarzyna N.', text: 'Najlepszy fachowiec w okolicy. Na pewno wrócę.', rating: 5 },
    { author: 'Piotr W.', text: 'Wszystko zgodnie z ustaleniami, bez dodatkowych kosztów.', rating: 5 },
  ],
};

export const preset = presets[PRESET];
const pick = <T,>(own: T[], sample: T[]) => (own.length ? own : sample);
export const data = {
  stats: pick(client.stats, preset.sample.stats), services: pick(client.services, preset.sample.services),
  perks: pick(client.perks, preset.sample.perks), steps: pick(client.steps, preset.sample.steps),
  about: pick(client.about, preset.sample.about), team: pick(client.team, preset.sample.team),
};
export const copy = Object.fromEntries(
  Object.entries({ ...preset.copy, ...client.copy }).map(([k, v]) => [k, String(v).replaceAll('{city}', client.city)])
) as Preset['copy'];