import { describe, it, expect } from 'vitest';
import { formatPrice } from '.';

describe('formatPrice', () => {
  it('should format a price', () => {
    expect(formatPrice(100)).toBe('£100');
  });
});
