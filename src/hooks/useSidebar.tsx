import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useSidebarMode = () => {
  const [sidebarMode, setSidebarMode] = useLocalStorage("sidebar-mode", "open");

  // Add or remove the class "closed" to the body element
  useEffect(() => {
    const className = "closed";
    const bodyClass = window.document.documentElement.classList;
    sidebarMode === "closed"
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [sidebarMode]);

  return [sidebarMode, setSidebarMode];
};

export default useSidebarMode;
