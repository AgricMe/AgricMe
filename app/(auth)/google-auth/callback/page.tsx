'use client';

import DotLoader from '@/components/shared/dot-loader';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function Page() {
	const { push } = useRouter();
	const access_token = useSearchParams().get('access_token');

	useEffect(() => {
		const storeToken = async () => {
			if (access_token) {
				Cookies.set('access_token', access_token, {
					expires: 1,
					secure: true,
					sameSite: 'none',
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
