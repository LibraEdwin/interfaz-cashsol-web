// @ts-check
import { BLUE_SCALE, COLORS, FONTS, FONTS_SIZES, GRAY_SCALE, SHADOWS } from '../constants';

/**
 * @constant
 * @type {import('../styled').CustomThemeStyled}
 * @default
 */
const THEME_LIGHT = {
  mode: 'light',
  colors: {
    primary: COLORS.blue,
    secondary: COLORS.yellow,
    accent: null,
    info: BLUE_SCALE[300],
    warning: COLORS.orange,
    danger: COLORS.red,
    success: COLORS.green,
    gray: GRAY_SCALE[300],
    light: GRAY_SCALE[0],
    link: null,
    backgroundBody: COLORS.white,
    textBody: GRAY_SCALE[900]
  },
  fonts: {
    fontPrimary: FONTS.roboto,
    fontSecondary: FONTS.quicksand
  },
  fontSizes: {
    body: FONTS_SIZES.base
  },
  shadows: {
    small: SHADOWS.sm,
    default: SHADOWS.base
  }
};

export default THEME_LIGHT;
