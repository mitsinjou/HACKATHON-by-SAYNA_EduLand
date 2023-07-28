import React from 'react'
import Image from "next/image"
import Link from "next/link"

const DataBlogs = [
    {
        id: 1,
        img: '/laptop.png',
        nameImg: 'laptop',
        paraOne: "Notre responsable marketing vous parle de l'accéssibilité à la formation à Madagascar",
        date: "01 janvier 2022",
        paraTwo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida, dolor non lacinia consectetur, arcu sem porttitor....",
        lien: "Lire la suite"
    },
    {
        id: 2,
        img: '/ted.png',
        nameImg: 'ted',
        paraOne: "Pourquoi TED est une référence en matière d'évènement éducatif ?",
        date: "01 janvier 2022",
        paraTwo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida, dolor non lacinia consectetur, arcu sem porttitor....",
        lien: "Lire la suite"
    },
    {
        id: 3,
        img: '/events.png',
        nameImg: 'events',
        paraOne: "Nos conseils pour gérer un évènement de formation",
        date: "01 janvier 2022",
        paraTwo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida, dolor non lacinia consectetur, arcu sem porttitor....",
        lien: "Lire la suite"
    }
];

export default function MapBlog(){
    return(
        <>
            {DataBlogs.map(DataBlog => <section className='w-80 h-[368px] flex flex-col items-center' key={DataBlog.id}>
                    <div>
                        <Image src={DataBlog.img} alt={DataBlog.nameImg} width={300} height={206}/>
                    </div>
                    <article>
                        <p className="w-80 text-justify text-black text-lg font-semibold">{DataBlog.paraOne}</p>
                        <p className="text-black text-sm font-normal">{DataBlog.date}</p>
                        <p className="w-[319px] h-[37px] my-2 text-justify text-black text-xs font-normal">{DataBlog.paraTwo}</p>
                        <Link href="/">
                            <p className="text-stone-400 text-sm font-bold underline">{DataBlog.lien}</p>
                        </Link>
                    </article>
            </section>) }
        </>
    )
}