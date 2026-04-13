import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Spine33 - Posture & Back Pain Specialists',
  description: 'We are Posture and Back Pain Specialists. Our sole focus is to take the pain out of your life – anything arising out of your spine.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
