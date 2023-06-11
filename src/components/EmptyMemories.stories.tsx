import type { Meta, StoryObj } from '@storybook/react'

import { EmptyMemories } from './EmptyMemories'

const meta: Meta<typeof EmptyMemories> = {
  title: 'Components/EmptyMemories',
  component: EmptyMemories,
  tags: ['components'],
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="flex h-screen items-center justify-center bg-gray-900 font-sans text-gray-100">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof EmptyMemories>

export const Default: Story = {
  args: {},
}
