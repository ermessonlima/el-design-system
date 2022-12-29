import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@el-ui/react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Button',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
