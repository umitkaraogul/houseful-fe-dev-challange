import { Property } from '@/types';
import PropertyStatusBadge from '../PropertyStatusBadge';

export type PropertyDetailsProps = {
  property: Property;
};

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => {
  return (
    <div className='p-4'>
      <img
        src={property.image}
        alt='Property'
        className='w-full h-96 object-cover rounded-lg'
      />
      <h1 className='text-2xl font-semibold mt-4'>{property.address}</h1>
      <p className='mt-2'>Bedrooms: {property.bedrooms}</p>
      <p className='mt-2'>Price: £{property.price}</p>
      <PropertyStatusBadge status={property.status} />
    </div>
  );
};

export default PropertyDetails;
