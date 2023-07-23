import React from 'react'
import Link from 'next/link'

export default function Hero(){
    return(
        <section className='w-[80%] h-[70vh] grid grid-cols-2'>
            <article className='grid content-evenly'>
                <p className='text-justify text-orange-400 text-[36px] font-semibold'>Nous vous aidons à proposer des formations de qualités partout à Madagascar</p>
                <p className='text-justify text-white text-xl font-semibold'>Eduland vous offre des services logistiques adaptés à vos besoins. Pour vous mettre dans des bonnes conditions et vous permettre de proposer des formations de qualité partout à Madagascar</p>
                <Link href="/">
                    <button type='button' className='p-2.5 bg-red-600 rounded-lg shadow justify-center items-center gap-2.5 inline-flex text-white text-lg font-semibold uppercase'>Demandez un devis</button>
                </Link>
            </article>
            <section className='border border-gray-400'></section>
        </section>
    )
}