import React, { useState } from 'react';
import { PropertyFilterCriteria } from '@/types';

type FiltersProps = {
  onFilterChange: (filters: PropertyFilterCriteria) => void;
};

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [filterCriteria, setFilterCriteria] = useState<PropertyFilterCriteria>({
    bedrooms: null,
    status: undefined
  });

  const handleFilterChange = (filterCriteria: PropertyFilterCriteria) => {
    setFilterCriteria(filterCriteria);
    onFilterChange(filterCriteria);
  };

  return (
    <div className='container mx-auto py-8'>
      <select
        data-testid='filter-bedrooms'
        onChange={(e) => {
          handleFilterChange({
            ...filterCriteria,
            bedrooms: Number(e.target.value)
          });
        }}
      >
        <option value=''>Any Bedrooms</option>
        <option value='1'>1 Bedroom</option>
        <option value='2'>2 Bedrooms</option>
        <option value='3'>3 Bedrooms</option>
        <option value='4'>4+ Bedrooms</option>
      </select>

      <select
        data-testid='filter-status'
        onChange={(e) => {
          handleFilterChange({
            ...filterCriteria,
            status: e.target.value
          });
        }}
      >
        <option value=''>All Statuses</option>
        <option value='active'>Active</option>
        <option value='expired'>Expired</option>
      </select>
    </div>
  );
};

export default Filters;
