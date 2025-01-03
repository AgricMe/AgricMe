import { http } from '@/lib/config/axios.config';
import secrets from '@/lib/constants/secrets.const';
import { errorHandler } from '@/lib/utils/error';
import { LoginDTO, SignUpDTO } from '@/schema/dto/auth.dto';
import { useMutateResult } from '@/schema/interfaces/query.interface';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import Cookies from 'js-cookie';

export const useSignUp = (): useMutateResult<{}> => {
	const payload = useMutation({
		mutationKey: ['useSignUp'],
		mutationFn: async (data: SignUpDTO) => {
			const response = await http.post('auth/signup', {
				firstName: data?.firstName,
				lastName: data?.lastName,
				userName: data?.userName,
				email: data?.email,
				password: data?.password,
				bio: data?.bio,
				phoneNumber: data?.phoneNumber,
				location: data?.location,
				job: data?.job,
				interest: data?.interests,
				role: data?.roles,
			});

			return response?.data;
		},

		onError(error) {
			return errorHandler(error);
		},
	});

	return payload;
};

export const useLogin = () => {
	const payload = useMutation({
		mutationKey: ['useLogin'],
		mutationFn: async (data: LoginDTO) => {
			const response = await http.post<{ message: string }>(`/auth/login?rememberMe=${data.rememberMe}`, {
				email: data.email,
				password: data.password,
			});

			return response?.data?.message;
		},
		onError(error) {
			return errorHandler(error);
		},
	});
	return payload;
};

export const useSignInWithAccessToken = () => {
	const payload = useMutation({
		mutationKey: ['useSignInWithAccessToken'],
		mutationFn: async (data: { access_token: string }) => {
			const response = await http.post<{ message: string }>('/auth/access_token-signIn', {
				access_token: data.access_token,
			});

			return response?.data?.message;
		},
		onError(error) {
			return errorHandler(error);
		},
	});
	return payload;
};

export const logout = () => {
	Cookies.remove('access_token');
	toast.success('Logged Out Successfully');

	if (typeof window != 'undefined') {
		window.location.href = '/login';
	}
};

export const useSignInWithGoogle = () => {
	if (typeof window != 'undefined') {
		window.location.href = `${secrets.apiUrl}/auth/google`;
	}
};

export const useSignInWithFaceBook = () => {
	if (typeof window != 'undefined') {
		window.location.href = `${secrets.apiUrl}/auth/facebook`;
	}
};
