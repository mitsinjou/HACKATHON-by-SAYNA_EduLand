"use client"
import Navbar from './Components/navbar'
import Hero from './Components/hero'


export default function Home() {
  
  return (
    <>
      <header className='w-screen h-screen flex justify-center items-end fristHeader'>
        <Navbar/>
        <Hero/>
      </header>
      <main>

      </main>
    </>
  )
}
