import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PropertyCard, { PropertyCardProps } from './PropertyCard';
import { Property } from '@/types';

describe('PropertyCard Component', () => {
  const mockProperty: Property = {
    id: 1,
    address: '123 Test St',
    bedrooms: 3,
    price: 250000,
    image: 'https://via.placeholder.com/150',
    status: 'active',
    postcode: ''
  };

  const mockOnStatusChange = vi.fn();

  const setup = (props: Partial<PropertyCardProps> = {}) => {
    return render(
      <MemoryRouter>
        <PropertyCard
          property={mockProperty}
          onStatusChange={mockOnStatusChange}
          {...props}
        />
      </MemoryRouter>
    );
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render the property details correctly', () => {
    setup();

    // Check if image is displayed
    const imgElement = screen.getByAltText('Property');
    expect(imgElement).toHaveAttribute('src', mockProperty.image);

    // Check if address is displayed
    expect(screen.getByText(mockProperty.address)).toBeInTheDocument();

    // Check if bedrooms count is displayed
    expect(screen.getByText(/Bedrooms: 3/)).toBeInTheDocument();

    // Check if formatted price is displayed
    expect(screen.getByText(/Price: £250,000/)).toBeInTheDocument();

    // Check if status badge is displayed
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  /*
  it('should navigate to property details on card click', () => {
    setup();

    const propertyCard = screen.getByTestId('property-card');
    fireEvent.click(propertyCard);

    expect(fireEvent).toHaveBeenCalledWith(`/properties/${mockProperty.id}`);
  });
  */

  it('should call onStatusChange when "Mark as Expired" button is clicked', () => {
    setup();

    const statusChangeButton = screen.getByTestId('status-change-button');
    fireEvent.click(statusChangeButton);

    expect(mockOnStatusChange).toHaveBeenCalled();
  });

  it('should not show "Mark as Expired" button if property status is not active', () => {
    setup({ property: { ...mockProperty, status: 'expired' } });

    const statusChangeButton = screen.queryByTestId('status-change-button');
    expect(statusChangeButton).not.toBeInTheDocument();
  });
});
