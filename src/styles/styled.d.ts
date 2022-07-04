import 'styled-components';

export interface CustomThemeStyled extends DefaultTheme {
  mode: 'light' | 'dark',
  colors: {
    primary: string,
    secondary: string,
    accent: string,
    info: string,
    warning: string,
    danger: string,
    success: string
    link: string,
    light: string,
    gray: string,
    backgroundBody: string,
    textBody: string,
  },
  fonts: {
    fontPrimary: string,
    fontSecondary: string
  },
  fontSizes: {
    body: string
  },
  shadows: {
    small: string,
    default: string
  }
}

export interface ThemePropsInterface {
  color?: 'primary' | 'secondary' | 'accent' | 'info' | 'warning' | 'danger' | 'success' | 'link' | 'backgroundBody' | 'textBody' | 'light' | 'gray'
}
