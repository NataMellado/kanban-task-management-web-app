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
      <div className="relative flex flex-col h-dvh overflow-hidden bg-lightGrey dark:bg-veryDarkGrey">
        <Header />
        <div className="relative flex flex-1">
          <Sidebar />
          <main className={`flex flex-1 overflow-x-auto custom-scrollbar `}>
              {children}
          </main>
        </div>
      </div>
    </>
  );
}
