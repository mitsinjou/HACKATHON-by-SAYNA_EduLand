import Link from 'next/link'

export default function Page(){
    return(
        <>
            <h1 className="p-6 text-red-400 font-sans font-semibold">I am in the dashbord</h1>
            <Link className="p-6 text-red-400 font-sans font-semibold" href="/">go to the Root</Link>
        </>
    )
}