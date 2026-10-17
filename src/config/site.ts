// ============================================================
//  JEDYNY PLIK, KTÓRY EDYTUJESZ DLA NOWEGO KLIENTA
//  1) wybierz preset  2) uzupełnij dane  3) podmień zdjęcia w /public/images
// ============================================================
import { presets, type Preset } from './presets';

export const PRESET: keyof typeof presets = 'mechanik'; // barber | mechanik | wulkanizator | fizjo | wnetrza

export const client = {
  businessName: 'Lokalny Ekspert',
  city: 'Toruń',
  phone: '+48 600 000 000',
  email: 'kontakt@example.pl',
  address: { street: 'ul. Przykładowa 12', postal: '87-100', city: 'Toruń' },
  bookingUrl: 'https://booksy.com',     // Booksy, Calendly, Znanylekarz itp. Zostaw '' aby ukryć przycisk
  mapsUrl: 'https://maps.google.com',
  mapsEmbed: '',                        // Google Maps > Udostępnij > Umieść mapę > wartość src z iframe
  rating: { value: 4.9, count: 126 },   // wartość i liczba opinii z Google

  // Nadpisz dowolny tekst z presetu, np. copy: { heroTitle: '...' }
  copy: {} as Partial<Preset['copy']>,

  heroImage: '',                        // np. '/images/hero.jpg' (puste = placeholder)

  stats: [
    { value: '10 lat', label: 'doświadczenia' },
    { value: '4000+', label: 'zadowolonych klientów' },
    { value: '24 h', label: 'średni czas odpowiedzi' },
  ],

  services: [
    { title: 'Główna usługa', desc: 'Krótki, konkretny opis tego, co klient dostaje.', price: 'od 100 zł', time: '45 min' },
    { title: 'Usługa specjalistyczna', desc: 'Dla klientów, którzy potrzebują czegoś więcej.', price: 'od 150 zł', time: '60 min' },
    { title: 'Pakiet kompleksowy', desc: 'Pełny zakres w jednej cenie.', price: '250 zł', time: '90 min' },
    { title: 'Konsultacja', desc: 'Krótka rozmowa i wycena bez zobowiązań.', price: '0 zł', time: '15 min' },
  ],

  about: [
    'Działamy w Toruniu od 2014 roku. Stawiamy na konkretną usługę, uczciwą cenę i terminowość.',
    'Każdego klienta traktujemy indywidualnie. Zawsze mówimy, co robimy i dlaczego.',
  ],

  team: [
    { name: 'Imię Nazwisko', role: 'Właściciel', photo: '' },
    { name: 'Imię Nazwisko', role: 'Specjalista', photo: '' },
  ],

  gallery: [
    { src: '', alt: 'Realizacja 1' }, { src: '', alt: 'Realizacja 2' }, { src: '', alt: 'Realizacja 3' },
    { src: '', alt: 'Realizacja 4' }, { src: '', alt: 'Realizacja 5' },
  ],

  hours: [
    { day: 'Poniedziałek – piątek', time: '9:00 – 19:00' },
    { day: 'Sobota', time: '9:00 – 15:00' },
    { day: 'Niedziela', time: 'Zamknięte' },
  ],

  reviews: [
    { author: 'Marek z Torunia', text: 'Świetna obsługa, profesjonalizm i szybki kontakt. Polecam.', rating: 5 },
    { author: 'Katarzyna N.', text: 'Najlepszy fachowiec w okolicy. Na pewno wrócę.', rating: 5 },
    { author: 'Piotr W.', text: 'Wszystko zgodnie z ustaleniami, bez dodatkowych kosztów.', rating: 5 },
  ],
};

export const preset = presets[PRESET];
export const copy = Object.fromEntries(
  Object.entries({ ...preset.copy, ...client.copy }).map(([k, v]) => [k, String(v).replaceAll('{city}', client.city)])
) as Preset['copy'];
