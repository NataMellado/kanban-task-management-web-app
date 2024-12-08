"use client";
import "@/css/globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import React from "react";
import { BoardProvider, useData } from "@/context/BoardContext";
import Loader from "@/components/Loader/Loader";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const { loading } = useData();
  const [showLoader, setShowLoader] = React.useState(true);

  React.useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShowLoader(false), 500); 
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (showLoader) {
    return <Loader />;
  }

  return (
    <div className="relative flex overflow-hidden flex-col h-dvh bg-lightGrey dark:bg-veryDarkGrey">
      <Header />
      <div className="flex flex-1" >
        <Sidebar />
        <main className={`flex flex-1 overflow-x-auto`}>{children}</main>
      </div>
    </div>
  );
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-lightGrey dark:bg-veryDarkGrey">
      <body
        suppressHydrationWarning={true}
        className={`${plusJakartaSans.className} bg-lightGrey dark:bg-veryDarkGrey`}
      >
        <BoardProvider>
          <LayoutContent>{children}</LayoutContent>
        </BoardProvider>
      </body>
    </html>
  );
}
