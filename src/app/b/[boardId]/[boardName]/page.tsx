// src/app/[boardName]/page.tsx
"use client";
import React from "react";
import { useParams } from "next/navigation";
import useData from "@/hooks/useData";

const BoardPage = () => {
  const { boardId } = useParams() as { boardId: string };
  const { getBoard } = useData();
  const board = getBoard(boardId);
  

  return (
      <div>
        <h1>Tablero: {board?.name}</h1>
        
        <div>
          <h2>Columnas</h2>
          {board?.columns.map((column) => (
            <div key={column.id}>
              <h3>{column.name}</h3>
              <ul>
                {column.tasks.map((task) => (
                  <li key={task.id}>{task.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>


      </div>
  );
};

export default BoardPage;
