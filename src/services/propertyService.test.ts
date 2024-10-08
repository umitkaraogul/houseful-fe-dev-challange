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

  it('should update a property', async () => {
    const mockProperty = mockProperties[0];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({})
    });

    await propertyService.updateProperty(mockProperty);

    expect(global.fetch).toHaveBeenCalledWith(`${config.apiUrl}/properties/1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mockProperty)
    });
  });

  it('should fetch a property by ID with getPropertyById', async () => {
    const mockProperty = mockProperties[0];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProperty
    });

    const property = await propertyService.getPropertyById(1);

    expect(property).toEqual(mockProperty);
    expect(global.fetch).toHaveBeenCalledWith(`${config.apiUrl}/properties/1`);
  });
});
