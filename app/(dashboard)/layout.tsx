"use client";

import type { Metadata } from "next";
import "../../components/css/dashboard.css";
import { cn } from "@/lib/utils/cn";
import SideBarElements from "@/components/dashboard/SideBarElements";

const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div
          className={cn(
            "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border-neutral-200 dark:border-neutral-700",
            "h-screen"
          )}
        >
          <SideBarElements />
          <div className="dashboard-wrapper">
            <div className="dashboard-children">{children}</div>
          </div>
        </div>
}
