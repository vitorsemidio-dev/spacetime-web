import type { Meta, StoryObj } from '@storybook/react'

import { Hero } from './Hero'
import { StorybookWrapper } from './StorybookWrapper'

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['components'],
  argTypes: {},
  decorators: [
    (Story) => (
      <StorybookWrapper>
        <Story />
      </StorybookWrapper>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {},
}
