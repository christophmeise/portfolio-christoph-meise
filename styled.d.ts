import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    borderRadiusBig: string;
    borderRadiusSection: string,
    borderRadiusSectionMobile: string,

    colors: {
      fontBlack: string;
      fontWhite: string;
      primary: string;
      primaryDark: string;
      primaryDarkmode: string;
      primaryLight: string;
      primaryBg: string;
      secondary: string;
      secondaryDark: string;
      secondaryDarkmode: string;
      secondaryLight: string;
      secondaryBg: string;
      error: string;
      success: string;
      warning: string;
    };
  }
}
