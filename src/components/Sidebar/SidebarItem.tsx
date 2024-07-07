import React from "react";
import Link from "next/link";
import Image from "next/image";

const SidebarItem = ({ item, pageName, setPageName }: any) => {
  const handleClick = () => {
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    return setPageName(updatedPageName);
  };

  return (
    <>
      <li>
        <Link
          href={item.route}
          onClick={handleClick}
          className={`${
            pageName === item.label.toLowerCase()
              ? "bg-primary/[.07] text-primary dark:bg-white/10 dark:text-white"
              : "text-dark-4 hover:bg-gray-2 hover:text-dark dark:text-gray-5 dark:hover:bg-white/10 dark:hover:text-white"
          } group relative flex items-center gap-3 rounded-[7px] px-3.5 py-3 font-medium duration-300 ease-in-out`}
        >
          <Image
            width={16}
            height={16}
            src={"/img/icon-board.svg"}
            alt=""
            style={{ width: "auto", height: "auto" }}
          />
          {item.label}
        </Link>
      </li>
    </>
  );
};

export default SidebarItem;
