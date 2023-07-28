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
        <nav className={`fixed flex justify-around top-0 left-0 w-full p-4 z-10 text-white transition duration-500 ${color ? 'bg-stone-400' : 'bg-transparent'} `}>
            <Link href="/">
                <section className="w-[10rem] h-[6rem]  logo"></section>
            </Link>
            <section className="flex items-center h-[6rem]">
            <Link href="/" className="hover:text-red-600 font-sans font-semibold uppercase mx-4">Acceuil</Link>
            <Link href="/Blog" className="hover:text-red-600 font-sans font-semibold uppercase mx-4">Blog</Link>
            <Link href="/Packadge" className="hover:text-red-600 font-sans font-semibold uppercase mx-4">Nos packages</Link>
            <Link href="/Partenaire" className="mx-4">
                <button type="button" className="p-2.5 hover:bg-orange-400 bg-red-600 rounded-lg shadow justify-center items-center gap-2.5 flex text-white text-lg font-bold">Nos partenaires</button>
            </Link>
            </section>
        </nav>
    )
}