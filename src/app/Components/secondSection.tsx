import React from 'react'
import { motion } from 'framer-motion'

export default function SecondSection(){
    return(
        <div className=' w-[80%] h-[100vh] lg:h-40 grid grid-rows-2 my-6'>
            <motion.article initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }}>
                <p className='text-center my-14 lg:my-0 text-black text-[24px] lg:text-[32px] font-semibold uppercase'>comment ça marche ?</p>
            </motion.article>
            <motion.section initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} className='flex flex-col lg:flex-row w-full justify-center items-center'>
                <span className='w-[54px] h-[55px] px-[21px] py-3.5 bg-red-600 rounded-[50px] flex-col justify-center items-center gap-2.5 inline-flex text-white text-xl font-semibold'>1</span>
                <div className='w-[0px] lg:w-[430px] h-[107.5px] lg:h-0 border-2 border-red-600'></div>
                <span className='w-[54px] h-[55px] px-[21px] py-3.5 bg-red-600 rounded-[50px] flex-col justify-center items-center gap-2.5 inline-flex text-white text-xl font-semibold'>2</span>
                <div className='w-[0px] lg:w-[430px] h-[107.5px] lg:h-0 border-2 border-red-600'></div>
                <span className='w-[54px] h-[55px] px-[21px] py-3.5 bg-red-600 rounded-[50px] flex-col justify-center items-center gap-2.5 inline-flex text-white text-xl font-semibold'>3</span>
            </motion.section>
        </div>

    )
}