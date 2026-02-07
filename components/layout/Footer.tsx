import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div>
            <div className="font-serif font-bold text-xl mb-4">FK Šumadija 1903</div>
            <p className="text-slate-300 text-sm mb-4">
              Najstariji fudbalski klub u Srbiji. Osnovan 1903. godine u Kragujevcu.
            </p>
            <div className="heritage-badge bg-heritage-gold/20 text-heritage-gold border-heritage-gold">
              🏆 Osnovan 1903
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Brzi linkovi</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/vesti" className="text-slate-300 hover:text-white transition">Vesti</Link></li>
              <li><Link href="/utakmice" className="text-slate-300 hover:text-white transition">Utakmice</Link></li>
              <li><Link href="/timovi" className="text-slate-300 hover:text-white transition">Timovi</Link></li>
              <li><Link href="/istorija" className="text-slate-300 hover:text-white transition">Istorija kluba</Link></li>
            </ul>
          </div>

          {/* Usluge */}
          <div>
            <h3 className="font-semibold mb-4">Usluge</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/omladinska-skola" className="text-slate-300 hover:text-white transition">Omladinska škola</Link></li>
              <li><Link href="/balon-sala" className="text-slate-300 hover:text-white transition">Balon sala</Link></li>
              <li><Link href="/shop" className="text-slate-300 hover:text-white transition">Klupska prodavnica</Link></li>
              <li><Link href="/sponzori" className="text-slate-300 hover:text-white transition">Postani sponzor</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>📍 Kragujevac, Srbija</li>
              <li>📧 info@fksumadija1903.rs</li>
              <li>📞 +381 XX XXX XXXX</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-primary transition">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-primary transition">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-primary transition">
                <span className="sr-only">YouTube</span>
                ▶️
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2024 FK Šumadija 1903. Sva prava zadržana.</p>
          <p className="mt-2">Najstariji fudbalski klub u Srbiji od 1903. godine</p>
        </div>
      </div>
    </footer>
  );
}
