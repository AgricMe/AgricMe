'use client';

import DotLoader from '@/components/shared/dot-loader';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
	const { push } = useRouter();
  const isAuthenticated = useSearchParams().get('isAuthenticated');
  console.log(isAuthenticated);

	useEffect(() => {
		const storeToken = async () => {
			if (isAuthenticated) {
				push('/dashboard');
			} else {
				push('/login');
			}
		};
		storeToken();
	}, [push, isAuthenticated]);

	return (
		<div className="flex justify-center items-center h-screen">
			<DotLoader />
		</div>
	);
}
