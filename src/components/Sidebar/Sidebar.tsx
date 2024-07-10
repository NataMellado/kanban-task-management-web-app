import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import SidebarItem from "@/components/Sidebar/SidebarItem";
import SidebarItemNew from "@/components/Sidebar/SideBarItemNew";
import useLocalStorage from "@/hooks/useLocalStorage";
import useSidebarMode from "@/hooks/useSidebar";

interface MenuItem {
  label: string;
  route: string;
}

interface MenuGroup {
  name: string;
  menuItems: MenuItem[];
}

const menuGroups: MenuGroup[] = [
  {
    name: "TABLEROS",
    menuItems: [
      { label: "Lanzamiento de plataforma", route: "#" },
      { label: "Lanzamiento de plataforma", route: "#" },
      { label: "Lanzamiento de plataforma", route: "#" },
    ],
  },
];

const Sidebar = () => {
  const [sidebarMode, setSidebarMode] = useSidebarMode();
  const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <div className="relative h-screen flex">
      <aside
        className={`sidebar flex h-screen w-72.5 flex-col overflow-y-hidden border-r border-linesLight bg-white transition-transform duration-300 ease-linear
          dark:border-linesDark dark:bg-darkGrey  
          `} 
      >
        {/* <!-- Encabezado del sidebar --> */}
        <div className="flex items-center justify-between gap-2 px-[34px] py-5.5 lg:pt-[32.78px] lg:pb-[54px]">
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

          {/* <button
            className="block lg:hidden closed:bg-white"
            onClick={() => {
              if (typeof setSidebarMode === "function") {
                setSidebarMode(sidebarMode === "open" ? "closed" : "open"); 
              }
            }}
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button> */}
        </div>

        {/* <!-- Menú del sidebar --> */}
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mt-1">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-[19px] text-headingS px-[32px]  tracking-headingS font-bold text-mediumGrey ">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                  <SidebarItemNew />
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* <!-- Botón de alternancia del sidebar --> */}
      <div className="fixed z-50 bottom-0 pb-4">
        <button
          className=" bg-mainPurple rounded-tr-[2rem] rounded-br-[2rem] hover:bg-mainPurpleHover h-[3rem] w-[3rem] flex items-center justify-center"
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
