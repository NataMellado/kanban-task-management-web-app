import Image from "next/image";
import useColorMode from "@/hooks/useColorMode";

const DarkModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <ul className="justify-center ">
      <li>
        <div
          onClick={() => {
            if (typeof setColorMode === "function") {
              setColorMode(colorMode === "light" ? "dark" : "light");
            }
          }}
          className={`relative  z-10 flex h-10 w-[80px] cursor-pointer items-center gap-2.5 rounded-full bg-lightGrey p-[5px] text-dark dark:bg-veryDarkGrey dark:text-white`}
        >
          <div
            className={`absolute left-0.5 top-1/2 z-1 h-7.5 w-7.5 -translate-y-1/2 rounded-full bg-white transition-transform duration-300 ease-in-out dark:bg-mediumGrey ${
              colorMode === "dark" ? "translate-x-[44px]" : "translate-x-[3px]"
            }`}
          ></div>

          <span className="relative z-10 flex w-full max-w-9.5 items-center justify-center">
            <Image
              width={20}
              height={20}
              src={"/img/icon-light-theme.svg"}
              alt=""
              style={{ width: "1.3rem", height: "auto" }}
              className={`transition-filter duration-300 ease-in-out ${
                colorMode === "dark" ? "filter-white" : "filter-mode"
              }`}
            />
          </span>

          <span className="relative z-10 flex w-full items-center justify-center">
            <Image
              width={20}
              height={20}
              src={"/img/icon-dark-theme.svg"}
              alt=""
              style={{ width: "1.1rem", height: "auto" }}
              className={`transition-filter duration-300 ease-in-out ${
                colorMode === "dark" ? "filter-white" : "filter-mode"
              }`}
            />
          </span>
        </div>
      </li>
    </ul>
  );
};

export default DarkModeSwitcher;
