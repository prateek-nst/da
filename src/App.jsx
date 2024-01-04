import 'typeface-poppins';
// import SignUpForm from './components/FullSignUpForm';
import CreatePasswordForm from './components/CreatePasswordForm';
import { Grid } from '@mui/material';

function App() {
	return (
		<Grid container style={{ height: '100vh', display: 'flex' }}>
			{/* <SignUpForm /> */}
			<CreatePasswordForm />
		</Grid>
	);
}

export default App;
