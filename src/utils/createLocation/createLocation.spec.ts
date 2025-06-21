import { it, expect } from 'vitest';
import { createLocation } from './createLocation';

it('test location', () => {
  createLocation();
  expect(location).toEqual(window.location);
});

it('create default location', () => {
  // @ts-expect-error: remove location
  global.location = undefined;
  createLocation();
  expect(location).toEqual({ pathname: 'default' });
});
