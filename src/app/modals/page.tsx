"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

import NewBoardModal from "@/components/Modals/NewBoardModal";

export default function Modals() {
  return (
    <>
      <DefaultLayout>
        <h1>Modals</h1>
        <NewBoardModal onClose={() => {}} />
      </DefaultLayout>
    </>
  );
}
