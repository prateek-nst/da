import { Button, Grid, Typography } from '@mui/material';
import Mifix from '@/assets/svg/Mifix.svg';
import InputComponent from './InputComponent';
import KeyIcon from '@mui/icons-material/Key';
import PasswordIcon from '@mui/icons-material/Password';
import { theme } from '@/theme';
import './styles/SignUpAndLoginForms.scss';

const CreatePasswordForm = () => {
	const setPasswordProps = {
		id: 'setPassword',
		type: 'password',
		startIcon: <KeyIcon className="keyIconCls" />,
		customWidth: '100%',
		helperText: 'enter your password',
	};

	const confirmPasswordProps = {
		id: 'confirmPassword',
		type: 'password',
		startIcon: <PasswordIcon style={{ fontSize: '1.3rem !important' }} />,
		customWidth: '100%',
		helperText: 'enter your password',
	};

	const signUpButtonStyle = {
		textTransform: 'none',
		borderRadius: '0.5rem',
		width: '50%',
		height: '2.5rem',
		color: theme.palette.common.white,
		backgroundColor: theme.palette.primary.main,
		border: 'none',
		buttonWeight: '200',
		marginTop: '3rem',
	};

	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="flex-start"
			sx={{ marginLeft: '30rem !important' }}
		>
			<img src={Mifix} alt="Mifix" style={{ margin: '10% 0 10% 0' }} />
			<Typography style={{ fontWeight: '600', fontSize: '1.75rem' }}>
				Create Password
			</Typography>
			<Grid item>
				<Typography className="labelCls">Set Password</Typography>
				<InputComponent {...setPasswordProps} />
				<Typography className="pwdRulesCls">
					Create a password with the combination of Numeric,
				</Typography>
				<Typography className="pwdRulesCls">
					Letters and Special characters.
				</Typography>
				<Typography className="labelCls">Confirm Password</Typography>
				<InputComponent {...confirmPasswordProps} />
			</Grid>
			<Button
				id="submitBtn"
				variant="contained"
				buttonType="submit"
				style={signUpButtonStyle}
				// onClick={() => {}}
			>
				Sign Up
			</Button>
		</Grid>
	);
};

export default CreatePasswordForm;
