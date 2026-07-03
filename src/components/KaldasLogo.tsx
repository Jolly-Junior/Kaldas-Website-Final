import React, { useState } from 'react';

interface KaldasLogoProps {
  className?: string;
  size?: number;
}

export default function KaldasLogo({ className = "w-8 h-8", size }: KaldasLogoProps) {
  const [hasError, setHasError] = useState(false);

  // If the image doesn't exist yet, we show a clean, high-end luxury placeholder emblem
  if (hasError) {
    return (
      <svg
        viewBox="0 0 100 100"
        className={`${className} text-brand-gold`}
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="50" cy="50" r="42" strokeDasharray="3 3" />
        <path d="M38 50 L46 42 L54 50 L62 42 L62 58 L38 58 Z" fill="currentColor" fillOpacity="0.15" />
        <circle cx="42" cy="42" r="2" fill="currentColor" />
        <circle cx="58" cy="42" r="2" fill="currentColor" />
        <text x="50" y="78" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" letterSpacing="1">LOGO</text>
      </svg>
    );
  }

  return (
    <img
      src="/src/assets/images/Final Logo.PNG"
      alt="Kaldas Logo"
      className={`${className} object-contain`}
      width={size}
      height={size}
      onError={() => setHasError(true)}
    />
  );
}

