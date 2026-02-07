import Link from 'next/link';

export default function Home() {
  // Sample data - in production, this would come from a CMS
  const latestNews = [
    {
      id: 1,
      title: 'Pobeda protiv lokalnog rivala',
      category: 'Prvi tim',
      date: '15. februar 2024',
      image: '/images/news-1.jpg',
      excerpt: 'FK Šumadija ostvarila važnu pobedu u derbiju protiv lokalnog rivala rezultatom 2:1...',
    },
    {
      id: 2,
      title: 'Otvorene prijave za omladinsku školu',
      category: 'Omladinska škola',
      date: '12. februar 2024',
      image: '/images/news-2.jpg',
      excerpt: 'Počele su prijave za prolećnu sezonu omladinske škole FK Šumadija 1903...',
    },
    {
      id: 3,
      title: 'Renovacija stadiona u toku',
      category: 'Klub',
      date: '10. februar 2024',
      image: '/images/news-3.jpg',
      excerpt: 'Radovi na renovaciji stadiona Bubanj napreduju po planu. Očekuje se završetak do...',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 lg:py-32" style={{background: 'linear-gradient(135deg, #003DA5 0%, #002B73 100%)'}}>
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="heritage-badge mb-6">
              🏆 Osnovan 1903. godine
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              FK Šumadija 1903
            </h1>
            <p className="text-xl lg:text-2xl mb-4" style={{color: '#E8F4F8'}}>
              Najstariji fudbalski klub u Srbiji
            </p>
            <p className="text-lg mb-8 max-w-2xl" style={{color: '#D1E7F0'}}>
              Već više od 120 godina, FK Šumadija 1903 iz Kragujevca predstavlja ponos srpskog fudbala.
              Sa dubokim korenima u zajednici i dugom tradicijom razvoja mladih talenata, naš klub
              kontinuirano gradi budućnost srpskog fudbala.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/omladinska-skola" className="btn-primary" style={{background: 'white', color: '#003DA5'}}>
                Upis u omladinsku školu
              </Link>
              <Link href="/istorija" className="btn-secondary" style={{borderColor: 'white', color: 'white'}}>
                Naša istorija
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Match Center - Sheffield FC Style */}
      <section className="py-16" style={{background: '#F8FAFC'}}>
        <div className="container-custom">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Centar utakmica</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Last Match */}
            <div style={{background: 'white', border: '2px solid #E2E8F0', borderRadius: '8px', padding: '1.5rem'}}>
              <div style={{fontSize: '0.875rem', fontWeight: 600, color: '#64748B', marginBottom: '1rem'}}>POSLEDNJA UTAKMICA</div>
              <div style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1}}>
                    <div style={{width: '48px', height: '48px', background: '#003DA5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold'}}>
                      ŠU
                    </div>
                    <span style={{fontWeight: 600}}>FK Šumadija 1903</span>
                  </div>
                  <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#003DA5', padding: '0 1rem'}}>2</div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1}}>
                    <div style={{width: '48px', height: '48px', background: '#CBD5E1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontWeight: 'bold'}}>
                      RIV
                    </div>
                    <span style={{fontWeight: 600}}>FK Rival</span>
                  </div>
                  <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#94A3B8', padding: '0 1rem'}}>1</div>
                </div>
              </div>
              <div style={{marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0', fontSize: '0.875rem', color: '#64748B'}}>
                <div>Srpska liga Zapad • 15. februar 2024</div>
                <div style={{marginTop: '0.25rem'}}>Stadion Bubanj, Kragujevac</div>
              </div>
              <Link
                href="/utakmice/last-match"
                style={{display: 'block', textAlign: 'center', marginTop: '1rem', padding: '0.5rem', color: '#003DA5', fontWeight: 600}}
              >
                Pregledaj detalje →
              </Link>
            </div>

            {/* Next Match */}
            <div style={{background: 'white', border: '2px solid #003DA5', borderRadius: '8px', padding: '1.5rem'}}>
              <div style={{fontSize: '0.875rem', fontWeight: 600, color: '#003DA5', marginBottom: '1rem'}}>SLEDEĆA UTAKMICA</div>
              <div style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1}}>
                    <div style={{width: '48px', height: '48px', background: '#CBD5E1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontWeight: 'bold'}}>
                      OPP
                    </div>
                    <span style={{fontWeight: 600}}>FK Protivnik</span>
                  </div>
                  <div style={{fontSize: '1.125rem', fontWeight: 'bold', color: '#94A3B8', padding: '0 1rem'}}>vs</div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1}}>
                    <div style={{width: '48px', height: '48px', background: '#003DA5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold'}}>
                      ŠU
                    </div>
                    <span style={{fontWeight: 600}}>FK Šumadija 1903</span>
                  </div>
                  <div style={{fontSize: '1.125rem', fontWeight: 'bold', color: '#003DA5', padding: '0 1rem'}}>vs</div>
                </div>
              </div>
              <div style={{marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0', fontSize: '0.875rem', color: '#64748B'}}>
                <div style={{fontWeight: 600, color: '#003DA5'}}>Subota, 22. februar 2024 • 17:00</div>
                <div style={{marginTop: '0.25rem'}}>Gostovanje • Srpska liga Zapad</div>
              </div>
              <Link
                href="/utakmice"
                style={{display: 'block', textAlign: 'center', marginTop: '1rem', padding: '0.5rem', background: '#003DA5', color: 'white', fontWeight: 600, borderRadius: '4px'}}
              >
                Sve utakmice →
              </Link>
            </div>
          </div>

          {/* Youth Team Preview */}
          <div style={{marginTop: '2rem', maxWidth: '1024px', marginLeft: 'auto', marginRight: 'auto'}}>
            <div style={{background: 'rgba(45, 80, 22, 0.1)', border: '1px solid rgba(45, 80, 22, 0.3)', padding: '1.5rem', borderRadius: '8px'}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem'}}>
                <div>
                  <h3 style={{fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.25rem'}}>Omladinski tim</h3>
                  <p style={{fontSize: '0.875rem', color: '#64748B'}}>Sledeća utakmica: Nedelja, 23. februar u 14:00</p>
                </div>
                <Link
                  href="/timovi/omladinci"
                  className="btn-secondary"
                  style={{fontSize: '0.875rem'}}
                >
                  Više o omladincima
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="container-custom">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem'}}>
            <h2 className="font-serif text-3xl font-bold">Najnovije vesti</h2>
            <Link href="/vesti" style={{color: '#003DA5', fontWeight: 600}}>
              Sve vesti →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <Link
                key={news.id}
                href={`/vesti/${news.id}`}
                style={{background: 'white', border: '1px solid #E2E8F0', borderRadius: '8px', overflow: 'hidden', display: 'block'}}
              >
                <div style={{aspectRatio: '16/9', background: '#E2E8F0', position: 'relative', overflow: 'hidden'}}>
                  <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0, 61, 165, 0.2), rgba(0, 61, 165, 0.4))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '4rem'}}>
                    ⚽
                  </div>
                  <div style={{position: 'absolute', top: '1rem', left: '1rem'}}>
                    <span style={{padding: '0.25rem 0.75rem', background: '#003DA5', color: 'white', fontSize: '0.75rem', fontWeight: 600, borderRadius: '9999px'}}>
                      {news.category}
                    </span>
                  </div>
                </div>
                <div style={{padding: '1.5rem'}}>
                  <div style={{fontSize: '0.75rem', color: '#64748B', marginBottom: '0.5rem'}}>{news.date}</div>
                  <h3 style={{fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.5rem'}}>
                    {news.title}
                  </h3>
                  <p style={{fontSize: '0.875rem', color: '#64748B'}}>
                    {news.excerpt}
                  </p>
                  <div style={{marginTop: '1rem', color: '#003DA5', fontWeight: 600, fontSize: '0.875rem'}}>
                    Pročitaj više →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Sections */}
      <section className="py-16" style={{background: '#F8FAFC'}}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/omladinska-skola"
              style={{background: 'white', border: '2px solid #2D5016', padding: '2rem', borderRadius: '8px', textAlign: 'center', display: 'block'}}
            >
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⚽</div>
              <h3 className="font-serif font-bold text-xl mb-2">
                Omladinska škola
              </h3>
              <p style={{fontSize: '0.875rem', color: '#64748B', marginBottom: '1rem'}}>
                Upišite dete u našu renomiranu fudbalsku akademiju
              </p>
              <div style={{color: '#2D5016', fontWeight: 600, fontSize: '0.875rem'}}>
                Saznaj više →
              </div>
            </Link>

            <Link
              href="/balon-sala"
              style={{background: 'white', border: '2px solid #003DA5', padding: '2rem', borderRadius: '8px', textAlign: 'center', display: 'block'}}
            >
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🏟️</div>
              <h3 className="font-serif font-bold text-xl mb-2">
                Balon sala
              </h3>
              <p style={{fontSize: '0.875rem', color: '#64748B', marginBottom: '1rem'}}>
                Rezervišite termin za iznajmljivanje balon sale
              </p>
              <div style={{color: '#003DA5', fontWeight: 600, fontSize: '0.875rem'}}>
                Rezerviši →
              </div>
            </Link>

            <Link
              href="/shop"
              style={{background: 'white', border: '2px solid #E67E22', padding: '2rem', borderRadius: '8px', textAlign: 'center', display: 'block'}}
            >
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>👕</div>
              <h3 className="font-serif font-bold text-xl mb-2">
                Klupski shop
              </h3>
              <p style={{fontSize: '0.875rem', color: '#64748B', marginBottom: '1rem'}}>
                Podrži klub kupovinom originalnih dresova i suvenira
              </p>
              <div style={{color: '#E67E22', fontWeight: 600, fontSize: '0.875rem'}}>
                Kupi sada →
              </div>
            </Link>

            <Link
              href="/sponzori"
              style={{background: 'white', border: '2px solid #B8860B', padding: '2rem', borderRadius: '8px', textAlign: 'center', display: 'block'}}
            >
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🤝</div>
              <h3 className="font-serif font-bold text-xl mb-2">
                Postani sponzor
              </h3>
              <p style={{fontSize: '0.875rem', color: '#64748B', marginBottom: '1rem'}}>
                Podržite najstariji klub u Srbiji i postanite naš partner
              </p>
              <div style={{color: '#B8860B', fontWeight: 600, fontSize: '0.875rem'}}>
                Kontaktiraj nas →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-16 text-white" style={{background: 'linear-gradient(135deg, #0F172A 0%, #003DA5 100%)'}}>
        <div className="container-custom text-center">
          <div className="heritage-badge" style={{marginBottom: '1.5rem', marginLeft: 'auto', marginRight: 'auto'}}>
            🏆 121 godina tradicije
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Najstariji fudbalski klub u Srbiji
          </h2>
          <p style={{fontSize: '1.125rem', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto', marginBottom: '2rem', color: '#D1E7F0'}}>
            Od 1903. godine, FK Šumadija iz Kragujevca piše istoriju srpskog fudbala.
            Klub koji je odgajao generacije igrača i navijača, ostaje stub zajednice i ponos grada.
          </p>
          <Link href="/istorija" className="btn-primary" style={{background: 'white', color: '#003DA5'}}>
            Otkrijte našu bogatu istoriju
          </Link>
        </div>
      </section>
    </div>
  );
}
