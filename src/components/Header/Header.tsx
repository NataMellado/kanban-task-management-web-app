"use client";
import React from "react";
import Dropdown from "./Dropdown";
import DarkModeSwitcher from "../DarkModeSwitcher/DarkModeSwitcher";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import useData from "@/hooks/useData";

const Header = () => {
  const { boardId } = useParams() as { boardId: string };
  const { getBoard } = useData();
  const board = getBoard(boardId);

  return (
    <header 
      className={`sticky top-0 flex items-center max-w-full bg-white dark:bg-darkGrey`}>

      <div className={`header-logo flex flex-none items-center w-72.5 px-[2rem] h-[4rem] border-r border-linesLight dark:border-linesDark`}>
        <Link href="/">
          <Image
            width={176}
            height={32}
            src={"/img/logo-dark.svg"}
            alt="Logo"
            priority
            className="dark:hidden"
            style={{ width: "8rem", height: "auto" }}
          />
          <Image
            width={176}
            height={32}
            src={"/img/logo-light.svg"}
            alt="Logo"
            priority
            className="hidden dark:block"
            style={{ width: "8rem", height: "auto" }}
          />
        </Link>
      </div>
      

      <div className={`flex justify-between w-full items-center ps-6 pe-8 h-[4rem] gap-[2rem] border-b border-linesLight dark:border-linesDark  whitespace-nowrap`}>

        <div className="col-span-2 text-headingL2 font-extrabold text-black dark:text-white overflow-hidden overflow-ellipsis whitespace-nowrap">
          {board?.name}

        </div>
    
        <div className="flex items-center gap-6 shrink-0 ">
          <DarkModeSwitcher />
          <button className="bg-mainPurple text-headingM font-bold rounded-[2rem] text-white py-[0.4rem] px-[1.2rem] hover:bg-mainPurpleHover">
            + Añadir tarea
          </button>
          <Dropdown />
        </div>

      </div>
    </header>
  );
};

export default Header;
