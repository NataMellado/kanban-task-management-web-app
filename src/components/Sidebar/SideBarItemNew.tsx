import React from "react";
import Link from "next/link";
import Image from "next/image";

const SidebarItemNew = () => {
  return (
    <li>
      <Link href="#">
        <div className="group relative flex items-center gap-3 rounded-[32px] mr-[24px] px-[24px] py-[15px] font-bold text-headingM duration-300 text-mainPurple ease-in-out">
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
            + Crear nuevo tablero
          </div>
        </div>
      </Link>
    </li>
  );
};

export default SidebarItemNew;
