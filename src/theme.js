import { createTheme } from '@mui/material/styles';
const primaryMain = '#C4161C';
const primaryLight = '#8794C2';
const secondaryMain = '#DFEFFF';
const grey = '#A7A6A6';
const white = '#ffffff';
const platinum = '#E1E1E1';
const whitesmoke = '#f3f3f3';
const buttonDisableBackgroundColor = '#E1E1E1';
const downloadLink = '#759AC1';
const oldSilverGrey = '#838383';
const disableButtonBgColor = '#D9D9D9';
const disableButtonColor = '#A4A4A4';
const inprogress = '#F1A634';
const completed = '#26922B';
const verified = '#01468E';
const rejected = '#EF0202';
const active = '#09B66D';
const inactive = '#FF3D57';

import PoppinsReg from '@/assets/fonts/Poppins/Poppins-Regular.ttf';

const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: `
        @font-face {
          font-family: 'PoppinsReg';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('PoppinsReg'), local('Poppins-Regular'), url(${PoppinsReg}) format('opentype');
        }
      `,
		},
	},

	palette: {
		primary: {
			main: primaryMain,
			light: primaryLight,
		},
		secondary: {
			main: secondaryMain,
		},
		common: {
			grey: grey,
			white: white,
			whiteSmoke: whitesmoke,
			platinum: platinum,
			silverGrey: oldSilverGrey,
		},
		button: {
			buttonDisableBackgroundColor: buttonDisableBackgroundColor,
		},
		download: {
			link: downloadLink,
		},
		status: {
			active: active,
			inactive: inactive,
		},
		uploadhistorystatus: {
			inProgress: inprogress,
			completed: completed,
			verified: verified,
			rejected: rejected,
		},
	},
	typography: {
		fontSize: 16,
		fontWeight: 400,
		fontFamily: 'PoppinsReg',
	},
	spacing: (factor) => `${0.25 * factor}rem`, // Custom spacing function,
});

export { theme };
