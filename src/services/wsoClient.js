import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_WSO2_URL,
});

axiosInstance.interceptors.request.use(
	(config) => {
		config.headers = config.headers || {};

		config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
		config.headers['Authorization'] = `Basic ${
			import.meta.env.VITE_INITIAL_TOKEN
		}`;

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

class WSOClient {

	constructor(endpoint) {
		this.endpoint = endpoint;
	}

	getWSOToken(payload) {
		return axiosInstance
			.post(this.endpoint, payload)
			.then((res) => res.data);
	}
}

export default WSOClient;
