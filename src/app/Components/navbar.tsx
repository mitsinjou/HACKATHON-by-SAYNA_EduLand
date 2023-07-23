import React from "react"
import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="fixed flex justify-around top-0 left-0 w-full p-4 bg-transparent text-white transition duration-500">
            <section className="w-[10rem] h-[6rem]  logo">

            </section>
            <section className="flex items-center h-[6rem]">
            <Link href="/Dashbord" className="font-sans font-semibold uppercase mx-4">Acceuil</Link>
            <Link href="/" className="font-sans font-semibold uppercase mx-4">Comment ça marche</Link>
            <Link href="/" className="font-sans font-semibold uppercase mx-4">Blog</Link>
            <Link href="/" className="font-sans font-semibold uppercase mx-4">Contact</Link>
            <Link href="/" className="font-sans font-semibold uppercase mx-4">Nos packages</Link>
            <Link href="/" className="mx-4">
                <button type="button" className="p-2.5 bg-red-600 rounded-lg shadow justify-center items-center gap-2.5 flex text-white text-lg font-bold">Nos partenaires</button>
            </Link>
            </section>
        </nav>
    )
}