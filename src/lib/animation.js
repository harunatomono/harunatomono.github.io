// Shared animation timing. All durations below are in "design" seconds/ms and are
// divided by ANIMATION_SPEED, so changing that one number speeds up or slows down
// the whole intro (CSS keyframe durations use the same value via --animation-speed).

export const ANIMATION_SPEED = 1.25;

/** CSS time value (for animation-delay etc.) scaled by the global speed. */
export const scaledSeconds = (seconds) => `calc(${seconds}s / var(--animation-speed))`;

/** Milliseconds scaled by the global speed (for setTimeout). */
export const scaledMilliseconds = (milliseconds) => Math.round(milliseconds / ANIMATION_SPEED);

// --- Intro loader timeline (ms, unscaled) ---

export const LOADER_PHASE = {
  DONE: 0,
  STAR_ROLL: 1, // a star rolls across a green screen
  FIRST_NAME: 2, // first name bounces in on a pink screen
  FULL_NAME: 3, // full name settles on an orange screen
  FADE_OUT: 4, // loader fades away
};

const PAUSE_AFTER_FULL_NAME_MS = 250;

// When each phase begins, in ms from page load.
export const LOADER_SCHEDULE_MS = [
  { at: 1000, phase: LOADER_PHASE.FIRST_NAME },
  { at: 2550, phase: LOADER_PHASE.FULL_NAME },
  { at: 3950 + PAUSE_AFTER_FULL_NAME_MS, phase: LOADER_PHASE.FADE_OUT },
  { at: 4750 + PAUSE_AFTER_FULL_NAME_MS, phase: LOADER_PHASE.DONE },
];

// --- Home page reveal (seconds, unscaled) ---

// The home page elements fade in one after another once the loader is nearly done.
const HOME_REVEAL_START_S = 4.1 + PAUSE_AFTER_FULL_NAME_MS / 1000;
const HOME_REVEAL_STEP_S = 0.1;

/** Delay (seconds) for the Nth element in the home page reveal sequence (0 = first). */
export const homeRevealDelay = (step) => HOME_REVEAL_START_S + step * HOME_REVEAL_STEP_S;

/**
 * className + style props for an element that fades in during the home reveal.
 * When `animate` is false (e.g. navigating within the site) the element just appears.
 */
export const fadeIn = (animate, step, className = '') => ({
  className: animate ? `${className} fade-in-up`.trim() : className,
  style: animate ? { animationDelay: scaledSeconds(homeRevealDelay(step)) } : undefined,
});
