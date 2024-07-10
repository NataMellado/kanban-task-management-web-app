"use client";
import { Plus_Jakarta_Sans } from "next/font/google";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import "../css/globals.css";

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
      <body suppressHydrationWarning={true} className={plusJakartaSans.className}>
        {loading? <Loader /> : children}
      </body>
    </html>
  );
}

