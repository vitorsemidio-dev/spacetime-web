import type { StorybookConfig } from '@storybook/nextjs'

/**
 * @see {@link https://storybook.js.org/recipes/tailwindcss Documentation}
 */
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: true,
      },
    },
    // {
    //   name: '@storybook/addon-coverage',
    //   options: {
    //     istanbul: {
    //       exclude: ['**/components/**/index.ts'],
    //     },
    //   },
    // },
    'storybook-addon-module-mock',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  // features: {
  //   storyStoreV7: true,
  // },
  // typescript: {
  //   reactDocgen: 'react-docgen',
  // },
  docs: {
    autodocs: 'tag',
  },
}
export default config
