import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useSidebarMode = () => { 
    const [sidebarMode, setSidebarMode] = useLocalStorage("sidebar-mode", "open");

    useEffect(() => {
        const className = "closed"; 
        const bodyClass = window.document.documentElement.classList;

        if (sidebarMode === "closed") {
            bodyClass.add(className);
        } else {
            bodyClass.remove(className);
        }
    }, [sidebarMode]);

    return [sidebarMode, setSidebarMode];
}

export default useSidebarMode;
