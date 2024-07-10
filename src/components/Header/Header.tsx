import Dropdown from "./Dropdown";
import DarkModeSwitcher from "../DarkModeSwitcher/DarkModeSwitcher";

const Header = () => {
    return (
        <header className="sticky top-0 z-10 px-[2rem] h-[5rem] flex items-center w-full border-b border-linesLight bg-white dark:border-linesDark dark:bg-darkGrey ">
            <span className="text-headingXL font-bold text-black dark:text-white ">Lanzamiento de plataforma</span>
            <div className="flex items-center gap-[2rem] ml-auto">
                <DarkModeSwitcher />
                <button className="bg-mainPurple text-headingM font-bold rounded-[2rem] text-white py-[0.6rem] px-[1.5rem] hover:bg-mainPurpleHover">
                    + Añadir tarea
                </button>
                <Dropdown />
            </div>
        </header>
    )
}

export default Header;