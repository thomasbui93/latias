import { normalizedDate } from '@/filters/date';

describe('date filter', () => {
  it('should convert date correctly', () => {
    expect(normalizedDate((new Date('2019-01-01')).toString())).toBe('2019-01-01');
  });
  it('should show empty value when missing value', () => {
    expect(normalizedDate()).toBe('');
  });
  it('should show empty value when date is invalid', () => {
    expect(normalizedDate('asdasdad')).toBe('');
  });
});
