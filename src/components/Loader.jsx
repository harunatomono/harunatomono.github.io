import { LOADER_PHASE, scaledSeconds } from '../lib/animation';
import { person } from '../content/site';
import { StarIcon } from './Icons';

const FIRST_NAME_LETTERS = person.firstName.toLowerCase().split('');
const LAST_NAME_LETTERS = person.lastName.toLowerCase().split('');

// Timings (seconds, unscaled) for the full-name screen.
const STAR_DROP_DELAY = 0.65;
const STAR_DROP_DURATION = 0.8; // must match .star-drop in animations.css
const STAR_FIRST_BOUNCE_FRACTION = 0.6; // first-name letters start when the star first lands
const FIRST_NAME_START_DELAY = STAR_DROP_DELAY + STAR_DROP_DURATION * STAR_FIRST_BOUNCE_FRACTION;
const FIRST_NAME_LETTER_STAGGER = 0.02;
const LAST_NAME_LETTER_STAGGER = 0.05;

// The index of the letter that "dips" when the shooting star lands on it.
// (The 4th letter of "haruna" is the "u".)
const DIPPING_LETTER_INDEX = 3;

const overlayClassName = 'fixed inset-0 flex items-center justify-center';

/** Screen 1: a star rolls off to the left. */
function StarRollScreen() {
  return (
    <div className={`${overlayClassName} z-[60] overflow-hidden`} style={{ backgroundColor: 'var(--loader-star)', color: 'var(--loader-text)' }}>
      <StarIcon filled className="w-16 h-16 md:w-20 md:h-20 star-roll" />
    </div>
  );
}

/** Screen 2: the first name bounces in while a star arcs across the screen. */
function FirstNameScreen() {
  return (
    <div className={`${overlayClassName} z-[60] overflow-hidden`} style={{ backgroundColor: 'var(--loader-first-name)', color: 'var(--loader-text)' }}>
      <div className="flex space-x-2 md:space-x-4 text-[18.75vw] md:text-[22.5vh] font-serif leading-none pb-8">
        {FIRST_NAME_LETTERS.map((letter, index) => (
          <span
            key={index}
            className="letter-bounce-in inline-block"
            style={{ '--tilt': index % 2 === 0 ? '-2deg' : '2deg', animationDelay: scaledSeconds(index * 0.12) }}
          >
            <span className={`inline-block ${index === DIPPING_LETTER_INDEX ? 'letter-dip' : ''}`}>{letter}</span>
          </span>
        ))}
      </div>

      <div className="star-shoot-x absolute w-full flex justify-center z-50 pointer-events-none" style={{ animationDelay: scaledSeconds(0.4) }}>
        <div className="star-shoot-y" style={{ animationDelay: scaledSeconds(0.4) }}>
          <StarIcon className="w-12 h-12 md:w-20 md:h-20 star-unfill" />
        </div>
      </div>
    </div>
  );
}

/** Screen 3 (and the fade-out): the full name with a star that tumbles in. */
function FullNameScreen({ isFadingOut }) {
  return (
    <div
      className={`loader-fade fixed inset-0 z-50 flex items-center justify-center ${isFadingOut ? 'loader-fade-out' : ''}`}
      style={{ backgroundColor: 'var(--loader-full-name)', color: 'var(--loader-text)' }}
    >
      <div className="text-4xl md:text-6xl tracking-tight font-serif flex items-center gap-3 md:gap-4">
        <div className="relative flex items-baseline">
          {FIRST_NAME_LETTERS.map((letter, index) => {
            const distanceFromStartEm = (FIRST_NAME_LETTERS.length - index) * 0.36 + 0.8;
            const delay = FIRST_NAME_START_DELAY + (FIRST_NAME_LETTERS.length - 1 - index) * FIRST_NAME_LETTER_STAGGER;

            return (
              <span
                key={index}
                className="first-name-letter"
                style={{ '--from-x': `${distanceFromStartEm}em`, animationDelay: scaledSeconds(delay) }}
              >
                {letter}
              </span>
            );
          })}
        </div>

        <div className="relative flex items-baseline">
          {LAST_NAME_LETTERS.map((letter, index) => (
            <span
              key={index}
              className="last-name-letter"
              style={{ animationDelay: scaledSeconds((index + FIRST_NAME_LETTERS.length) * LAST_NAME_LETTER_STAGGER) }}
            >
              {letter}
            </span>
          ))}
          <span className="relative">
            <StarIcon
              className="absolute bottom-2 md:bottom-4 left-1 w-6 h-6 md:w-8 md:h-8 star-drop"
              style={{ animationDelay: scaledSeconds(STAR_DROP_DELAY) }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

/** The intro animation shown on first visit. Renders nothing once finished. */
export default function Loader({ phase }) {
  switch (phase) {
    case LOADER_PHASE.STAR_ROLL:
      return <StarRollScreen />;
    case LOADER_PHASE.FIRST_NAME:
      return <FirstNameScreen />;
    case LOADER_PHASE.FULL_NAME:
    case LOADER_PHASE.FADE_OUT:
      return <FullNameScreen isFadingOut={phase === LOADER_PHASE.FADE_OUT} />;
    default:
      return null;
  }
}
