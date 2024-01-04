import DI from '@/hoc/DI';
import { useAppState } from '@/store/useAppState';
import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRequired = (props) => {
	const { app } = useAppState();

	if (!app.user) {
		return <Navigate to="/" />;
	}

	return <>{props.children}</>;
};

export default DI(AuthRequired);
