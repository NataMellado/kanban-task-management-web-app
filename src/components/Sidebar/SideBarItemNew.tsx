import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NewBoardModal from "../Modals/NewBoardModal";

interface SidebarItemNewProps {
  modalOpen: boolean;
  setModalOpen: (arg0: boolean) => void;
}

const SidebarItemNew: React.FC<SidebarItemNewProps> = (props) => {
  return (
    <>
      <li>
        <div
          onClick={() => props.setModalOpen(!props.modalOpen)}
          className="cursor-pointer"
        >
          <div className="group relative flex items-center gap-3 rounded-[32px] mr-[24px] px-[1rem] md:px-[1.5rem] py-[15px] font-bold text-headingM duration-300 text-mainPurple ease-in-out">
            <Image
              width={16}
              height={16}
              src={"/img/icon-board.svg"}
              alt=""
              style={{
                width: "auto",
                height: "auto",
                filter:
                  "invert(41%) sepia(63%) saturate(580%) hue-rotate(203deg) brightness(87%) contrast(92%)",
              }}
            />
            <div className="max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap">
              + Nuevo tablero
            </div>
          </div>
        </div>
      </li>

      {props.modalOpen && <NewBoardModal onClose={() => props.setModalOpen(false)} />}
    </>
  );
};

export default SidebarItemNew;
