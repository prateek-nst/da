import { useMemo, useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import InputComponent from './InputComponent';

// import LoginForm from './FullLoginForm';
// import PasswordLinkInfo from './PasswordsetupLinkInfo';

import LoginImage from '@/assets/svg/LoginImage';
import Mifix from '@/assets/svg/Mifix.svg';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { theme } from '@/theme';
import './styles/SignUpAndLoginForms.scss';
import { Link } from 'react-router-dom';
import DI from '@/hoc/DI';

const SignUpForm = (props) => {
	console.log(props);
	props.logger.info({ message: 'some info' }, 'null', 'user1');

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
	});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const fullNameProps = {
		id: 'firstName',
		label: (
			<p>
				Full Name<span style={{ color: theme.palette.primary.main }}>*</span>
			</p>
		),
		placeholder: 'Enter your first name',
		type: 'text',
		startIcon: <PersonOutlineIcon style={{ fontSize: 'medium' }} />,
		customWidth: '90%',
		helperText: 'enter your first name',
	};

	const lastNameProps = {
		id: 'lastName',
		placeholder: 'Enter your last name',
		type: 'text',
		customWidth: '90%',
		helperText: 'enter your last name',
	};

	const emailProps = {
		id: 'emailID',
		label: (
			<p>
				Official Email
				<span style={{ color: theme.palette.primary.main }}>*</span>
			</p>
		),
		placeholder: 'Enter your official email id',
		type: 'email',
		startIcon: <MailOutlineIcon style={{ fontSize: 13 }} />,
		customWidth: '70%',
		helperText: 'invalid email id',
	};

	const submitButtonStyle = {
		textTransform: 'none',
		borderRadius: '0.5rem',
		width: '70%',
		height: '2.5rem',
		color: theme.palette.common.white,
		backgroundColor: isSubmitted
			? theme.palette.primary.light
			: theme.palette.primary.main,
		border: 'none',
		buttonWeight: '200',
	};

	const memoizedLoginImage = useMemo(() => <LoginImage />, []);

	// const [showSignUp, setShowSignUp] = useState(true);
	// const [showLogin, setShowLogin] = useState(false);

	return (
		<>
			<Grid container style={{ height: '100vh' }}>
				<Grid item md={6} xs={6} className="imgContainer">
					{memoizedLoginImage}
				</Grid>
				<Grid
					container
					xs={6}
					md={6}
					alignItems="center"
					justifyContent="center"
				>
					<Grid item style={{ marginBottom: '7.5rem' }}>
						<img
							src={Mifix}
							alt="Mifix"
							style={{ marginTop: 0, marginRight: '25.5rem' }}
						/>
						<p className="accountCls">
							Have an Account?{' '}
							<span
								style={{
									color: theme.palette.primary.main,
									fontWeight: '700',
									cursor: 'pointer',
									fontSize: '0.875rem',
								}}
								// onClick={() => {
								// 	setShowSignUp(false);
								// 	setShowLogin(true);
								// }}
							>
								<Link to="/sign-in">Sign In</Link>
							</span>
						</p>
					</Grid>
					<Grid
						container
						direction="column"
						style={{ margin: '-10rem 10% 10% 10%' }}
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
							Sign up your account{' '}
						</Typography>{' '}
						<Grid item>
							<Typography className="labelCls">
								<p>
									Full Name
									<span
										style={{
											color: theme.palette.primary.main,
										}}
									>
										*
									</span>
								</p>
							</Typography>
							<Grid item style={{ display: 'flex' }}>
								<Grid container spacing={0}>
									<Grid xs={4.4}>
										<InputComponent
											{...fullNameProps}
											value={formData.firstName}
											onChange={(e) => {
												const value = e.target.value;
												const regMatch = /^[a-zA-Z]*$/.test(
													value,
												);
												if (regMatch) {
													setFormData({
														...formData,
														fullName: value,
													});
												}
											}}
											isSubmitted={isSubmitted}
										/>
									</Grid>
									<Grid xs={4.4}>
										<InputComponent
											style={{ marginTop: 'auto' }}
											{...lastNameProps}
											value={formData.lastName}
											onChange={(e) => {
												const value = e.target.value;
												const regMatch = '^[a-zA-Z]+$'.test(
													value,
												);
												if (regMatch) {
													setFormData({
														...formData,
														lastName: value,
													});
												}
											}}
											isSubmitted={isSubmitted}
										/>
									</Grid>
								</Grid>
							</Grid>
							<Typography className="labelCls">
								<p>
									Official Email
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
								sx={{ width: '100%' }}
								{...emailProps}
								value={formData.email}
								isSubmitted={isSubmitted}
								onChange={(e) => {
									const emailInput = e.target.value;
									const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
									const isValid = emailRegex.test(emailInput);
									if (isValid) {
										setFormData({
											...formData,
											email: emailInput,
										});
									}
								}}
							/>
							<Grid item xs={12} sx={{ pt: 3.5 }}>
								<Button
									id="submitBtn"
									variant="contained"
									buttonType="submit"
									style={submitButtonStyle}
									onClick={() => {
										document.getElementById(
											'submitBtn',
										).style.backgroundColor =
											theme.palette.primary.light;
										// setShowLogin(false);
										// setShowSignUp(false);
										setIsSubmitted(true);
									}}
								>
									Submit
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default DI(SignUpForm);
