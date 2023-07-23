import React from "react"
import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="fixed flex top-0 left-0 w-full ps-4 pe-4 pb-4 bg-blue-500 text-white transition duration-500">
            <section className="w-[10rem] h-[6rem]  logo"></section>
            <section>
            <Link href="/Dashbord" className="font-sans">Acceuil</Link>
            </section>
        </nav>
    )
}