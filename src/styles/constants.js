// @ts-check

export const RED_SCALE = {
  100: '#ffd8d8',
  200: '#ffbebe',
  300: '#ffa5a5',
  400: '#ff8b8b',
  500: '#FF7272',
  600: '#ff2525',
  700: '#d80000',
  800: '#8b0000',
  900: '#3f0000'
};

export const BLUE_SCALE = {
  0: '#f4fbff',
  100: '#dbf0ff',
  200: '#8ed1ff',
  300: '#42b2ff',
  400: '#0092f4',
  500: '#0064A8',
  600: '#00558e',
  700: '#004675',
  800: '#00365b',
  900: '#002742'
};

export const GREEN_SCALE = {
  100: '#d9ffc8',
  200: '#b6ff95',
  300: '#93ff62',
  400: '#70ff2f',
  500: '#5eff16',
  600: '#46e200',
  700: '#36af00',
  800: '#267c00',
  900: '#174900'
};

export const GRAY_SCALE = {
  0: '#f1f1f1',
  100: '#e4e4e4',
  200: '#d7d7d7',
  300: '#cbcbcb',
  400: '#bebebe',
  500: '#b1b1b1',
  600: '#a4a4a4',
  700: '#8b8b8b',
  800: '#717171',
  900: '#585858',
  1000: '#3e3e3e'
};

export const YELLOW_SCALE = {
  100: '#ffe899',
  200: '#ffe280',
  300: '#ffdd66',
  400: '#ffd74d',
  500: '#FFD133',
  600: '#ffc600',
  700: '#cc9e00',
  800: '#997700',
  900: '#664f00'
};

export const ORANGE_SCALE = {
  500: '#FFBC6E'
};

export const COLORS = {
  blue: BLUE_SCALE[500],
  blueWhite: BLUE_SCALE[100],
  red: RED_SCALE[500],
  orange: ORANGE_SCALE[500],
  yellow: YELLOW_SCALE[500],
  green: GREEN_SCALE[500],
  white: '#fff',
  black: '#000'
};

export const GRADIENTS_COLORS = {
  primary: `linear-gradient(180deg, ${BLUE_SCALE[500]} 38.85%, rgba(0, 100, 168, 0) 100%)`
};

export const FONTS = {
  roboto: '"Roboto", sans-serif',
  quicksand: '"Quicksand", sans-serif'
};

export const SHADOWS = {
  sm: '3px 3px 8px 5px rgba(233, 232, 236, 0.3)',
  base: '6px 6px 10px 8px rgba(233, 232, 236, 0.3)'
};

export const FONTS_SIZES = {
  sm: '0.75rem',
  medium: '0.875rem',
  button: '0.9375rem',
  base: '1rem',
  lead: '1.125rem',
  large: '1.5625rem',
  xlarge: '2rem'
};

export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

export const MEDIA_BREAKPOINTS = {
  mobile: `@media (min-width: ${BREAKPOINTS.sm}px)`,
  tablet: `@media (min-width: ${BREAKPOINTS.md}px)`,
  laptop: `@media (min-width: ${BREAKPOINTS.lg}px)`,
  desktop: `@media (min-width: ${BREAKPOINTS.xl}px)`,
  desktopL: `@media (min-width: ${BREAKPOINTS.xxl}px)`
};

export const CONTAINER_MAX_WIDTHS = {
  sm: '540px',
  md: '720px',
  lg: '1000px',
  xl: '1140px',
  xxl: '1320px'
};

export const TRANSITIONS = {
  base: '0.3s ease'
};

export const Z_INDEXS = {
  header: {
    sticky: 500,
    nav: 1000
  },
  modal: {
    overlay: 1500,
    content: 200
  }
};
