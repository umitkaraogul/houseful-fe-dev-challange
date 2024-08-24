import { render, screen, waitFor } from '@testing-library/react';
import { vi, Mock } from 'vitest';
import propertyService from '@/services/propertyService';
import PropertyListPage from './PropertyListPage';
import { mockProperties } from '@/test/mockData';

// Mock the propertyService module
vi.mock('@/services/propertyService');

describe('PropertyListPage Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render PropertyListPage and display property listings', async () => {
    (propertyService.getProperties as Mock).mockResolvedValue(mockProperties);

    render(<PropertyListPage />);

    await waitFor(() => {
      expect(screen.getByText('Property Listings')).toBeInTheDocument();
      expect(screen.getByText('123 Main St')).toBeInTheDocument();
      expect(screen.getByText('456 Sample Rd')).toBeInTheDocument();
    });
  });
});
