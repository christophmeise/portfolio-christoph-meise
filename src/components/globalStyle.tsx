import { createGlobalStyle } from 'styled-components';
import Manrope200woff from '../../static/fonts/manrope-v4-latin-200.woff';
import Manrope200woff2 from '../../static/fonts/manrope-v4-latin-200.woff2';
import Manrope300woff from '../../static/fonts/manrope-v4-latin-300.woff';
import Manrope300woff2 from '../../static/fonts/manrope-v4-latin-300.woff2';
import Manrope500woff from '../../static/fonts/manrope-v4-latin-500.woff';
import Manrope500woff2 from '../../static/fonts/manrope-v4-latin-500.woff2';
import Manrope600woff from '../../static/fonts/manrope-v4-latin-600.woff';
import Manrope600woff2 from '../../static/fonts/manrope-v4-latin-600.woff2';
import Manrope700woff from '../../static/fonts/manrope-v4-latin-700.woff';
import Manrope700woff2 from '../../static/fonts/manrope-v4-latin-700.woff2';
import Manrope800woff from '../../static/fonts/manrope-v4-latin-800.woff';
import Manrope800woff2 from '../../static/fonts/manrope-v4-latin-800.woff2';
import ManropeRegularwoff from '../../static/fonts/manrope-v4-latin-regular.woff';
import ManropeRegularwoff2 from '../../static/fonts/manrope-v4-latin-regular.woff2';

export const GlobalStyle = createGlobalStyle`
 /* manrope-200 - latin */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 200;
  src: local(''),
       url(${Manrope200woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${Manrope200woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* manrope-300 - latin */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 300;
  src: local(''),
       url(${Manrope300woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${Manrope300woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* manrope-regular - latin */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url(${ManropeRegularwoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${ManropeRegularwoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* manrope-500 - latin */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  src: local(''),
       url(${Manrope500woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${Manrope500woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* manrope-600 - latin */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url(${Manrope600woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${Manrope600woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* manrope-700 - latin */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url(${Manrope700woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${Manrope700woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* manrope-800 - latin */
@font-face {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  src: local(''),
       url(${Manrope800woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${Manrope800woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
ul,
li,
ol {
    font-family: 'Manrope', sans-serif;
}

h1 {
    font-size: 72px;
    font-weight: 800;
}
h2 {
    font-size: 48px;
    font-weight: 800;
}
h3 {
    font-size: 40px;
    font-weight: 800;
}
h4 {
    font-size: 28px;
    font-weight: 800;
}
h5 {
    font-size: 24px;
    font-weight: 600;
}
h6 {
    font-size: 20px;
    font-weight: 500;
}

`;
