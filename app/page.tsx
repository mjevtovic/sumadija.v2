import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        height: '600px',
        background: 'linear-gradient(135deg, #1E5BA8 0%, #3A7BC8 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* Pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3,
        }}></div>

        <div className="container-custom" style={{position: 'relative', zIndex: 10, textAlign: 'center'}}>
          <div style={{
            fontSize: '60px',
            marginBottom: '20px',
          }}>🐺</div>

          <h1 style={{
            fontFamily: 'Roboto Condensed',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 900,
            color: '#FFF',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            lineHeight: 1.1,
          }}>
            FK ŠUMADIJA 1903
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            color: '#FFF',
            marginBottom: '10px',
            fontWeight: 600,
            letterSpacing: '2px',
          }}>
            PLAVI VUKOVI • KRAGUJEVAC
          </p>

          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px',
          }}>
            Najstariji fudbalski klub u Srbiji od 1903. godine
          </p>

          <div style={{display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link href="/utakmice">
              <button className="btn-white">
                UTAKMICE
              </button>
            </Link>
            <Link href="/istorija">
              <button className="btn-outline" style={{borderColor: '#FFF', color: '#FFF'}}>
                NAŠA ISTORIJA
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK ACCESS CARDS */}
      <section style={{background: '#F8F9FA', padding: '80px 0'}}>
        <div className="container-custom">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
          }}>
            {/* Stadion Card */}
            <Link href="/stadion" style={{textDecoration: 'none'}}>
              <div className="card" style={{
                height: '280px',
                background: '#FFF',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, #1E5BA8 0%, #3A7BC8 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '30px',
                  textAlign: 'center',
                }}>
                  <div style={{fontSize: '60px', marginBottom: '20px'}}>🏟️</div>
                  <h3 style={{
                    fontFamily: 'Roboto Condensed',
                    fontSize: '24px',
                    fontWeight: 900,
                    color: '#FFF',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}>
                    Stadion Bubanj
                  </h3>
                  <p style={{fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)'}}>
                    Kapacitet: 1,000 gledalaca
                  </p>
                </div>
              </div>
            </Link>

            {/* Timovi Card */}
            <Link href="/timovi" style={{textDecoration: 'none'}}>
              <div className="card" style={{
                height: '280px',
                background: '#FFF',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: '#FFF',
                  border: '3px solid #1E5BA8',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '30px',
                  textAlign: 'center',
                }}>
                  <div style={{fontSize: '60px', marginBottom: '20px'}}>⚽</div>
                  <h3 style={{
                    fontFamily: 'Roboto Condensed',
                    fontSize: '24px',
                    fontWeight: 900,
                    color: '#1E5BA8',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}>
                    Naši Timovi
                  </h3>
                  <p style={{fontSize: '14px', color: '#666'}}>
                    Prvi tim i omladinske selekcije
                  </p>
                </div>
              </div>
            </Link>

            {/* Shop Card */}
            <Link href="/shop" style={{textDecoration: 'none'}}>
              <div className="card" style={{
                height: '280px',
                background: '#FFF',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, #0A2647 0%, #1E5BA8 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '30px',
                  textAlign: 'center',
                }}>
                  <div style={{fontSize: '60px', marginBottom: '20px'}}>👕</div>
                  <h3 style={{
                    fontFamily: 'Roboto Condensed',
                    fontSize: '24px',
                    fontWeight: 900,
                    color: '#FFF',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}>
                    Fan Shop
                  </h3>
                  <p style={{fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)'}}>
                    Dres, šalovi i memorabilija
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* HERITAGE SECTION */}
      <section style={{background: '#FFF', padding: '80px 0'}}>
        <div className="container-custom">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}>
            <div>
              <span style={{
                display: 'inline-block',
                background: '#1E5BA8',
                color: '#FFF',
                padding: '8px 16px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '1px',
                marginBottom: '20px',
              }}>
                OD 1903. GODINE
              </span>

              <h2 style={{
                fontFamily: 'Roboto Condensed',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 900,
                color: '#1A1A1A',
                marginBottom: '20px',
                lineHeight: 1.2,
              }}>
                Najstariji fudbalski klub u Srbiji
              </h2>

              <p style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: '#666',
                marginBottom: '20px',
              }}>
                FK Šumadija osnovan je 14. septembra 1903. godine u Kragujevcu,
                što ga čini najstarijim fudbalskim klubom u Srbiji. Osnivač kluba
                je bio Danilo Stojanović, poznat kao "Čika Dača".
              </p>

              <p style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: '#666',
                marginBottom: '30px',
              }}>
                Naše navijače zovemo <strong style={{color: '#1E5BA8'}}>Plavi Vukovi</strong> -
                simbol snage, hrabrosti i lojalnosti koji nas prati više od 120 godina.
              </p>

              <Link href="/istorija">
                <button className="btn-blue">
                  PROČITAJ VIŠE
                </button>
              </Link>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #1E5BA8 0%, #3A7BC8 100%)',
              borderRadius: '8px',
              padding: '60px 40px',
              textAlign: 'center',
              color: '#FFF',
            }}>
              <div style={{fontSize: '80px', marginBottom: '20px'}}>🏆</div>
              <div style={{
                fontFamily: 'Roboto Condensed',
                fontSize: '72px',
                fontWeight: 900,
                lineHeight: 1,
                marginBottom: '10px',
              }}>
                120+
              </div>
              <div style={{fontSize: '18px', fontWeight: 600, letterSpacing: '1px'}}>
                GODINA TRADICIJE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section style={{background: '#F8F9FA', padding: '80px 0'}}>
        <div className="container-custom">
          <div style={{marginBottom: '50px', textAlign: 'center'}}>
            <h2 style={{
              fontFamily: 'Roboto Condensed',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              color: '#1A1A1A',
              marginBottom: '10px',
            }}>
              Najnovije Vesti
            </h2>
            <p style={{fontSize: '16px', color: '#666'}}>
              Pratite najnovije vesti i dešavanja iz našeg kluba
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
          }}>
            {[
              { title: 'Rezultati poslednje utakmice', category: 'UTAKMICA', color: '#1E5BA8' },
              { title: 'Najave narednog kola', category: 'NAJAVE', color: '#3A7BC8' },
              { title: 'Priprema za prolećni deo sezone', category: 'TIM', color: '#DC3545' },
            ].map((news, i) => (
              <Link key={i} href="/vesti" style={{textDecoration: 'none'}}>
                <div className="card" style={{
                  background: '#FFF',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    height: '200px',
                    background: 'linear-gradient(135deg, #1E5BA8 0%, #3A7BC8 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <div style={{fontSize: '60px'}}>📰</div>
                  </div>
                  <div style={{padding: '25px'}}>
                    <span style={{
                      display: 'inline-block',
                      background: news.color,
                      color: '#FFF',
                      padding: '4px 12px',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.5px',
                      marginBottom: '15px',
                    }}>
                      {news.category}
                    </span>
                    <h3 style={{
                      fontFamily: 'Roboto Condensed',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#1A1A1A',
                      marginBottom: '10px',
                    }}>
                      {news.title}
                    </h3>
                    <p style={{fontSize: '14px', color: '#666', marginBottom: '15px'}}>
                      Saznajte više o najnovijim dešavanjima iz našeg kluba...
                    </p>
                    <span style={{
                      color: '#1E5BA8',
                      fontSize: '14px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      Pročitaj više →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{textAlign: 'center', marginTop: '50px'}}>
            <Link href="/vesti">
              <button className="btn-outline">
                SVE VESTI
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, #1E5BA8 0%, #0A2647 100%)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3,
        }}></div>

        <div className="container-custom" style={{position: 'relative', zIndex: 10}}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '60px', marginBottom: '20px'}}>🎓</div>
              <h3 style={{
                fontFamily: 'Roboto Condensed',
                fontSize: '28px',
                fontWeight: 900,
                color: '#FFF',
                marginBottom: '15px',
              }}>
                Omladinska Škola
              </h3>
              <p style={{fontSize: '16px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '25px'}}>
                Treninge za decu i omladince svih uzrasta
              </p>
              <Link href="/omladinska-skola">
                <button className="btn-white">
                  SAZNAJ VIŠE
                </button>
              </Link>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '60px', marginBottom: '20px'}}>⛹️</div>
              <h3 style={{
                fontFamily: 'Roboto Condensed',
                fontSize: '28px',
                fontWeight: 900,
                color: '#FFF',
                marginBottom: '15px',
              }}>
                Balon Sala
              </h3>
              <p style={{fontSize: '16px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '25px'}}>
                Rezervišite termin za vašu ekipu
              </p>
              <Link href="/balon-sala">
                <button className="btn-white">
                  REZERVIŠI
                </button>
              </Link>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '60px', marginBottom: '20px'}}>🤝</div>
              <h3 style={{
                fontFamily: 'Roboto Condensed',
                fontSize: '28px',
                fontWeight: 900,
                color: '#FFF',
                marginBottom: '15px',
              }}>
                Sponzorstva
              </h3>
              <p style={{fontSize: '16px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '25px'}}>
                Podržite najstariji klub u Srbiji
              </p>
              <Link href="/sponzori">
                <button className="btn-white">
                  KONTAKT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section style={{background: '#FFF', padding: '60px 0', textAlign: 'center'}}>
        <div className="container-custom">
          <h3 style={{
            fontFamily: 'Roboto Condensed',
            fontSize: '32px',
            fontWeight: 900,
            color: '#1A1A1A',
            marginBottom: '15px',
          }}>
            Postani deo Plavih Vukova! 🐺
          </h3>
          <p style={{fontSize: '16px', color: '#666', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px'}}>
            Pridruži se navijačima najstarijeg fudbalskog kluba u Srbiji
          </p>
          <Link href="/kontakt">
            <button className="btn-blue" style={{fontSize: '16px', padding: '16px 40px'}}>
              KONTAKTIRAJ NAS
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
