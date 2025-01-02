'use client';

import DotLoader from '@/components/shared/dot-loader';
import { useSignInWithAccessToken } from '@/services/auth.service';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function Page() {
	const { push } = useRouter();
	const access_token = useSearchParams().get('access_token');
	const signInMutation = useSignInWithAccessToken();

	useEffect(() => {
		const storeToken = async () => {
			if (access_token) {
				await signInMutation.mutateAsync({ access_token });
				toast.success('SignIn Successful', {
					duration: 3000,
					id: 'googleSignIn',
				});
				push('/dashboard');
			} else {
				push('/login');
			}
		};
		storeToken();
	}, [push, access_token]);

	return (
		<div className="flex justify-center items-center h-screen">
			<DotLoader />
		</div>
	);
}
