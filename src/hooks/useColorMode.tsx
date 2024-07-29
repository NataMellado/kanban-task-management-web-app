import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");
 
  // Add or remove the class "dark" to the body element 
  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.documentElement.classList;
    colorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className)
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
