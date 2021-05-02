import { DefaultTheme } from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

const theme: DefaultTheme = {
  borderRadius: '16px',
  borderRadiusSection: '100px',
  borderRadiusSectionMobile: '60px',

  colors: {
      fontBlack: '#18191F',
      fontWhite: '#FCFCFC',
      primary: '#5E3AEE',
      primaryDark: '#2A00A2',
      primaryDarkmode: '#BCA4FF',
      primaryLight: '#E4DAFF',
      primaryBg: '#14142B',
      secondary: '#1CC8EE',
      secondaryDark: '#0096B7',
      secondaryDarkmode: '#82E9FF',
      secondaryLight: '#DEF9FF',
      secondaryBg: '#F1FCFF',
      error: '#ED2E7E',
      success: '#00BA88',
      warning: '#F4B740',
  },
};

export { theme };

