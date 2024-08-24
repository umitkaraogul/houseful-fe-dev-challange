import { PropertyFilterCriteria } from '@/types';

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumSignificantDigits: 3
  }).format(price);
};

export const formatFilterCriteria = (
  filterCriteria?: PropertyFilterCriteria
) => {
  const filterParams = new URLSearchParams();

  if (filterCriteria) {
    if (filterCriteria.bedrooms) {
      filterParams.append('bedrooms', filterCriteria.bedrooms.toString());
    }
    if (filterCriteria.status) {
      filterParams.append('status', filterCriteria.status);
    }
  }

  return filterParams.toString();
};
