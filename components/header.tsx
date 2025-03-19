"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon, Activity } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export function Header() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        setIsLoggedIn(typeof window !== "undefined" ? !!localStorage.getItem("user") : false)
    }, [])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const handleSignOut = () => {
        localStorage.removeItem("user")
        window.location.href = "/"
    }

    const navigation = [
        { name: "Home", href: "/" },
        ...(isLoggedIn
            ? [
                { name: "Dashboard", href: "/dashboard" },
                { name: "Activities", href: "/activities" },
                { name: "Profile", href: "/profile" },
            ]
            : []),
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-lg">
                            <Activity className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              ActivityHub
            </span>
                    </Link>
                </div>

                {/* Desktop navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-medium transition-colors hover:text-primary ${
                                pathname === item.href ? "text-primary font-bold" : "text-muted-foreground"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}

                    {isLoggedIn ? (
                        <Button
                            variant="outline"
                            className="border-purple-200 hover:bg-purple-50 hover:text-purple-700 dark:border-purple-800 dark:hover:bg-purple-900 dark:hover:text-purple-300"
                            onClick={handleSignOut}
                        >
                            Sign Out
                        </Button>
                    ) : (
                        <Link href="/signup">
                            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                                Sign Up
                            </Button>
                        </Link>
                    )}

                    {mounted && (
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Toggle Theme"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </Button>
                    )}
                </nav>

                {/* Mobile menu button */}
                <div className="flex items-center gap-2 md:hidden">
                    {mounted && (
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Toggle Theme"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </Button>
                    )}

                    <Button variant="ghost" size="icon" onClick={toggleMenu}>
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>

            {/* Mobile navigation */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 px-4 py-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`block py-2 text-base font-medium ${
                                    pathname === item.href ? "text-primary font-bold" : "text-muted-foreground"
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        {isLoggedIn ? (
                            <Button
                                variant="outline"
                                className="w-full mt-2 border-purple-200 hover:bg-purple-50 hover:text-purple-700 dark:border-purple-800 dark:hover:bg-purple-900 dark:hover:text-purple-300"
                                onClick={() => {
                                    handleSignOut()
                                    setIsMenuOpen(false)
                                }}
                            >
                                Sign Out
                            </Button>
                        ) : (
                            <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                                <Button className="w-full mt-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                                    Sign Up
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </header>
    )
}

