import './globals.css'
import { Orbitron, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
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
      <body className={`${spaceGrotesk.variable} ${orbitron.variable}`}>
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