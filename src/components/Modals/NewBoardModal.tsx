import React from "react";
import Image from "next/image";
import ClickOutside from "../ClickOutside/ClickOutside";

interface Props {
  onClose: () => void;
}

const NewBoardModal = ({ onClose }: Props) => {

  return (
    <div className="fixed w-full items-center justify-center top-0 left-0 right-0 bottom-0 flex z-50 bg-black bg-opacity-50">
      <ClickOutside className="flex w-full max-w-[30rem]" onClick={onClose}>
      <form className="flex flex-col w-full bg-white rounded-md p-[2rem] shadow-xl dark:bg-darkGrey dark:text-white">
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
          placeholder="Board name"
          id="boardName"
        />

        <label
          className="text-mediumGrey dark:text-w text-bodyL font-bold mb-[8px] dark:text-white"
          htmlFor="boardName"
        >
          Columnas
        </label>

        <div className="flex mb-[0.75rem] gap-4">
          <input
            className="flex-1 border-2 rounded-md px-[16px] py-[8px] dark:border-linesDark dark:bg-darkGrey text-bodyL leading-bodyL"
            type="text"
            placeholder="Board name"
            id="boardName"
          />
          <button onClick={(e) => e.preventDefault()}>
            <Image width={20} height={20} src={"/img/icon-cross.svg"} alt="" />
          </button>
        </div>

        <div className="flex mb-[0.75rem] gap-4">
          <input
            className="flex-1 border-2 rounded-md px-[16px] py-[8px] dark:border-linesDark dark:bg-darkGrey text-bodyL leading-bodyL"
            type="text"
            placeholder="Board name"
            id="boardName"
          />
          <button onClick={(e) => e.preventDefault()}>
            <Image width={20} height={20} src={"/img/icon-cross.svg"} alt="" />
          </button>
        </div>

        <button 
          onClick={(e) => e.preventDefault()}
          className="mb-[2.5rem] px-[16px] py-[8px] rounded-[2rem] text-headingM text-mainPurple bg-lightPurple dark:bg-white dark:text-mainPurple font-bold ">
          + Añadir columna
        </button>

        <button 
          onClick={(e) => e.preventDefault()}
          className="px-[16px] py-[8px] rounded-[2rem] bg-mainPurple text-white text-headingM font-bold ">
          Crear tablero
        </button>
      </form>
    </ClickOutside>
    </div>
  );
};

export default NewBoardModal;
