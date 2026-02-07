'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{background: '#FFFFFF', borderBottom: '1px solid #E0E0E0', position: 'sticky', top: 0, zIndex: 1000}}>
      {/* Top Bar */}
      <div style={{background: '#1E5BA8', padding: '10px 0'}}>
        <div className="container-custom">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px', color: '#FFF'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
              <span style={{fontWeight: 700, letterSpacing: '1px'}}>🐺 PLAVI VUKOVI • OSNOVAN 1903</span>
            </div>
            <div style={{display: 'flex', gap: '15px'}}>
              <a href="https://www.facebook.com/fk-sumadija-1903" target="_blank" rel="noopener noreferrer" style={{color: '#FFF', textDecoration: 'none', transition: 'opacity 0.2s'}} onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>Facebook</a>
              <a href="https://www.instagram.com/sumadija_1903/" target="_blank" rel="noopener noreferrer" style={{color: '#FFF', textDecoration: 'none', transition: 'opacity 0.2s'}} onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>Instagram</a>
              <a href="#" style={{color: '#FFF', textDecoration: 'none', transition: 'opacity 0.2s'}} onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>YouTube</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="container-custom" style={{padding: '20px'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          {/* Logo */}
          <Link href="/" style={{display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none'}}>
            <img
              src="https://srbijasport.net/img/club/18/140"
              alt="FK Šumadija 1903 Logo"
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'contain',
              }}
            />
            <div>
              <div style={{fontFamily: 'Roboto Condensed', fontSize: '22px', fontWeight: 900, color: '#1E5BA8', lineHeight: 1, letterSpacing: '-0.5px'}}>
                FK ŠUMADIJA
              </div>
              <div style={{fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600}}>
                Kragujevac • 1903
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex" style={{gap: '30px'}}>
            <Link href="/" style={{color: '#1A1A1A', textDecoration: 'none', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', transition: 'color 0.2s'}} className="nav-link">Početna</Link>
            <Link href="/vesti" style={{color: '#1A1A1A', textDecoration: 'none', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', transition: 'color 0.2s'}} className="nav-link">Vesti</Link>
            <Link href="/utakmice" style={{color: '#1A1A1A', textDecoration: 'none', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', transition: 'color 0.2s'}} className="nav-link">Utakmice</Link>
            <Link href="/timovi" style={{color: '#1A1A1A', textDecoration: 'none', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', transition: 'color 0.2s'}} className="nav-link">Timovi</Link>
            <Link href="/omladinska-skola" style={{color: '#1A1A1A', textDecoration: 'none', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', transition: 'color 0.2s'}} className="nav-link">Škola</Link>
            <Link href="/shop" style={{color: '#1A1A1A', textDecoration: 'none', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', transition: 'color 0.2s'}} className="nav-link">Shop</Link>
            <Link href="/istorija" style={{color: '#1A1A1A', textDecoration: 'none', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', transition: 'color 0.2s'}} className="nav-link">Istorija</Link>
            <Link href="/kontakt" style={{color: '#1A1A1A', textDecoration: 'none', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', transition: 'color 0.2s'}} className="nav-link">Kontakt</Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
            style={{padding: '10px', background: 'none', border: 'none', cursor: 'pointer'}}
          >
            <svg style={{width: '24px', height: '24px'}} fill="none" stroke="#333" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden" style={{marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #E0E0E0'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
              <Link href="/" style={{color: '#333', textDecoration: 'none', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase'}} onClick={() => setMobileMenuOpen(false)}>Početna</Link>
              <Link href="/vesti" style={{color: '#333', textDecoration: 'none', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase'}} onClick={() => setMobileMenuOpen(false)}>Vesti</Link>
              <Link href="/utakmice" style={{color: '#333', textDecoration: 'none', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase'}} onClick={() => setMobileMenuOpen(false)}>Utakmice</Link>
              <Link href="/timovi" style={{color: '#333', textDecoration: 'none', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase'}} onClick={() => setMobileMenuOpen(false)}>Timovi</Link>
              <Link href="/omladinska-skola" style={{color: '#333', textDecoration: 'none', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase'}} onClick={() => setMobileMenuOpen(false)}>Škola</Link>
              <Link href="/shop" style={{color: '#333', textDecoration: 'none', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase'}} onClick={() => setMobileMenuOpen(false)}>Shop</Link>
              <Link href="/istorija" style={{color: '#333', textDecoration: 'none', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase'}} onClick={() => setMobileMenuOpen(false)}>Istorija</Link>
              <Link href="/kontakt" style={{color: '#333', textDecoration: 'none', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase'}} onClick={() => setMobileMenuOpen(false)}>Kontakt</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
