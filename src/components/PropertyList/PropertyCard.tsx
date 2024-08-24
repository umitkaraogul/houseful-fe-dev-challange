import { useNavigate } from 'react-router-dom';
import { Property } from '@/types';
import { formatPrice } from '@/util';

export type PropertyCardProps = {
  property: Property;
  onStatusChange: () => void;
};

const PropertyCard = ({ property, onStatusChange }: PropertyCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className='border mb-4 rounded-lg shadow-lg'
      data-testid='property-card'
    >
      <div
        className='p-2 cursor-pointer'
        onClick={() => {
          navigate(`/properties/${property.id}`);
        }}
      >
        <img
          src={property.image}
          alt='Property'
          className='w-full h-48 object-cover rounded-t-lg'
        />
        <div className='px-4 py-2'>
          <h2 className='text-xl font-semibold'>{property.address}</h2>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Price: {formatPrice(property.price)}</p>
          <span
            className={`${
              property.status === 'active' ? 'bg-green-500' : 'bg-red-500'
            } text-white py-1 px-3 rounded-full`}
          >
            {property.status === 'active' ? 'Active' : 'Expired'}
          </span>
        </div>
      </div>
      <div className='cursor-pointer mx-4 mb-2'>
        {property.status === 'active' && (
          <button
            data-testid='status-change-button'
            onClick={() => onStatusChange()}
            className=' bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-700'
          >
            Mark as Expired
          </button>
        )}
      </div>
    </div>
  );
};
export default PropertyCard;
