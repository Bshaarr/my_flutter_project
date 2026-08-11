import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hotel IT Academy | أكاديمية المعلوماتية الفندقية',
  description: 'منصة تعليمية شاملة لتعليم تقنيات المعلوماتية في الفنادق',
  icons: {
    icon: '🏨',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-arabic bg-light text-dark">
        {children}
      </body>
    </html>
  )
}
