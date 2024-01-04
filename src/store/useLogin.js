import UMSClient from '@/services/umsClient';
import { useMutation } from '@tanstack/react-query';

export interface Request {
	userName: string;
	password: string;
}

export interface Response {
	status: number;
	message: string;
	data?: {
		isRestPassword: string;
		userName: string;
		id: string;
		role: string;
		lastLogin: string;
		name: string;
		mobileNumber: string;
		accessToken: string;
		refreshToken: string;
		profileIcon: string;
	};
}

const useLogin = () => {
	const umsClient = new UMSClient('/auth/login');

	return useMutation({
		mutationFn: (data: Request) =>
			umsClient.login<Request, Response>({
				userName: data.userName,
				password: data.password,
			}),
	});
};

export default useLogin;
