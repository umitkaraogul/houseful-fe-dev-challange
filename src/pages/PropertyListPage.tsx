import React, { useEffect } from 'react';
import PropertyList from '@/components/PropertyList';
import { Property, PropertyFilterCriteria } from '@/types';
import { useProperty } from '@/hooks/useProperty';
import Filters from '@/components/Filters';

const PropertyListPage: React.FC = () => {
  const { properties, filter, updatePropertyStatus, filterCriteria } =
    useProperty();

  useEffect(() => {
    filter(filterCriteria);
  }, [filter]);

  const handleOnStatusChange = async (property: Property) => {
    await updatePropertyStatus(property);
  };

  const handleFilterChange = (filterCriteria: PropertyFilterCriteria) => {
    filter(filterCriteria);
  };

  return (
    <>
      <Filters onFilterChange={handleFilterChange} />
      <div className='container mx-auto'>
        <h1 className='text-3xl font-bold mb-6'>Property Listings</h1>
        <PropertyList
          properties={properties}
          onStatusChange={handleOnStatusChange}
        />
      </div>
    </>
  );
};

export default PropertyListPage;
