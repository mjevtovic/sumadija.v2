import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* HERO SECTION - Like Sheffield FC */}
      <section style={{
        position: 'relative',
        height: '600px',
        background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect fill=\'%23D2B48C\' width=\'100\' height=\'100\'/%3E%3C/svg%3E") center/cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Sepia overlay to simulate vintage photo */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4))',
        }}></div>

        <div className="container-custom" style={{position: 'relative', zIndex: 10, textAlign: 'center'}}>
          <h1 style={{
            fontFamily: 'Roboto Condensed',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            color: '#FFF',
            marginBottom: '30px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            lineHeight: 1.2,
          }}>
            NAJSTARIJI FUDBALSKI<br />KLUB U SRBIJI
          </h1>

          <Link href="/istorija">
            <button className="btn-gold" style={{fontSize: '16px', padding: '16px 40px'}}>
              ISTORIJA
            </button>
          </Link>
        </div>
      </section>

      {/* QUICK LINKS GRID - Sheffield FC Style */}
      <section style={{background: '#FFF', padding: '0'}}>
        <div className="container-custom" style={{transform: 'translateY(-50px)'}}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
          }}>
            {/* World's First Style Card */}
            <Link href="/istorija" style={{textDecoration: 'none'}}>
              <div className="card" style={{height: '200px', position: 'relative', overflow: 'hidden'}}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect fill=\'%23D2B48C\' width=\'100\' height=\'100\'/%3E%3C/svg%3E") center/cover',
                }}></div>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0, 0, 0, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{textAlign: 'center', color: '#FFF'}}>
                    <div style={{fontSize: '40px', marginBottom: '10px'}}>📜</div>
                    <h3 style={{
                      fontFamily: 'Roboto Condensed',
                      fontSize: '18px',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      color: '#D4A017',
                    }}>
                      OSNOVAN 1903
                    </h3>
                  </div>
                </div>
              </div>
            </Link>

            {/* Shop Card */}
            <Link href="/shop" style={{textDecoration: 'none'}}>
              <div className="card" style={{height: '200px', position: 'relative', overflow: 'hidden'}}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: '#003DA5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{textAlign: 'center', color: '#FFF'}}>
                    <div style={{fontSize: '40px', marginBottom: '10px'}}>👕</div>
                    <h3 style={{
                      fontFamily: 'Roboto Condensed',
                      fontSize: '18px',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                    }}>
                      SHOP
                    </h3>
                  </div>
                </div>
              </div>
            </Link>

            {/* Club Info Card */}
            <Link href="/timovi" style={{textDecoration: 'none'}}>
              <div className="card" style={{height: '200px', position: 'relative', overflow: 'hidden'}}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect fill=\'%230052D9\' width=\'100\' height=\'100\'/%3E%3C/svg%3E") center/cover',
                }}></div>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0, 61, 165, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{textAlign: 'center', color: '#FFF'}}>
                    <div style={{fontSize: '40px', marginBottom: '10px'}}>⚽</div>
                    <h3 style={{
                      fontFamily: 'Roboto Condensed',
                      fontSize: '18px',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                    }}>
                      TIMOVI
                    </h3>
                  </div>
                </div>
              </div>
            </Link>

            {/* Stadium Card */}
            <Link href="/stadion" style={{textDecoration: 'none'}}>
              <div className="card" style={{height: '200px', position: 'relative', overflow: 'hidden'}}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect fill=\'%23A67C52\' width=\'100\' height=\'100\'/%3E%3C/svg%3E") center/cover',
                }}></div>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(139, 90, 43, 0.7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{textAlign: 'center', color: '#FFF'}}>
                    <div style={{fontSize: '40px', marginBottom: '10px'}}>🏟️</div>
                    <h3 style={{
                      fontFamily: 'Roboto Condensed',
                      fontSize: '18px',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                    }}>
                      STADION BUBANJ
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* HERITAGE SECTION - Sheffield FC "World's First" Style */}
      <section className="section-white" style={{marginTop: '40px'}}>
        <div className="container-custom">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center'}}>
            {/* Vintage Photo */}
            <div>
              <div style={{
                width: '100%',
                aspectRatio: '4/3',
                background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect fill=\'%23D2B48C\' width=\'100\' height=\'100\'/%3E%3C/svg%3E") center/cover',
                border: '8px solid #FFF',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8B5A2B',
                  fontSize: '60px',
                }}>
                  📷
                </div>
              </div>
            </div>

            {/* Heritage Text */}
            <div>
              <h2 style={{
                fontFamily: 'Roboto Condensed',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 900,
                color: '#333',
                marginBottom: '10px',
                textTransform: 'uppercase',
              }}>
                NAJSTARIJI <span style={{color: '#D4A017'}}>FUDBALSKI KLUB</span>
              </h2>
              <h3 style={{
                fontFamily: 'Roboto Condensed',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 900,
                color: '#003DA5',
                marginBottom: '25px',
              }}>
                U SRBIJI
              </h3>

              <div style={{
                padding: '20px',
                background: '#F5F5F5',
                borderLeft: '4px solid #D4A017',
                marginBottom: '25px',
              }}>
                <p style={{fontSize: '14px', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px'}}>
                  1903 - Osnivanje kluba
                </p>
                <p style={{fontSize: '15px', lineHeight: 1.7, color: '#666'}}>
                  FK Šumadija osnovan je 1903. godine u srcu Šumadije, u Kragujevcu. Sa više od 120 godina bogatog nasleđa, predstavljamo ponos srpskog fudbala i kontinuitet koji retki klubovi mogu da pohvale.
                </p>
              </div>

              <p style={{fontSize: '15px', lineHeight: 1.8, color: '#666', marginBottom: '30px'}}>
                Od osnivanja do danas, klub je bio sinonim za razvoj mladih talenata i posvećenost zajednici. Naša istorija je istorija strasti, lojalnosti i neprekidnog doprinosa srpskom fudbalu.
              </p>

              <div style={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
                <Link href="/istorija">
                  <button className="btn-gold">NAŠA ISTORIJA</button>
                </Link>
                <Link href="/timovi">
                  <button className="btn-red">PRVI TIM</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP/PRODUCTS SECTION - Sheffield FC Style */}
      <section className="section-gray">
        <div className="container-custom">
          <h2 style={{
            fontFamily: 'Roboto Condensed',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: '50px',
            textTransform: 'uppercase',
            color: '#003DA5',
          }}>
            KLUPSKA PRODAVNICA
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
          }}>
            {/* Product Card 1 */}
            <div className="card">
              <div style={{
                width: '100%',
                aspectRatio: '1',
                background: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '60px',
                borderBottom: '1px solid #E0E0E0',
              }}>
                👕
              </div>
              <div style={{padding: '20px'}}>
                <h3 style={{
                  fontFamily: 'Roboto Condensed',
                  fontSize: '18px',
                  fontWeight: 700,
                  marginBottom: '10px',
                  color: '#003DA5',
                  textTransform: 'uppercase',
                }}>
                  DRES DOMAĆI 2024
                </h3>
                <p style={{fontSize: '24px', fontWeight: 700, color: '#D4A017', marginBottom: '15px'}}>
                  4.500 RSD
                </p>
                <p style={{fontSize: '14px', color: '#666', lineHeight: 1.6, marginBottom: '20px'}}>
                  Originalni dres FK Šumadija 1903 za sezonu 2024. Vrhunski kvalitet materijala.
                </p>
                <Link href="/shop">
                  <button className="btn-gold" style={{width: '100%'}}>KUPI SADA</button>
                </Link>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="card">
              <div style={{
                width: '100%',
                aspectRatio: '1',
                background: '#003DA5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '60px',
                borderBottom: '1px solid #E0E0E0',
              }}>
                🧢
              </div>
              <div style={{padding: '20px'}}>
                <h3 style={{
                  fontFamily: 'Roboto Condensed',
                  fontSize: '18px',
                  fontWeight: 700,
                  marginBottom: '10px',
                  color: '#003DA5',
                  textTransform: 'uppercase',
                }}>
                  KLUPSKA KAPA
                </h3>
                <p style={{fontSize: '24px', fontWeight: 700, color: '#D4A017', marginBottom: '15px'}}>
                  1.500 RSD
                </p>
                <p style={{fontSize: '14px', color: '#666', lineHeight: 1.6, marginBottom: '20px'}}>
                  Pamučna kapa sa vezenim grbom kluba. Savršena za svakodnevno nošenje.
                </p>
                <Link href="/shop">
                  <button className="btn-gold" style={{width: '100%'}}>KUPI SADA</button>
                </Link>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="card">
              <div style={{
                width: '100%',
                aspectRatio: '1',
                background: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '60px',
                borderBottom: '1px solid #E0E0E0',
              }}>
                🧣
              </div>
              <div style={{padding: '20px'}}>
                <h3 style={{
                  fontFamily: 'Roboto Condensed',
                  fontSize: '18px',
                  fontWeight: 700,
                  marginBottom: '10px',
                  color: '#003DA5',
                  textTransform: 'uppercase',
                }}>
                  NAVIJAČKI ŠAL
                </h3>
                <p style={{fontSize: '24px', fontWeight: 700, color: '#D4A017', marginBottom: '15px'}}>
                  2.000 RSD
                </p>
                <p style={{fontSize: '14px', color: '#666', lineHeight: 1.6, marginBottom: '20px'}}>
                  Tradicionalni navijački šal sa klupskim bojama i grbom.
                </p>
                <Link href="/shop">
                  <button className="btn-gold" style={{width: '100%'}}>KUPI SADA</button>
                </Link>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="card">
              <div style={{
                width: '100%',
                aspectRatio: '1',
                background: '#2C2C2C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '60px',
                borderBottom: '1px solid #E0E0E0',
              }}>
                🎒
              </div>
              <div style={{padding: '20px'}}>
                <h3 style={{
                  fontFamily: 'Roboto Condensed',
                  fontSize: '18px',
                  fontWeight: 700,
                  marginBottom: '10px',
                  color: '#003DA5',
                  textTransform: 'uppercase',
                }}>
                  SPORTSKA TORBA
                </h3>
                <p style={{fontSize: '24px', fontWeight: 700, color: '#D4A017', marginBottom: '15px'}}>
                  3.500 RSD
                </p>
                <p style={{fontSize: '14px', color: '#666', lineHeight: 1.6, marginBottom: '20px'}}>
                  Velika sportska torba sa više pregrada. Idealna za trening.
                </p>
                <Link href="/shop">
                  <button className="btn-gold" style={{width: '100%'}}>KUPI SADA</button>
                </Link>
              </div>
            </div>
          </div>

          <div style={{textAlign: 'center', marginTop: '50px'}}>
            <Link href="/shop">
              <button className="btn-red" style={{fontSize: '16px', padding: '16px 50px'}}>
                POGLEDAJ SVE PROIZVODE
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="section-white">
        <div className="container-custom">
          <h2 style={{
            fontFamily: 'Roboto Condensed',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: '50px',
            textTransform: 'uppercase',
            color: '#003DA5',
          }}>
            NAJNOVIJE VESTI
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
          }}>
            {/* News Card 1 */}
            <Link href="/vesti/1" style={{textDecoration: 'none'}}>
              <div className="card">
                <div style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  background: '#C8102E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '50px',
                  color: '#FFF',
                }}>
                  ⚽
                </div>
                <div style={{padding: '25px'}}>
                  <div style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    background: '#003DA5',
                    color: '#FFF',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    marginBottom: '15px',
                    letterSpacing: '0.5px',
                  }}>
                    PRVI TIM
                  </div>
                  <h3 style={{
                    fontFamily: 'Roboto Condensed',
                    fontSize: '20px',
                    fontWeight: 700,
                    marginBottom: '15px',
                    color: '#333',
                    lineHeight: 1.3,
                  }}>
                    Važna pobeda u derbiju protiv lokalnog rivala
                  </h3>
                  <p style={{fontSize: '14px', color: '#666', lineHeight: 1.6, marginBottom: '15px'}}>
                    FK Šumadija ostvarila je pobedu rezultatom 2:1 u uzbudljivoj utakmici na Stadionu Bubanj...
                  </p>
                  <div style={{fontSize: '13px', color: '#999'}}>15. februar 2024</div>
                </div>
              </div>
            </Link>

            {/* News Card 2 */}
            <Link href="/vesti/2" style={{textDecoration: 'none'}}>
              <div className="card">
                <div style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  background: '#2ECC71',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '50px',
                  color: '#FFF',
                }}>
                  👦
                </div>
                <div style={{padding: '25px'}}>
                  <div style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    background: '#2ECC71',
                    color: '#FFF',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    marginBottom: '15px',
                    letterSpacing: '0.5px',
                  }}>
                    OMLADINSKA ŠKOLA
                  </div>
                  <h3 style={{
                    fontFamily: 'Roboto Condensed',
                    fontSize: '20px',
                    fontWeight: 700,
                    marginBottom: '15px',
                    color: '#333',
                    lineHeight: 1.3,
                  }}>
                    Otvorene prijave za prolećnu sezonu
                  </h3>
                  <p style={{fontSize: '14px', color: '#666', lineHeight: 1.6, marginBottom: '15px'}}>
                    Počele su prijave za prolećnu sezonu omladinske škole FK Šumadija 1903...
                  </p>
                  <div style={{fontSize: '13px', color: '#999'}}>12. februar 2024</div>
                </div>
              </div>
            </Link>

            {/* News Card 3 */}
            <Link href="/vesti/3" style={{textDecoration: 'none'}}>
              <div className="card">
                <div style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  background: '#D4A017',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '50px',
                  color: '#FFF',
                }}>
                  🏗️
                </div>
                <div style={{padding: '25px'}}>
                  <div style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    background: '#D4A017',
                    color: '#FFF',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    marginBottom: '15px',
                    letterSpacing: '0.5px',
                  }}>
                    KLUB
                  </div>
                  <h3 style={{
                    fontFamily: 'Roboto Condensed',
                    fontSize: '20px',
                    fontWeight: 700,
                    marginBottom: '15px',
                    color: '#333',
                    lineHeight: 1.3,
                  }}>
                    Renovacija stadiona Bubanj u toku
                  </h3>
                  <p style={{fontSize: '14px', color: '#666', lineHeight: 1.6, marginBottom: '15px'}}>
                    Radovi na renovaciji stadiona napreduju po planu. Očekuje se završetak do...
                  </p>
                  <div style={{fontSize: '13px', color: '#999'}}>10. februar 2024</div>
                </div>
              </div>
            </Link>
          </div>

          <div style={{textAlign: 'center', marginTop: '50px'}}>
            <Link href="/vesti">
              <button className="btn-red" style={{fontSize: '16px', padding: '16px 50px'}}>
                SVE VESTI
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER - Sheffield FC Style */}
      <section style={{
        background: '#003DA5',
        padding: '60px 20px',
        textAlign: 'center',
      }}>
        <div className="container-custom">
          <h2 style={{
            fontFamily: 'Roboto Condensed',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 900,
            color: '#FFF',
            marginBottom: '20px',
            textTransform: 'uppercase',
          }}>
            POSTANI DEO NAŠE PORODICE
          </h2>
          <p style={{fontSize: '16px', color: '#FFF', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px'}}>
            Priključi se najstarijem fudbalskom klubu u Srbiji
          </p>
          <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link href="/omladinska-skola">
              <button className="btn-gold" style={{fontSize: '16px', padding: '16px 40px'}}>
                UPIŠI SE U ŠKOLU
              </button>
            </Link>
            <Link href="/shop">
              <button className="btn-white" style={{fontSize: '16px', padding: '14px 40px'}}>
                PODRŽI KLUB
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
