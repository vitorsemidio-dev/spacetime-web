import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Profile } from './Profile'

// Mock

import { createMock } from 'storybook-addon-module-mock'
import * as auth from '../lib/auth'

// jest.mock('../lib/auth')

const meta: ComponentMeta<typeof Profile> = {
  title: 'Components/Profile',
  component: Profile,
}
export default meta

// export const Primary: ComponentStoryObj<typeof Profile> = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement)
//     expect(canvas.getByText('Before')).toBeInTheDocument()
//   },
// }

export const Mock: ComponentStoryObj<typeof Profile> = {
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
  // play: async ({ canvasElement, parameters }) => {
  //   const canvas = within(canvasElement)
  //   expect(canvas.getByText('After')).toBeInTheDocument()
  //   const mock = getMock(parameters, React, 'useMemo')
  //   expect(mock).toBeCalled()
  // },
}

export const Action: ComponentStoryObj<typeof Profile> = {
  // parameters: {
  //   moduleMock: {
  //     mock: () => {
  //       const mock = createMock(React, 'useMemo')
  //       return [mock]
  //     },
  //   },
  // },
  // play: async ({ canvasElement, parameters }) => {
  //   const canvas = within(canvasElement)
  //   const mock = getMock(parameters, React, 'useMemo')
  //   mock.mockReturnValue('Action')
  //   userEvent.click(await canvas.findByRole('button'))
  //   await waitFor(() => {
  //     expect(canvas.getByText('Action')).toBeInTheDocument()
  //   })
  // },
}

// const meta: Meta<typeof Profile> = {
//   title: 'Components/Profile',
//   component: Profile,
//   tags: ['components'],
//   argTypes: {},
//   decorators: [
//     (Story) => (
//       <StorybookWrapper>
//         <Story />
//       </StorybookWrapper>
//     ),
//   ],
// }

// export default meta

// type Story = StoryObj<typeof Profile>

// export const Default: Story = {
//   args: {},
// }
