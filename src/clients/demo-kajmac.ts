import type { ClientConfig } from '../config/site';

const c: ClientConfig = {
  preset: 'barber',
  businessName: 'KajMac Barber Shop',
  city: 'Toruniu',
  phone: '530307900',
  email: '',
  address: { street: 'Ludwika Rydygiera 30', postal: '87-100', city: 'Toruń' },
  bookingUrl: 'https://booksy.com/pl-pl/359527_kajmac-barber-shop-torun_barber-shop_22875_torun?do=invite&_branch_match_id=1637564547191536288&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs/V9w/OL3AODvEKMEuyrytKTUstKsrMS49PKsovL04tsvUvSC1KBADw2E36OwAAAA==#ba_s=seo',
  mapsUrl: 'https://www.google.com/maps/place/KajMac+Barber+Shop/@53.0296945,18.6484768,17z/data=!3m1!4b1!4m6!3m5!1s0x470335001e672f97:0xa3f4e473cad542e6!8m2!3d53.0296913!4d18.6510517!16s%2Fg%2F11zxmv6lfx?entry=ttu&g_ep=EgoyMDI2MTAyNy4wIKXMDSoASAFQAw%3D%3D',
  mapsEmbed: 'https://www.google.com/maps?q=53.0296913,18.6510517&output=embed',

  rating: { value: 0, count: 0 },   // ukrywa ocenę
  reviews: [],                      // ukrywa opinie
  gallery: [],                      // ukrywa galerię do czasu ich zdjęć
  hide: ['stats', 'team'],          // ukrywa przykładowe liczby i zespół

  services: [
    { title: 'STRZYŻENIE MĘSKIE', desc: '', price: '70', time: '1h' },
    { title: 'STRZYŻENIE CHŁOPCA DO 12 LAT', desc: '', price: '60', time: '50min' },
    { title: 'COMBO - STRZYŻENIE + BRODA', desc: '', price: '110', time: '1h 30min' },
  ],
  about: ['KajMac Barber Shop w Toruniu. Rezerwacja terminu online.'],
  hours: [
    { day: 'Poniedziałek – Czwartek', time: '09:00 - 20:00' },
    { day: 'Piątek', time: '10:00 - 20:00' },
    { day: 'Sobota', time: '9:00 - 20:00' },
    { day: 'Niedziela', time: '10:00 - 19:00' },
  ],
};

export default c;