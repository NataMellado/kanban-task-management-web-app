"use client";
import React, { useState, FormEvent } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "next/navigation";

import { useData } from "@/context/BoardContext";
import ClickOutside from "@/components/ClickOutside/ClickOutside";

interface Props {
  onClose: () => void;
}

const NewColumnModal = ({ onClose }: Props) => {
  const { boardId } = useParams() as { boardId: string };
  const { addColumns } = useData();
  const numBoardId = parseInt(boardId) 

  // State to store new columns
  const [newColumns, setNewColumns] = useState([
    {
      name: "",
      tasks: [],
    },
  ]);

  // Function to handle column name change
  const handleColumnChange = (index: number, name: string) => {
    const updatedColumns = newColumns.map((column, colIndex) =>
      colIndex === index ? { ...column, name } : column
    );
    setNewColumns(updatedColumns);
  };

  // Function to add a column to the list of columns
  const addColumnList = () => {
    const newCol = { id: uuidv4(), name: "", tasks: [] };
    setNewColumns([...newColumns, newCol]);
  };

  // Function to remove a column from the list of columns
  const removeColumn = (index: number) => {
    const columns = newColumns.filter((_, i) => i !== index);
    setNewColumns(columns);
  };

  // Function to handle form submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Enviando columnas al backend con boardId como string:", {
      boardId: boardId,
      columns: newColumns
    });
    console.log("Enviando columnas al backend con boardId como numero:", {
      boardId: parseInt(boardId),
      columns: newColumns
    });
    addColumns(numBoardId, newColumns);
    onClose();
  };

  return (
    <div className="fixed w-full items-center justify-center top-0 left-0 right-0 bottom-0 flex z-50 bg-black bg-opacity-70">
      <ClickOutside className="flex w-full max-w-[30rem]" onClick={onClose}>
        <form
          onSubmit={handleSubmit}
          style={{ maxHeight: "calc(100vh - 100px)" }}
          className="overflow-hidden flex flex-col max-h-full w-full p-6 bg-white rounded-md shadow-xl dark:bg-darkGrey dark:text-white"
        >
          <h1 className="text-headingL mb-[24px] font-bold">Añadir columnas</h1>

          <div className="flex flex-col overflow-hidden">
            <div className="overflow-y-auto custom-scrollbar">
              {newColumns.map((column, index) => (
                <div key={index} className="flex mb-[0.75rem] gap-4 pe-1">
                  <input
                    className="flex-1 border-2 rounded-md px-[16px] py-[8px] dark:border-linesDark dark:bg-darkGrey text-bodyL leading-bodyL"
                    type="text"
                    placeholder="Nombre de columna"
                    value={column.name}
                    onChange={(e) => handleColumnChange(index, e.target.value)}
                    required
                  />
                  <button type="button" onClick={() => removeColumn(index)}>
                    <Image
                      width={20}
                      height={20}
                      src={"/img/icon-cross.svg"}
                      alt=""
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={addColumnList}
            className="mb-[2.5rem] px-[16px] py-[8px] rounded-[2rem] text-headingM text-mainPurple bg-lightPurple dark:bg-white dark:text-mainPurple font-bold "
          >
            + Añadir columna
          </button>

          <button
            type="submit"
            className="px-[16px] py-[8px] rounded-[2rem] bg-mainPurple text-white text-headingM font-bold "
          >
            Aceptar
          </button>
        </form>
      </ClickOutside>
    </div>
  );
};

export default NewColumnModal;
