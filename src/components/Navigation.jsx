import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"
import { MenuIcon, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from "../lib/utils";
import { Button } from "@/components/ui/button"
const Navigation = () => {
    const location = useLocation();
    const [dark, setDark] = useState(false)
    const [useMobileMenu, setMobileMenu] = useState(false)
    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ]
    const isactiveRoute = (path) => {
        return location.pathname === path
    }
    useEffect(() => {
        const isDarkMode = localStorage.getItem("theme") === "dark"
        setDark(isDarkMode)
        if (isDarkMode) {
            document.documentElement.classList.add("dark")
        }
    }, [])
    const toggledarkMode = () => {
        const newTheme = !dark
        setDark(newTheme)
        if (newTheme) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
        else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }
    return (
        <nav className='bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to={"/"}
                        className='text-2xl font-bold text-foreground hover:text-primary transition-colors'>
                        Srinjoy Ghosh
                    </Link>
                    {/* for the desktop */}
                    <div className='hidden md:flex items-center space-x-8'>
                        {navItems.map((item) => (
                            <Link key={item.name} to={item.path}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    isactiveRoute(item.path) ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
                                )}>
                                {item.name}

                            </Link>
                        ))}
                        {/* dark mode */}
                        <Button
                            variant="ghost"
                            onClick={toggledarkMode}
                            className="ml-4"

                        >
                            {
                                dark ? <Sun className="size-4" /> : <Moon className='h-4 w-4' />
                            }
                        </Button>

                    </div>
                    <div>
                        <div className="md:hidden flex items-center space-x-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggledarkMode}
                            >
                                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setMobileMenu(!useMobileMenu)}
                            >
                                {useMobileMenu ? <X className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
                            </Button>
                        </div>

                    </div>
                    {/* for mobile */}
                    {
                        useMobileMenu && (
                            <div div className="md:hidden border-t border-border">
                                <div className='className="px-2 pt-2 pb-3 space-y-1"'>
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.path}
                                            className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-muted rounded-md ${isactiveRoute(item.path)
                                                    ? 'text-primary bg-muted'
                                                    : 'text-muted-foreground'
                                                }`}
                                            onClick={() => setMobileMenu(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}


                                </div>

                            </div>
                        )
                    }


                </div>

            </div>

        </nav>
    )
}

export default Navigation