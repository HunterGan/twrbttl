import {globalCss} from "@/shared/config/theme/index";

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  html: {
    height: '100%'
  },
  body: {
    height: '100%',
    fontFamily: '$regular',
    fontWeight: 'normal',
    fontSize: '$fontSizes$3',
    lineHeight: 1.5,
    background: '#fff',
    color: '$colors$textPrimary'
  },
  a: {
    textDecoration: 'none'
  },
  '#root': {
    height: '100%',
    width: '100%'
  }
})

export default globalStyles
