// import APIClient from '@/services/apiClient';
import WSOClient from '@/services/wsoClient';
import { useQuery } from '@tanstack/react-query';



const wsoClient = new WSOClient('/oauth2/token');

const useWso = (
	config = {
		grant_type: 'client_credentials',
		scope: 'some_unique',
	},
) => {
	return useQuery<Response, Error>({
		queryKey: ['wsoToken'],
		queryFn: () =>
			wsoClient.getWSOToken({
				grant_type: config.grant_type,
				scope: config.scope,
			}),
		retry: 3,
		staleTime: 1000 * 60 * 60 * 24,
		refetchOnWindowFocus: false,
	});
};

export default useWso;
