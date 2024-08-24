import { describe, it, expect } from 'vitest';
import { formatPrice, formatFilterCriteria } from '.';

describe('Util', () => {
  describe('formatPrice', () => {
    it('should format a price', () => {
      expect(formatPrice(100)).toBe('£100');
    });
  });
  describe('formatFilterCriteria', () => {
    it('should format a filter criteria', () => {
      expect(formatFilterCriteria({ bedrooms: 2, status: 'active' })).toBe(
        'bedrooms=2&status=active'
      );
    });
    it('should format a filter criteria with no params', () => {
      expect(formatFilterCriteria()).toBe('');
    });
  });
});
