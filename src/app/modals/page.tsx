import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import { Metadata } from "next";

import NewBoardModal from "@/components/Modals/NewBoardModal";

export const metadata: Metadata = {
  title: "Frontend Mentor | Kanban Task Manager Web App",
  description: "Kanban Task Manager web app built with Next.js",
};

export default async function Modals() {
  return (
    <>
      <DefaultLayout>
        <h1>Modals</h1>
        <NewBoardModal />
      </DefaultLayout>
    </>
  );
}
