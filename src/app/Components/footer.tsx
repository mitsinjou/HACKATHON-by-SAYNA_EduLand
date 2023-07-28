import React from 'react'
import Link from 'next/link'
import { FaSquareFacebook, FaSquareTwitter, FaLinkedin } from "react-icons/fa6";

export default function Footer(){
    return(
        <div className='w-screen flex flex-col'>
            <article className='w-screen italic font-semibold text-center py-2'>
                <p>&copy; 2023 Eduland</p>
                <p>Pour la Mobilité Durable Des Savoirs</p>
            </article>
            <div className='w-screen h-30 flex justify-center items-center'>
                <Link href="/">
                    <FaSquareFacebook className='w-[32px] h-[32px] rounded-full hover:text-orange-400'/>
                </Link>
                <Link href="/">
                    <FaSquareTwitter className='w-[32px] mx-4 h-[32px] hover:text-orange-400'/>
                </Link>
                <Link href="/">
                    <FaLinkedin className='w-[32px] h-[32px] rounded-full hover:text-orange-400'/>
                </Link>
            </div>
        </div>
    )
}