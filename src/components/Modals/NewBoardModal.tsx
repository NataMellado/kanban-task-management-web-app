"use client";
import React, {useState, FormEvent} from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

import { useData } from "@/context/BoardContext";
import { slugify } from "@/utils/slugify";
import ClickOutside from "@/components/ClickOutside/ClickOutside";

interface Props {
  onClose: () => void;
}

const NewBoardModal = ({ onClose }: Props) => {
  const { addBoard } = useData();
  const router = useRouter();

  // State to store new board data
  const [newBoard, setNewBoard] = useState({
    id: uuidv4(),
    name: "",
    columns: [{ id: uuidv4(), name: "", tasks: [] }],
  });
  
  // Function to handle board submit
  const handleSubmit =  (e: FormEvent) => {
    e.preventDefault();
    addBoard(newBoard);
    onClose();
    router.push(`/b/${newBoard.id}/${slugify(newBoard.name)}`);
  };

  // Function to handle board name change
  const handleBoardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBoard({ ...newBoard, name: e.target.value });
  };

  // Function to handle column name change
  const handleColumnChange = (index: number, name: string) => {
    const updatedColumns = newBoard.columns.map((column, colIndex) =>
      colIndex === index ? { ...column, name } : column
    );
    setNewBoard({ ...newBoard, columns: updatedColumns });
  }

   // Function to add a column to the new board
   const addColumn = () => {
    const newCol = { id: uuidv4(), name: "", tasks: [] };
    const columns = [...newBoard.columns, newCol];
    setNewBoard({ ...newBoard, columns });
  }

  // Function to remove a column from the new board
  const removeColumn = (index: number) => {
    const columns = newBoard.columns.filter((_, i) => i !== index);
    setNewBoard({ ...newBoard, columns });
  }

  return (
    <div className="fixed w-full items-center justify-center top-0 left-0 right-0 bottom-0 flex z-50 bg-black bg-opacity-70">
      <ClickOutside className="flex w-full max-w-[30rem]" onClick={onClose}>

      <form 
        onSubmit={handleSubmit}
        style={{ maxHeight: 'calc(100vh - 100px)' }}
        className="overflow-hidden flex flex-col max-h-full w-full p-6 bg-white rounded-md shadow-xl dark:bg-darkGrey dark:text-white">
        
        <h1 className="text-headingL mb-[24px] font-bold">Nuevo tablero</h1>

        <label
          className="text-mediumGrey dark:text-w text-bodyL font-bold mb-[8px] dark:text-white"
          htmlFor="boardName"
        >
          Nombre del tablero
        </label>
        <input
          className="mb-[2.5rem] border-2 rounded-md px-[16px] py-[8px] dark:border-linesDark dark:bg-darkGrey text-bodyL leading-bodyL"
          type="text"
          id="boardName"
          name="boardName"
          placeholder="p.ej. Proyecto de diseño web"
          value={newBoard.name}
          onChange={handleBoardChange}
          required
        />

        <div className="flex flex-col overflow-hidden">
          <label
            className="text-mediumGrey text-bodyL font-bold mb-[8px] dark:text-white"
            htmlFor="boardName"
          >
            Columnas
          </label>
          
          <div className="overflow-y-auto custom-scrollbar">
            {newBoard.columns.map((column, index) => (
              <div
                key={column.id}
                className="flex mb-[0.75rem] gap-4 pe-1"
              >
                <input
                  className="flex-1 border-2 rounded-md px-[16px] py-[8px] dark:border-linesDark dark:bg-darkGrey text-bodyL leading-bodyL"
                  type="text"
                  placeholder="Nombre de columna"
                  value={column.name}
                  onChange={(e) => handleColumnChange(index, e.target.value)}
                  required
                />
                <button 
                  type="button"
                  onClick={() => removeColumn(index)}
                >
                  <Image width={20} height={20} src={"/img/icon-cross.svg"} alt="" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <button 
          type="button"
          onClick={addColumn}
          className="mb-[2.5rem] px-[16px] py-[8px] rounded-[2rem] text-headingM text-mainPurple bg-lightPurple dark:bg-white dark:text-mainPurple font-bold ">
          + Añadir columna
        </button>

        <button 
          type="submit"
          className="px-[16px] py-[8px] rounded-[2rem] bg-mainPurple text-white text-headingM font-bold ">
          Crear tablero
        </button>
      </form>
    </ClickOutside>
    </div>
  );
};

export default NewBoardModal;
