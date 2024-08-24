import { render, screen } from '@testing-library/react';
import PropertyStatusBadge from './PropertyStatusBadge';

describe('PropertyStatusBadge Component', () => {
  it('should display "Active" text when the status is "active"', () => {
    render(<PropertyStatusBadge status='active' />);

    const badge = screen.getByText('Active');
    expect(badge).toBeInTheDocument();
  });

  it('should display "Expired" text when the status is "expired"', () => {
    render(<PropertyStatusBadge status='expired' />);

    const badge = screen.getByText('Expired');
    expect(badge).toBeInTheDocument();
  });
});
