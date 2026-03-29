import { describe, it, expect } from 'vitest';
import DateFormatter, { DateFormatter as DateFormatterClass } from '../src/index';

// Fixed date: Sunday, January 5 2025, 09:03:07
const date = new Date(2025, 0, 5, 9, 3, 7);

describe('format specifiers', () => {
  it('%Y — full year', () => {
    expect(DateFormatter.format('%Y', date)).toBe('2025');
  });

  it('%y — 2-digit year', () => {
    expect(DateFormatter.format('%y', date)).toBe('25');
  });

  it('%d — day with zero padding', () => {
    expect(DateFormatter.format('%d', date)).toBe('05');
  });

  it('%j — day without zero padding', () => {
    expect(DateFormatter.format('%j', date)).toBe('5');
  });

  it('%m — month with zero padding', () => {
    expect(DateFormatter.format('%m', date)).toBe('01');
  });

  it('%n — month without zero padding', () => {
    expect(DateFormatter.format('%n', date)).toBe('1');
  });

  it('%H — hours with zero padding', () => {
    expect(DateFormatter.format('%H', date)).toBe('09');
  });

  it('%G — hours without zero padding', () => {
    expect(DateFormatter.format('%G', date)).toBe('9');
  });

  it('%i — minutes with zero padding', () => {
    expect(DateFormatter.format('%i', date)).toBe('03');
  });

  it('%s — seconds with zero padding', () => {
    expect(DateFormatter.format('%s', date)).toBe('07');
  });

  it('%l — full weekday name (en)', () => {
    expect(DateFormatter.format('%l', date, 'en')).toBe('Sunday');
  });

  it('%D — short weekday name (en)', () => {
    expect(DateFormatter.format('%D', date, 'en')).toBe('Sun');
  });

  it('%F — full month name (en)', () => {
    expect(DateFormatter.format('%F', date, 'en')).toBe('January');
  });

  it('%M — short month name (en)', () => {
    expect(DateFormatter.format('%M', date, 'en')).toBe('Jan');
  });
});

describe('combined formats', () => {
  it('ISO-like date %Y-%m-%d', () => {
    expect(DateFormatter.format('%Y-%m-%d', date)).toBe('2025-01-05');
  });

  it('full datetime %Y-%m-%d %H:%i:%s', () => {
    expect(DateFormatter.format('%Y-%m-%d %H:%i:%s', date)).toBe('2025-01-05 09:03:07');
  });
});

describe('percent escaping', () => {
  it('\\% outputs a literal %', () => {
    expect(DateFormatter.format('\\%Y', date)).toBe('%Y');
  });

  it('mixed escaped and unescaped', () => {
    expect(DateFormatter.format('\\%Y %Y', date)).toBe('%Y 2025');
  });
});

describe('locale', () => {
  it('locale passed to format() is used', () => {
    expect(DateFormatter.format('%l', date, 'fr-FR')).toBe('dimanche');
  });

  it('setLocale() changes the default locale', () => {
    const instance = new DateFormatterClass('en');
    instance.setLocale('fr-FR');
    expect(instance.format('%l', date)).toBe('dimanche');
  });

  it('locale passed to format() takes precedence over setLocale()', () => {
    const instance = new DateFormatterClass('fr-FR');
    expect(instance.format('%l', date, 'en')).toBe('Sunday');
  });
});

describe('unknown specifier', () => {
  it('unknown specifier is left as-is', () => {
    expect(DateFormatter.format('%z', date)).toBe('%z');
  });
});
