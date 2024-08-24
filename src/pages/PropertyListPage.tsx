import React, { useEffect } from 'react';
import PropertyList from '@/components/PropertyList';
import { Property } from '@/types';
import propertyService from '@/services/propertyService';

const PropertyListPage: React.FC = () => {
  const [properties, setProperties] = React.useState<Property[]>([]);

  useEffect(() => {
    const fetchData = async (filter: string) => {
      const data = await propertyService.getProperties(filter);
      setProperties(data);
    };
    fetchData('');
  }, []);

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Property Listings</h1>
      <PropertyList properties={properties} />
    </div>
  );
};

export default PropertyListPage;
