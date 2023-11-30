import type { Metadata } from 'next'
import { Playfair_Display, Mulish } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'

const playfairDisplay = Playfair_Display ({ 
  subsets: ['latin'],
  variable: '--font-playfairDisplay'
})

const mulish = Mulish ({
  subsets: ['latin'],
  variable: '--font-mulish'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} ${playfairDisplay.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
