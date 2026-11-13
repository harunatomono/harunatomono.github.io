import { footerLinks } from '../content/site';

export default function Footer() {
  return (
    <footer className="footer-surface px-6 md:px-12 py-16 flex flex-col md:flex-row justify-center items-center text-center gap-12">
      <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold tracking-wider lowercase font-mono">
        {footerLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="interactive-link">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
