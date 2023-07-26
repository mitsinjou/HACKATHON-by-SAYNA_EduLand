import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Descriptions = [
    {
        id: 1,
        img: '/orlando.png',
        alt: 'orlando',
        textone: "Notre responsable marketing vous parle de l'accéssibilité à la formation à Madagascar",
        date: '01 janvier 2022',
        texttwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida, dolor non lacinia consectetur, arcu sem porttitor....',
        lien: 'Lire la suite'
    },
    {
        id: 2,
        img: '/sayna.png',
        alt: 'sayna',
        textone: "Notre responsable marketing vous parle de l'accéssibilité à la formation à Madagascar",
        date: '01 janvier 2022',
        texttwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida, dolor non lacinia consectetur, arcu sem porttitor....',
        lien: 'Lire la suite'
    },
    {
        id: 3,
        img: '/commune.png',
        alt: 'commune',
        textone: "Notre responsable marketing vous parle de l'accéssibilité à la formation à Madagascar",
        date: '01 janvier 2022',
        texttwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida, dolor non lacinia consectetur, arcu sem porttitor....',
        lien: 'Lire la suite'
    }
];

export default function PartenaryMap(){
    return(
        <>
            {Descriptions.map(description =>  <div className='w-80 h-[50vh]' key={description.id}>
                <section className='w-80 h-[77px] flex justify-center'>
                    <Image src={description.img} alt={description.alt} width={156} height={77}/>
                </section>
                <article className='w-80 h-[36vh] grid content-evenly'>
                    <p className='text-white text-lg font-semibold text-justify'>{description.textone}</p>
                    <p className="text-white text-sm font-normal">{description.date}</p>
                    <p className='text-white text-xs font-normal'>{description.texttwo}</p>
                    <Link href='/Partenaire' className="text-white text-sm font-bold underline">
                            {description.lien}
                    </Link>
                </article>
            </div>)}
        </>
    )
}