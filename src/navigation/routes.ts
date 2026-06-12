export const ROUTES = {
  LOGIN: 'login',
  REGISTER: 'register',
  OTP: 'otp',
} as const;

export type ScreenName = typeof ROUTES[keyof typeof ROUTES];
