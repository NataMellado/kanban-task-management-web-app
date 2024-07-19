import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ClickOutside from "../ClickOutside/ClickOutside";
import { createPortal } from "react-dom";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ClickOutside onClick={() => setIsOpen(false)} className="relative">
            <Link
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-4 shrink-0"
                href="#"
            >
            
                <Image
                    width={5}
                    height={5}
                    src="/img/icon-vertical-ellipsis.svg"
                    alt=""
                    style={{ width: "0.3rem", height: "auto" }}
                />

            </Link>

            {isOpen && (
                <div className="absolute text-bodyL font-medium right-0 z-100 mt-[1.5rem] w-44 bg-white dark:bg-darkGrey rounded-lg shadow-lg">
                    <ul className="py-2">
                        <li className="px-4 py-2 text-mediumGrey hover:bg-primary dark:hover:bg-primary dark:">
                            <Link href="#">Editar tablero</Link>
                            </li>
                        <li className="px-4 py-2 text-red hover:bg-primary  dark:hover:bg-primary dark:">
                            <Link href="#">Eliminar tablero</Link>
                        </li>
                    </ul>
                </div>
            )}

        </ClickOutside>
    )

}

export default Dropdown;