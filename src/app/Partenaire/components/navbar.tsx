"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'

export default function SecondNavbar(){
    const [color, setColor] = useState(false);
    const { scrollYProgress } = useScroll();
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
        <>
            <motion.div className="w-screen h-2 bg-red-600 fixed top-0 left-0 z-20" style={{ scaleX: scrollYProgress }}/>
            <section className={`w-screen h-40 overflow-x-auto md:overflow-x-hidden fixed top-0 left-0 flex justify-center ${color ? 'bg-stone-400' : 'bg-transparent'}`}>
                <section className='w-[80%] h-40 flex items-center justify-between'>
                    <Link href="/Partenaire">
                        <section className="w-[10rem] h-[6rem]  logo"></section>
                    </Link>
                <button type='button' className="p-2.5 bg-red-600 rounded-lg shadow justify-center items-center gap-2.5 flex text-white text-lg font-semibold">Nos partenaires</button>
                    <Link className="pl-7 pr-[29px] py-2.5 hover:bg-orange-400 bg-black rounded-lg shadow justify-center items-center gap-2.5 flex text-white text-lg font-semibold uppercase" href="/">Retour</Link>
                </section>
            </section>
        </>
    )
}