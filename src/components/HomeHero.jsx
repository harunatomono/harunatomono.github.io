import { fadeIn, homeRevealDelay, scaledSeconds } from '../lib/animation';
import { hero } from '../content/home';
import { person } from '../content/site';
import { MailIcon, PinIcon, StarIcon } from './Icons';
import RichText from './RichText';

// The hero is three overlapping, slightly rotated "sticky notes":
// the headline, a folded-corner note, and a contact card.
export default function HomeHero({ animate }) {
  return (
    <section className="px-4 md:px-12 py-[clamp(2.5rem,6vh,5.5rem)] max-w-6xl mx-auto flex min-h-[calc(100svh-6.5rem)] md:min-h-[calc(100svh-8rem)] flex-col justify-center items-center overflow-x-hidden sm:overflow-visible">
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-y-[clamp(1.5rem,4vh,3rem)] lg:gap-y-0 items-center">
        <div {...fadeIn(animate, 1, 'lg:col-span-8 lg:col-start-2 z-10')}>
          <div
            className="relative w-full lg:w-[min(100%,clamp(20rem,56vw,46rem))] p-[clamp(1.1rem,2.4vw,2.4rem)] font-serif"
            style={{ transform: 'rotate(-2deg)', backgroundColor: 'var(--notes-headline-background)', color: 'var(--notes-headline-text)' }}
          >
            <h1 className="text-[clamp(1.35rem,2.8vw,2.25rem)] font-normal leading-[1.2] tracking-tight">
              <RichText text={hero.headline} />
            </h1>
            <div className="absolute -right-4 -top-4 md:-right-5 md:-top-5 z-40">
              <StarIcon
                className={`w-10 h-10 md:w-12 md:h-12 ${animate ? 'star-land' : ''}`}
                style={animate ? { animationDelay: scaledSeconds(homeRevealDelay(0)) } : undefined}
              />
            </div>
          </div>
        </div>

        <div {...fadeIn(animate, 2, 'lg:col-span-5 lg:col-start-7 lg:-mt-5 z-20 flex justify-center lg:justify-end')}>
          <div
            className="folded-note relative w-[min(100%,clamp(16rem,42vw,30rem))] p-[clamp(0.95rem,2.1vw,2rem)] font-mono"
            style={{ transform: 'rotate(5deg)', color: 'var(--notes-sticky-text)' }}
          >
            <p className="text-[clamp(0.78rem,1.1vw,1rem)] leading-relaxed">{hero.stickyNote}</p>
          </div>
        </div>

        <div {...fadeIn(animate, 3, 'lg:col-span-3 lg:col-start-3 lg:-mt-10 lg:ml-6 z-30 flex justify-center lg:justify-start')}>
          <div
            className="relative w-max max-w-none p-[clamp(0.85rem,1.7vw,1.5rem)] font-mono shadow-sm flex flex-col gap-[clamp(0.3rem,0.8vw,0.55rem)]"
            style={{ transform: 'rotate(-5deg)', backgroundColor: 'var(--notes-contact-background)', color: 'var(--notes-contact-text)' }}
          >
            <a href={`mailto:${person.email}`} className="flex items-center gap-3 pr-2 transition-opacity hover:opacity-70">
              <MailIcon className="shrink-0" />
              <span className="text-[clamp(0.76rem,1.05vw,1rem)] whitespace-nowrap lowercase">{person.email}</span>
            </a>
            <div className="flex items-center gap-3">
              <PinIcon className="shrink-0" />
              <span className="text-[clamp(0.76rem,1.05vw,1rem)] whitespace-nowrap">{person.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
