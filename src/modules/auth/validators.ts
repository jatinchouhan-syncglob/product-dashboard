import * as Yup from 'yup';
import { STRINGS } from '../../constants/strings';

export const emailLoginSchema = Yup.object().shape({
  email: Yup.string()
    .required(STRINGS.auth.login.emailRequired)
    .email(STRINGS.auth.login.emailInvalid),
  password: Yup.string()
    .required(STRINGS.auth.login.passwordRequired)
    .min(8, STRINGS.auth.login.passwordLength),
  rememberEmail: Yup.boolean().default(false),
});

export const phoneLoginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required(STRINGS.auth.login.phoneRequired)
    .matches(/^\d{10}$/, STRINGS.auth.login.phoneInvalid),
  otpCode: Yup.string()
    .required(STRINGS.auth.login.otpRequired)
    .length(6, STRINGS.auth.login.otpLength),
  rememberPhone: Yup.boolean().default(false),
});

export const registerSchema = Yup.object().shape({
  fullName: Yup.string()
    .required(STRINGS.auth.register.fullNameRequired),
  email: Yup.string()
    .required(STRINGS.auth.register.emailRequired)
    .email(STRINGS.auth.register.emailInvalid),
  phone: Yup.string()
    .required(STRINGS.auth.register.phoneRequired)
    .matches(/^\d{10}$/, STRINGS.auth.register.phoneInvalid),
  medRegNumber: Yup.string()
    .required(STRINGS.auth.register.medRegRequired),
  specialization: Yup.string()
    .required(STRINGS.auth.register.specializationRequired),
  experience: Yup.string()
    .required(STRINGS.auth.register.experienceRequired),
  password: Yup.string()
    .required(STRINGS.auth.register.passwordRequired)
    .min(8, STRINGS.auth.register.passwordLength)
    .matches(/(?=.*[0-9])(?=.*[a-zA-Z])/, STRINGS.auth.register.passwordFormat),
  confirmPassword: Yup.string()
    .required(STRINGS.auth.register.confirmPasswordRequired)
    .oneOf([Yup.ref('password')], STRINGS.auth.register.passwordsDoNotMatch),
  agreeTerms: Yup.boolean()
    .oneOf([true], STRINGS.auth.register.termsAlertMsg)
    .required(STRINGS.auth.register.termsAlertMsg),
});
