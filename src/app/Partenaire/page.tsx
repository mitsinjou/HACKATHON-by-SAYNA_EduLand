import SecondNavbar from './components/navbar'
import Footer from '../Components/footer'

export default function Page(){
    return(
        <>
            <header className='w-screen h-screen relative secondHeader'>
                <SecondNavbar/>
            </header>
            <footer className='w-screen h-40 flex justify-center items-center bg-neutral-800 bg-opacity-40'>
                <Footer/>
            </footer>
        </>
    )
}