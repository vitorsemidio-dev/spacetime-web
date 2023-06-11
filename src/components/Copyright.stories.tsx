import type { Meta, StoryObj } from '@storybook/react'

import { Copyright } from './Copyright'
import { StorybookWrapper } from './StorybookWrapper'

const meta: Meta<typeof Copyright> = {
  title: 'Components/Copyright',
  component: Copyright,
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
type Story = StoryObj<typeof Copyright>

export const Default: Story = {
  args: {},
}
