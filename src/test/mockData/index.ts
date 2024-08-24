import { Property } from '@/types';

export const mockProperties: Property[] = [
  {
    id: 1,
    image: 'property.jpg',
    bedrooms: 3,
    address: '123 Main St',
    postcode: '12345',
    price: 500000,
    status: 'active'
  },
  {
    id: 2,
    image: 'image.jpg',
    address: '456 Sample Rd',
    postcode: '',
    bedrooms: 2,
    price: 150000,
    status: 'expired'
  }
];
