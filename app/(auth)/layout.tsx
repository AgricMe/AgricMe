import type { Metadata } from "next";
import "@/components/css/form.css";
import { Suspense } from 'react';
import DotLoader from '@/components/shared/dot-loader';

export const metadata: Metadata = {
  title: "AgricMe",
  description: "A social platform for farmers",
};

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className={`form-layout`}>
        <Suspense fallback={<DotLoader />}>
          {children}
        </Suspense>
      </main>
    </>
  );
}
