import { useEffect } from 'react';
import PropertyDetails from '@/components/PropertyDetails';
import { useProperty } from '@/hooks/useProperty';
import { Link, useParams } from 'react-router-dom';

const PropertyDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { property, isLoading, filterById } = useProperty();

  useEffect(() => {
    if (id) {
      filterById(Number(id));
    }
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className='container mx-auto'>
      <nav className='text-sm px-2 mt-2'>
        <Link to='/' className='text-blue-600 hover:underline'>
          Back to Search Results
        </Link>
      </nav>
      <PropertyDetails property={property} />
    </div>
  );
};

export default PropertyDetailsPage;
