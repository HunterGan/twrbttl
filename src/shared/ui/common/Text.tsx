import { styled } from "@/shared/config/theme";

const Text = styled('span', {
  lineHeight: 'normal',
  variants: {
    ellipsis: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: '100%'
      }
    },
    font: {
      medium: {
        fontFamily: '$medium'
      }
    },
    color: {
      primary: {
        color: '$textPrimary'
      },
      main: {
        color: '$main'
      },
      secondary: {
        color: '$textSecondary'
      }
    }
  }
})

export default Text;