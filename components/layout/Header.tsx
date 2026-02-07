'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    {
      name: 'Početna',
      href: '/',
    },
    {
      name: 'Vesti',
      href: '/vesti',
    },
    {
      name: 'Utakmice',
      href: '/utakmice',
    },
    {
      name: 'Timovi',
      href: '/timovi',
    },
    {
      name: 'Omladinska škola',
      href: '/omladinska-skola',
    },
    {
      name: 'Balon sala',
      href: '/balon-sala',
    },
    {
      name: 'Shop',
      href: '/shop',
    },
    {
      name: 'Istorija',
      href: '/istorija',
    },
    {
      name: 'Stadion',
      href: '/stadion',
    },
    {
      name: 'Sponzori',
      href: '/sponzori',
    },
    {
      name: 'Kontakt',
      href: '/kontakt',
    },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      {/* Top Heritage Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <span className="font-serif font-semibold">Osnovan 1903</span>
              <span className="hidden sm:inline text-slate-200">|</span>
              <span className="hidden sm:inline text-slate-200">Najstariji fudbalski klub u Srbiji</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/kontakt" className="hover:text-heritage-gold transition">
                📧 Kontakt
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">
              FK
            </div>
            <div>
              <div className="font-serif font-bold text-xl text-primary">FK Šumadija 1903</div>
              <div className="text-xs text-slate-600">Kragujevac, Srbija</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded hover:bg-slate-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
