import { styled } from "@/shared/config/theme";

const Button = styled('button', {
  display: 'inline-flex',
  boxAlign: 'center',
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'center',
  boxPack: 'center',
  whiteSpace: 'nowrap',
  borderRadius: '$radii$2',
  color: '$textPrimary',
  fontFamily: '$fonts$regular',
  fontSize: '$fontSizes$3',
  padding: '6px 8px',
  outline: 'none',
  border: 'none',
  cursor: 'default',

  '&:hover:enabled': {
    backgroundColor: '$hoverAlphaPaper'
  },

  variants: {
    fullWidth: {
      true: {
        width: '100%'
      }
    },
    variant: {
      text: {
        backgroundColor: 'unset',
        '&:disabled': {
          color: '$textAlphaPrimary'
        },
      },
      contained: {
        '&:disabled': {
          backgroundColor: '$paperSecondary',
          color: '$textSecondary'
        },
      },
      outlined: {
        backgroundColor: 'unset',
        border: '0.5px solid $colors$stroke',
        '&:disabled': {
          borderColor: '$strokeAlpha',
          color: '$textAlphaPrimary'
        },
      }
    },
    color: {
      grey: {
        color: '$colors$textSecondary'
      },
      primary: {
        color: '$colors$main'
      },
      negative: {
        color: '$paperNegative',
      },

    },
    size: {
      tiny: {
        height: 24,
        fontSize: 12
      },
      small: {
        height: 28,
        fontSize: 12
      },
      medium: {
        height: 32
      },
      large: {
        height: 48
      }
    }
  },

  compoundVariants: [
    {
      variant: 'contained',
      color: 'grey',
      css: {
        backgroundColor: '$paper',
        color: '$textPrimary',
        '&:hover:enabled': {
          backgroundColor: '$paperSecondary'
        },
      },
    },
    {
      variant: 'contained',
      color: 'primary',
      css: {
        backgroundColor: '$colors$main',
        color: '$contrastWhite',
        '&:hover:enabled': {
          backgroundColor: '$colors$hoverMain'
        },
      },
    },
    {
      variant: 'contained',
      color: 'negative',
      css: {
        backgroundColor: '$paperNegative',
        color: '#fff',
        '&:hover:enabled': {
          backgroundColor: '$colors$hoverPaperNegative',
        }
      },
    },

    // Outlined
    {
      variant: 'outlined',
      color: 'grey',
      css: {
        borderColor: '$colors$stroke',
        color: '$colors$textPrimary',
      },
    },
    {
      variant: 'outlined',
      color: 'primary',
      css: {
        borderColor: '$colors$main',
        color: '$colors$textSecondary',
      },
    },
    {
      variant: 'outlined',
      color: 'negative',
      css: {
        borderColor: '$colors$paperNegative',
        color: '$colors$textSecondary',
      },
    },
  ],

  defaultVariants: {
    variant: 'text',
    color: 'grey',
    size: 'small',
  }
})

export default Button;