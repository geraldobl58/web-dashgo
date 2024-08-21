import type { Metadata } from 'next'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { theme } from '@/styles/theme'

import './globals.css'

export const metadata: Metadata = {
  title: 'Web Dashgo',
  description: 'Web Dashgo'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>{children}</body>
      </ThemeProvider>
    </html>
  )
}
