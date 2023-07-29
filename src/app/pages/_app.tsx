import React, { useState, useEffect } from 'react'
import Navbar from '../Components/navbar';

type ComponentPageProps = {
    Component: any,
    pageProps: any,
}

export default function TopElement({ Component, pageProps }:ComponentPageProps ) {
    const [navbarBackground, setNavbarBackground] = useState('bg-blue-500')
    useEffect( () => {
        const handleScroll = () => {
        const isTop = window.scrollY < 100;
        if(isTop){
            setNavbarBackground('bg-transparent');
        } else {
            setNavbarBackground('bg-blue-500');
        }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []
    );
    return(
        <>
        <Navbar/>
        <Component {...pageProps} />
        </>
    )
}