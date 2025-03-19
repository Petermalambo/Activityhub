import type React from "react"
import { Inter } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "ActivityHub - Discover Your Next Adventure",
    description: "Find personalized activities based on your interests and age group",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
            <Toaster />
        </ThemeProvider>
        </body>
        </html>
    )
}

