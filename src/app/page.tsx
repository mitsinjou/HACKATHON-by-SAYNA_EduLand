"use client"
import Image from 'next/image'
import Navbar from './Components/navbar'
import Hero from './Components/hero'


export default function Home() {
  
  return (
    <>
      <header className='w-screen h-[130vh] flex justify-center items-center fristHeader'>
        <Navbar/>
        <Hero/>
      </header>
      <main className='w-screen h-[200vh]'>
        <section className='w-screen h-[80vh] flex justify-center items-center bg-zinc-300 bg-opacity-60'>
          <div className='w-[80%] h-[70vh]'>
            <section className='w-full h-12'>
              <p className='text-center text-black text-[32px] font-semibold uppercase'>Qui sommes nous ?</p>
            </section>
            <section className='w-full h-[62vh] grid grid-cols-2'>
              <div className='flex flex-col justify-center items-center'>
                <p className='w-[401.37px] text-justify text-black text-lg font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non orci a sapien volutpat fermentum. Duis eu congue lectus. Pellentesque dignissim imperdiet lacus, quis ultrices nulla consectetur efficitur.</p>
                <p className='my-2 w-[401.37px] text-justify text-black text-lg font-normal'>Proin in elit ornare, consectetur erat sit amet, congue turpis. Suspendisse iaculis purus consectetur quam scelerisque molestie. Morbi sapien augue, lacinia a dolor eu, condimentum vehicula mauris</p>
              </div>
              <div className='flex justify-end items-center'>
                <Image src="/fristImage.png" alt="firstShow" className="rounded-lg shadow backdrop-blur-sm" width={423.72} height={296.77}/>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  )
}
