"use client";

import { Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet.jsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";

const links = [
    {
        name: "inicio",
        path: "/"
    },
    {
        name: "resumen",
        path: "/resumen"
    },
    {
        name: "proyectos",
        path: "/proyectos"
    },
    {
        name: "contacto",
        path: "/contacto"
    }
]

const MobileNav = () =>{
    const pathname = usePathname ();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries  className="text-[32px] text-cyan-600"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                    <h1 className="text-4x1 font-semibold">
                        Diego<span className="text-cyan-600"></span>
                    </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map ((link, index) => {
                        return(
                            <Link
                            href={link.path}
                            key={index}
                            className={`${
                                link.path === pathname &&
                                 "text-cyan-600 boder-b-2 border-cyan-600"
                                } text-xl capitalize hover:text-cyan-600 transition-all`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                 </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;