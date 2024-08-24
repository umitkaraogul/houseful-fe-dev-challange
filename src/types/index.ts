export type Property = {
  id: number;
  image: string;
  bedrooms: number;
  address: string;
  postcode: string;
  price: number;
  status: 'active' | 'expired';
};
