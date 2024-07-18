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
      <div className="flex flex-1 p-6 gap-6">
        {board?.columns.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <h1 className="text-center text-headingL font-bold text-mediumGrey">Este tablero está vacío. Crea una columna para empezar.</h1>
          </div>
        ) : (
          board?.columns.map((column) => (
            <ColumnCard
              key={column.id} 
              column={column}
            />
          )
        )
        )}
      </div>
  );
};

export default BoardPage;
