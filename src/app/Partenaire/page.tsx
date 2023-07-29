import SecondNavbar from './components/navbar'
import Footer from '../Components/footer'
import PartenaryMap from './components/partenaryMap'

export default function Page(){
    return(
        <>
            <header className='w-screen h-[230vh] flex justify-center items-start relative secondHeader'>
                <SecondNavbar/>
                <section className='w-screen h-[200vh] pt-[40vh] px-8 flex justify-center flex-wrap gap-6 mb-16'>
                    <PartenaryMap/>
                </section>
            </header>
            <footer className='w-screen h-40 flex justify-center items-center bg-neutral-800 bg-opacity-40'>
                <Footer/>
            </footer>
        </>
    )
}