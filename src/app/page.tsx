"use client"
import Image from 'next/image'
import Navbar from './Components/navbar'
import Hero from './Components/hero'
import FirstSection from './Components/firstSection'
import SecondSection from './Components/secondSection'
import FirstMap from './Components/firstMap'
import SimpleText from './Components/simpleText'


export default function Home() {
  
  return (
    <>
      <header className='w-screen h-[130vh] flex justify-center items-center fristHeader'>
        <Navbar/>
        <Hero/>
      </header>
      <main className='w-screen h-[200vh]'>
        <section className='w-screen h-[80vh] flex justify-center items-center bg-zinc-300 bg-opacity-60'>
            <FirstSection/>
        </section>
        <section className='w-screen h-[130vh] flex flex-col justify-center items-center bg-stone-200'>
          <SecondSection/>
          <section className='w-screen h-[80vh] grid grid-rows-2'>
            <div className='flex justify-center gap-24 flex-wrap'>
              <FirstMap/>
            </div>
            <div className='border flex flex-col border-orange-400'>
              <SimpleText/>
              <section className='w-screen border border-red-400'>

              </section>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}
