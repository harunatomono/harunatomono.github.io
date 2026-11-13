// Small inline SVG icons. All inherit the surrounding text color.

const STAR_POINTS = '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2';

const strokeProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

/** The site's star motif. Pass `filled` for a solid star. */
export function StarIcon({ className = '', style, filled = false }) {
  return (
    <svg
      {...strokeProps}
      strokeWidth="2.5"
      className={`${filled ? 'star-filled' : ''} ${className}`.trim()}
      style={style}
      aria-hidden="true"
    >
      <polygon points={STAR_POINTS} />
    </svg>
  );
}

export function MailIcon({ className = '' }) {
  return (
    <svg {...strokeProps} strokeWidth="2" width="18" height="18" className={className} aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function PinIcon({ className = '' }) {
  return (
    <svg {...strokeProps} strokeWidth="2" width="18" height="18" className={className} aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ChevronDownIcon() {
  return (
    <svg {...strokeProps} strokeWidth="2.4" width="24" height="24" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
