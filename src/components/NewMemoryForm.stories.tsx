import { Meta, StoryObj } from '@storybook/react'
import { createMock } from 'storybook-addon-module-mock'

import { NewMemoryForm2 } from './NewMemoryForm2'
import { StorybookWrapper } from './StorybookWrapper'

import * as Navigation from 'next/navigation'

type Story = StoryObj<typeof NewMemoryForm2>

const meta: Meta<typeof NewMemoryForm2> = {
  title: 'Components/NewMemoryForm2',
  component: NewMemoryForm2,
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

// export const Default: Story = {
//   parameters: {
//     moduleMock: {
//       mock: () => {
//         const mockAuth = createMock(auth, 'getUser')
//         mockAuth.mockReturnValue({
//           sub: 'uuid',
//           name: 'Vitor Emidio',
//           avatarUrl: 'https://github.com/vitorsemidio-dev.png',
//         })
//         const mockNextNavigation = createMock(NextNavigation, 'useRouter')
//         mockNextNavigation.mockReturnValue({
//           push: (path: string) => {},
//         } as any)
//         return [mockAuth, mockNextNavigation]
//       },
//     },
//   },
// }

export const Default: Story = {
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(Navigation, 'useRouter')
        mock.mockReturnValue({
          push: (path: string) => {},
        } as any)
        return [mock]
      },
    },
  },
  args: {},
}
