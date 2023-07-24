import React from 'react'
import Link from 'next/link'
import { useFormik } from 'formik'

export default function Hero(){
    const formik = useFormik({
        initialValues: {
            search: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return(
        <section className='w-[80%] h-[70vh] grid grid-cols-2'>
            <article className='grid content-evenly'>
                <p className='text-justify text-orange-400 text-[36px] font-semibold'>Nous vous aidons à proposer des formations de qualités partout à Madagascar</p>
                <p className='text-justify text-white text-xl font-semibold'>Eduland vous offre des services logistiques adaptés à vos besoins. Pour vous mettre dans des bonnes conditions et vous permettre de proposer des formations de qualité partout à Madagascar</p>
                <Link href="/">
                    <button type='button' className='p-2.5 bg-red-600 rounded-lg shadow justify-center items-center gap-2.5 inline-flex text-white text-lg font-semibold uppercase'>Demandez un devis</button>
                </Link>
            </article>
            <section className='flex items-end justify-center'>
                <form onSubmit={formik.handleSubmit} className=' mb-8'>
                <input
                    id="search"
                    name="search"
                    type="search"
                    title="search"
                    className="w-[338.77px] h-[50.95px] indent-4 font-semibold font-sans  bg-zinc-300 rounded-lg"
                    onChange={formik.handleChange}
                    value={formik.values.search}
                />
                <button type="submit" className='mx-4 p-2.5 bg-red-600 rounded-lg shadow justify-center items-center gap-2.5 inline-flex text-white text-lg font-semibold'>Rechercher</button>
                </form>
            </section>
        </section>
    )
}