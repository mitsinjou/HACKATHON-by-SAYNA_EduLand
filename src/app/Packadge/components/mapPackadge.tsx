import React, { useState } from 'react'
import Image from 'next/image'

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
        paraSecond: 'Organisation du transport'
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
        paraSecond: "Organisation de l'événement"
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
        paraSecond: "Organisation du séjour"
    }
]


export default function MapPackadge(){

    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleMouseEnter = () => {
        setIsMouseOver(true);
    }

    const handleMouseLeave = () => {
        setIsMouseOver(false);
    }

    return(
        <>
            {DataCards.map(DataCard => <section className='w-[363px] h-[431px] rounded-lg shadow border border-stone-400' key={DataCard.id}>
                    <section className={`w-[363px] h-[215.5px] justify-center items-center ${isMouseOver ? 'hidden' : 'flex'}`}>
                        <div className='w-[182px] h-[182px] bg-zinc-300 justify-center items-center rounded-full flex shadow' onMouseEnter={handleMouseEnter}>
                            <Image src={DataCard.icon} alt={DataCard.iconAlt} width={124} height={124} />
                        </div>
                    </section>
                    <section className={`w-[363px] h-[215.5px] ${isMouseOver ? 'block' : 'hidden'}`}  onMouseLeave={handleMouseLeave}>
                        <Image src={DataCard.img} alt={DataCard.imgAlt} width={363} height={215.5} />
                    </section>
                    <article className={`w-[363px] h-[215.5px] grid-row-2 ${ isMouseOver ? 'hidden' : 'grid' }`}>
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
                    <article className={`w-[363px] h-[215.5px] justify-center items-center ${isMouseOver ? 'flex' : 'hidden'}`}>
                        <p className="w-[300px] h-[87px] text-center text-black text-lg font-normal leading-[38px]">
                            {DataCard.paraSecond}
                        </p>
                    </article>
            </section>)}
        </>
    )
}