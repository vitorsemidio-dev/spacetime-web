import type { Meta, StoryObj } from '@storybook/react'

import { Copyright } from './Copyright'

const meta: Meta<typeof Copyright> = {
  title: 'Components/Copyright',
  component: Copyright,
  tags: ['components'],
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="flex h-screen items-center justify-center bg-gray-900">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Copyright>

export const Default: Story = {
  args: {},
}
