import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Property } from '@/types';
import { config } from '@/config';
import propertyService from './propertyService';

const mockProperties: Property[] = [
  {
    id: 1,
    image: 'property.jpg',
    bedrooms: 3,
    address: '123 Main St',
    postcode: '12345',
    price: 500000,
    status: 'active'
  }
];

describe('propertyService', () => {
  const fetch = vi.fn();

  beforeEach(() => {
    global.fetch = fetch;
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should fetch a list of properties with getProperties', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProperties
    });

    const properties = await propertyService.getProperties('');

    expect(properties).toEqual(mockProperties);
    expect(global.fetch).toHaveBeenCalledWith(`${config.apiUrl}/properties?`);
  });

  it('should handle errors correctly in handleResponse', async () => {
    const errorMessage = 'Not Found';
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: errorMessage })
    });

    await expect(propertyService.getProperties('')).rejects.toThrow(
      errorMessage
    );
  });
});
