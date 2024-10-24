import type { Metadata } from "next";
import "@/components/css/form.css";

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
      <main className={`form-layout`}>{children}</main>
    </>
  );
}
