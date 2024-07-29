"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useData } from "@/context/BoardContext";
import { slugify } from "@/utils/slugify";
import NewBoardModal from "@/components/Modals/NewBoardModal";

const HomePage = () => {
  const router = useRouter();
  const { boardData } = useData();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  // Use effect to redirect to the first board if there is one
  useEffect(() => {
    if (boardData.length > 0) {
      const firstBoard = boardData[0];
      router.replace(`/b/${firstBoard.id}/${slugify(firstBoard.name)}`);
    } else {
      setLoading(false);
    }
  }, [boardData, router]);

  // If the page is loading don't show anything
  if (loading) {return};

  // If there are no boards, show a message to create one
  if (boardData.length === 0) {
    return (
      <div className="flex flex-1 flex-col gap-[2rem] items-center justify-center px-4">
        <h1 className="text-center text-headingL font-bold text-mediumGrey">
          No tienes tableros. Crea uno para empezar.
        </h1>
        <button 
          onClick={() => setModalOpen(true)}
          className="text-headingM text-white font-bold bg-mainPurple py-[14px] px-[18px] rounded-[2rem] hover:bg-mainPurpleHover transition ease-in-out whitespace-nowrap"
        >
          + Añadir tablero
        </button>
        {modalOpen && <NewBoardModal onClose={() => setModalOpen(false)} />}
      </div>
    )
  }

};

export default HomePage;
