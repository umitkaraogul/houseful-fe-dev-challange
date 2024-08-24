import { Property, PropertyFilterCriteria } from '@/types';
import PropertyService from '@/services/propertyService';
import { useCallback, useMemo, useState } from 'react';
import { formatFilterCriteria } from '@/util';

type PropertiesState = {
  properties: Property[];
  property?: Property;
  filterCriteria?: PropertyFilterCriteria;
  isLoading: boolean;
  error: Error | undefined;
};

export const useProperty = () => {
  const defaultState = useMemo(
    () => ({
      properties: [],
      isLoading: true,
      error: undefined
    }),
    []
  );

  const [propertiesState, setPropertiesState] =
    useState<PropertiesState>(defaultState);

  const filter = useCallback(
    async (filterCriteria?: PropertyFilterCriteria) => {
      setPropertiesState((state) => ({
        ...state,
        isLoading: true,
        error: undefined,
        filterCriteria: filterCriteria,
        properties: []
      }));

      try {
        const response = await PropertyService.getProperties(
          formatFilterCriteria(filterCriteria)
        );
        setPropertiesState((state) => ({
          ...state,
          isLoading: false,
          error: undefined,
          properties: response
        }));
      } catch (error) {
        setPropertiesState((state) => ({
          ...state,
          isLoading: false,
          error: error as Error
        }));
      }
    },
    []
  );

  const updatePropertyStatus = async (updatedProperty: Property) => {
    try {
      setPropertiesState((state) => ({
        ...state,
        isLoading: true,
        error: undefined
      }));
      await PropertyService.updateProperty(updatedProperty);

      setPropertiesState((state) => ({
        ...state,
        isLoading: false,
        error: undefined,
        properties: state.properties.map((item) =>
          item.id !== updatedProperty.id ? item : updatedProperty
        )
      }));
    } catch (error) {
      setPropertiesState((state) => ({
        ...state,
        isLoading: false,
        error: error as Error
      }));
    }
  };

  return {
    ...propertiesState,
    filter,
    updatePropertyStatus
  };
};
