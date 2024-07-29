"use client";
import React from "react";
import { useParams } from "next/navigation";
import useData from "@/hooks/useData";
import ColumnCard from "@/components/Cards/column";

const BoardPage = () => {
  const { boardId } = useParams() as { boardId: string };
  const { getBoard } = useData();
  const board = getBoard(boardId);

  return (
    <>
      {board?.columns.length === 0 ? (

        <div className="flex flex-1 flex-col gap-[2rem] items-center justify-center px-4">
          <h1 className="text-center text-headingL font-bold text-mediumGrey">
            Este tablero está vacío. Crea una columna para empezar.
          </h1>
          <button className="text-headingM text-white font-bold bg-mainPurple py-[14px] px-[18px] rounded-[2rem] hover:bg-mainPurpleHover transition ease-in-out whitespace-nowrap">
            + Añadir columna
          </button>
        </div>

      ) : (

        <div className="flex flex-1 p-6 gap-6 overflow-x-auto overflow-y-hidden custom-scrollbar-main">
          {board?.columns.map((column) => (
            <ColumnCard key={column.id} column={column} />
          ))}
        </div>

      )}
    </>
  );
  };
  
  export default BoardPage;
  