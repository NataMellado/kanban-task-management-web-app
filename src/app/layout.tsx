"use client";
import { Plus_Jakarta_Sans } from "next/font/google";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import "../css/globals.css";

import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import { BoardProvider } from "@/context/BoardContext";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={plusJakartaSans.className}
      >
        {loading ? (
          <Loader />
        ) : (
          <BoardProvider>
            <div className="relative flex overflow-hidden flex-col h-dvh bg-lightGrey dark:bg-veryDarkGrey">
              <Header />
              <div className="flex flex-1">
                <Sidebar />
                <main className={`flex flex-1 overflow-x-auto `}>
                  {children}
                </main>
              </div>
            </div>
          </BoardProvider>
        )}
      </body>
    </html>
  );
}
