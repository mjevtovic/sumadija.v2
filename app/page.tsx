import Link from 'next/link';
import NewsCard from '@/components/ui/NewsCard';
import CTACard from '@/components/ui/CTACard';

export default function Home() {
  const latestNews = [
    {
      id: 1,
      title: 'POBEDA PROTIV LOKALNOG RIVALA!',
      category: 'PRVI TIM',
      date: '15. februar 2024',
      excerpt: 'FK Šumadija ostvarila važnu pobedu u derbiju protiv lokalnog rivala rezultatom 2:1!',
    },
    {
      id: 2,
      title: 'UPIS U OMLADINSKU ŠKOLU',
      category: 'OMLADINCI',
      date: '12. februar 2024',
      excerpt: 'Počele su prijave za prolećnu sezonu omladinske škole FK Šumadija 1903!',
    },
    {
      id: 3,
      title: 'RENOVACIJA STADIONA',
      category: 'KLUB',
      date: '10. februar 2024',
      excerpt: 'Radovi na renovaciji stadiona Bubanj napreduju po planu!',
    },
  ];

  return (
    <div style={{background: '#000'}}>
      {/* MEGA HERO */}
      <section className="relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0052D9 0%, #FF6B35 50%, #2ECC71 100%)',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div className="absolute inset-0" style={{
          background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.1,
        }}></div>

        <div className="container-custom relative z-10 text-center py-20">
          <div className="heritage-badge mb-8 mx-auto animate-pulse">
            🏆 OSNOVAN 1903
          </div>

          <h1 className="font-display text-shadow-bold" style={{
            fontSize: 'clamp(3rem, 12vw, 10rem)',
            lineHeight: 0.9,
            marginBottom: '1rem',
            fontWeight: 400,
            letterSpacing: '0.02em',
          }}>
            FK ŠUMADIJA
          </h1>

          <div className="font-display text-shadow-bold" style={{
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            color: '#FFD93D',
            marginBottom: '2rem',
            fontWeight: 400,
          }}>
            KRAGUJEVAC 1903
          </div>

          <div style={{
            fontSize: 'clamp(1.25rem, 3vw, 2rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}>
            NAJSTARIJI FUDBALSKI KLUB U SRBIJI
          </div>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            maxWidth: '800px',
            margin: '0 auto 3rem',
            opacity: 0.95,
          }}>
            121 godina tradicije • Ponos Kragujevca • Budućnost srpskog fudbala
          </p>

          <div style={{display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link href="/omladinska-skola">
              <button className="btn-primary">
                ⚽ UPIŠI SE U ŠKOLU
              </button>
            </Link>
            <Link href="/utakmice">
              <button className="btn-secondary" style={{borderColor: 'white', color: 'white'}}>
                📅 UTAKMICE
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* MATCH CENTER */}
      <section style={{
        background: 'linear-gradient(180deg, #000 0%, #1a1a1a 100%)',
        padding: '6rem 0',
      }}>
        <div className="container-custom">
          <h2 className="font-display text-center mb-12" style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: '#FFD93D',
            textShadow: '0 0 30px rgba(255, 217, 61, 0.5)',
          }}>
            CENTAR UTAKMICA
          </h2>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
            {/* LAST MATCH */}
            <div style={{
              background: 'linear-gradient(135deg, #0052D9, #003DA5)',
              padding: '2rem',
              borderRadius: '16px',
              border: '4px solid #FFD93D',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
              }}></div>

              <div className="font-display" style={{
                fontSize: '1.5rem',
                color: '#FFD93D',
                marginBottom: '1.5rem',
                position: 'relative',
              }}>
                ✅ POSLEDNJA UTAKMICA
              </div>

              <div style={{position: 'relative', marginBottom: '1.5rem'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #FF6B35, #FFD93D)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '1.5rem',
                    color: '#000',
                  }}>
                    ŠU
                  </div>
                  <span style={{fontSize: '1.25rem', fontWeight: 700, flex: 1}}>FK Šumadija</span>
                  <div className="font-display" style={{fontSize: '4rem', color: '#2ECC71', textShadow: '0 0 20px rgba(46, 204, 113, 0.8)'}}>
                    2
                  </div>
                </div>

                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: '#333',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '1.5rem',
                  }}>
                    RIV
                  </div>
                  <span style={{fontSize: '1.25rem', fontWeight: 700, flex: 1}}>FK Rival</span>
                  <div className="font-display" style={{fontSize: '4rem', opacity: 0.5}}>
                    1
                  </div>
                </div>
              </div>

              <div style={{
                background: 'rgba(0,0,0,0.3)',
                padding: '1rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                position: 'relative',
              }}>
                <div style={{fontWeight: 700, color: '#FFD93D'}}>15. februar 2024 • Srpska liga Zapad</div>
                <div style={{opacity: 0.9}}>Stadion Bubanj, Kragujevac</div>
              </div>
            </div>

            {/* NEXT MATCH */}
            <div style={{
              background: 'linear-gradient(135deg, #FF6B35, #FFD93D)',
              padding: '2rem',
              borderRadius: '16px',
              border: '4px solid #2ECC71',
              position: 'relative',
              overflow: 'hidden',
              color: '#000',
            }}>
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)',
              }}></div>

              <div className="font-display" style={{
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
                position: 'relative',
              }}>
                🔥 SLEDEĆA UTAKMICA
              </div>

              <div style={{position: 'relative', marginBottom: '1.5rem'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: '#000',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '1.5rem',
                    color: 'white',
                  }}>
                    OPP
                  </div>
                  <span style={{fontSize: '1.25rem', fontWeight: 700, flex: 1}}>FK Protivnik</span>
                </div>

                <div className="font-display" style={{
                  textAlign: 'center',
                  fontSize: '3rem',
                  margin: '1rem 0',
                  opacity: 0.8,
                }}>
                  VS
                </div>

                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #0052D9, #003DA5)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '1.5rem',
                    color: 'white',
                  }}>
                    ŠU
                  </div>
                  <span style={{fontSize: '1.25rem', fontWeight: 700, flex: 1}}>FK Šumadija</span>
                </div>
              </div>

              <div style={{
                background: 'rgba(0,0,0,0.8)',
                padding: '1rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                position: 'relative',
                color: 'white',
              }}>
                <div className="font-display" style={{fontSize: '1.5rem', color: '#2ECC71'}}>
                  SUBOTA, 22. FEBRUAR • 17:00
                </div>
                <div style={{opacity: 0.9}}>Gostovanje • Srpska liga Zapad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section style={{
        background: '#0a0a0a',
        padding: '6rem 0',
      }}>
        <div className="container-custom">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem'}}>
            <h2 className="font-display" style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              background: 'linear-gradient(135deg, #0052D9, #2ECC71, #FFD93D)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              NAJNOVIJE VESTI
            </h2>
            <Link href="/vesti">
              <button className="btn-primary">SVE VESTI →</button>
            </Link>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem'}}>
            {latestNews.map((news, idx) => (
              <NewsCard key={news.id} news={news} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA GRID */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
        padding: '6rem 0',
      }}>
        <div className="container-custom">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            <CTACard
              href="/omladinska-skola"
              icon="⚽"
              title="OMLADINSKA ŠKOLA"
              description="Upišite dete u našu fudbalsku akademiju"
              buttonText="UPIŠI SE →"
              gradient="linear-gradient(135deg, #2ECC71, #27AE60)"
              borderHoverColor="#FFD93D"
            />

            <CTACard
              href="/balon-sala"
              icon="🏟️"
              title="BALON SALA"
              description="Rezervišite termin za iznajmljivanje"
              buttonText="REZERVIŠI →"
              gradient="linear-gradient(135deg, #0052D9, #003DA5)"
              borderHoverColor="#FF6B35"
            />

            <CTACard
              href="/shop"
              icon="👕"
              title="KLUPSKI SHOP"
              description="Dresovi, suveniri i oprema"
              buttonText="KUPI SADA →"
              gradient="linear-gradient(135deg, #FF6B35, #FFD93D)"
              textColor="#000"
              borderHoverColor="#0052D9"
            />

            <CTACard
              href="/sponzori"
              icon="🤝"
              title="POSTANI SPONZOR"
              description="Podrži najstariji klub u Srbiji"
              buttonText="KONTAKT →"
              gradient="linear-gradient(135deg, #FFD93D, #FF6B35)"
              textColor="#000"
              borderHoverColor="#2ECC71"
            />
          </div>
        </div>
      </section>

      {/* HERITAGE BANNER */}
      <section style={{
        background: 'linear-gradient(135deg, #0052D9 0%, #2ECC71 50%, #FFD93D 100%)',
        padding: '6rem 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)',
        }}></div>

        <div className="container-custom" style={{position: 'relative', zIndex: 10}}>
          <div className="heritage-badge mb-8 mx-auto">
            🏆 121 GODINA TRADICIJE
          </div>
          <h2 className="font-display text-shadow-bold" style={{
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            marginBottom: '2rem',
            lineHeight: 1.1,
          }}>
            NAJSTARIJI FUDBALSKI<br/>KLUB U SRBIJI
          </h2>
          <p style={{
            fontSize: 'clamp(1.25rem, 3vw, 2rem)',
            maxWidth: '900px',
            margin: '0 auto 3rem',
            fontWeight: 700,
          }}>
            Od 1903. godine gradimo legendu srpskog fudbala
          </p>
          <Link href="/istorija">
            <button className="btn-primary" style={{fontSize: '1.5rem', padding: '1.5rem 3rem'}}>
              OTKRIJ ISTORIJU
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
