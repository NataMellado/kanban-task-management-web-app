"use client";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative flex overflow-hidden flex-col h-dvh bg-lightGrey dark:bg-veryDarkGrey">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className={`flex flex-1 overflow-x-auto `}>
              {children}
          </main>
        </div>
      </div>
    </>
  );
}
