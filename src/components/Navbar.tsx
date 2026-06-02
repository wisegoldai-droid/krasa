'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Flower2, ChevronDown } from 'lucide-react'

const mainLinks = [
  { href: '/', label: 'Uvod' },
  { href: '/program', label: 'Program 2026' },
  { href: '/galerie', label: 'Fotogalerie' },
  { href: '/uskutecnene', label: 'Uskutecnene akce' },
  { href: '/kontakty', label: 'Kontakty' },
]

const moreLinks = [
  { href: '/partneri', label: 'Partneri akci' },
  { href: '/video', label: 'Videa a zdravice Marka Ebena' },
  { href: '/odkazy', label: 'Napsali o nas' },
  { href: '/o-nas', label: 'O nas' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const moreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const isMoreActive = moreLinks.some((l) => pathname === l.href)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-main flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-serif font-bold text-brand-800 text-lg shrink-0">
          <Flower2 className="w-6 h-6 text-brand-600" />
          <span className="hidden sm:inline">Krasa zraleho veku</span>
          <span className="sm:hidden">KZV</span>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          {mainLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                pathname === l.href
                  ? 'bg-brand-100 text-brand-800'
                  : 'text-gray-600 hover:text-brand-700 hover:bg-brand-50'
              }`}
            >
              {l.label}
            </Link>
          ))}

          <div ref={moreRef} className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isMoreActive || moreOpen
                  ? 'bg-brand-100 text-brand-800'
                  : 'text-gray-600 hover:text-brand-700 hover:bg-brand-50'
              }`}
            >
              Vice
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
            </button>

            {moreOpen && (
              <div className="absolute right-0 top-full mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50">
                {moreLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMoreOpen(false)}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      pathname === l.href
                        ? 'bg-brand-50 text-brand-800 font-medium'
                        : 'text-gray-700 hover:bg-brand-50 hover:text-brand-700'
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-brand-50"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
          <nav className="container-main py-3 flex flex-col gap-1">
            {[...mainLinks, ...moreLinks].map((l) => (
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
