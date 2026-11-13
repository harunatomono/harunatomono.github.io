// Site-wide settings: who you are, navigation, and footer links.
// Page-specific content lives in home.js and publications.js; colors live in theme.js.

export const person = {
  firstName: 'haruna',
  lastName: 'tomono',
  email: 'haruna.tomono@ucsf.edu',
  location: 'San Francisco, CA',

  // How your name appears in author lists, so it can be highlighted in publications.js.
  citationName: 'Tomono H',

  // File in /public. Replace the PDF to update your CV (keep the same filename).
  cvPath: '/tomono-haruna_cv-public.pdf',
};

// Top-right navigation links. `route` must be one of: 'publications', 'cv'.
// (Clicking the name on the left always goes home.)
export const navLinks = [
  { label: 'publications', route: 'publications' },
  { label: 'cv', route: 'cv' },
];

export const footerLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/harunatomono' },
  { label: 'GitHub', href: 'https://github.com/harunatomono' },
  { label: 'Google.Scholar', href: 'https://scholar.google.com/citations?user=lztHqWEAAAAJ&hl=en' },
];
