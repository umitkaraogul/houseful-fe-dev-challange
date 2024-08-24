import { render, screen } from '@testing-library/react';
import PropertyDetails from './PropertyDetails';
import { mockProperties } from '@/test/mockData';

describe('PropertyDetails Component', () => {
  const mockProperty = mockProperties[0];
  it('should display the property image', () => {
    render(<PropertyDetails property={mockProperty} />);

    const image = screen.getByAltText('Property');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProperty.image);
  });

  it('should display the property address', () => {
    render(<PropertyDetails property={mockProperty} />);

    const address = screen.getByText(mockProperty.address);
    expect(address).toBeInTheDocument();
  });

  it('should display the number of bedrooms', () => {
    render(<PropertyDetails property={mockProperty} />);

    const bedrooms = screen.getByText(`Bedrooms: ${mockProperty.bedrooms}`);
    expect(bedrooms).toBeInTheDocument();
  });

  it('should display the property price', () => {
    render(<PropertyDetails property={mockProperty} />);

    const price = screen.getByText(`Price: £${mockProperty.price}`);
    expect(price).toBeInTheDocument();
  });

  it('should display the property status badge', () => {
    render(<PropertyDetails property={mockProperty} />);

    const statusBadge = screen.getByText(mockProperty.status, { exact: false });
    expect(statusBadge).toBeInTheDocument();
  });
});
