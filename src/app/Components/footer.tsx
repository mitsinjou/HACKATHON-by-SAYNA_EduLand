import React from 'react'
import Link from 'next/link'
import { FaSquareFacebook, FaSquareTwitter, FaLinkedin } from "react-icons/fa6";

export default function Footer(){
    return(
        <div className='w-[80%] h-30 flex justify-center items-center'>
            <Link href="/">
                <FaSquareFacebook className='w-[32px] h-[32px] rounded-full'/>
            </Link>
            <Link href="/">
                <FaSquareTwitter className='w-[32px] mx-4 h-[32px]'/>
            </Link>
            <Link href="/">
                <FaLinkedin className='w-[32px] h-[32px] rounded-full'/>
            </Link>
        </div>
    )
}