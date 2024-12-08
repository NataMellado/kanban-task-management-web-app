"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useData } from "@/context/BoardContext";
import NewColumnModal from "@/components/Modals/NewColumnModal";
import ColumnCard from "@/components/Cards/column";
import NewColumnCard from "@/components/Cards/newColumn";

const BoardPage = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const { boardId } = useParams() as { boardId: string };
  const { getBoard } = useData();
  const board = getBoard(parseInt(boardId));


  return (
    <>
        <div className="flex p-4 gap-4 overflow-x-auto overflow-y-hidden custom-scrollbar-main focus:outline-none"  >
          {board?.columns.map((column) => (
            <ColumnCard key={column.id} column={column} />
          ))}
          <div onClick={() => setModalOpen(true)}>
            <NewColumnCard />
          </div>
          {modalOpen && <NewColumnModal onClose={() => setModalOpen(false)} />}
        </div>
    </>
  );
  };
  
  export default BoardPage;
  