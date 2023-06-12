import type { Meta, StoryObj } from '@storybook/react'

import { EmptyMemories } from './EmptyMemories'
import { StorybookWrapper } from './StorybookWrapper'

const meta: Meta<typeof EmptyMemories> = {
  title: 'Components/EmptyMemories',
  component: EmptyMemories,
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

type Story = StoryObj<typeof EmptyMemories>

export const Default: Story = {
  args: {},
}
