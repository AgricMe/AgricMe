import type { Metadata } from "next";
import '@/components/css/form.css'
// import { Roboto, Open_Sans } from "next/font/google";
// import "./globals.css";

// const inter = Open_Sans({ subsets: ["cyrillic"], weight: "300" });

export const metadata: Metadata = {
  title: "Login",
  description: "Login to AgricMe",
};

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <main className={`form-layout`}>
            {children}
        </main>
    </>
  );
}
