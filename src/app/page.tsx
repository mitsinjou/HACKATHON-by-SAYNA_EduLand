"use client"
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Components/navbar'


export default function Home() {
  
  return (
    <>
      <header className='w-screen h-screen fristHeader'>
        <Navbar/>
      </header>
      <main>
        <Link href="/Dashbord">Click here to go into the page other</Link>
      </main>
    </>
  )
}
