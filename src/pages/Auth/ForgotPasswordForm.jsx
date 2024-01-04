import { useState } from 'react';
import InputComponent from './InputComponent';
import { Grid, Typography } from '@mui/material';
import Mifix from '../../src/assets/svg/Mifix.svg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { theme } from '../../theme';
import './styles/SignUpAndLoginPage.scss';

const FortPasswordForm = () => {
	const [formData, setFormData] = useState({
		email: '',
	});
	const emailProps = {
		id: 'emailID',
		name: 'email',
		label: (
			<p>
				Official Email
				<span style={{ color: theme.palette.primary.main }}>*</span>
			</p>
		),
		placeholder: 'Enter your registered email address',
		type: 'email',
		startIcon: <MailOutlineIcon style={{ fontSize: 13 }} />,
		customWidth: '100%',
	};
	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
			style={{ marginLeft: '22rem' }}
		>
			<img src={Mifix} style={{ marginRight: 'auto' }} alt="Mifix" />
			<Typography
				style={{
					marginRight: 'auto',
					marginTop: '3rem',
					fontWeight: 'bold',
					fontSize: '1.35rem',
				}}
			>
				Forgot Password?{' '}
			</Typography>{' '}
			<Typography className="pwdLinkMsgCls">
				Enter your email address below, and we&apos;ll send you a link to
				reset your password.
			</Typography>
			<Grid style={{ marginRight: 'auto', marginTop: '1rem' }}>
				<Typography>
					<p className="passwordResetEmail">
						Email Address
						<span style={{ color: theme.palette.primary.main }}>*</span>
					</p>
				</Typography>
				<InputComponent
					sx={{ width: '100%' }}
					{...emailProps}
					value={formData.email}
					onChange={(e) => {
						const value = e.target.value;
						//const regMatch = /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\/\\-=|]*$/.test(value);
						const regMatch = /^[a-zA-Z]*$/.test(value);
						if (regMatch) {
							setFormData({ ...formData, email: value });
						}
					}}
				/>
			</Grid>
		</Grid>
	);
};

export default FortPasswordForm;
