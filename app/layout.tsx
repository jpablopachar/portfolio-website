// eslint-disable-next-line camelcase
import { Sometype_Mono } from 'next/font/google'

import Gradient from '@/components/Gradient'
import Header from '@/components/Header'
import MainNav from '@/components/MainNav'
import PageTransition from '@/components/PageTransition'
import RectangleTransition from '@/components/RectangleTransition'
import './globals.css'

const sometypeMono = Sometype_Mono({
  variable: '--font-sometypeMono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Portfolio | Next.js',
  description: 'With Tailwind CSS V4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${sometypeMono.variable} antialiased overflow-hidden relative`}
      >
        <Gradient />
        <RectangleTransition />
        <PageTransition>
          <div className="flex">
            <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary">
              <MainNav />
            </div>
            <div className="w-full max-w-[1130px] px-[15px] mx-auto">
              <Header />
              <div>{children}</div>
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  )
}
