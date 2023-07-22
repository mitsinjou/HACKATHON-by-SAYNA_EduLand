import Image from 'next/image'

import React, { useState, useEffect } from 'react'

import Navbar from './Components/navbar'

import Link from 'next/link'

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
