import './globals.css'
import { Michroma, Orbitron, Share_Tech_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'

const michroma = Michroma({
  subsets: ['latin'],
  variable: '--font-michroma',
  weight: '400',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700'],
})

const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  variable: '--font-share-tech-mono',
  weight: '400',
})

export const metadata = {
  title: 'ANTHONNEY MWANZAH - PROFESSOR',
  description: 'Nerd by nature',
  icons: {
    icon: '/phroneo-logo.jpg',
    apple: '/phroneo-logo.jpg',
    shortcut: '/phroneo-logo.jpg',
  },
  openGraph: {
    title: 'ANTHONNEY MWANZAH - PROFESSOR',
    description: 'Nerd by nature',
    url: 'https://profcomic.netlify.app',
    siteName: 'ANTHONNEY PORTFOLIO',
    images: [
      {
        url: '/phroneo-logo.jpg',
        width: 1200,
        height: 1200,
        alt: 'ANTHONNEY MWANZAH - PROFESSOR',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${michroma.variable} ${orbitron.variable} ${shareTechMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}