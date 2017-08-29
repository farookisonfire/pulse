import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  cyan500,
  cyan700,
  red200,
  red400,
  grey100,
  grey400,
  grey500,
  grey800,
  white,
  darkBlack,
  fullBlack,   
} from 'material-ui/styles/colors';

export const muiThemeLight = getMuiTheme({
  palette: {
    primary1Color: grey800,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: red400,
    accent2Color: red200,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey500,
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack,
  },
});

export const muiThemeDark = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: red400,
    accent2Color: red200,
    accent3Color: grey500,
    textColor: white,
    alternateTextColor: darkBlack,
    canvasColor: grey800,
    borderColor: grey500,
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack,
  },
});


