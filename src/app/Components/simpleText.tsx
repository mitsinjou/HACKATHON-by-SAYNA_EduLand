import React from 'react'
import { motion } from 'framer-motion'

export default function SimpleText(){
    return(
        <motion.section initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} className='w-screen h-12'>
                <p className='text-center text-black text-[24px] lg:text-[26px] font-semibold'>Ce que nous vous proposons!</p>
        </motion.section>
    )
}