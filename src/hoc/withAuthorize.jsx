import { useAppState } from '@/store/useAppState';
import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuthorize = (roles) => {
	return function f(Component) {
		const AuthorizedComponent = (props) => {
			const { app } = useAppState();

			if (!roles.includes(app.user?.role)) {
				console.log(
					props.logger.info(
						{ message: 'Unauthrorized acess' },
						app.user?.id,
						Component.name,
					),
				);
				return <Navigate to="/" />;
			}

			// Render the wrapped component if the user has the required role
			return <Component {...(props)} />;
		};

		return AuthorizedComponent;
	};
};

export default withAuthorize;
