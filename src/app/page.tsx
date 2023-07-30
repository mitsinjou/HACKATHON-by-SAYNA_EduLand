"use client"
import Navbar from './Components/navbar'
import Hero from './Components/hero'
import FirstSection from './Components/firstSection'
import SecondSection from './Components/secondSection'
import FirstMap from './Components/firstMap'
import SimpleText from './Components/simpleText'
import SecondMap from './Components/secondMap'
import Contact from './Components/contact'
import Footer from './Components/footer'

export default function Home() {
  
  return (
    <>
      <header className='w-screen h-[150vh] lg:h-[130vh] flex justify-center items-center fristHeader'>
        <Navbar/>
        <Hero/>
      </header>
      <main className='w-screen grid content-between items-between h-[900vh] lg:h-[360vh]'>
        <section className='w-screen h-[200vh] lg:h-[80vh] flex justify-center items-center bg-zinc-300 bg-opacity-60'>
            <FirstSection/>
        </section>
        <section className='w-screen h-[600vh] lg:h-[180vh] flex flex-col justify-center items-center bg-stone-200'>
          <SecondSection/>
          <section className='w-screen h-[500vh] lg:h-[80vh] grid grid-rows-2'>
            <div className='flex flex-col lg:flex gap-60 lg:gap-24 lg:flex-row justify-center'>
              <FirstMap/>
            </div>
            <div className='flex flex-col'>
              <SimpleText/>
              <section className='w-screen flex flex-col lg:flex-row pt-4 flex-nowrap lg:flex-wrap gap-24 justify-center'>
                <SecondMap/>
              </section>
            </div>
          </section>
        </section>
        <section className='flex justify-center items-center w-screen h-screen' id='contact'>
          <Contact/>
        </section>
      </main>
      <footer className='w-screen h-40 flex justify-center items-center bg-neutral-800 bg-opacity-40'>
        <Footer/>
      </footer>
    </>
  )
}
