import { Meta, StoryObj } from '@storybook/react'
import { createMock } from 'storybook-addon-module-mock'

import * as auth from '../lib/auth'
import { Profile } from './Profile'
import { StorybookWrapper } from './StorybookWrapper'

type Story = StoryObj<typeof Profile>

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

export const Mock: Story = {
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(auth, 'getUser')
        mock.mockReturnValue({
          sub: 'uuid',
          name: 'Vitor Emidio',
          avatarUrl: 'https://github.com/vitorsemidio-dev.png',
        })
        return [mock]
      },
    },
  },
}
