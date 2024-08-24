// PropertList.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PropertList from './PropertyList';
import { MemoryRouter } from 'react-router-dom';
import { mockProperties } from '@/test/mockData';

describe('PropertList Component', () => {
  const mockOnStatusChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render a list of properties', () => {
    render(
      <MemoryRouter>
        <PropertList
          properties={mockProperties}
          onStatusChange={mockOnStatusChange}
        />
      </MemoryRouter>
    );
    const propertyCards = screen.getAllByTestId('property-card');
    expect(propertyCards).toHaveLength(mockProperties.length);
  });

  it('should call onStatusChange with updated property when status is changed', () => {
    render(
      <MemoryRouter>
        <PropertList
          properties={mockProperties}
          onStatusChange={mockOnStatusChange}
        />
      </MemoryRouter>
    );

    // Simulate status change for the first property
    const firstPropertyButton = screen.getAllByTestId(
      'status-change-button'
    )[0];
    fireEvent.click(firstPropertyButton);

    // Check if onStatusChange is called with the correct property
    expect(mockOnStatusChange).toHaveBeenCalledTimes(1);
    expect(mockOnStatusChange).toHaveBeenCalledWith({
      ...mockProperties[0],
      status: 'expired'
    });
  });
});
