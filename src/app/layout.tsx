import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | Krása zralého věku',
    default: 'Krása zralého věku',
  },
  description:
    'Hudebně komponovaný pořad určený dříve narozeným. Agentura KUKR – Mgr. Hana Marie Kunešová.',
  keywords: ['senioři', 'kultura', 'Praha', 'Dolní Chabry', 'krása zralého věku', 'pořad'],
  openGraph: {
    siteName: 'Krása zralého věku',
    locale: 'cs_CZ',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
