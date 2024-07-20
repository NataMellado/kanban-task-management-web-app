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

      <div className={`header-logo flex flex-none items-center md:w-72.5 px-4 md:px-[2rem] border-b md:border-b-0  h-[3rem] md:h-[4rem] md:border-r border-linesLight dark:border-linesDark`}>
        <Link href="/">
          <Image
            width={176}
            height={32}
            src={"/img/logo-dark.svg"}
            alt="Logo"
            priority
            className="hidden md:block dark:md:hidden"
            style={{ width: "8rem", height: "auto" }}
          />
          <Image
            width={176}
            height={32}
            src={"/img/logo-light.svg"}
            alt="Logo"
            priority
            className="hidden dark:md:block"
            style={{ width: "8rem", height: "auto" }}
          />
          <Image
            width={176}
            height={32}
            src="/img/logo-mobile.svg"
            alt="Logo Alternativo"
            priority
            className="block md:hidden"
            style={{ width: "1.25rem", height: "auto" }}
          />
        </Link>
      </div>
      

      <div className={`flex justify-between w-full items-center md:px-6 h-[3rem] md:h-[4rem] gap-2 md:gap-8 border-b border-linesLight dark:border-linesDark overflow-hidden`}>

          <p className="text:headingM md:text-headingL2 font-extrabold text-black overflow-hidden overflow-ellipsis whitespace-nowrap dark:text-white ">
            {board?.name}
          </p>
    
        <div className="flex items-center gap-4 md:gap-6 flex-none whitespace-nowrap">
          <DarkModeSwitcher />
          <button className="bg-mainPurple text-headingM font-bold rounded-[2rem] text-white py-2 px-4 md:py-[0.4rem] md:px-[1.2rem] hover:bg-mainPurpleHover">
            <Image
              width={5}
              height={5}
              src="/img/icon-add-task-mobile.svg"
              alt="Logo Alternativo"
              priority
              className="block md:hidden"
              style={{ width: "0.7rem", height: "auto" }}
            />
            <span className="hidden md:block">+ Añadir tarea</span>
          </button>
          
        </div>

      </div>
      <div className="border-b border-linesLight dark:border-linesDark px-4 md:ps-0 md:pe-6 h-[3rem] md:h-[4rem] flex ">
        <Dropdown />
      </div>
    </header>
  );
};

export default Header;
