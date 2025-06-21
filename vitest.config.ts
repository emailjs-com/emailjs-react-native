import { defineConfig } from 'vitest/config';

export default defineConfig(({}) => ({
  test: {
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      exclude: ['cjs/**', 'mjs/**', 'eslint.config.mjs', 'vitest.config.ts'],
    },
    include: ['src/**/*.spec.ts'],
    exclude: ['node_modules', 'cjs/**', 'mjs/**'],
  },
}));
