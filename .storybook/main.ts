import { fileURLToPath } from 'node:url';
import { defineMain } from '@storybook/react-vite/node';

const config = defineMain({
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs', fileURLToPath(new URL('./local-preset.ts', import.meta.url))],
  framework: '@storybook/react-vite',
});

export default config;
