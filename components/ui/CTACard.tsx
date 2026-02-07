'use client';

import Link from 'next/link';

interface CTACardProps {
  href: string;
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  gradient: string;
  textColor?: string;
  borderHoverColor: string;
}

export default function CTACard({
  href,
  icon,
  title,
  description,
  buttonText,
  gradient,
  textColor = 'white',
  borderHoverColor,
}: CTACardProps) {
  return (
    <Link
      href={href}
      className="cta-card"
      style={{
        background: gradient,
        padding: '3rem 2rem',
        borderRadius: '16px',
        textAlign: 'center',
        display: 'block',
        border: '4px solid transparent',
        transition: 'all 0.3s',
        color: textColor,
      }}
    >
      <div style={{fontSize: '4rem', marginBottom: '1rem'}}>{icon}</div>
      <h3 className="font-display" style={{fontSize: '2rem', marginBottom: '1rem'}}>
        {title}
      </h3>
      <p style={{fontSize: '1rem', opacity: textColor === '#000' ? 0.9 : 0.95, marginBottom: '1.5rem'}}>
        {description}
      </p>
      <div className="font-display" style={{fontSize: '1.25rem'}}>
        {buttonText}
      </div>

      <style jsx>{`
        .cta-card:hover {
          border-color: ${borderHoverColor} !important;
          transform: translateY(-4px);
        }
      `}</style>
    </Link>
  );
}
