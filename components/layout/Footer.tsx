'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{background: '#000', borderTop: '4px solid #FF6B35'}}>
      <div className="container-custom" style={{padding: '4rem 1rem 2rem'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem'}}>
          {/* Club Info */}
          <div>
            <div className="font-display" style={{fontSize: '2rem', marginBottom: '1rem', color: 'white'}}>
              FK ŠUMADIJA 1903
            </div>
            <p style={{color: '#ccc', marginBottom: '1.5rem', lineHeight: 1.6}}>
              Najstariji fudbalski klub u Srbiji. Osnovan 1903. godine u Kragujevcu.
            </p>
            <div className="heritage-badge" style={{display: 'inline-flex'}}>
              🏆 OSNOVAN 1903
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display" style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#FFD93D'}}>
              BRZI LINKOVI
            </h3>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
              <li><Link href="/vesti" className="footer-link">→ Vesti</Link></li>
              <li><Link href="/utakmice" className="footer-link">→ Utakmice</Link></li>
              <li><Link href="/timovi" className="footer-link">→ Timovi</Link></li>
              <li><Link href="/istorija" className="footer-link">→ Istorija</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display" style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#2ECC71'}}>
              USLUGE
            </h3>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
              <li><Link href="/omladinska-skola" className="footer-link">→ Omladinska škola</Link></li>
              <li><Link href="/balon-sala" className="footer-link">→ Balon sala</Link></li>
              <li><Link href="/shop" className="footer-link">→ Klupska prodavnica</Link></li>
              <li><Link href="/sponzori" className="footer-link">→ Postani sponzor</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display" style={{fontSize: '1.25rem', marginBottom: '1rem', color: '#0052D9'}}>
              KONTAKT
            </h3>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, color: '#ccc', display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
              <li style={{fontWeight: 600}}>📍 Kragujevac, Srbija</li>
              <li style={{fontWeight: 600}}>📧 info@fksumadija1903.rs</li>
              <li style={{fontWeight: 600}}>📞 +381 XX XXX XXXX</li>
            </ul>
            <div style={{display: 'flex', gap: '1rem', marginTop: '1.5rem'}}>
              <a href="#" className="social-icon social-blue">📘</a>
              <a href="#" className="social-icon social-orange">📷</a>
              <a href="#" className="social-icon social-green">▶️</a>
            </div>
          </div>
        </div>

        <div style={{borderTop: '2px solid #333', paddingTop: '2rem', textAlign: 'center', color: '#888'}}>
          <p className="font-display" style={{fontSize: '1.125rem', marginBottom: '0.5rem'}}>
            &copy; 2024 FK ŠUMADIJA 1903
          </p>
          <p style={{fontSize: '0.875rem'}}>
            Najstariji fudbalski klub u Srbiji od 1903. godine
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          color: #ccc;
          font-weight: 600;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: #FF6B35;
        }
        .social-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          transition: transform 0.2s;
          text-decoration: none;
        }
        .social-icon:hover {
          transform: translateY(-4px);
        }
        .social-blue {
          background: linear-gradient(135deg, #0052D9, #FF6B35);
        }
        .social-orange {
          background: linear-gradient(135deg, #FF6B35, #FFD93D);
        }
        .social-green {
          background: linear-gradient(135deg, #2ECC71, #27AE60);
        }
      `}</style>
    </footer>
  );
}
