'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'POČETNA', href: '/' },
    { name: 'VESTI', href: '/vesti' },
    { name: 'UTAKMICE', href: '/utakmice' },
    { name: 'TIMOVI', href: '/timovi' },
    { name: 'ŠKOLA', href: '/omladinska-skola' },
    { name: 'BALON', href: '/balon-sala' },
    { name: 'SHOP', href: '/shop' },
    { name: 'ISTORIJA', href: '/istorija' },
    { name: 'KONTAKT', href: '/kontakt' },
  ];

  return (
    <header style={{background: '#000', borderBottom: '3px solid #FF6B35', position: 'sticky', top: 0, zIndex: 1000}}>
      {/* Top Bar */}
      <div style={{background: 'linear-gradient(135deg, #0052D9, #FF6B35)', padding: '0.75rem 0'}}>
        <div className="container-custom">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem', fontWeight: 700}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
              <span className="font-display" style={{fontSize: '1rem'}}>🏆 OSNOVAN 1903</span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline">NAJSTARIJI KLUB U SRBIJI</span>
            </div>
            <div style={{display: 'flex', gap: '1rem'}}>
              <a href="#" style={{transition: 'opacity 0.2s'}} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                📘
              </a>
              <a href="#" style={{transition: 'opacity 0.2s'}} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                📷
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="container-custom" style={{padding: '1.25rem 1rem'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          {/* Logo */}
          <Link href="/" style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #0052D9, #FF6B35)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '1.5rem',
              boxShadow: '0 4px 20px rgba(255, 107, 53, 0.5)',
            }}>
              ŠU
            </div>
            <div>
              <div className="font-display" style={{fontSize: '1.5rem', color: 'white', lineHeight: 1}}>
                FK ŠUMADIJA
              </div>
              <div style={{fontSize: '0.75rem', color: '#FFD93D', fontWeight: 700}}>
                KRAGUJEVAC 1903
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-display"
                style={{
                  padding: '0.75rem 1rem',
                  fontSize: '0.9rem',
                  fontWeight: 400,
                  color: 'white',
                  transition: 'all 0.2s',
                  borderRadius: '4px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #0052D9, #FF6B35)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
            style={{
              padding: '0.5rem',
              color: 'white',
              background: mobileMenuOpen ? 'linear-gradient(135deg, #0052D9, #FF6B35)' : 'transparent',
              borderRadius: '4px',
            }}
          >
            <svg style={{width: '1.5rem', height: '1.5rem'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden" style={{marginTop: '1rem', paddingTop: '1rem', borderTop: '2px solid #FF6B35'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-display"
                  style={{
                    padding: '1rem',
                    fontSize: '1.125rem',
                    color: 'white',
                    background: 'rgba(255, 107, 53, 0.1)',
                    borderRadius: '8px',
                    transition: 'all 0.2s',
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #0052D9, #FF6B35)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 107, 53, 0.1)'}
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
