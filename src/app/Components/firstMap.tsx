import React from 'react'

const Paras = [
    {
        id: 1,
        firstText: "Etablissez vos besoins",
        secondText: "Prenez connaissance de nos offres de services",
    },
    {
        id: 2,
        firstText: "Demandez nous un devis ou choisissez un package",
        secondText: "Soumettez-nous vos besoins et exigences",
    },
    {
        id: 3,
        firstText: "Nous traitons la mission",
        secondText: "Notre equipe se charge de vous offrir des services personnalisés de qualité",
    }
]

export default function FirstMap(){
    return(
        <>
            {Paras.map(para => <div className='lg:w-[26.66%]' key={para.id}>
                                    <p className='text-center text-amber-600 text-[24px] lg:text-[26px] font-semibold underline uppercase'>{para.firstText}</p>
                                    <p className='text-center text-black text-base lg:text-xl font-normal'>{para.secondText}</p>
                                </div>) }
        </>
    )
}