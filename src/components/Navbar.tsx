'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Flower2 } from 'lucide-react'

const links = [
  { href: '/', label: 'Úvod' },
  { href: '/program', label: 'Program 2026' },
  { href: '/galerie', label: 'Fotogalerie' },
  { href: '/uskutecnene', label: 'Uskutečněné akce' },
  { href: '/o-nas', label: 'O nás' },
  { href: '/kontakty', label: 'Kontakty' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-main flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-serif font-bold text-brand-800 text-lg">
          <Flower2 className="w-6 h-6 text-brand-600" />
          <span className="hidden sm:inline">Krása zralého věku</span>
          <span className="sm:hidden">KZV</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === l.href
                  ? 'bg-brand-100 text-brand-800'
                  : 'text-gray-600 hover:text-brand-700 hover:bg-brand-50'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-brand-50"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container-main py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? 'bg-brand-100 text-brand-800'
                    : 'text-gray-700 hover:bg-brand-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
