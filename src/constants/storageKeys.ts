/**
 * MMKV / AsyncStorage storage keys
 * Centralized to prevent key collisions
 */

export const STORAGE_KEYS = {
  // Auth
  ACCESS_TOKEN: '@Godrop/access_token',
  REFRESH_TOKEN: '@Godrop/refresh_token',
  DRIVER_ID: '@Godrop/driver_id',
  PHONE: '@Godrop/phone',

  // Redux Persist
  REDUX_ROOT: '@Godrop/redux_root',

  // Preferences
  THEME: '@Godrop/theme',
  LANGUAGE: '@Godrop/language',
  NOTIFICATIONS_ENABLED: '@Godrop/notifications_enabled',
  SOUND_ENABLED: '@Godrop/sound_enabled',
  RIDE_REQUESTS_NOTIF: '@Godrop/ride_requests_notif',
  EARNINGS_UPDATES_NOTIF: '@Godrop/earnings_updates_notif',

  // Location
  LAST_KNOWN_LOCATION: '@Godrop/last_known_location',

  // Ride
  ACTIVE_RIDE: '@Godrop/active_ride',
  ACTIVE_RIDE_ID_TEMP: '@Godrop/active_ride_id_temp',
  INCOMING_RIDE_DATA_TEMP: '@Godrop/incoming_ride_data_temp',
  TRAFFIC_TIME: '@Godrop/traffic_time',
  STOP_TIME: '@Godrop/stop_time',
  TRACKED_RIDE_DISTANCE: '@Godrop/tracked_ride_distance',
  TRACKED_RIDE_DURATION: '@Godrop/tracked_ride_duration',
  TRACKED_RIDE_START_TIME: '@Godrop/tracked_ride_start_time',
  ARRIVED_AT_PREFIX: '@Godrop/arrived_at_',

  // App State
  DL_UPLOADED: '@Godrop/dl_uploaded',
  PROFILE_SETUP_COMPLETE: '@Godrop/profile_setup_complete',
  VEHICLE_UPLOADED: '@Godrop/vehicle_uploaded',
  RC_UPLOADED: '@Godrop/rc_uploaded',
  AADHAAR_PAN_UPLOADED: '@Godrop/aadhaar_pan_uploaded',
  SELECTED_ID_TYPE: '@Godrop/selected_id_type',
  ONBOARDING_COMPLETE: '@Godrop/onboarding_complete',
  IS_ONLINE: '@Godrop/is_online',
  PROMOTION_LAST_SEEN: '@Godrop/promotion_last_seen',

  // Payout Method Details
  BANK_NAME: '@Godrop/bank_name',
  ACCOUNT_NUMBER: '@Godrop/account_number',
  IFSC_CODE: '@Godrop/ifsc_code',
  HOLDER_NAME: '@Godrop/holder_name',
  UPI_ID: '@Godrop/upi_id',
  ACTIVE_PAYOUT_METHOD: '@Godrop/active_payout_method',

  // Package & Eligibility Storage
  HAS_ACTIVE_PACKAGE: '@Godrop/has_active_package',
  FIRST_TWO_RIDES_COUNT: '@Godrop/first_two_rides_count',
  FREE_RIDE_LIMIT: '@Godrop/free_ride_limit',
  DASHBOARD_STATS: '@Godrop/dashboard_stats',
} as const;

export type StorageKey = typeof STORAGE_KEYS[keyof typeof STORAGE_KEYS];
