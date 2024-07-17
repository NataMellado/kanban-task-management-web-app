"use client";
import React, {useState, FormEvent} from "react";
import Image from "next/image";
import ClickOutside from "../ClickOutside/ClickOutside";
import useData from "@/hooks/useData";

interface Props {
  onClose: () => void;
}

const NewBoardModal = ({ onClose }: Props) => {
  const [boardName, setBoardName] = useState("");
  const [columns, setColumns] = useState([{ id: "", name: "", tasks: [] }]);
  const { addBoard } = useData();
  
  const handleSubmit =  (e: FormEvent) => {
    e.preventDefault();
    const newBoard = {
      id: Date.now().toString(),
      name: boardName,
      columns: columns.filter((column) => column.name.trim() !== ""),
    };
    addBoard(newBoard);
    onClose();
  };

  const handleColumnChange = (index: number, value: string) => {
    const newColumns = [...columns];
    newColumns[index].name = value;
    setColumns(newColumns);
  };

  const addColumns = () => {
    const idColumn = Date.now().toString();
    const newColumn = { id: idColumn, name: "", tasks: [] };
    setColumns([...columns, newColumn]);
  };

  const removeColumn = (index: number) => {
    const newColumns = columns.filter((_, colIndex) => colIndex !== index);
    setColumns(newColumns);
  };


  

  return (
    <div className="fixed w-full items-center justify-center top-0 left-0 right-0 bottom-0 flex z-50 bg-black bg-opacity-50">
      <ClickOutside className="flex w-full max-w-[30rem]" onClick={onClose}>

      <form 
        onSubmit={handleSubmit}
        style={{ maxHeight: 'calc(100vh - 100px)' }}
        className="flex flex-col w-full bg-white rounded-md p-[2rem] shadow-xl dark:bg-darkGrey dark:text-white">
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
          placeholder="p.ej. Proyecto de diseño web"
          id="boardName"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
        />

        <div className="flex flex-col overflow-y-auto custom-scrollbar ">
          <label
            className="text-mediumGrey dark:text-w text-bodyL font-bold mb-[8px] dark:text-white"
            htmlFor="boardName"
          >
            Columnas
          </label>
          {columns.map((column, index) => (
            <div 
              key={index} 
              className="flex mb-[0.75rem] gap-4 "
            >
              <input
                className="flex-1 border-2 rounded-md px-[16px] py-[8px] dark:border-linesDark dark:bg-darkGrey text-bodyL leading-bodyL"
                type="text"
                placeholder="Por hacer"
                value={column.name}
                onChange={(e) => handleColumnChange(index, e.target.value)}
              />
              <button 
                onClick={(e) => {e.preventDefault(); removeColumn(index)}}>
                <Image width={20} height={20} src={"/img/icon-cross.svg"} alt="" />
              </button>
            </div>
          ))}

        </div>



        <button 
          onClick={(e) => {e.preventDefault(); addColumns()}}
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
