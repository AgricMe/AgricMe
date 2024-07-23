import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgricMe",
  description: "A social platform for farmers",
};

export default function RootLayout({
  children,
  loginmodal,
}: Readonly<{
  children: React.ReactNode
  loginmodal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
         {loginmodal}
        {children}
      </body>
    </html>
  );
}
