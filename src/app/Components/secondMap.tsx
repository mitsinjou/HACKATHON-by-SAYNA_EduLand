import React from 'react'
import Image from 'next/image'

const Datas = [
    {
        id: 1,
        insideText: 'Organisations évènementiel',
        img: '/meetup.png',
        heading: 'Nous gérons la logistique de votre évènement',
        btn: 'En savoir plus',
        alternative: 'meetup'
    },
    {
        id: 2,
        insideText: 'recherche de partenaires',
        img: '/meetup2.png',
        heading: 'Nous reherchons des partenaires à la mesure de vos éxigences',
        btn: 'En savoir plus',
        alternative: 'meetup2'
    },
    {
        id: 3,
        insideText: 'séjour',
        img: '/meetup3.png',
        heading: "Nous nous occupons de l'organisation de votre séjour",
        btn: 'En savoir plus',
        alternative: 'meetup3'
    }
];


export default function SecondMap(){
    return(
        <>
            {Datas.map(Data => <div className='w-[26.66%] h-[60vh] flex flex-col items-center justify-center' key={Data.id}>
                <section className='relative'>
                    <p className='absolute top-[40%] w-[205.33px] left-[20%] text-center text-white text-2xl font-bold uppercase'>{Data.insideText}</p>
                    <Image src={Data.img} alt={Data.alternative} width={340} height={255}/>
                </section>
                    <p className='text-center text-black text-xl font-normal my-4'>{Data.heading}</p>
                    <button type='button' className='p-2.5 bg-red-600 rounded-lg shadow justify-center items-center gap-2.5 flex text-white text-lg font-semibold'>{Data.btn}</button>
            </div>)}
        </>
    )
}