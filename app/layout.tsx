import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import RQProvider from '@/providers/reactQuery.provider';
import { Suspense } from 'react';
import DotLoader from '@/components/shared/dot-loader';
import { Toaster } from 'sonner';

const manrope = Manrope({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
	title: 'AgricMe',
	description: 'A social platform for farmers',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<RQProvider>
				<body className={manrope.className}>
					<Suspense fallback={<DotLoader />}>
						<Toaster position="bottom-right" richColors />
						{children}
					</Suspense>
				</body>
			</RQProvider>
		</html>
	);
}
