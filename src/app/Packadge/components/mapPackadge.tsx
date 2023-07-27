import React, { useState } from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa6"


const DataCards = [
    {
        id: 1,
        icon: '/briefcase.png',
        iconAlt: 'briefcase',
        img: '/man.png',
        imgAlt: 'man',
        paraFirst: 'Plan Transport',
        btn: 'Select',
        price: '140.000Ar/Intervenant',
        paraSecond: 'Organisation du transport',
        paradesc: 'Billet',
        spandesc: 'Départ - Arrivé',
        paradescone: 'Repas',
        spandescone: 'Pendant le voyage',
        fastar: ``,
        paradesctwo: '',
        spandestwo: ''
    },
    {
        id: 2,
        icon: '/calendar.png',
        iconAlt: 'calendar',
        img: '/picCalendar.png',
        imgAlt: 'picCalendar',
        paraFirst: 'Plan Evenementiel',
        btn: 'Select',
        price: '200.000Ar(*)',
        paraSecond: "Organisation de l'événement",
        paradesc: 'Salle',
        spandesc: "de l'évènement",
        paradescone: 'Matériel',
        spandescone: '(Son et Logistique)',
        fastar: ``,
        paradesctwo: '',
        spandestwo: ''
    },
    {
        id: 3,
        icon: '/home.png',
        iconAlt: 'home',
        img: '/picHome.png',
        imgAlt: 'picHome',
        paraFirst: 'Plan Séjour',
        btn: 'Select',
        price: '400.000Ar(**)',
        paraSecond: "Organisation du séjour",
        paradesc: 'Voyage',
        spandesc: '(Transport)',
        paradescone: 'Hebergement',
        spandescone: '(Hotel)',
        fastar: <FaStar/>,
        paradesctwo: 'Evenement',
        spandestwo: '(Organisation)'
    }
]


export default function MapPackadge(){

    const [isMouseOver, setIsMouseOver] = useState(-1);

    const handleMouseEnter = (index: number) => {
        setIsMouseOver(index);
    }

    const handleMouseLeave = () => {
        setIsMouseOver(-1);
    }

    return(
        <>
            {DataCards.map((DataCard, index) => <section className='w-[363px] h-[431px] rounded-lg shadow border border-stone-400' key={DataCard.id}>
                    <section className={`w-[363px] h-[215.5px] justify-center items-center ${isMouseOver === index ? 'hidden' : 'flex'}`}>
                        <div className='w-[182px] h-[182px] bg-zinc-300 justify-center items-center rounded-full flex shadow' onMouseEnter={() => handleMouseEnter(index)}>
                            <Image src={DataCard.icon} alt={DataCard.iconAlt} width={124} height={124} />
                        </div>
                    </section>
                    <section className={`w-[363px] h-[215.5px] ${isMouseOver === index ? 'block' : 'hidden'}`}  onMouseLeave={handleMouseLeave}>
                        <Image src={DataCard.img} alt={DataCard.imgAlt} className='rounded-t-lg' width={363} height={215.5} />
                    </section>
                    <article className={`w-[363px] h-[215.5px] grid-row-2 ${ isMouseOver === index ? 'hidden' : 'grid' }`}>
                        <article className="flex justify-center items-center">
                            <p className="text-black font-sans text-lg font-semibold">{DataCard.paraFirst}</p>
                        </article>
                        <section className="flex items-center justify-around">
                            <button className="pl-[33px] pr-[34px] py-2.5 bg-black rounded-lg justify-center items-center inline-flex text-center text-white text-lg font-semibold uppercase" type="button">
                                {DataCard.btn}
                            </button>
                            <p className='text-black text-lg font-normal underline'>{DataCard.price}</p>
                        </section>
                    </article>
                    <article className={`w-[363px] h-[215.5px] justify-center items-start flex-col ${isMouseOver === index ? 'flex' : 'hidden'}`}>
                        <p className="w-[300px] h-[87px] flex items-start justify-center text-black text-lg font-normal leading-[38px]">
                            {DataCard.paraSecond}
                        </p>
                        <section className='w-[363px] h-24'>
                            <p className='flex justify-center items-center h-6'>
                                <FaStar/>
                                {DataCard.paradesc} <span>{DataCard.spandesc}</span>   
                            </p>
                            <p className='flex justify-center items-center my-1 h-6'>
                                <FaStar/>
                                {DataCard.paradescone} <span>{DataCard.spandescone}</span>
                            </p>
                            <p className='flex justify-center items-center h-6'>
                                {DataCard.fastar}
                                {DataCard.paradesctwo} <span> {DataCard.spandestwo} </span>
                            </p>
                        </section>
                    </article>
            </section>)}
        </>
    )
}