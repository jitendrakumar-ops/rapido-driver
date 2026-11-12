/**
 * rideDedup.ts
 *
 * Module-level deduplication registry for ride requests.
 *
 * Problem: the backend re-sends the same ride_request FCM / socket event every
 * few seconds.  When a driver rejects or times-out a request the Redux slice is
 * cleared, but if a stale re-send arrives afterwards the overlay would reappear
 * and the countdown timer would restart.
 *
 * Solution: maintain a module-level Set of rideIds that have already been
 * "handled" (shown once and then dismissed via accept / reject / timeout).
 * Every incoming ride handler checks this set BEFORE dispatching to Redux.
 * The set is populated by GlobalIncomingRequest when a request is dismissed.
 *
 * The set lives for the JS bundle lifetime (survives navigation, not app-restart).
 * For app restarts the MMKV-based restore path has its own guards.
 */

const dismissedRideIds = new Set<string>();

/**
 * Returns true when this rideId was already offered to the driver and
 * then dismissed (accepted / rejected / timed-out).  Callers should
 * silently ignore these re-sends without creating a new overlay.
 */
export const isRideDismissed = (rideId: string): boolean =>
  dismissedRideIds.has(rideId);

/**
 * Call this as soon as the driver accepts, rejects, or times-out a request.
 * All subsequent FCM / socket re-sends for this rideId will be silently dropped.
 */
export const markRideDismissed = (rideId: string): void => {
  dismissedRideIds.add(rideId);
};
