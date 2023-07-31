import React, { useState, useEffect } from "react"
import Link from "next/link"

export default function Navbar(){

    const [color, setColor] = useState(false);

    const changeColor = () => {
        if(typeof window !== 'undefined'){
            if (window.scrollY > 100) {
                setColor(true);
            }else{
                setColor(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeColor);

        return () => {
            window.removeEventListener('scroll', changeColor);
        };

    }, []);


    return(
        <nav className={`fixed flex flex-col md:flex-row md:flex justify-around top-0 left-0 w-full p-4 z-10 text-white transition duration-500 ${color ? 'bg-stone-400' : 'bg-transparent'} `}>
            <Link href="/">
                <section className="w-[10rem] h-[6rem]  logo"></section>
            </Link>
            <section className="flex overflow-x-auto md:overflow-x-hidden items-center h-[6rem]">
            <Link href="/" className="hover:text-red-600 font-sans font-semibold uppercase text-sm md:text-base mx-8 md:mx-4">Acceuil</Link>
            <Link href="/Blog" className="hover:text-red-600 font-sans font-semibold uppercase text-sm md:text-base mx-8 md:mx-4">Blog</Link>
            <Link href="/Packadge" className="hover:text-red-600 font-sans font-semibold uppercase text-sm md:text-base mx-8 md:mx-4">Nos_packages</Link>
            <Link href="/Partenaire" className="mx-8 md:mx-4">
                <button type="button" className="p-2.5 hover:bg-orange-400 bg-red-600 rounded-lg shadow justify-center items-center gap-2.5 flex text-white text-sm md:text-lg font-bold">Nos_partenaires</button>
            </Link>
            </section>
        </nav>
    )
}