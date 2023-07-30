"use client"
import Navbar from "../Components/navbar"
import Footer from "../Components/footer"
import MapBlog from "./components/mapBlog"


export default function Page(){
    return(
        <>
            <header className='w-screen h-[400vh] lg:h-screen flex items-center justify-around flex-wrap bg-stone-200'>
                <Navbar/>
                <MapBlog/>
            </header>
            <footer className='w-screen h-40 flex justify-center items-center bg-neutral-800 bg-opacity-40'>
                <Footer/>
            </footer>
        </>
    )
}