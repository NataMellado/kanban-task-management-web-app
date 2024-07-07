import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Mentor | Kanban Task Manager Web App",
  description: "Kanban Task Manager web app built with Next.js",
};

export default async function Home() {
  return (
    <>
      <DefaultLayout>
        <h1>Home</h1>
      </DefaultLayout>
    </>
  );
}
