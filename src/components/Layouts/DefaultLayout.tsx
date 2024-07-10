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
      <div className="relative h-screen overflow-hidden bg-lightGrey dark:bg-veryDarkGrey">
        <Header />
        <div className="relative flex  overflow-y-auto overflow-x-hidden">
          <Sidebar />
          <main>
            <div className={`mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10`}>
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
