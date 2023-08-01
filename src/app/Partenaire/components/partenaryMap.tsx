import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Descriptions = [
    {
        id: 1,
        img: '/orlando.png',
        alt: 'orlando',
        textone: "Services disponibles: Multi-services et Cybercafé",
        tel: "Téléphone: 034 80 544 49",
        texttwo: 'Rendez-vous: 78G5+R61, Mahajanga',
    },
    {
        id: 2,
        img: '/sayna.png',
        alt: 'sayna',
        textone: "Services disponibles: Cours en ligne",
        tel: 'Téléphone: 034 29 093 40',
        texttwo: 'Rendez-vous: sayna.io',
    },
    {
        id: 3,
        img: '/commune.png',
        alt: 'commune',
        textone: "Services disponibles: Commune Urbaine de Mahajanga",
        tel: 'Téléphone: (020) 62 900 03',
        texttwo: 'Rendez-vous: Hotel de ville',
    },
    {
        id: 4,
        img: '/oif.jpg',
        alt: 'oif',
        textone: "Promouvoir la langue française et la diversité culturelle et linguistique",
        tel: 'Téléphone: (33) 1 44 37 33 25',
        texttwo: 'Rendez-vous: francophonie.org',
    },
    {
        id: 5,
        img: '/cotisse.jpg',
        alt: 'cotisse',
        textone: "Services disponibles: Service de transport et d'accompagnement",
        tel: 'Téléphone: 032 11 027 11',
        texttwo: 'Rendez-vous: Ave Barday, Mahajanga'
    },
    {
        id: 6,
        img: '/palm.jpg',
        alt: 'palm',
        textone: "Services disponibles: Hotel, Spa et Salle de conférence",
        tel: 'Téléphone: 034 61 379 85',
        texttwo: "Rendez-vous: Ambondrona, route de l'Université"
    },
    {
        id: 7,
        img: '/corniche.jpg',
        alt: 'corniche',
        textone: "Services disponibles: Hotel de style décontracté et Restaurant et Salle",
        tel: 'Téléphone: 034 07 011 11',
        texttwo: "Rendez-vous: 49 Ave De France, Mahajanga"
    },
    {
        id: 8,
        img: '/baobabTree.jpg',
        alt: 'baobabTree',
        textone: "Services disponibles: Hotel 4 étoiles et Spa et Salle de conférence",
        tel: 'Téléphone: 020 62 241 72',
        texttwo: "Rendez-vous: BP522, La Corniche, Boulevard Marcoz, Mahajanga"
    }
];

export default function PartenaryMap(){
    return(
        <>
            {Descriptions.map(description =>  <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} className='w-80 h-[50vh] rounded-lg bg-gray-300' key={description.id}>
                <section className='w-80 pt-4 h-[77px] flex justify-center'>
                    <Image src={description.img} alt={description.alt} width={156} height={77}/>
                </section>
                <article className='w-80 p-4 h-[36vh] grid content-evenly'>
                    <p className='text-gray-600 text-lg font-semibold'>{description.textone}</p>
                    <p className="text-gray-600 text-sm font-normal">{description.tel}</p>
                    <p className='text-gray-600 text-xs font-normal'>{description.texttwo}</p>
                </article>
            </motion.div>)}
        </>
    )
}