import { it, expect, beforeAll } from 'vitest';
import type { StorageProvider } from '@emailjs/browser';
import { createReactNativeStorage } from './createReactNativeStorage';

let storage: StorageProvider;

beforeAll(async () => {
  storage = createReactNativeStorage()!;
  await storage.set('test', 'foo');
});

it('get value', async () => {
  expect(await storage.get('test')).toEqual('foo');
});

it('remove value', async () => {
  await storage.remove('test');
  expect(await storage.get('test')).toEqual(null);
});
