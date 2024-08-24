import { render, screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import { vi, Mock } from 'vitest';
import PropertyDetailsPage from './PropertyDetailsPage';
import { useProperty } from '@/hooks/useProperty';

// Mock the useProperty hook
vi.mock('@/hooks/useProperty');
const mockUseProperty = useProperty as Mock;

// Mock the useParams hook
vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual('react-router-dom')),
  useParams: vi.fn()
}));

describe('PropertyDetailsPage Component', () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Clear mock state before each test
  });

  it('should display loading indicator when isLoading is true', () => {
    mockUseProperty.mockReturnValue({
      property: null,
      isLoading: true,
      filterById: vi.fn()
    });

    (useParams as Mock).mockReturnValue({ id: '1' });

    render(<PropertyDetailsPage />);

    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  it('should display "Property not found" when property is null', () => {
    mockUseProperty.mockReturnValue({
      property: null,
      isLoading: false,
      filterById: vi.fn()
    });

    (useParams as Mock).mockReturnValue({ id: '999' });

    render(<PropertyDetailsPage />);

    expect(screen.getByText('Property not found')).toBeInTheDocument();
  });

  it('should call filterById with the correct ID on mount', () => {
    const mockFilterById = vi.fn();

    mockUseProperty.mockReturnValue({
      property: null,
      isLoading: true,
      filterById: mockFilterById
    });

    (useParams as Mock).mockReturnValue({ id: '1' });

    render(<PropertyDetailsPage />);

    expect(mockFilterById).toHaveBeenCalledWith(1);
  });
});
