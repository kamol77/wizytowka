// Preset = wygląd + układ strony + przykładowe dane branży. {city} -> miasto z site.ts.
type Item = { title: string; desc: string; price: string; time?: string };
export type Preset = {
  label: string;
  theme: { bg: string; surface: string; ink: string; muted: string; line: string; accent: string; accentFg: string; radius: string };
  fonts: { display: string; body: string; query: string };
  layout: {
    hero: 'split' | 'center' | 'image';   // typ nagłówka strony
    flip?: boolean;                        // zdjęcie po lewej (hero split)
    services: 'list' | 'grid';
    order: string[];                       // kolejność i obecność sekcji: perks stats services process about gallery reviews contact
  };
  copy: {
    eyebrow: string; heroTitle: string; heroSub: string; cta: string; servicesTitle: string; aboutTitle: string;
    teamTitle: string; galleryTitle: string; reviewsTitle: string; processTitle: string;
  };
  sample: {
    stats: { value: string; label: string }[]; services: Item[]; perks: string[]; steps: { title: string; desc: string }[];
    about: string[]; team: { name: string; role: string; photo: string }[];
  };
};

export const presets: Record<string, Preset> = {
  barber: {
    label: 'Barber',
    theme: { bg: '#15120f', surface: '#1e1a16', ink: '#f3ece1', muted: '#a89f90', line: '#35302a', accent: '#c9a14a', accentFg: '#17130d', radius: '2px' },
    fonts: { display: 'Fraunces', body: 'Inter', query: 'family=Fraunces:wght@600;800&family=Inter:wght@400;600' },
    layout: { hero: 'split', services: 'list', order: ['stats', 'services', 'about', 'gallery', 'reviews', 'contact'] },
    copy: { eyebrow: 'Barber shop', heroTitle: 'Dobre cięcie. Czysta broda. Bez kolejki w {city}.', heroSub: 'Rezerwujesz termin online, przychodzisz na godzinę i wychodzisz zadbany.', cta: 'Umów wizytę', servicesTitle: 'Cennik', aboutTitle: 'O barberze', teamTitle: 'Barberzy', galleryTitle: 'Nasze prace', reviewsTitle: 'Klienci o nas', processTitle: '' },
    sample: {
      stats: [{ value: '6 lat', label: 'na rynku' }, { value: '5000+', label: 'strzyżeń' }, { value: '4,9', label: 'średnia ocen w Google' }],
      services: [
        { title: 'Strzyżenie męskie', desc: 'Konsultacja, mycie i stylizacja.', price: '80 zł', time: '45 min' },
        { title: 'Strzyżenie + broda', desc: 'Cięcie, trymowanie brody i gorący ręcznik.', price: '120 zł', time: '60 min' },
        { title: 'Broda', desc: 'Trymowanie i golenie brzytwą.', price: '60 zł', time: '30 min' },
        { title: 'Strzyżenie dziecięce', desc: 'Do 12 lat.', price: '60 zł', time: '30 min' },
        { title: 'Pakiet Premium', desc: 'Cięcie, broda, maska i stylizacja.', price: '180 zł', time: '90 min' },
      ],
      perks: [], steps: [],
      about: ['Mały barber shop z klasycznym podejściem do rzemiosła. Pracujemy na umówione godziny, żebyś nie tracił czasu w kolejce.', 'Każde cięcie zaczynamy od rozmowy o tym, jak chcesz wyglądać.'],
      team: [{ name: 'Imię Nazwisko', role: 'Właściciel, barber', photo: '' }, { name: 'Imię Nazwisko', role: 'Barber', photo: '' }],
    },
  },
  mechanik: {
    label: 'Mechanik',
    theme: { bg: '#eef0f2', surface: '#ffffff', ink: '#10151a', muted: '#556070', line: '#d3d8de', accent: '#c2410c', accentFg: '#ffffff', radius: '4px' },
    fonts: { display: 'Barlow Condensed', body: 'Barlow', query: 'family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600' },
    layout: { hero: 'split', services: 'grid', order: ['perks', 'services', 'stats', 'about', 'gallery', 'reviews', 'contact'] },
    copy: { eyebrow: 'Warsztat samochodowy', heroTitle: 'Serwis, który mówi, co naprawia i ile to kosztuje.', heroSub: 'Diagnostyka, przeglądy i naprawy w {city}. Wycenę dostajesz przed rozpoczęciem pracy.', cta: 'Umów serwis', servicesTitle: 'Zakres usług', aboutTitle: 'O warsztacie', teamTitle: 'Mechanicy', galleryTitle: 'Z warsztatu', reviewsTitle: 'Opinie kierowców', processTitle: '' },
    sample: {
      stats: [{ value: '15 lat', label: 'doświadczenia' }, { value: '3000+', label: 'naprawionych aut' }, { value: '12 mies.', label: 'gwarancji na naprawy' }],
      services: [
        { title: 'Diagnostyka komputerowa', desc: 'Odczyt błędów i test czujników.', price: 'od 120 zł' },
        { title: 'Wymiana oleju i filtrów', desc: 'Olej, filtry oleju, powietrza i kabinowy.', price: 'od 150 zł' },
        { title: 'Układ hamulcowy', desc: 'Klocki, tarcze, płyn hamulcowy.', price: 'od 250 zł' },
        { title: 'Zawieszenie i geometria', desc: 'Wymiana elementów i ustawienie kół.', price: 'od 200 zł' },
        { title: 'Serwis klimatyzacji', desc: 'Odgrzybianie, uzupełnienie czynnika.', price: 'od 180 zł' },
        { title: 'Rozrząd', desc: 'Wymiana paska lub łańcucha z pompą wody.', price: 'od 700 zł' },
      ],
      perks: ['Wycena przed naprawą', 'Gwarancja na wykonane prace', 'Części oryginalne i równorzędne', 'Faktura VAT'], steps: [],
      about: ['Niezależny warsztat prowadzony przez mechaników z wieloletnim doświadczeniem. Naprawiamy samochody osobowe i dostawcze.', 'Zanim zaczniemy pracę, pokazujemy usterkę i podajemy cenę. Bez niespodzianek na fakturze.'],
      team: [{ name: 'Imię Nazwisko', role: 'Właściciel, diagnosta', photo: '' }, { name: 'Imię Nazwisko', role: 'Mechanik', photo: '' }],
    },
  },
  wulkanizator: {
    label: 'Wulkanizator',
    theme: { bg: '#0e1013', surface: '#171a1f', ink: '#f2f3f5', muted: '#9aa1ab', line: '#2a2f36', accent: '#ffd400', accentFg: '#111111', radius: '2px' },
    fonts: { display: 'Archivo', body: 'Archivo', query: 'family=Archivo:wght@500;700;800' },
    layout: { hero: 'center', services: 'list', order: ['perks', 'services', 'contact', 'reviews', 'about'] },
    copy: { eyebrow: 'Wulkanizacja', heroTitle: 'Wymiana opon w {city} w 30 minut.', heroSub: 'Wymiana, wyważanie, naprawa i przechowalnia opon. Wjeżdżasz bez umawiania lub rezerwujesz godzinę.', cta: 'Zarezerwuj termin', servicesTitle: 'Cennik', aboutTitle: 'O nas', teamTitle: 'Ekipa', galleryTitle: 'Zakład', reviewsTitle: 'Opinie', processTitle: '' },
    sample: {
      stats: [], steps: [],
      services: [
        { title: 'Wymiana kół 13–16"', desc: 'Komplet 4 kół, z wyważeniem.', price: 'od 100 zł' },
        { title: 'Wymiana kół 17–19"', desc: 'Komplet 4 kół, z wyważeniem.', price: 'od 140 zł' },
        { title: 'Wymiana kół 20" i większe', desc: 'Komplet 4 kół, także SUV i dostawcze.', price: 'od 180 zł' },
        { title: 'Wyważanie koła', desc: 'Za sztukę.', price: '20 zł' },
        { title: 'Naprawa przebicia', desc: 'Łatka od wewnątrz, za sztukę.', price: '40 zł' },
        { title: 'Przechowalnia opon', desc: 'Komplet na cały sezon.', price: '150 zł' },
      ],
      perks: ['Bez umawiania', 'Wymiana w 30 minut', 'Opony nowe i używane', 'Przechowalnia opon'],
      about: ['Zakład wulkanizacyjny z nowoczesnym sprzętem do kół osobowych, SUV i dostawczych. Szybko, dokładnie i w uczciwej cenie.'],
      team: [],
    },
  },
  fizjo: {
    label: 'Fizjoterapeuta',
    theme: { bg: '#f4f8f6', surface: '#ffffff', ink: '#15302a', muted: '#58726c', line: '#d6e4de', accent: '#0f766e', accentFg: '#ffffff', radius: '14px' },
    fonts: { display: 'DM Serif Display', body: 'DM Sans', query: 'family=DM+Serif+Display&family=DM+Sans:wght@400;500;600' },
    layout: { hero: 'split', flip: true, services: 'list', order: ['about', 'services', 'process', 'reviews', 'contact'] },
    copy: { eyebrow: 'Fizjoterapia', heroTitle: 'Wracasz do ruchu bez bólu, krok po kroku.', heroSub: 'Indywidualna terapia w {city}. Pierwsza wizyta zaczyna się od rozmowy i badania, nie od ćwiczeń.', cta: 'Umów wizytę', servicesTitle: 'Rodzaje terapii', aboutTitle: 'O gabinecie', teamTitle: 'Terapeuci', galleryTitle: 'Gabinet', reviewsTitle: 'Opinie pacjentów', processTitle: 'Jak wygląda terapia' },
    sample: {
      stats: [], perks: [],
      services: [
        { title: 'Konsultacja i badanie', desc: 'Wywiad, ocena ruchomości i plan terapii.', price: '150 zł', time: '60 min' },
        { title: 'Terapia manualna', desc: 'Praca z kręgosłupem, stawami i mięśniami.', price: '180 zł', time: '50 min' },
        { title: 'Rehabilitacja pooperacyjna', desc: 'Powrót do sprawności po zabiegu.', price: '160 zł', time: '50 min' },
        { title: 'Masaż leczniczy', desc: 'Rozluźnienie napiętych partii mięśni.', price: '140 zł', time: '45 min' },
        { title: 'Kinesiotaping', desc: 'Aplikacja plastrów przy kontuzjach.', price: '60 zł', time: '15 min' },
      ],
      steps: [
        { title: 'Rozmowa i badanie', desc: 'Pytamy o dolegliwości, sprawdzamy ruchomość i siłę.' },
        { title: 'Plan terapii', desc: 'Omawiamy diagnozę i ustalamy liczbę wizyt.' },
        { title: 'Terapia', desc: 'Techniki manualne dobrane do Twojego problemu.' },
        { title: 'Ćwiczenia do domu', desc: 'Dostajesz proste zadania, które utrwalają efekt.' },
      ],
      about: ['Gabinet fizjoterapii prowadzony przez dyplomowanego fizjoterapeutę. Pracujemy indywidualnie, jeden pacjent w jednym czasie.', 'Tłumaczymy, co jest przyczyną bólu i jak sobie z nim radzić także poza gabinetem.'],
      team: [{ name: 'Imię Nazwisko', role: 'Fizjoterapeuta, mgr', photo: '' }],
    },
  },
  wnetrza: {
    label: 'Wykończenia wnętrz',
    theme: { bg: '#f1ede6', surface: '#faf8f4', ink: '#26231f', muted: '#766e63', line: '#d9d2c5', accent: '#3d4a3a', accentFg: '#faf8f4', radius: '0px' },
    fonts: { display: 'Cormorant Garamond', body: 'Jost', query: 'family=Cormorant+Garamond:wght@500;700&family=Jost:wght@400;500' },
    layout: { hero: 'image', services: 'grid', order: ['gallery', 'process', 'services', 'about', 'reviews', 'contact'] },
    copy: { eyebrow: 'Wykończenia wnętrz', heroTitle: 'Wnętrza wykończone na czas i bez niespodzianek.', heroSub: 'Remonty i wykończenia pod klucz w {city} i okolicy. Stały kosztorys, harmonogram i jedna osoba do kontaktu.', cta: 'Umów bezpłatną wycenę', servicesTitle: 'Zakres prac', aboutTitle: 'O nas', teamTitle: 'Zespół', galleryTitle: 'Realizacje', reviewsTitle: 'Opinie klientów', processTitle: 'Jak pracujemy' },
    sample: {
      stats: [], perks: [],
      services: [
        { title: 'Wykończenie pod klucz', desc: 'Kompleksowo od stanu deweloperskiego.', price: 'od 1500 zł/m²' },
        { title: 'Gładzie i malowanie', desc: 'Równe ściany i sufity.', price: 'od 45 zł/m²' },
        { title: 'Podłogi i panele', desc: 'Układanie paneli, desek i płytek.', price: 'od 60 zł/m²' },
        { title: 'Łazienki', desc: 'Płytki, hydraulika, zabudowy.', price: 'wycena indywidualna' },
        { title: 'Zabudowy z płyt GK', desc: 'Sufity, ścianki, wnęki.', price: 'od 180 zł/m²' },
        { title: 'Montaż stolarki', desc: 'Drzwi wewnętrzne, listwy, parapety.', price: 'od 250 zł/szt.' },
      ],
      steps: [
        { title: 'Oględziny i wycena', desc: 'Przyjeżdżamy na miejsce, mierzymy i omawiamy zakres.' },
        { title: 'Kosztorys i umowa', desc: 'Dostajesz stałą cenę i termin zapisane w umowie.' },
        { title: 'Realizacja', desc: 'Pracujemy według harmonogramu, informując o postępach.' },
        { title: 'Odbiór i gwarancja', desc: 'Razem sprawdzamy efekt i usuwamy ewentualne uwagi.' },
      ],
      about: ['Zespół fachowców od wykończeń wnętrz. Remontujemy mieszkania i domy, dbając o porządek i dotrzymywanie terminów.', 'Masz jedną osobę kontaktową od pierwszej rozmowy do odbioru.'],
      team: [{ name: 'Imię Nazwisko', role: 'Kierownik realizacji', photo: '' }, { name: 'Imię Nazwisko', role: 'Wykonawca', photo: '' }],
    },
  },
};