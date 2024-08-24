import { Property } from '@/types';
import PropertyCard from './PropertyCard';

type PropertListProps = {
  properties: Property[];
};

const PropertList = ({ properties }: PropertListProps) => {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </>
  );
};
export default PropertList;
