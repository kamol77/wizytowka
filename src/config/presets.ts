// Presety branżowe: kolory, czcionki i domyślne teksty. {city} jest podmieniane na miasto z site.ts.
export type Preset = {
  label: string;
  theme: { bg: string; surface: string; ink: string; muted: string; line: string; accent: string; accentFg: string; radius: string };
  fonts: { display: string; body: string; query: string };
  copy: {
    eyebrow: string; heroTitle: string; heroSub: string; cta: string;
    servicesTitle: string; aboutTitle: string; teamTitle: string; galleryTitle: string; reviewsTitle: string;
  };
};

export const presets: Record<string, Preset> = {
  barber: {
    label: 'Barber',
    theme: { bg: '#15120f', surface: '#1e1a16', ink: '#f3ece1', muted: '#a89f90', line: '#35302a', accent: '#c9a14a', accentFg: '#17130d', radius: '2px' },
    fonts: { display: 'Fraunces', body: 'Inter', query: 'family=Fraunces:opsz,wght@9..144,600;9..144,800&family=Inter:wght@400;500;600' },
    copy: {
      eyebrow: 'Barber shop',
      heroTitle: 'Dobre cięcie. Czysta broda. Bez kolejki w {city}.',
      heroSub: 'Rezerwujesz termin online, przychodzisz na godzinę i wychodzisz zadbany.',
      cta: 'Umów wizytę', servicesTitle: 'Cennik', aboutTitle: 'O barberze', teamTitle: 'Barberzy', galleryTitle: 'Nasze prace', reviewsTitle: 'Klienci o nas',
    },
  },
  mechanik: {
    label: 'Mechanik',
    theme: { bg: '#f4f5f6', surface: '#ffffff', ink: '#14181d', muted: '#5b6570', line: '#d9dde1', accent: '#d9480f', accentFg: '#ffffff', radius: '6px' },
    fonts: { display: 'Barlow Condensed', body: 'Barlow', query: 'family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600' },
    copy: {
      eyebrow: 'Warsztat samochodowy',
      heroTitle: 'Serwis, który mówi, co naprawia i ile to kosztuje.',
      heroSub: 'Diagnostyka, przeglądy i naprawy w {city}. Wycenę dostajesz przed rozpoczęciem pracy.',
      cta: 'Umów serwis', servicesTitle: 'Zakres usług', aboutTitle: 'O warsztacie', teamTitle: 'Mechanicy', galleryTitle: 'Z warsztatu', reviewsTitle: 'Opinie kierowców',
    },
  },
  wulkanizator: {
    label: 'Wulkanizator',
    theme: { bg: '#0f1114', surface: '#181b20', ink: '#f2f3f5', muted: '#9aa1ab', line: '#2a2f36', accent: '#ffd400', accentFg: '#111111', radius: '4px' },
    fonts: { display: 'Archivo', body: 'Archivo', query: 'family=Archivo:wdth,wght@62..125,500..900' },
    copy: {
      eyebrow: 'Wulkanizacja',
      heroTitle: 'Wymiana opon w {city} w 30 minut.',
      heroSub: 'Wymiana, wyważanie, naprawa i przechowalnia opon. Wjeżdżasz bez umawiania lub rezerwujesz godzinę.',
      cta: 'Zarezerwuj termin', servicesTitle: 'Cennik usług', aboutTitle: 'O nas', teamTitle: 'Ekipa', galleryTitle: 'Zakład', reviewsTitle: 'Opinie',
    },
  },
  fizjo: {
    label: 'Fizjoterapeuta',
    theme: { bg: '#f6f9f7', surface: '#ffffff', ink: '#16302b', muted: '#5d7771', line: '#d8e5e0', accent: '#0f766e', accentFg: '#ffffff', radius: '14px' },
    fonts: { display: 'DM Serif Display', body: 'DM Sans', query: 'family=DM+Serif+Display&family=DM+Sans:wght@400;500;600' },
    copy: {
      eyebrow: 'Fizjoterapia',
      heroTitle: 'Wracasz do ruchu bez bólu, krok po kroku.',
      heroSub: 'Indywidualna terapia w {city}. Pierwsza wizyta zaczyna się od rozmowy i badania, nie od ćwiczeń.',
      cta: 'Umów wizytę', servicesTitle: 'Rodzaje terapii', aboutTitle: 'O gabinecie', teamTitle: 'Terapeuci', galleryTitle: 'Gabinet', reviewsTitle: 'Opinie pacjentów',
    },
  },
  wnetrza: {
    label: 'Wykończenia wnętrz',
    theme: { bg: '#f1ede6', surface: '#faf8f4', ink: '#26231f', muted: '#7a7268', line: '#d9d2c5', accent: '#3d4a3a', accentFg: '#faf8f4', radius: '0px' },
    fonts: { display: 'Cormorant Garamond', body: 'Jost', query: 'family=Cormorant+Garamond:wght@500;600;700&family=Jost:wght@400;500' },
    copy: {
      eyebrow: 'Wykończenia wnętrz',
      heroTitle: 'Wnętrza wykończone na czas i bez niespodzianek.',
      heroSub: 'Remonty i wykończenia pod klucz w {city} i okolicy. Stały kosztorys, harmonogram i jedna osoba do kontaktu.',
      cta: 'Umów bezpłatną wycenę', servicesTitle: 'Co robimy', aboutTitle: 'O nas', teamTitle: 'Zespół', galleryTitle: 'Realizacje', reviewsTitle: 'Opinie klientów',
    },
  },
};
