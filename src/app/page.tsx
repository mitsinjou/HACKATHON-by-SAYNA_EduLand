"use client"
import Navbar from './Components/navbar'
import Hero from './Components/hero'
import FirstSection from './Components/firstSection'
import SecondSection from './Components/secondSection'
import FirstMap from './Components/firstMap'
import SimpleText from './Components/simpleText'
import SecondMap from './Components/secondMap'
import Contact from './Components/contact'


export default function Home() {
  
  return (
    <>
      <header className='w-screen h-[130vh] flex justify-center items-center fristHeader'>
        <Navbar/>
        <Hero/>
      </header>
      <main className='w-screen h-[360vh]'>
        <section className='w-screen h-[80vh] flex justify-center items-center bg-zinc-300 bg-opacity-60'>
            <FirstSection/>
        </section>
        <section className='w-screen h-[180vh] flex flex-col justify-center items-center bg-stone-200'>
          <SecondSection/>
          <section className='w-screen h-[80vh] grid grid-rows-2'>
            <div className='flex justify-center gap-24 flex-wrap'>
              <FirstMap/>
            </div>
            <div className='flex flex-col'>
              <SimpleText/>
              <section className='w-screen flex pt-4 flex-wrap gap-24 justify-center'>
                <SecondMap/>
              </section>
            </div>
          </section>
        </section>
        <section className='border border-violet-500 flex justify-center items-center w-screen h-screen'>
          <Contact/>
        </section>
      </main>
    </>
  )
}
