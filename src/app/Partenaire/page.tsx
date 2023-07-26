import SecondNavbar from './components/navbar'
import Footer from '../Components/footer'
import PartenaryMap from './components/partenaryMap'

export default function Page(){
    return(
        <>
            <header className='w-screen h-screen flex justify-center items-end relative secondHeader'>
                <SecondNavbar/>
                <section className='w-screen h-[50vh] flex justify-around mb-16'>
                    <PartenaryMap/>
                </section>
            </header>
            <footer className='w-screen h-40 flex justify-center items-center bg-neutral-800 bg-opacity-40'>
                <Footer/>
            </footer>
        </>
    )
}