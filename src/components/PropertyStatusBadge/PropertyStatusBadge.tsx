import React from 'react';
import { PropertyStatus } from '@/types';

export type PropertyStatusBadgeProps = {
  status: PropertyStatus;
};

const PropertyStatusBadge: React.FC<PropertyStatusBadgeProps> = ({
  status
}) => {
  return (
    <span
      className={`${
        status === 'active' ? 'bg-green-500' : 'bg-red-500'
      } text-white py-1 px-3 rounded-full`}
    >
      {status === 'active' ? 'Active' : 'Expired'}
    </span>
  );
};

export default PropertyStatusBadge;
