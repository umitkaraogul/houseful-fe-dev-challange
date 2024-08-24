import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filters from './Filters';

describe('Filters Component', () => {
  const mockOnFilterChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render both dropdowns', () => {
    render(<Filters onFilterChange={mockOnFilterChange} />);

    const bedroomSelect = screen.getByTestId('filter-bedrooms');
    const statusSelect = screen.getByTestId('filter-status');

    expect(bedroomSelect).toBeInTheDocument();
    expect(statusSelect).toBeInTheDocument();
  });

  it('should call onFilterChange with the correct filters when bedrooms filter is changed', () => {
    render(<Filters onFilterChange={mockOnFilterChange} />);

    const bedroomSelect = screen.getByTestId('filter-bedrooms');

    fireEvent.change(bedroomSelect, { target: { value: '2' } });

    expect(mockOnFilterChange).toHaveBeenCalledWith({
      bedrooms: 2,
      status: undefined
    });
  });

  it('should call onFilterChange with the correct filters when status filter is changed', () => {
    render(<Filters onFilterChange={mockOnFilterChange} />);

    const statusSelect = screen.getByTestId('filter-status');

    // Change status filter
    fireEvent.change(statusSelect, { target: { value: 'active' } });

    expect(mockOnFilterChange).toHaveBeenCalledWith({
      bedrooms: null,
      status: 'active'
    });
  });

  it('should call onFilterChange with updated filters when both dropdowns are used', () => {
    render(<Filters onFilterChange={mockOnFilterChange} />);

    const bedroomSelect = screen.getByTestId('filter-bedrooms');
    const statusSelect = screen.getByTestId('filter-status');

    // Change bedroom filter
    fireEvent.change(bedroomSelect, { target: { value: '3' } });
    expect(mockOnFilterChange).toHaveBeenCalledWith({
      bedrooms: 3,
      status: undefined
    });

    // Change status filter
    fireEvent.change(statusSelect, { target: { value: 'expired' } });
    expect(mockOnFilterChange).toHaveBeenCalledWith({
      bedrooms: 3,
      status: 'expired'
    });
  });
});
