// Wybiera plik klienta z src/clients/ na podstawie zmiennej CLIENT.
import { presets, type Preset } from './presets';

// Wartości domyślne. Plik klienta nadpisuje tylko to, co poda.
const defaults = {
  businessName: 'Lokalny Ekspert',
  city: 'Toruń',
  phone: '+48 600 000 000',
  email: 'kontakt@example.pl',
  address: { street: 'ul. Przykładowa 12', postal: '87-100', city: 'Toruń' },
  bookingUrl: '',
  mapsUrl: 'https://maps.google.com',
  mapsEmbed: '',
  rating: { value: 4.9, count: 126 },
  copy: {} as Partial<Preset['copy']>,
  heroImage: '',

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

export type ClientConfig = Partial<typeof defaults> & { preset: keyof typeof presets };

const files = import.meta.glob<{ default: ClientConfig }>('../clients/*.ts', { eager: true });
export const slug = process.env.CLIENT || import.meta.env.CLIENT || 'demo';
const found = files[`../clients/${slug}.ts`];
if (!found) {
  const list = Object.keys(files).map(f => f.replace('../clients/', '').replace('.ts', '')).join(', ');
  throw new Error(`Brak pliku src/clients/${slug}.ts. Dostępni klienci: ${list}`);
}
const override = found.default;

export const client = { ...defaults, ...override };
export const preset = presets[override.preset];

const pick = <T,>(own: T[], sample: T[]) => (own.length ? own : sample);
export const data = {
  stats: pick(client.stats, preset.sample.stats), services: pick(client.services, preset.sample.services),
  perks: pick(client.perks, preset.sample.perks), steps: pick(client.steps, preset.sample.steps),
  about: pick(client.about, preset.sample.about), team: pick(client.team, preset.sample.team),
};
export const copy = Object.fromEntries(
  Object.entries({ ...preset.copy, ...client.copy }).map(([k, v]) => [k, String(v).replaceAll('{city}', client.city)])
) as Preset['copy'];