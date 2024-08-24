import { vi, Mock } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { Property } from '@/types';
import PropertyService from '@/services/propertyService';
import { useProperty } from '@/hooks/useProperty';
import { mockProperties } from '@/test/mockData';

// Mock the entire PropertyService class
vi.mock('@/services/propertyService');

describe('useProperty Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with default state', () => {
    const { result } = renderHook(() => useProperty());

    expect(result.current.properties).toEqual([]);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBeUndefined();
  });

  it('should fetch properties and update state', async () => {
    (PropertyService.getProperties as Mock).mockResolvedValue(mockProperties);

    const { result } = renderHook(() => useProperty());

    await act(async () => {
      await result.current.filter({ bedrooms: 2 });
    });

    expect(PropertyService.getProperties).toHaveBeenCalledWith('bedrooms=2');
    expect(result.current.properties).toEqual(mockProperties);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  it('should handle error during property fetch', async () => {
    const mockError = new Error('Failed to fetch properties');
    (PropertyService.getProperties as Mock).mockRejectedValue(mockError);

    const { result } = renderHook(() => useProperty());

    await act(async () => {
      await result.current.filter({ bedrooms: 2 });
    });

    expect(PropertyService.getProperties).toHaveBeenCalledWith('bedrooms=2');
    expect(result.current.properties).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toEqual(mockError);
  });

  it('should fetch a property by id and update state', async () => {
    const mockProperty = mockProperties[0];
    (PropertyService.getPropertyById as Mock).mockResolvedValue(mockProperty);

    const { result } = renderHook(() => useProperty());

    await act(async () => {
      await result.current.filterById(1);
    });

    expect(PropertyService.getPropertyById).toHaveBeenCalledWith(1);
    expect(result.current.property).toEqual(mockProperty);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  it('should handle error during fetch by id', async () => {
    const mockError = new Error('Failed to fetch property');
    (PropertyService.getPropertyById as Mock).mockRejectedValue(mockError);

    const { result } = renderHook(() => useProperty());

    await act(async () => {
      await result.current.filterById(1);
    });

    expect(PropertyService.getPropertyById).toHaveBeenCalledWith(1);
    expect(result.current.property).toBeUndefined();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toEqual(mockError);
  });

  it('should update property status and update state', async () => {
    const updatedProperty: Property = {
      ...mockProperties[0],
      status: 'expired'
    };
    (PropertyService.updateProperty as Mock).mockResolvedValue(undefined);
    (PropertyService.getProperties as Mock).mockResolvedValue([
      updatedProperty
    ]);

    const { result } = renderHook(() => useProperty());

    await act(async () => {
      await result.current.updatePropertyStatus(updatedProperty);
    });

    expect(PropertyService.updateProperty).toHaveBeenCalledWith(
      updatedProperty
    );
    expect(result.current.property).toEqual(undefined);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  it('should handle error during property status update', async () => {
    const updatedProperty: Property = {
      ...mockProperties[0],
      status: 'expired'
    };
    const mockError = new Error('Failed to update property');
    (PropertyService.updateProperty as Mock).mockRejectedValue(mockError);

    const { result } = renderHook(() => useProperty());

    await act(async () => {
      await result.current.updatePropertyStatus(updatedProperty);
    });

    expect(PropertyService.updateProperty).toHaveBeenCalledWith(
      updatedProperty
    );
    expect(result.current.error).toEqual(mockError);
    expect(result.current.isLoading).toBe(false);
  });
});
