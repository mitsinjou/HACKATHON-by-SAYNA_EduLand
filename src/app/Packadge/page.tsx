"use client"
import Navbar from "../Components/navbar"
import Footer from "../Components/footer"
import TextPackadge from "./components/textPackadge"
import ButtonPackadge from "./components/buttonPackadge"
import MapPackadge from "./components/mapPackadge"

export default function Page(){
    return(
        <>
            <header className='w-screen h-[120vh] bg-stone-200 flex flex-col items-end justify-center'>
                <Navbar/>
                <TextPackadge/>
                <section className='w-screen h-[70vh] mt-12 justify-around flex flex-wrap relative'>
                    <ButtonPackadge/>
                    <MapPackadge/>
                </section>
            </header>
            <footer className='w-screen h-40 flex justify-center items-center bg-neutral-800 bg-opacity-40'>
                <Footer/>
            </footer>
        </>
    )
}