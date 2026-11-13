import { useEffect, useState } from 'react';

import { LOADER_PHASE, LOADER_SCHEDULE_MS, scaledMilliseconds } from '../lib/animation';

/**
 * Drives the intro loader. Returns [phase, skip]:
 *  - phase: one of LOADER_PHASE (DONE once the intro has finished)
 *  - skip: jump straight to DONE (used when navigating away early)
 * If `enabled` is false the loader never plays.
 */
export function useLoaderSequence(enabled) {
  const [phase, setPhase] = useState(enabled ? LOADER_PHASE.STAR_ROLL : LOADER_PHASE.DONE);

  useEffect(() => {
    if (!enabled) return undefined;

    const timers = LOADER_SCHEDULE_MS.map(({ at, phase: nextPhase }) =>
      setTimeout(() => setPhase(nextPhase), scaledMilliseconds(at)),
    );
    return () => timers.forEach(clearTimeout);
  }, [enabled]);

  return [phase, () => setPhase(LOADER_PHASE.DONE)];
}
