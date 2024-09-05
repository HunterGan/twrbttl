import { styled } from "@/shared/config/theme";

const IconButton = styled('button', {
  position: 'relative',
  display: 'flex',
  boxAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  boxPack: 'center',
  borderRadius: '$radii$2',
  backgroundColor: 'unset',
  border: 'none',
  outline: 'none',
  cursor: 'default',
  overflow: 'hidden',

  '&:hover:after': {
    opacity: 1
  },

  '&:after': {
    content: '',
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '$hoverAlphaPaper',
    opacity: 0
  },

  variants: {
    variant: {
      outlined: {
        border: '1px solid $colors$stroke',
        '&:disabled': {
          borderColor: '$strokeAlpha',
          color: '$textAlphaPrimary'
        },
      },
    },
    size: {
      xs: {
        minHeight: 18,
        minWidth: 18,
        '&:after': {
          height: 18,
          width: 18
        }
      },
      tiny: {
        minHeight: 24,
        minWidth: 24,
        '&:after': {
          height: 24,
          width: 24
        }
      },
      small: {
        minHeight: 28,
        minWidth: 28,
        '&:after': {
          height: 28,
          width: 28
        }
      },
      medium: {
        minHeight: 32,
        minWidth: 32,
        '&:after': {
          height: 32,
          width: 32
        }
      },
      large: {
        minHeight: 48,
        minWidth: 48,
        '&:after': {
          height: 48,
          width: 48
        }
      },
      full: {
        height: '100%',
        minWidth: '100%'
      }
    },
  },
  defaultVariants: {
    size: 'medium'
  }
})

export default IconButton;