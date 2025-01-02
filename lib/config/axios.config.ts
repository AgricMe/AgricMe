import axios from 'axios';
import { toast } from 'sonner';
import secrets from '../constants/secrets.const';
import Cookies from 'js-cookie';

export const http = axios.create({
	baseURL: secrets.apiUrl,
	withCredentials: true,
});

export const https = axios.create({
	baseURL: secrets.apiUrl,
	withCredentials: true,
});

https.interceptors.response.use(
	(response) => response,
	async (error) => {
		if (error.response?.status === 403) {
			Cookies.remove('access_token');
			await toast.error('Session Expired', {
				duration: 3000,
			});
			window.location.href = '/login';
		}
		return Promise.reject(error);
	}
);
