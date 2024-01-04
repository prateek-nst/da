import { getStorage } from '@/utils/common';
import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_UMS_BASE_URL,
});

const storage = getStorage();

axiosInstance.interceptors.request.use(
	(config) => {
		config.headers = config.headers || {};

		const wsoToken = storage.getItem('wsoToken');

		if (wsoToken) {
			config.headers['Authorization'] = `Bearer ${wsoToken}`;
		}

		config.headers['Content-Type'] = 'application/json';

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

class UMSClient {

	constructor(endpoint) {
		this.endpoint = endpoint;
	}

	login(payload) {
		return axiosInstance
			.post(this.endpoint, payload)
			.then((res) => res.data);
	}
}

export default UMSClient;
