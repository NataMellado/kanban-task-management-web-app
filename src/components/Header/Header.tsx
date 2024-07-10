"use client";
import React from "react";
import Dropdown from "./Dropdown";
import DarkModeSwitcher from "../DarkModeSwitcher/DarkModeSwitcher";
import Link from "next/link";
import Image from "next/image";

const Header = () => {

  return (
    <header className={`sticky top-0 z-10 flex items-center w-full bg-white dark:bg-darkGrey`}>

    <div className={`header-logo flex items-center w-72.5 px-[2rem] h-[5rem] border-r border-linesLight dark:border-linesDark`}>
        <Link href="/">
          <Image
            width={176}
            height={32}
            src={"/img/logo-dark.svg"}
            alt="Logo"
            priority
            className="dark:hidden"
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            width={176}
            height={32}
            src={"/img/logo-light.svg"}
            alt="Logo"
            priority
            className="hidden dark:block"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
      </div>

    <div className={`flex flex-1 items-center px-[2rem] h-[5rem] gap-[2rem] border-b border-linesLight dark:border-linesDark`}>
      <span className="text-headingXL font-bold text-black dark:text-white ">
        Lanzamiento de plataforma
      </span>
      <div className="flex items-center gap-[2rem] ml-auto">
        <DarkModeSwitcher />
        <button className="bg-mainPurple text-headingM font-bold rounded-[2rem] text-white py-[0.6rem] px-[1.5rem] hover:bg-mainPurpleHover">
          + Añadir tarea
        </button>
        <Dropdown />
      </div>

    </div>
    </header>
  );
};

export default Header;
