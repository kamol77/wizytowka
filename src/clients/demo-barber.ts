import type { ClientConfig } from '../config/site';
const c: ClientConfig = {
  preset: 'barber',
  businessName: 'Barber Przykład',
  city: 'Twoje miasto',
  address: { street: 'ul. Przykładowa 1', postal: '00-000', city: 'Twoje miasto' },
  // heroImage: '/clients/demo-barber/hero.jpg',
};
export default c;