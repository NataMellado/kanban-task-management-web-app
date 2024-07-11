"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import SidebarItemNew from "@/components/Sidebar/SideBarItemNew";
import useSidebarMode from "@/hooks/useSidebar";
import useInitialData from "@/hooks/useData";


const Sidebar = () => {
  const [sidebarMode, setSidebarMode] = useSidebarMode();
  const pathname = usePathname();
  const [boardData] = useInitialData();
  const [modalOpen, setModalOpen] = React.useState(false);

  
const menuGroups = [
  {
    name: `TABLEROS (${boardData.length})`,
    menuItems: boardData.map((board) => ({
      label: board.name,
      route: "#",
    })),
  },
];

  
  return (
    <div className="relative h-screen flex">
      <aside
        className={`sidebar flex h-screen  flex-col overflow-hidden border-r border-linesLight bg-white transition-width duration-200 ease-linear
          dark:border-linesDark dark:bg-darkGrey
          ${sidebarMode === "closed" ? "w-0" : "w-72.5"}
        `}
      >

        {/* <!-- Menú del sidebar --> */}
        <div className="no-scrollbar overflow-hidden flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mt-1">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-[19px] text-nowrap text-headingS px-[32px] tracking-headingS font-bold text-mediumGrey">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      boardName={menuItem.label}
                    />
                  ))}
                  <SidebarItemNew modalOpen={modalOpen} setModalOpen={setModalOpen} />
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* <!-- Botón de alternancia del sidebar --> */}
      <div className="fixed z-40 bottom-0 pb-4">
        <button
          className="bg-mainPurple rounded-tr-[2rem] rounded-br-[2rem] hover:bg-mainPurpleHover h-[3rem] w-[3rem] flex items-center justify-center"
          onClick={() => {
            if (typeof setSidebarMode === "function") {
              setSidebarMode(sidebarMode === "open" ? "closed" : "open");
            }
          }}
        >
          <Image
            width={20}
            height={20}
            src={sidebarMode === "closed" ? "/img/icon-show-sidebar.svg" : "/img/icon-hide-sidebar.svg"}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
