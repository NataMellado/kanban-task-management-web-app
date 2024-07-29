import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  item: {
    label: string;
    route: string;
  };
  isActive: boolean;
}

const SidebarItem: React.FC<Props> = ({ item, isActive }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const getFilter = () => {
    if (isActive) {
      return "invert(100%)"
    }
    return isHovered
      ? "invert(52%) sepia(46%) saturate(6417%) hue-rotate(223deg) brightness(83%) contrast(85%)"
      : "invert(58%) sepia(7%) saturate(886%) hue-rotate(177deg) brightness(95%) contrast(95%)";
  };

  return (
    <li>
      <Link
        href={item.route}

        className={`
          ${
            isActive
              ? "bg-mainPurple text-white"
              : "text-mediumGrey"
          } group relative flex items-center gap-3 rounded-tr-[32px] rounded-br-[32px] mr-[24px] px-[1rem] md:px-[1.5rem] py-[15px] font-bold text-headingM duration-300 ease-in-out
         ${isActive ? "": "hover:bg-lightGrey hover:text-mainPurple"}
        `}
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
            filter: getFilter(),
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
