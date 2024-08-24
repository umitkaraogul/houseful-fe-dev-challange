import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PropertyListPage', async () => {
  render(<App />);

  expect(screen.getByText('Property Listings')).toBeVisible();
});
