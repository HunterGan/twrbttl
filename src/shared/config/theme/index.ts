import { createStitches, createTheme } from '@stitches/react';
import { palette } from "@/shared/config/theme/config";

export const {
  styled,
  theme,
  globalCss
} = createStitches({
  media: {
    xs: '(min-width: 0px)',
    sm: '(min-width: 768px)',
    lg: '(min-width: 1440px)'
  },
  theme: {
    colors: {
      // main
      main: palette.light.background.accent,

      // paper
      paper: palette.light.background.primary,
      paperSecondary: palette.light.background.secondary,

      //stroke
      stroke: palette.light.stroke.default,
      strokeAccent: '#428BCA',
      strokeAlpha: 'rgba(216,221,225,0.65)',

      // text
      textPrimary: palette.light.text.primary,
      textSecondary: palette.light.text.secondary,
      textAlphaPrimary: 'rgba(36,40,44,0.5)',

      // icon
      iconPrimary: palette.light.icon.secondary,
      iconSecondary: palette.light.icon.secondary,
      iconTertiary: '#A6ADB4',

      // special
      contrastWhite: '#FFFFFF',
      contrastBlack: '#24282C',

      // alpha
      alpha: 'rgba(243, 245, 248, 0.48)',

      // hover
      hoverMain: palette.light.hover.background.accent,
      hoverPaper: palette.light.background.primary,
      hoverPaperSecondary: '#BFC5CB',
      hoverPaperNegative: '#AD1F00',
      hoverAlphaPaper: 'rgba(191, 197, 203, 0.24)',

      // status
      success: palette.light.status.success,
      danger:  palette.light.status.danger
    },
    fonts: {
      regular: `Inter-Regular, sans-serif`,
      medium: 'Inter-Medium, sans-serif'
    },
    fontSizes: {
      1: '11px',
      2: '12px',
      3: '13px',
      4: '14px',
      5: '15px',
      6: '20px',
      7: '24px',
      8: '32px'
    },
    space: {
      1: '6px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
      7: '64px',
    },
    sizes: {
      1: '24px',
      2: '28px',
      3: '32px',
      4: '48px',
    },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px'
    },
    shadows: {
      xs: '0px 16px 16px 0px #00000029',
      s: '0px 4px 8px 0px rgba(47, 43, 67, 0.10)',
      m: '0px 6px 12px 0px rgba(47, 43, 67, 0.10)',
      l: '0px 8px 24px 0px rgba(47, 43, 67, 0.10)',
      xl: '0px 12px 36px 0px rgba(47, 43, 67, 0.12)',
      1: '0px 1px 3px 0px rgba(47, 43, 67, 0.10)',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    zIndices: {},
    transitions: {}
  },
});

export const darkTheme = createTheme({
  colors: {
    // main
    main: '#428BCA',

    // paper
    paper: '#F0F0F0',
    paperSecondary: '#E4E4E4',

    //stroke
    stroke: '#D8DDE1',
    strokeAccent: '#428BCA',
    strokeAlpha: 'rgba(216,221,225,0.65)',

    // text
    textPrimary: '#24282C',
    textSecondary: '#626970',
    textAlphaPrimary: 'rgba(36,40,44,0.5)',

    // icon
    iconPrimary: '#24282C',
    iconSecondary: '#626970',
    iconTertiary: '#A6ADB4',

    // special
    contrastWhite: '#FFFFFF',
    contrastBlack: '#24282C',

    // alpha
    alpha: 'rgba(243, 245, 248, 0.48)',

    // hover
    hoverMain: '#59A2E1',
    hoverPaper: '#F3F5F8',
    hoverPaperSecondary: '#BFC5CB',
    hoverPaperNegative: '#AD1F00',
    hoverAlphaPaper: 'rgba(191, 197, 203, 0.24)',

    // status
    success: '#71A600',
    danger: '#FF0000'
  },
});
