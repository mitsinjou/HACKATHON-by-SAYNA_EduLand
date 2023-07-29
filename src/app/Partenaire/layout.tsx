export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}){
    return(
        <section className='h-[250vh]'>
            {children}
        </section>
    )
}