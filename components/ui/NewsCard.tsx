'use client';

import Link from 'next/link';

export default function NewsCard({ news, idx }: { news: any; idx: number }) {
  const gradients = [
    '#0052D9, #003DA5',
    '#2ECC71, #27AE60',
    '#FF6B35, #FFD93D',
  ];

  return (
    <Link
      href={`/vesti/${news.id}`}
      className="news-card-wrapper"
      style={{
        background: `linear-gradient(135deg, ${gradients[idx % 3]})`,
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'block',
        border: '3px solid transparent',
        transition: 'all 0.3s',
      }}
    >
      <div style={{
        aspectRatio: '16/9',
        background: 'rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '5rem',
        position: 'relative',
      }}>
        ⚽
        <div style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          background: 'rgba(0,0,0,0.8)',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          fontWeight: 800,
          fontSize: '0.875rem',
          letterSpacing: '0.05em',
        }}>
          {news.category}
        </div>
      </div>
      <div style={{padding: '2rem'}}>
        <div style={{fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem'}}>{news.date}</div>
        <h3 className="font-display" style={{
          fontSize: '1.75rem',
          marginBottom: '1rem',
          lineHeight: 1.2,
        }}>
          {news.title}
        </h3>
        <p style={{fontSize: '1rem', opacity: 0.95}}>
          {news.excerpt}
        </p>
        <div className="font-display" style={{
          marginTop: '1rem',
          fontSize: '1.125rem',
        }}>
          PROČITAJ VIŠE →
        </div>
      </div>

      <style jsx>{`
        .news-card-wrapper:hover {
          transform: translateY(-8px);
          border-color: #FFD93D !important;
        }
      `}</style>
    </Link>
  );
}
