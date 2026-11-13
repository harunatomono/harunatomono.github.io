import { entryTypes, publicationSections } from '../content/publications';
import { person } from '../content/site';
import { colorFor } from '../lib/theme';
import RichText from './RichText';

function AuthorList({ authors }) {
  return authors.map((author, index) => {
    const separator = index < authors.length - 1 ? ', ' : '';
    return author.trim() === person.citationName ? (
      <span key={index} className="font-semibold text-[color:var(--palette-accent1-dark)]">
        {author}
        {separator}
      </span>
    ) : (
      <span key={index}>
        {author}
        {separator}
      </span>
    );
  });
}

// "Authors. *Venue*. Citation."  (venue is not italicized for patents)
function Citation({ entry }) {
  const venue = entry.type === 'patent' ? entry.venue : <i>{entry.venue}</i>;
  return (
    <>
      <AuthorList authors={entry.authors} />. {venue}
      {entry.venue.endsWith('.') ? '' : '.'} {entry.citation}.
    </>
  );
}

function getEntryLinks(entry) {
  const doiLink = entry.doi ? [{ label: `doi: ${entry.doi}`, href: `https://doi.org/${entry.doi}` }] : [];
  return [...doiLink, ...(entry.links ?? [])];
}

function PublicationEntry({ entry }) {
  const { label, accent } = entryTypes[entry.type];
  const headerText = entry.status ?? [entry.venue, entry.year].filter(Boolean).join(' • ');
  const links = getEntryLinks(entry);

  return (
    <div className="content-card flex flex-col gap-3 pl-6 py-2" style={{ '--card-accent': colorFor(accent) }}>
      <div className="flex items-center gap-3">
        <span className="tag-pill text-[10px] font-mono px-2 py-0.5 uppercase tracking-tighter rounded-full">{label}</span>
        {headerText ? <span className="text-xs font-mono uppercase tracking-widest">{headerText}</span> : null}
      </div>

      <h3 className="card-title text-lg md:text-xl font-serif font-medium leading-snug transition-colors">{entry.title}</h3>

      <p className="text-sm leading-relaxed max-w-4xl">
        <Citation entry={entry} />
      </p>

      {entry.summary ? (
        <p className="text-sm text-muted leading-relaxed max-w-4xl">
          <RichText text={entry.summary} />
        </p>
      ) : null}

      {links.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="interactive-link text-xs font-mono text-subtle underline underline-offset-4 w-fit"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function PublicationsPage() {
  return (
    <section className="px-6 md:px-12 py-24 max-w-6xl mx-auto min-h-screen font-sans">
      <div className="fade-in-up flex flex-col gap-16" style={{ animationDelay: '0.1s' }}>
        {publicationSections.map((section) => (
          <div key={section.title}>
            <h2 className="text-3xl font-serif font-medium underline underline-offset-8 section-heading mb-12 lowercase tracking-tight">
              {section.title}
            </h2>
            <div className="flex flex-col gap-10">
              {section.entries.map((entry) => (
                <PublicationEntry key={entry.title} entry={entry} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
