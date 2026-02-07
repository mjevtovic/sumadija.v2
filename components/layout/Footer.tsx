'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{background: '#2C2C2C', color: '#FFF'}}>
      <div className="container-custom" style={{padding: '50px 20px 30px'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px'}}>
          {/* Club Info */}
          <div>
            <h3 style={{fontFamily: 'Roboto Condensed', fontSize: '18px', fontWeight: 700, marginBottom: '15px', textTransform: 'uppercase'}}>
              O KLUBU
            </h3>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={{marginBottom: '10px'}}><Link href="/istorija" style={{color: '#CCC', textDecoration: 'none', fontSize: '14px'}}>Istorija</Link></li>
              <li style={{marginBottom: '10px'}}><Link href="/timovi" style={{color: '#CCC', textDecoration: 'none', fontSize: '14px'}}>Timovi</Link></li>
              <li style={{marginBottom: '10px'}}><Link href="/stadion" style={{color: '#CCC', textDecoration: 'none', fontSize: '14px'}}>Stadion</Link></li>
              <li style={{marginBottom: '10px'}}><Link href="/kontakt" style={{color: '#CCC', textDecoration: 'none', fontSize: '14px'}}>Kontakt</Link></li>
            </ul>
          </div>

          {/* Match Info */}
          <div>
            <h3 style={{fontFamily: 'Roboto Condensed', fontSize: '18px', fontWeight: 700, marginBottom: '15px', textTransform: 'uppercase'}}>
              UTAKMICE
            </h3>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={{marginBottom: '10px'}}><Link href="/utakmice" style={{color: '#CCC', textDecoration: 'none', fontSize: '14px'}}>Raspored</Link></li>
              <li style={{marginBottom: '10px'}}><Link href="/utakmice" style={{color: '#CCC', textDecoration: 'none', fontSize: '14px'}}>Rezultati</Link></li>
              <li style={{marginBottom: '10px'}}><Link href="/utakmice" style={{color: '#CCC', textDecoration: 'none', fontSize: '14px'}}>Tabela</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{fontFamily: 'Roboto Condensed', fontSize: '18px', fontWeight: 700, marginBottom: '15px', textTransform: 'uppercase'}}>
              USLUGE
            </h3>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={{marginBottom: '10px'}}><Link href="/omladinska-skola" style={{color: '#CCC', textDecoration: 'none', fontSize: '14px'}}>Omladinska škola</Link></li>
              <li style={{marginBottom: '10px'}}><Link href="/balon-sala" style={{color: '#CCC', textDecoration: 'none', fontSize: '14px'}}>Balon sala</Link></li>
              <li style={{marginBottom: '10px'}}><Link href="/shop" style={{color: '#CCC', textDecoration: 'none', fontSize: '14px'}}>Shop</Link></li>
              <li style={{marginBottom: '10px'}}><Link href="/sponzori" style={{color: '#CCC', textDecoration: 'none', fontSize: '14px'}}>Sponzorstva</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{fontFamily: 'Roboto Condensed', fontSize: '18px', fontWeight: 700, marginBottom: '15px', textTransform: 'uppercase'}}>
              KONTAKT
            </h3>
            <p style={{fontSize: '14px', color: '#CCC', lineHeight: 1.8}}>
              Kragujevac, Srbija<br />
              info@fksumadija1903.rs<br />
              +381 XX XXX XXXX
            </p>
            <div style={{display: 'flex', gap: '10px', marginTop: '15px'}}>
              <a href="#" style={{color: '#FFF', fontSize: '20px'}}>📘</a>
              <a href="#" style={{color: '#FFF', fontSize: '20px'}}>📷</a>
              <a href="#" style={{color: '#FFF', fontSize: '20px'}}>▶️</a>
            </div>
          </div>
        </div>

        {/* Sponsors */}
        <div style={{borderTop: '1px solid #444', paddingTop: '30px', marginBottom: '30px'}}>
          <p style={{fontSize: '12px', color: '#888', textAlign: 'center', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px'}}>
            Naši partneri
          </p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', alignItems: 'center'}}>
            <div style={{width: '100px', height: '50px', background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#333'}}>SPONSOR 1</div>
            <div style={{width: '100px', height: '50px', background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#333'}}>SPONSOR 2</div>
            <div style={{width: '100px', height: '50px', background: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#333'}}>SPONSOR 3</div>
          </div>
        </div>

        <div style={{borderTop: '1px solid #444', paddingTop: '20px', textAlign: 'center'}}>
          <p style={{fontSize: '13px', color: '#888'}}>
            &copy; 2024 FK Šumadija 1903. Sva prava zadržana. | Najstariji fudbalski klub u Srbiji od 1903. godine
          </p>
        </div>
      </div>
    </footer>
  );
}
