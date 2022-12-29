import { styled } from './styles'
import { ComponentProps } from 'react'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$md',
  padding: '$4',
  border: '0',

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$2',
      },
      big: {
        fontSize: '16',
        padding: '$4',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
