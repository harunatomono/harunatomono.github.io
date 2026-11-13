import { useCallback, useEffect, useRef, useState } from 'react';

import { LOADER_PHASE, LOADER_SCHEDULE_MS, scaledMilliseconds } from '../lib/animation';

/**
 * Drives the intro loader . Returns [phase, skip]:
 *  - phase: one of LOADER_PHASE (DONE once the intro has finished)
 *  - skip: end the intro immediately (used when navigating away early)
 * If `enabled` is false the loader never plays.
 */
export function useLoaderSequence(enabled) {
  const [phase, setPhase] = useState(enabled ? LOADER_PHASE.STAR_ROLL : LOADER_PHASE.DONE);
  const timers = useRef([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const later = (at, callback) => timers.current.push(setTimeout(callback, scaledMilliseconds(at)));

    LOADER_SCHEDULE_MS.forEach(({ at, phase: nextPhase }) => later(at, () => setPhase(nextPhase)));

    return clearTimers;
  }, [enabled, clearTimers]);

  const skip = useCallback(() => {
    clearTimers();
    setPhase(LOADER_PHASE.DONE);
  }, [clearTimers]);

  return [phase, skip];
}
