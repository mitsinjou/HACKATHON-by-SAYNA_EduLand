import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Eduland',
  description: 'Eduland vous offre des services logistiques adaptés à vos besoins. Pour vous mettre dans des bonnes conditions et vous permettre de proposer des formations de qualité partout à Madagascar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
