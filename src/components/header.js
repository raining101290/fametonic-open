import Link from 'next/link'
import React from 'react'
import Logo from './icons/logo'

const Header = () => {
  return (
    <header className="w-full mt-[35px] relative">
        <div className="max-w-screen-2xl mx-auto px-5 lg:px-[211px] sm:px-[44px] flex justify-center md:justify-between items-center relative">
            {/* Left: LOGO (centered on mobile) */}
            <Link href="/" alt="Fametonic logo">
                <Logo className="h-auto logo" />
            </Link>
            {/* Right: Menu - hidden on mobile */}
            <nav className="hidden md:flex gap-6">
                <Link href="#" className="text-white">About Us</Link>
                <Link href="#" className="text-white">Contact</Link>
            </nav>

            {/* Mobile menu button - absolute positioned to left or right */}
            <button className="md:hidden p-2 absolute right-6" aria-label="Open menu">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </header>
  )
}

export default Header
