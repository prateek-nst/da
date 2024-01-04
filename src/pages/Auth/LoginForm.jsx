import LoginImage from '@/assets/svg/LoginImage';
import Mifix from '@/assets/svg/Mifix.svg';
import { theme } from '@/theme';
import KeyIcon from '@mui/icons-material/Key';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	Typography,
} from '@mui/material';

import { useMemo, useState } from 'react';

import InputComponent from './InputComponent';
import './styles/SignUpAndLoginForms.scss';
import { Link } from 'react-router-dom';

const LoginPage = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const emailProps = {
		id: 'emailID',
		placeholder: 'Enter your registered email address',
		type: 'text',
		startIcon: <MailOutlineIcon style={{ fontSize: 12 }} />,
		customWidth: '60%',
		helperText: 'invalid email id',
	};
	const passwordProps = {
		id: 'password',
		placeholder: 'Enter your password',
		type: 'password',
		startIcon: <KeyIcon className="keyIconCls" />,
		customWidth: '60%',
		helperText: 'enter your password',
	};
	const signInButtonStyle = {
		textTransform: 'none',
		borderRadius: '0.5rem',
		width: '60%',
		height: '2.5rem',
		color: theme.palette.common.white,
		backgroundColor: theme.palette.primary.main,
		border: 'none',
		buttonWeight: '200',
	};
	const memoizedLoginImage = useMemo(() => <LoginImage />, []);

	return (
		<>
			<Grid container style={{ height: '100vh' }}>
				<Grid item md={6} xs={6} className="imgContainer">
					{memoizedLoginImage}
				</Grid>
				<Grid
					container
					md={6}
					xs={6}
					alignItems="center"
					justifyContent="center"
				>
					<Grid item align="center" width="50%" className="MifixContainer">
						<img
							src={Mifix}
							alt="Mifix"
							style={{ margin: '3rem 29.5rem 0rem 4rem' }}
						/>
						<p className="needAccountCls">
							Need an Account?{' '}
							<span
								style={{
									color: theme.palette.primary.main,
									fontWeight: '700',
									cursor: 'pointer',
									fontSize: '0.875rem',
								}}
								// onClick={() => {
								// 	setShowLogin(false);
								// }}
							>
								<Link to="/">Sign Up</Link>
							</span>
						</p>
					</Grid>
					<Grid
						container
						direction="column"
						style={{ margin: '10% 10% 13% 10%' }}
					>
						<Typography>
							Welcome to{' '}
							<span
								style={{
									color: theme.palette.primary.main,
									fontWeight: 600,
								}}
							>
								Direct Assignment
							</span>
						</Typography>
						<Typography
							style={{ fontWeight: 'bold', fontSize: '1.35rem' }}
						>
							Sign up your account
						</Typography>
						<Grid item>
							<Typography className="labelCls">
								<p>
									Email Address
									<span
										style={{
											color: theme.palette.primary.main,
										}}
									>
										*
									</span>
								</p>
							</Typography>
							<InputComponent
								{...emailProps}
								isSubmitted={isSubmitted}
							/>
							<Typography className="labelCls">
								<p>
									Password
									<span
										style={{
											color: theme.palette.primary.main,
										}}
									>
										*
									</span>
								</p>
							</Typography>
							<InputComponent
								{...passwordProps}
								isSubmitted={isSubmitted}
							/>
							<Grid style={{ display: 'flex', alignItems: 'center' }}>
								<FormControlLabel
									control={<Checkbox size="small" />}
									label={
										<Typography
											variant="body2"
											style={{ fontSize: 12 }}
										>
											Stay sign in
										</Typography>
									}
								/>
								<Typography className="forgotPwdCls">
									Forgot password?
								</Typography>
							</Grid>

							<Box sx={{ marginTop: '2rem' }}>
								<Button
									id="submitBtn"
									variant="contained"
									buttonType="submit"
									style={signInButtonStyle}
									disabledColor={theme.palette.common.white}
									disabledBackground={
										theme.palette.button
											.buttonDisableBackgroundColor
									}
									onClick={() => {
										document.getElementById(
											'submitBtn',
										).style.backgroundColor =
											theme.palette.primary.light;
										setIsSubmitted(true);
									}}
								>
									Sign In
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default LoginPage;
