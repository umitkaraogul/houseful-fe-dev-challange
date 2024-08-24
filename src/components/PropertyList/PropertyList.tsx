import { Property } from '@/types';
import PropertyCard from './PropertyCard';

type PropertListProps = {
  properties: Property[];
  onStatusChange: (propery: Property) => void;
};

const PropertList = ({ properties, onStatusChange }: PropertListProps) => {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onStatusChange={() => {
              onStatusChange({ ...property, status: 'expired' });
            }}
          />
        ))}
      </div>
    </>
  );
};
export default PropertList;
