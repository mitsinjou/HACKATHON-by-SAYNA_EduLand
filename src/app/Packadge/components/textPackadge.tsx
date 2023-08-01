import React from 'react'
import { motion } from 'framer-motion'


export default function TextPackadge(){
    return(
        <>
            <motion.article initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} className='w-screen h-24 flex justify-center items-end'>
                    <p className="text-black text-[24px] lg:text-[32px] font-normal">Concevons ensemble votre projet</p>
            </motion.article>
        </>
    )
}