"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import SidebarItemNew from "@/components/Sidebar/SideBarItemNew";
import useSidebarMode from "@/hooks/useSidebar";
import useData from "@/hooks/useData";
import { slugify } from "@/utils/slugify";


const Sidebar = () => {
  const [sidebarMode, setSidebarMode] = useSidebarMode();
  const pathname = usePathname();
  const { boardData } = useData();
  const [modalOpen, setModalOpen] = React.useState(false);

  const menuGroups = [
    {
      name: `Tableros (${boardData.length})`,
      menuItems: boardData.map((board) => ({
        label: board.name,
        route: `/b/${board.id}/${slugify(board.name)}`,
      })),
    },
  ];

  return (
    <div className="relative flex overflow-hidden">
      <aside
        className={`sidebar flex flex-col border-r border-linesLight bg-white transition-width duration-200 ease-in-out
          dark:border-linesDark dark:bg-darkGrey
          ${sidebarMode === "closed" ? "w-0" : "w-72.5"}
        `}
      >

        {/* <!-- Menú del sidebar --> */}
        <div className="flex flex-col">
          <nav >
            {menuGroups.map((group, groupIndex) => (
            <div key={groupIndex}>

                <h3 className="mb-[19px] pt-3 text-nowrap text-headingS px-[32px] tracking-headingS font-bold text-mediumGrey">
                  {group.name}
                </h3>

                <ul className="overflow-y-auto overflow-x-hidden mb-6 flex flex-col custom-scrollbar-sidebar" style={{ maxHeight: 'calc(100vh - 250px)' }}>
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      boardName={menuItem.label}       
                    />
                  ))}
                </ul>

                <div className="flex  ">
                  <SidebarItemNew modalOpen={modalOpen} setModalOpen={setModalOpen} />
                </div>
                
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
