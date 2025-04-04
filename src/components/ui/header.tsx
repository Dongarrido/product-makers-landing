'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from './button'

type NavItem = {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'Community', href: '/community' },
  { label: 'Pricing', href: '/pricing' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  }

  return (
    <header className="border-b bg-white z-10 relative">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/" className="text-xl font-semibold hover:text-accent transition-colors">
            Product Makers
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navItems.map(item => (
            <Link 
              key={item.href}
              href={item.href} 
              className="text-secondary hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Login
          </Button>
          <Button>
            Get Started
          </Button>
          
          {/* Mobile Menu Button */}
          <button 
            className="ml-2 p-2 rounded-md md:hidden focus:outline-none focus:ring-2 focus:ring-primary/20"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Open main menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden py-4 px-4 bg-white border-t shadow-md absolute w-full transition-all duration-200 ease-in-out ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
      >
        <nav className="flex flex-col space-y-4" aria-label="Mobile navigation">
          {navItems.map(item => (
            <Link 
              key={item.href}
              href={item.href} 
              className="text-secondary hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/login" 
            className="text-secondary hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  )
} 