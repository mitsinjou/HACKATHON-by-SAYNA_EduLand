"use client"
import Navbar from "../Components/navbar"
import Footer from "../Components/footer"
import TextPackadge from "./components/textPackadge"
import ButtonPackadge from "./components/buttonPackadge"
import MapPackadge from "./components/mapPackadge"
import { motion } from 'framer-motion'

export default function Page(){
    return(
        <>
            <header className='w-screen h-[400vh] lg:h-[120vh] bg-stone-200 flex flex-col items-center lg:items-end justify-center'>
                <Navbar/>
                <TextPackadge/>
                <section className='w-screen h-[280vh] lg:h-[70vh] mt-12 justify-around flex flex-wrap relative'>
                    <ButtonPackadge/>
                    <MapPackadge/>
                </section>
                <motion.section initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} className='w-screen text-center py-8'>
                    <p className="font-semibold">* selon le nombre du jour de l&#39;évenement</p>
                    <p className="font-semibold">** Selon la durée du séjour de l&#39;intervenant et la durée de l&#39;évenement</p>
                </motion.section>
            </header>
            <footer className='w-screen h-40 bg-neutral-800 bg-opacity-40'>
                <Footer/>
            </footer>
        </>
    )
}