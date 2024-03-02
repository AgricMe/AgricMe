import type { Metadata } from "next";
import "../../components/css/dashboard.css"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dashboard-wrapper">
        <div className="sidebar">

        </div>
        <div className="dashboard-children">
            <div className="dashboard-children-cont cursor-pointer">{children}</div>
        </div>
    </div>
  );
}
