export type Property = {
  id: number;
  image: string;
  bedrooms: number;
  address: string;
  postcode: string;
  price: number;
  status: PropertyStatus;
};

export type PropertyStatus = 'active' | 'expired';

export type PropertyFilterCriteria = {
  bedrooms: number | null;
  status?: string;
};
