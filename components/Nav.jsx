"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
         {links.map ((link, index)=>{
            return(
                 <Link href ={link.path} key={index} className={`${link.path === pathname && "text-cyan-600 border-b-2 border-cyan-600"}
                  capitalize font-medium hover:text-cyan-600 transition-all`}>
                    {link.name}
                </Link>
         );
         })}
            </nav>
    )
}

export default Nav