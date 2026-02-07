'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{background: '#FFFFFF', borderBottom: '1px solid #E0E0E0', position: 'sticky', top: 0, zIndex: 1000}}>
      {/* Top Bar */}
      <div style={{background: '#003DA5', padding: '8px 0'}}>
        <div className="container-custom">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px', color: '#FFF'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
              <span style={{fontWeight: 600}}>OSNOVAN 1903</span>
            </div>
            <div style={{display: 'flex', gap: '15px'}}>
              <a href="#" style={{color: '#FFF', textDecoration: 'none'}}>Facebook</a>
              <a href="#" style={{color: '#FFF', textDecoration: 'none'}}>Instagram</a>
              <a href="#" style={{color: '#FFF', textDecoration: 'none'}}>YouTube</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="container-custom" style={{padding: '20px'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          {/* Logo */}
          <Link href="/" style={{display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none'}}>
            <div style={{
              width: '50px',
              height: '50px',
              background: '#003DA5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFF',
              fontWeight: 900,
              fontSize: '18px',
            }}>
              FK
            </div>
            <div>
              <div style={{fontFamily: 'Roboto Condensed', fontSize: '20px', fontWeight: 900, color: '#003DA5', lineHeight: 1}}>
                FK ŠUMADIJA 1903
              </div>
              <div style={{fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                Kragujevac
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex" style={{gap: '30px'}}>
            <Link href="/" style={{color: '#333', textDecoration: 'none', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase'}}>Početna</Link>
            <Link href="/vesti" style={{color: '#333', textDecoration: 'none', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase'}}>Vesti</Link>
            <Link href="/utakmice" style={{color: '#333', textDecoration: 'none', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase'}}>Utakmice</Link>
            <Link href="/timovi" style={{color: '#333', textDecoration: 'none', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase'}}>Timovi</Link>
            <Link href="/omladinska-skola" style={{color: '#333', textDecoration: 'none', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase'}}>Škola</Link>
            <Link href="/shop" style={{color: '#333', textDecoration: 'none', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase'}}>Shop</Link>
            <Link href="/istorija" style={{color: '#333', textDecoration: 'none', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase'}}>Istorija</Link>
            <Link href="/kontakt" style={{color: '#333', textDecoration: 'none', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase'}}>Kontakt</Link>
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
