import Image from "next/image";
import useSidebarMode from "@/hooks/useSidebar";

const ToggleButtonMobile = () => {
    const [sidebarMode, setSidebarMode] = useSidebarMode();
    
    return (

       <div className="fixed z-40 translate-x-[0.8rem] -translate-y-[1rem] sm:hidden">
       <button
         className={`bg-white dark:bg-darkGrey rounded-[2rem] h-[1.8rem] w-[1.8rem] flex items-center justify-center border border-linesLight dark:border-linesDark transition-transform duration-200
         ${sidebarMode === "open" ? "transform -rotate-180 translate-x-[14.3rem] " : ""}`}
         onClick={() => {
           if (typeof setSidebarMode === "function") {
             setSidebarMode(sidebarMode === "open" ? "closed" : "open");
           }
         }}
       >
         <Image
           width={5}
           height={5}
           src="/img/icon-chevron-down.svg"
           alt=""
           style={{ width: "1rem", height: "auto" }}
         />
       </button>
     </div>
    )
};

export default ToggleButtonMobile;