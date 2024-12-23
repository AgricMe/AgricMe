import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import RQProvider from "@/providers/reactQuery.provider";
import { Toaster } from "react-hot-toast";
import { Suspense } from 'react';
import DotLoader from '@/components/shared/dot-loader';

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AgricMe",
  description: "A social platform for farmers",
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
            <Toaster position="top-right" reverseOrder={false} />
            {children}
          </Suspense>
        </body>
      </RQProvider>
    </html>
  );
}
