import type { Meta, StoryObj } from '@storybook/react'

import { Profile } from './Profile'
import { StorybookWrapper } from './StorybookWrapper'

// jest.mock('../lib/auth')

const meta: Meta<typeof Profile> = {
  title: 'Components/Profile',
  component: Profile,
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

type Story = StoryObj<typeof Profile>

export const Default: Story = {
  args: {},
}
