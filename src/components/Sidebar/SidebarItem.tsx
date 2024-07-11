import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  item: {
    label: string;
    route: string;
  };
  boardName: string;
}

const SidebarItem: React.FC<Props> = ({ item, boardName }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const isActive = false;

  return (
    <li>
      <Link
        href={item.route}

        className={`
          ${
            isActive
              ? "bg-primary/[.07] text-primary dark:bg-white/10 dark:text-white"
              : "text-mediumGrey"
          } group relative flex items-center gap-3 rounded-tr-[32px] rounded-br-[32px] mr-[24px] px-[24px] py-[15px] font-bold text-headingM duration-300 ease-in-out
          hover:bg-lightGrey hover:text-mainPurple`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          width={16}
          height={16}
          src={"/img/icon-board.svg"}
          alt=""
          style={{
            width: "auto",
            height: "auto",
            fill: "#828FA3",
            filter: isHovered
              ? "invert(52%) sepia(46%) saturate(6417%) hue-rotate(223deg) brightness(83%) contrast(85%)"
              : "invert(58%) sepia(7%) saturate(886%) hue-rotate(177deg) brightness(95%) contrast(95%)",
          }}
        />
        <div className="max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap">
          {item.label}
        </div>
      </Link>
    </li>
  );
};

export default SidebarItem;
