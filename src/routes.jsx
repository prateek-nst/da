import React, { Suspense } from 'react';

import ErrorPage from '@/components/Error/Error';
// import Dhanam from '@/layout/Dhanam';
// import DepositCollect from '@/pages/DepositCollect/DepositCollect';
// import Login from '@/pages/Login/Login';
// import SignUpForm from '@/pages/SignUp/';
import AuthRequired from './components/AuthRequired';
import SignUpForm from './pages/Auth/SignUpForm';
import LoginPage from './pages/Auth/LoginForm';
import CreatePasswordForm from './pages/Auth/CreatePasswordForm';

export const routes = [
	{
		path: '/',
		element: <SignUpForm />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/sign-in',
		element: <LoginPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/create-password',
		element: <CreatePasswordForm />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/',
		element: <Suspense>{/* <Dhanam /> */}</Suspense>,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/deposit-collect',
				element: (
					<Suspense fallback={'Loading ...'}>
						<>100</>
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: '/monitor',
				element: (
					<AuthRequired>
						<>100</>
					</AuthRequired>
				),
				errorElement: <ErrorPage />,
			},
		],
	},
];
