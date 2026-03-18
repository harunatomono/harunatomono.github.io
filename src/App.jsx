import { Fragment, useEffect, useState } from 'react';

import { siteContent } from './content/siteContent';

const ANIMATION_SPEED = 1.25;

const formatSeconds = (value) => `${Number((value / ANIMATION_SPEED).toFixed(3))}s`;

const formatMilliseconds = (value) => Math.round(value / ANIMATION_SPEED);

const getFadeInClassName = (baseClassName, shouldAnimate) =>
  shouldAnimate ? `${baseClassName} fade-in-up` : baseClassName;

const getFadeInStyle = (shouldAnimate, delay, style = {}) =>
  shouldAnimate ? { ...style, animationDelay: formatSeconds(delay) } : style;

const isExternalHref = (href = '') => /^https?:\/\//i.test(href);

const toSegments = (value) => {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  return [{ text: value }];
};

const getPublicationMeta = (item) => {
  if (item.meta) {
    return item.meta;
  }

  if (item.journal?.name && item.journal?.meta) {
    return `${item.journal.name} • ${item.journal.meta}`;
  }

  return item.journal?.name ?? '';
};

const getEntryCitation = (item) => {
  if (item.authors?.length && item.journal?.name && item.journal?.citation) {
    return (
      <>
        {renderAuthorList(item.authors)}. <i>{item.journal.name}</i>. {item.journal.citation}.
      </>
    );
  }

  if (item.authors?.length && item.patent?.assignee && item.patent?.citation) {
    return (
      <>
        {renderAuthorList(item.authors)}. {item.patent.assignee}. {item.patent.citation}.
      </>
    );
  }

  return null;
};

// theme and motion styles
const customStyles = `
  .site-shell {
    background: var(--page-bg);
    color: var(--page-text);
  }

  .site-shell ::selection {
    background: var(--selection-bg);
    color: var(--selection-text);
  }

  .loader-container {
    transition: opacity ${formatSeconds(0.2)} ease-out;
  }

  .loader-exit {
    opacity: 0;
  }

  .animate-phase1-star-roll {
    position: fixed;
    animation: rollOffLeftAccelerate ${formatSeconds(1)} cubic-bezier(0.5, 0, 1, 0.5) forwards;
    transform-origin: center;
  }

  @keyframes rollOffLeftAccelerate {
    0% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 1;
    }

    100% {
      transform: translate(-160vw, 42.8vw) rotate(-2880deg);
      opacity: 1;
    }
  }

  .char-bounce-left {
    transform: translateX(-150vw);
    transform-origin: bottom center;
    animation: physicsBounceLeft ${formatSeconds(0.9)} forwards;
  }

  @keyframes physicsBounceLeft {
    0% { transform: translateX(-100vw) rotate(-25deg); animation-timing-function: ease-out; }
    40% { transform: translateX(6vw) rotate(8deg); animation-timing-function: ease-in-out; }
    60% { transform: translateX(-2vw) rotate(-3deg); animation-timing-function: ease-in-out; }
    80% { transform: translateX(1vw) rotate(1deg); animation-timing-function: ease-in-out; }
    100% { transform: translateX(0) rotate(var(--tilt)); }
  }

  .animate-u-dip {
    animation: uReact ${formatSeconds(0.4)} ${formatSeconds(0.95)} ease-out forwards;
    transform-origin: bottom center;
  }

  @keyframes uReact {
    0% { transform: scaleY(1) translateY(0); }
    30% { transform: scaleY(0.7) translateY(10%); }
    70% { transform: scaleY(1.1) translateY(-5%); }
    100% { transform: scaleY(1) translateY(0); }
  }

  .star-shoot-x {
    top: 50%;
    left: 0;
    opacity: 0;
    animation: starShootX ${formatSeconds(1.1)} linear forwards;
  }

  @keyframes starShootX {
    0% { transform: translateX(-60vw); opacity: 1; }
    99% { transform: translateX(60vw); opacity: 1; }
    100% { transform: translateX(60vw); opacity: 0; }
  }

  .star-shoot-y {
    animation: starShootY ${formatSeconds(1.1)} forwards;
  }

  @keyframes starShootY {
    0% { transform: translateY(60vh) rotate(-180deg); animation-timing-function: ease-out; }
    25% { transform: translateY(-45vh) rotate(-90deg); animation-timing-function: ease-in; }
    50% { transform: translateY(-16vh) rotate(0deg); animation-timing-function: ease-out; }
    75% { transform: translateY(-45vh) rotate(90deg); animation-timing-function: ease-in; }
    100% { transform: translateY(60vh) rotate(180deg); }
  }

  .star-fill-morph {
    fill: currentColor;
    stroke: currentColor;
    stroke-width: 2.5;
    stroke-linejoin: round;
    animation: morphFill ${formatSeconds(1.1)} step-end forwards;
  }

  @keyframes morphFill {
    0% { fill: currentColor; stroke: currentColor; }
    50% { fill: none; stroke: currentColor; }
    100% { fill: none; stroke: currentColor; }
  }

  .star-tumble {
    opacity: 0;
    animation: starDrop ${formatSeconds(0.8)} forwards;
    transform-origin: center;
  }

  @keyframes starDrop {
    0% { opacity: 0; transform: translate(30vw, -40vh) rotate(180deg); animation-timing-function: ease-in; }
    40% { opacity: 1; transform: translate(0, 0) rotate(0deg); animation-timing-function: ease-out; }
    60% { transform: translate(1vw, -6vh) rotate(30deg); animation-timing-function: ease-in; }
    80% { transform: translate(0, 0) rotate(0deg); animation-timing-function: ease-out; }
    90% { transform: translate(0.5vw, -2vh) rotate(10deg); animation-timing-function: ease-in; }
    100% { opacity: 1; transform: translate(0, 0) rotate(0deg); }
  }

  .char-appear {
    opacity: 0;
    transform: translateY(20px);
    animation: charSlideBounce ${formatSeconds(0.5)} cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    display: inline-block;
  }

  @keyframes charSlideBounce {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .fade-in-up {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp ${formatSeconds(1)} cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @keyframes fadeInUp {
    to { opacity: 1; transform: translateY(0); }
  }

  .star-land {
    opacity: 0;
    animation: starLand ${formatSeconds(0.5)} cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    transform-origin: center;
  }

  @keyframes starLand {
    0% { opacity: 1; transform: translate(-25vw, 30vh) rotate(-45deg) scale(0.6); }
    100% { opacity: 1; transform: translate(0, 0) rotate(10deg) scale(1); }
  }

  .folded-note {
    background: linear-gradient(-45deg, transparent 28px, var(--note-folded-bg) 0);
    position: relative;
  }

  .folded-note::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    border-top: 40px solid var(--note-folded-fold);
    border-right: 40px solid transparent;
  }

  .news-timeline-item {
    position: relative;
    padding-left: 1.5rem;
    border-left: 1px solid var(--news-line);
  }

  .news-timeline-item::before {
    content: '';
    position: absolute;
    left: -4px;
    top: 0;
    width: 7px;
    height: 7px;
    background-color: var(--news-dot);
    border-radius: 50%;
  }

  .star-filled-rounded {
    fill: currentColor;
    stroke: currentColor;
    stroke-width: 2.5;
    stroke-linejoin: round;
  }

  .text-muted {
    color: var(--muted-text);
  }

  .text-subtle {
    color: var(--subtle-text);
  }

  .section-heading {
    text-decoration-color: var(--section-underline);
  }

  .tag-pill {
    background: var(--tag-bg);
    color: var(--tag-text);
  }

  .footer-surface {
    background: var(--footer-bg);
    border-top: 1px solid var(--border-default);
    color: var(--footer-text);
  }

  .interactive-link {
    transition: color ${formatSeconds(0.2)} ease, opacity ${formatSeconds(0.2)} ease;
  }

  .interactive-link:hover {
    color: var(--link-hover);
  }

  .content-card {
    border-left: 2px solid var(--border-soft);
    transition: border-color ${formatSeconds(0.2)} ease;
  }

  .content-card:hover {
    border-left-color: var(--card-accent);
  }

  .content-card:hover .card-title {
    color: var(--muted-text);
  }

  .about-highlight {
    color: var(--palette-accent1Dark);
    font-weight: 500;
    letter-spacing: -0.01em;
  }

  .cv-overlay {
    background: color-mix(in srgb, var(--page-text) 22%, transparent);
  }

  .cv-panel {
    background: var(--page-bg);
    border: 1px solid var(--border-default);
    box-shadow: 0 24px 60px color-mix(in srgb, var(--page-text) 16%, transparent);
  }
`;

// render formatted text segments
const renderTextSegments = (segments, classMap = {}) =>
  segments.map((segment, index) => {
    const className = [
      segment.highlight ? classMap.highlight : '',
      segment.emphasis ? classMap.emphasis : '',
      segment.italic ? classMap.italic : '',
      segment.className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    if (segment.href) {
      const isExternal = segment.external ?? isExternalHref(segment.href);
      const linkClassName = [className, classMap.link ?? ''].filter(Boolean).join(' ');

      return (
        <a
          key={`${segment.text}-${index}`}
          href={segment.href}
          className={linkClassName || 'interactive-link'}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer' : undefined}
        >
          {segment.text}
        </a>
      );
    }

    return className ? (
      <span key={`${segment.text}-${index}`} className={className}>
        {segment.text}
      </span>
    ) : (
      <Fragment key={`${segment.text}-${index}`}>{segment.text}</Fragment>
    );
  });

const renderAuthorList = (authors = []) =>
  authors.map((author, index) => {
    const isHighlightedAuthor = author.trim() === 'Tomono H';
    const content = index < authors.length - 1 ? `${author}, ` : author;

    return isHighlightedAuthor ? (
      <span key={`${author}-${index}`} className="font-semibold text-[color:var(--palette-accent1Dark)]">
        {content}
      </span>
    ) : (
      <Fragment key={`${author}-${index}`}>{content}</Fragment>
    );
  });

const resolveThemeValue = (theme, value) =>
  theme.palette?.[value] ? `var(--palette-${value})` : value;

const getNoteTheme = (theme) => ({
  featured: theme.notes.featured ?? theme.notes.hero,
  folded: theme.notes.folded ?? theme.notes.sticky,
  detail: theme.notes.detail ?? theme.notes.contact,
});

const getThemeVariables = (theme) => {
  const notes = getNoteTheme(theme);

  return {
    '--page-bg': resolveThemeValue(theme, theme.page.background),
    '--page-text': resolveThemeValue(theme, theme.page.text),
    '--selection-bg': resolveThemeValue(theme, theme.page.selectionBackground),
    '--selection-text': resolveThemeValue(theme, theme.page.selectionText),
    '--muted-text': resolveThemeValue(theme, theme.text.muted),
    '--subtle-text': resolveThemeValue(theme, theme.text.subtle),
    '--border-default': resolveThemeValue(theme, theme.border.default),
    '--border-soft': resolveThemeValue(theme, theme.border.soft),
    '--section-underline': resolveThemeValue(theme, theme.border.underline),
    '--news-line': resolveThemeValue(theme, theme.border.news),
    '--news-dot': resolveThemeValue(theme, theme.border.newsDot),
    '--note-featured-bg': resolveThemeValue(theme, notes.featured.background),
    '--note-featured-text': resolveThemeValue(theme, notes.featured.text),
    '--note-folded-bg': resolveThemeValue(theme, notes.folded.background),
    '--note-folded-fold': resolveThemeValue(theme, notes.folded.fold),
    '--note-folded-text': resolveThemeValue(theme, notes.folded.text),
    '--note-detail-bg': resolveThemeValue(theme, notes.detail.background),
    '--note-detail-text': resolveThemeValue(theme, notes.detail.text),
    '--loader-phase1-bg': resolveThemeValue(theme, theme.loader.phase1Background),
    '--loader-phase2-bg': resolveThemeValue(theme, theme.loader.phase2Background),
    '--loader-phase3-bg': resolveThemeValue(theme, theme.loader.phase3Background),
    '--loader-text': resolveThemeValue(theme, theme.loader.text),
    '--tag-bg': resolveThemeValue(theme, theme.tags.background),
    '--tag-text': resolveThemeValue(theme, theme.tags.text),
    '--footer-bg': resolveThemeValue(theme, theme.footer.background),
    '--footer-text': resolveThemeValue(theme, theme.footer.text),
    '--link-hover': resolveThemeValue(theme, theme.links.hover),
    ...Object.fromEntries(
      Object.entries(theme.palette ?? {}).map(([name, value]) => [`--palette-${name}`, value]),
    ),
  };
};

const firstNameCharacters = siteContent.person.firstName.toLowerCase().split('');
const lastNameCharacters = siteContent.person.lastName.toLowerCase().split('');
const themeVariables = getThemeVariables(siteContent.theme);

// render the intro loader
const Loader = ({ phase }) => {
  if (phase === 0) return null;

  return (
    <>
      {phase === 1 && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: 'var(--loader-phase1-bg)', color: 'var(--loader-text)' }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-16 h-16 md:w-20 md:h-20 text-current animate-phase1-star-roll star-filled-rounded"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
      )}

      {phase === 2 && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: 'var(--loader-phase2-bg)', color: 'var(--loader-text)' }}
        >
          <div className="flex space-x-2 md:space-x-4 text-[25vw] md:text-[30vh] font-serif leading-none pb-8">
            {firstNameCharacters.map((char, i) => (
              <span key={i} className="char-bounce-left inline-block" style={{ '--tilt': i % 2 === 0 ? '-2deg' : '2deg', animationDelay: formatSeconds(i * 0.12) }}>
                <span className={`inline-block ${i === 3 ? 'animate-u-dip' : ''}`}>
                  {char}
                </span>
              </span>
            ))}
          </div>

          <div className="star-shoot-x absolute w-full flex justify-center z-50 pointer-events-none" style={{ animationDelay: formatSeconds(0.4) }}>
            <div className="star-shoot-y" style={{ animationDelay: formatSeconds(0.4) }}>
              <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 md:w-20 md:h-20 text-current star-fill-morph">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
          </div>
        </div>
      )}

      {(phase === 3 || phase === 4) && (
        <div
          className={`loader-container fixed inset-0 z-50 flex items-center justify-center ${phase === 4 ? 'loader-exit' : ''}`}
          style={{ backgroundColor: 'var(--loader-phase3-bg)', color: 'var(--loader-text)' }}
        >
          <div className="text-4xl md:text-6xl tracking-tight font-serif flex items-center gap-3 md:gap-4">
            <div className="relative flex items-baseline">
              {firstNameCharacters.map((char, i) => (
                <span key={`first-${i}`} className="char-appear" style={{ animationDelay: formatSeconds(i * 0.05) }}>{char}</span>
              ))}
            </div>

            <div className="relative flex items-baseline">
              {lastNameCharacters.map((char, i) => (
                <span key={`last-${i}`} className="char-appear" style={{ animationDelay: formatSeconds((i + firstNameCharacters.length) * 0.05) }}>{char}</span>
              ))}
              <span className="relative">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute bottom-2 md:bottom-4 left-1 w-6 h-6 md:w-8 md:h-8 text-current star-tumble" style={{ animationDelay: formatSeconds(0.65) }}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// render the navigation bar
const Navbar = ({ onViewChange, onCvOpen, shouldAnimate }) => {
  return (
    <nav
      className={getFadeInClassName('flex justify-between items-center py-8 px-6 md:px-12', shouldAnimate)}
      style={getFadeInStyle(shouldAnimate, 4.1)}
    >
      <div
        onClick={() => onViewChange('home')}
        className="text-xl font-medium tracking-tight font-serif hover:opacity-70 transition-opacity cursor-pointer flex items-start"
      >
        <span className="relative">
          {siteContent.person.displayName}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute top-0 -right-3.5 w-3.5 h-3.5 text-current">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </span>
      </div>
      <div className="flex gap-6 md:gap-8 text-sm md:text-base font-medium font-mono text-muted lowercase">
        <button
          type="button"
          onClick={() => onViewChange('publications')}
          className="interactive-link cursor-pointer border-0 bg-transparent p-0"
        >
          {siteContent.navigation.publicationsLabel}
        </button>
        <button type="button" onClick={onCvOpen} className="interactive-link cursor-pointer border-0 bg-transparent p-0">
          {siteContent.navigation.cvLabel}
        </button>
      </div>
    </nav>
  );
};

// render the hero section
const Hero = ({ shouldAnimate }) => {
  return (
    <section className="px-4 md:px-12 pt-8 md:pt-12 pb-24 max-w-6xl mx-auto flex flex-col items-center overflow-x-hidden sm:overflow-visible">
      <div className="relative w-full mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-0 items-start">
        <div
          className={getFadeInClassName('lg:col-span-8 lg:col-start-2 z-10', shouldAnimate)}
          style={getFadeInStyle(shouldAnimate, 4.2)}
        >
          <div
            className="p-6 md:p-10 relative w-full font-serif"
            style={{
              transform: 'rotate(-2deg)',
              backgroundColor: 'var(--note-featured-bg)',
              color: 'var(--note-featured-text)',
            }}
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-tight md:leading-tight tracking-tight">
              {renderTextSegments(siteContent.hero.headline, {
                emphasis: 'italic',
                italic: 'italic',
              })}
            </h1>
            <div className="absolute -right-4 -top-4 md:-right-5 md:-top-5 z-40">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`w-10 h-10 md:w-12 md:h-12 text-current ${shouldAnimate ? 'star-land' : ''}`} style={shouldAnimate ? { animationDelay: formatSeconds(4.1) } : undefined}>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
          </div>
        </div>

        <div
          className={getFadeInClassName('lg:col-span-5 lg:col-start-7 lg:-mt-5 z-20 flex justify-end', shouldAnimate)}
          style={getFadeInStyle(shouldAnimate, 4.3)}
        >
          <div className="folded-note p-5 md:p-8 relative w-full font-mono" style={{ transform: 'rotate(5deg)', color: 'var(--note-folded-text)' }}>
            <p className="text-sm md:text-base leading-relaxed">
              {siteContent.hero.stickyNote}
            </p>
          </div>
        </div>

        <div
          className={getFadeInClassName('lg:col-span-3 lg:col-start-3 lg:-mt-10 lg:ml-6 z-30 flex justify-start', shouldAnimate)}
          style={getFadeInStyle(shouldAnimate, 4.4)}
        >
          <div
            className="p-4 md:p-6 relative w-fit font-mono shadow-sm flex flex-col gap-1.5"
            style={{
              transform: 'rotate(-5deg)',
              backgroundColor: 'var(--note-detail-bg)',
              color: 'var(--note-detail-text)',
            }}
          >
            <a href={`mailto:${siteContent.person.email}`} className="flex items-center gap-3 pr-2 group transition-opacity hover:opacity-70">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" className="shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              <span className="text-sm md:text-base whitespace-nowrap lowercase">{siteContent.person.email}</span>
            </a>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" className="shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <span className="text-sm md:text-base whitespace-nowrap">{siteContent.person.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// render the about and news section
const AboutAndNews = ({ shouldAnimate }) => {
  const newsUpdates = siteContent.newsUpdates.slice(0, 5);

  return (
    <section id="about" className="px-6 md:px-12 py-24 max-w-6xl mx-auto scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        <div
          className={getFadeInClassName('md:col-span-7 flex flex-col gap-8', shouldAnimate)}
          style={getFadeInStyle(shouldAnimate, 4.5)}
        >
          <h2 className="text-3xl font-serif font-medium underline underline-offset-8 section-heading flex items-center gap-4">
            {siteContent.sections.aboutLabel}
          </h2>
          <div className="flex flex-col gap-6 text-muted leading-relaxed text-lg font-sans">
            {siteContent.about.paragraphs.map((paragraph, index) => (
              <p key={index}>
                {renderTextSegments(toSegments(paragraph), {
                  highlight: 'about-highlight',
                  link: 'interactive-link underline underline-offset-4',
                })}
              </p>
            ))}
          </div>
        </div>

        <div
          className={getFadeInClassName('md:col-span-5 flex flex-col gap-8', shouldAnimate)}
          style={getFadeInStyle(shouldAnimate, 4.6)}
        >
          <h2 className="text-3xl font-serif font-medium underline underline-offset-8 section-heading">
            {siteContent.sections.newsLabel}
          </h2>
          <div className="flex flex-col gap-8">
            {newsUpdates.map((item, idx) => (
              <div key={idx} className="news-timeline-item flex flex-col gap-1">
                <span className="text-xs uppercase tracking-widest text-subtle font-bold font-mono">
                  {item.date}
                </span>
                <p className="text-sm leading-snug font-sans">
                  {renderTextSegments(toSegments(item.contentSegments ?? item.content), {
                    link: 'interactive-link underline underline-offset-4',
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// render the publication sections
const PublicationsView = () => {
  return (
    <section className="px-6 md:px-12 py-24 max-w-6xl mx-auto min-h-screen font-sans">
      <div className="fade-in-up flex flex-col gap-16" style={{ animationDelay: '0.1s' }}>
        {siteContent.publicationSections.map((section) => (
          <div key={section.title}>
            <h2 className="text-3xl font-serif font-medium underline underline-offset-8 section-heading mb-12 lowercase tracking-tight">
              {section.title}
            </h2>
            <div className="flex flex-col gap-10">
              {section.items.map((item, idx) => (
                <div
                  key={`${section.title}-${idx}`}
                  className="content-card flex flex-col gap-3 group pl-6 py-2"
                  style={{ '--card-accent': resolveThemeValue(siteContent.theme, item.accent ?? 'accent1') }}
                >
                  <div className="flex items-center gap-3">
                    {item.label ? (
                      <span className="tag-pill text-[10px] font-mono px-2 py-0.5 uppercase tracking-tighter rounded-full">
                        {item.label}
                      </span>
                    ) : null}
                    {getPublicationMeta(item) ? (
                      <span className="text-xs font-mono text-subtle uppercase tracking-widest">{getPublicationMeta(item)}</span>
                    ) : null}
                  </div>
                  <h3 className="card-title text-lg md:text-xl font-serif font-medium leading-snug transition-colors">
                    {item.title}
                  </h3>
                  {getEntryCitation(item) ? (
                    <p className={`text-sm text-muted leading-relaxed ${item.summaryWidth ?? 'max-w-4xl'}`}>
                      {getEntryCitation(item)}
                    </p>
                  ) : null}
                  {item.summary?.length ? (
                    <p className={`text-sm text-muted leading-relaxed ${item.summaryWidth ?? 'max-w-4xl'}`}>
                      {renderTextSegments(item.summary, {
                        highlight: 'font-semibold',
                        emphasis: 'italic',
                        italic: 'italic',
                      })}
                    </p>
                  ) : null}
                  {item.links?.length ? (
                    <div className="flex flex-wrap gap-4">
                      {item.links.map((link) => (
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// render the footer links
const Footer = () => {
  return (
    <footer className="footer-surface px-6 md:px-12 py-16 flex flex-col md:flex-row justify-center items-center text-center gap-12">
      <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold tracking-wider uppercase font-mono">
        {siteContent.footerLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="interactive-link">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

// render the cv in a site modal
const CvModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="cv-overlay fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <div className="cv-panel h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-[color:var(--border-default)] px-4 py-3 md:px-6">
          <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-subtle">{siteContent.person.cvTitle}</h2>
          <button type="button" onClick={onClose} className="interactive-link border-0 bg-transparent p-0 text-sm font-mono uppercase tracking-[0.2em]">
            close
          </button>
        </div>
        <iframe title={siteContent.person.cvTitle} src={siteContent.person.cvHref} className="h-[calc(90vh-57px)] w-full" />
      </div>
    </div>
  );
};

export default function App() {
  const [loaderPhase, setLoaderPhase] = useState(1);
  const [view, setView] = useState('home');
  const [shouldAnimateHome, setShouldAnimateHome] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash === '#publications') {
      setView('publications');
      setLoaderPhase(0);
      setShouldAnimateHome(false);
      return undefined;
    }

    if (hash === '#about') {
      setView('home');
      setLoaderPhase(0);
      setShouldAnimateHome(false);
      return undefined;
    }

    setShouldAnimateHome(true);

    const t1 = setTimeout(() => setLoaderPhase(2), formatMilliseconds(1000));
    const t2 = setTimeout(() => setLoaderPhase(3), formatMilliseconds(2550));
    const t3 = setTimeout(() => setLoaderPhase(4), formatMilliseconds(3950));
    const t4 = setTimeout(() => setLoaderPhase(0), formatMilliseconds(4750));

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const handleViewChange = (newView) => {
    setLoaderPhase(0);
    setView(newView);
    setIsCvOpen(false);
    if (newView === 'home') {
      setShouldAnimateHome(false);
    }
    window.location.hash = newView;
    window.scrollTo(0, 0);
  };

  return (
    <div className="site-shell min-h-screen font-sans" style={themeVariables}>
      <style>{customStyles}</style>
      <Loader phase={loaderPhase} />
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
      <div className="relative z-10">
        <Navbar onViewChange={handleViewChange} onCvOpen={() => setIsCvOpen(true)} shouldAnimate={shouldAnimateHome} />
        <main>
          {view === 'home' ? (
            <>
              <Hero shouldAnimate={shouldAnimateHome} />
              <AboutAndNews shouldAnimate={shouldAnimateHome} />
            </>
          ) : (
            <PublicationsView />
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}