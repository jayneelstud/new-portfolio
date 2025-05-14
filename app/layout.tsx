import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Poojan Brahmbhatt | Portfolio",
  description:
    "Personal portfolio of Poojan Brahmbhatt, showcasing projects and research in AI, Machine Learning, and Web Development.",
  keywords: [
    "Poojan Brahmbhatt",
    "portfolio",
    "AI",
    "Machine Learning",
    "Web Development",
    "Research",
    "Deep Learning",
  ],
  authors: [{ name: "Poojan Brahmbhatt" }],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
