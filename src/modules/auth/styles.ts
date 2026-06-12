import { StyleSheet, Platform } from 'react-native';

import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export const sharedStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 60,
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  logoTextContainer: {
    marginLeft: 6,
    justifyContent: 'center',
  },
  logoText: {
    fontSize: typography.sizes.md, // around 16px, matching elegant Figma size
    fontWeight: typography.weights.bold as any,
    color: colors.darkSlate,
    fontFamily: typography.fonts.bold,
    letterSpacing: 0.3,
    lineHeight: 18,
  },
  logoSubtitle: {
    fontSize: typography.sizes.xs - 2, // around 8px
    fontWeight: typography.weights.heavy as any,
    color: colors.secondary,
    fontFamily: typography.fonts.regular,
    letterSpacing: 1.5,
    marginTop: 0,
    lineHeight: 10,
  },
  footerLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  footerLinkText: {
    fontSize: typography.sizes.sm,
    color: colors.mutedSlate,
    fontFamily: typography.fonts.regular,
  },
  footerLinkBtn: {
    fontSize: typography.sizes.sm,
    color: colors.secondary,
    fontWeight: typography.weights.semibold as any,
    fontFamily: typography.fonts.medium,
  },
  trustBadgesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
    marginBottom: 16,
  },
  trustBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trustIcon: {
    marginRight: 4,
  },
  trustText: {
    fontSize: typography.sizes.xs - 2,
    color: colors.mutedSlate,
    fontWeight: typography.weights.medium as any,
    fontFamily: typography.fonts.regular,
  },
});

export const loginStyles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  welcomeTitle: {
    fontSize: typography.sizes.xxl + 2,
    fontWeight: typography.weights.bold as any,
    color: colors.darkSlate,
    fontFamily: typography.fonts.bold,
    marginBottom: 6,
  },
  welcomeSubtitle: {
    fontSize: typography.sizes.sm,
    color: colors.mutedSlate,
    fontFamily: typography.fonts.regular,
  },
  card: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: colors.darkSlate,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 4,
    borderWidth: 1,
    borderColor: colors.borderGrey,
  },
  tabContainer: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: colors.lightBg,
    borderRadius: 8,
    padding: 3,
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  tabButtonActive: {
    backgroundColor: colors.white,
    shadowColor: colors.darkSlate,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  tabButtonText: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium as any,
    color: colors.mutedSlate,
    fontFamily: typography.fonts.medium,
  },
  tabButtonTextActive: {
    color: colors.darkSlate,
    fontWeight: typography.weights.bold as any,
  },
  formContent: {
    width: '100%',
  },
  forgotPassLink: {
    fontSize: typography.sizes.xs + 1,
    color: colors.secondary,
    fontWeight: typography.weights.medium as any,
    fontFamily: typography.fonts.medium,
  },
  sendOTPLink: {
    fontSize: typography.sizes.xs + 1,
    color: colors.secondary,
    fontWeight: typography.weights.semibold as any,
    fontFamily: typography.fonts.medium,
  },
  checkboxLabel: {
    fontSize: typography.sizes.sm - 1,
    color: colors.mutedSlate,
    fontFamily: typography.fonts.regular,
    lineHeight: 20,
  },
  securityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
  },
  securityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  secIcon: {
    marginRight: 4,
  },
  securityText: {
    fontSize: typography.sizes.xs,
    color: colors.mutedSlate,
    fontFamily: typography.fonts.regular,
  },
  securityDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.borderGrey,
    marginHorizontal: 12,
  },
});

export const registerStyles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: typography.sizes.xl + 1,
    fontWeight: typography.weights.bold as any,
    color: colors.darkSlate,
    fontFamily: typography.fonts.bold,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: typography.sizes.sm - 1,
    color: colors.mutedSlate,
    fontFamily: typography.fonts.regular,
    textAlign: 'center',
    lineHeight: 18,
  },
  card: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: colors.darkSlate,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 4,
    borderWidth: 1,
    borderColor: colors.borderGrey,
    marginBottom: 24,
  },
  groupCard: {
    width: '100%',
    marginBottom: 20,
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  headerIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  groupTitleText: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.semibold as any,
    color: colors.darkSlate,
    fontFamily: typography.fonts.medium,
  },
  groupBody: {
    paddingVertical: 8,
  },
  termsRow: {
    marginHorizontal: 0,
    marginBottom: 20,
  },
  termsLabel: {
    fontSize: typography.sizes.sm - 1,
    color: colors.mutedSlate,
    fontFamily: typography.fonts.regular,
    lineHeight: 18,
  },
  termsLink: {
    color: colors.secondary,
    fontWeight: typography.weights.semibold as any,
    textDecorationLine: 'underline',
  },
  registerBtn: {
    width: '100%',
    marginBottom: 0,
  },
});

export const otpStyles = StyleSheet.create({
  headerBar: {
    height: 56,
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: '100%',
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.lightBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeOuter: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ECFDF5', // Light emerald green tint
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 24,
  },
  badgeInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#D1FAE5', // slightly darker tint
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#A7F3D0',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: typography.sizes.xxl + 2,
    fontWeight: typography.weights.bold as any,
    color: colors.darkSlate,
    fontFamily: typography.fonts.bold,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: typography.sizes.sm,
    color: colors.mutedSlate,
    fontFamily: typography.fonts.regular,
  },
  phoneText: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.bold as any,
    color: colors.darkSlate,
    fontFamily: typography.fonts.semibold,
    marginTop: 2,
  },
  otpGridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 32,
    position: 'relative',
    height: 56,
  },
  hiddenTextInput: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0,
    zIndex: 99,
  },
  otpInput: {
    width: 44,
    height: 56,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.borderGrey,
    backgroundColor: colors.lightBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpText: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold as any,
    color: colors.darkSlate,
    fontFamily: typography.fonts.bold,
  },
  otpInputActive: {
    borderColor: colors.secondary,
    backgroundColor: colors.white,
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  otpInputFilled: {
    borderColor: colors.secondary,
    color: colors.secondary,
    backgroundColor: colors.white,
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  timerText: {
    fontSize: typography.sizes.sm,
    color: colors.mutedSlate,
    fontFamily: typography.fonts.regular,
  },
  timerVal: {
    color: colors.secondary,
    fontWeight: typography.weights.semibold as any,
    fontFamily: typography.fonts.medium,
  },
  resendRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resendText: {
    fontSize: typography.sizes.sm,
    color: colors.mutedSlate,
    fontFamily: typography.fonts.regular,
  },
  resendLink: {
    fontSize: typography.sizes.sm,
    color: colors.secondary,
    fontWeight: typography.weights.semibold as any,
    fontFamily: typography.fonts.medium,
  },
  verifyBtn: {
    width: '100%',
    marginBottom: 40,
  },
  securityBanner: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1FAE5', // Emerald 100 border
    backgroundColor: '#ECFDF5', // Emerald 50 background
    paddingHorizontal: 12,
    marginTop: 'auto',
  },
  bannerIcon: {
    marginRight: 8,
  },
  bannerText: {
    fontSize: typography.sizes.xs + 1,
    color: '#0F766E', // Teal 700 text color
    fontWeight: typography.weights.medium as any,
    fontFamily: typography.fonts.medium,
  },
});
