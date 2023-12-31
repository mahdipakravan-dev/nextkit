import type { Metadata } from 'next'
import './globals.css'
import localFont from "next/font/local";

const inter = localFont({
  src: [
    {
      weight: '100',
      style : 'normal',
      path: './assets/fonts/yekan/woff/YekanBakh-Thin.woff',
    },
    {
      weight: '300',
      style : 'normal',
      path: './assets/fonts/yekan/woff/YekanBakh-Light.woff',
    },
    {
      weight: '400',
      style : 'normal',
      path: './assets/fonts/yekan/woff/YekanBakh-Regular.woff',
    },
    {
      weight: '600',
      style : 'normal',
      path: './assets/fonts/yekan/woff/YekanBakh-SemiBold.woff',
    },
    {
      weight: '700',
      style : 'normal',
      path: './assets/fonts/yekan/woff/YekanBakh-Bold.woff',
    },
    {
      weight: '800',
      style : 'normal',
      path: './assets/fonts/yekan/woff/YekanBakh-ExtraBold.woff',
    },
    {
      weight: '900',
      style : 'normal',
      path: './assets/fonts/yekan/woff/YekanBakh-Black.woff',
    },
    {
      weight: '950',
      style : 'normal',
      path: './assets/fonts/yekan/woff/YekanBakh-ExtraBlack.woff',
    }
  ],
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
