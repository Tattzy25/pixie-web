"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import CartIcon from "./cart-icon"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would be determined by your auth state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogin = () => {
    // This would be replaced with your actual login logic
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    // This would be replaced with your actual logout logic
    setIsLoggedIn(false)
  }

  return (
    <header className="bg-black/80 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative w-10 h-10 mr-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/500x500%20pixie-z07TJGgsj6CC8CkEECsCExxJjj2Usv.png"
                  alt="Pixie Strollies Logo"
                  fill
                  className="object-contain"
                  sizes="2.5rem"
                />
              </div>
              <span className="text-xl font-bold text-white neon-text">Pixie Strollies</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Magical Home
            </Link>
            <Link href="/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Enchanted Rentals
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Magical Blog
            </Link>
            <Link href="/ai-tools" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Fairy Tools
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Our Story
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <CartIcon />

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0 text-white">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-gray-900 border border-purple-500/30 text-white">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem className="hover:bg-gray-800">
                    <Link href="/account">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-800">
                    <Link href="/account/reservations">My Reservations</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem onClick={handleLogout} className="hover:bg-gray-800">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" size="sm" onClick={handleLogin} className="text-white hover:bg-gray-800">
                Login
              </Button>
            )}
            <Link href="/reservation">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 relative group">
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600/50 to-pink-500/50 blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative">Book Now</span>
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <CartIcon />
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Magical Home
            </Link>
            <Link
              href="/products"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Enchanted Rentals
            </Link>
            <Link
              href="/blog"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Magical Blog
            </Link>
            <Link
              href="/ai-tools"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Fairy Tools
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              {isLoggedIn ? (
                <>
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center">
                      <User className="h-6 w-6 text-purple-400" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">User Name</div>
                    <div className="text-sm font-medium text-gray-400">user@example.com</div>
                  </div>
                </>
              ) : (
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-gray-800"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              )}
            </div>
            {isLoggedIn && (
              <div className="mt-3 px-2 space-y-1">
                <Link
                  href="/account"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Your Profile
                </Link>
                <Link
                  href="/account/reservations"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Reservations
                </Link>
                <button
                  onClick={() => {
                    handleLogout()
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Logout
                </button>
              </div>
            )}
            <div className="mt-3 px-5">
              <Link href="/reservation" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

