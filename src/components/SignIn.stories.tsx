import type { Meta, StoryObj } from '@storybook/react'

import { SignIn } from './SignIn'
import { StorybookWrapper } from './StorybookWrapper'

const meta: Meta<typeof SignIn> = {
  title: 'Components/SignIn',
  component: SignIn,
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

type Story = StoryObj<typeof SignIn>

export const Default: Story = {
  args: {},
}
