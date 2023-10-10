import {Navbar, Footer }from '@/components'
import './globals.css'
import type { Metadata } from 'next'




export const metadata: Metadata = {
  title: 'Coinfluence',
  description: 'Boost your engagements',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=" relative xl:mx-20 lg:mx-30 mx-2 md:mx-5">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
