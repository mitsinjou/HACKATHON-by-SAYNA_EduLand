import React from'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function FirstSection(){
    return(
        <div className='w-[80%] h-[180vh] flex flex-col  justify-center items-between lg:h-[70vh]'>
            <motion.section initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} className='w-full my-24 lg:my-0 h-12'>
                <p className='text-center text-black text-[24px] lg:text-[32px] font-semibold uppercase'>Qui sommes nous ?</p>
            </motion.section>
            <section className='w-full h-[100vh] lg:h-[62vh] grid grid-rows-2 lg:grid-cols-2'>
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} className='flex flex-col lg:h-[62vh] justify-center items-center'>
                    <p className='w-full lg:w-[601.37px] text-justify text-black text-sm lg:text-lg font-semibold'>EduLand est un projet qui va faire la liaison entre les jeunes demandeurs d’opportunité et les acteurs, partout à Madagascar qui sont en capacité de donner ces opportunités, c’est-à-dire c’est l’opportunité qui va se déplacer vers les jeunes, les entreprises, les associations ou tout autre organisme qui en besoin. C’est une plateforme qu’on peut qualifier comme une agence de voyage spécialisé parce que nous prendrons en charge l’organisation de l’événement, le séjour des intervenants ou les deux selon le choix de nos clients.</p>
                    <p className='my-2 w-full lg:w-[601.37px] text-justify text-black text-sm lg:text-lg font-semibold'>Actuellement, on est 4 personnes dans l’équipe de Eduland avec chacun ses compétences et capacités : digital marketing, développeur front-end et web design. On a mis en place ce site pour faciliter l’interaction avec nos clients et présenter notre projet à tout le monde. Nous remercions déjà nos partenaires pour leur confiance et leur soutien à ce projet.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} className='flex lg:h-[62vh] justify-center lg:justify-end items-center'>
                    <Image src="/fristImage.png" alt="firstShow" className="rounded-lg shadow backdrop-blur-sm" width={423.72} height={296.77}/>
                </motion.div>
            </section>
        </div>
    )
}