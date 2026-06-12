export const STRINGS = {
  common: {
    awesome: 'Awesome',
    verifyCode: 'Verify Code',
    success: 'Success',
    cancel: 'Cancel',
  },
  auth: {
    logoText: 'Medora',
    logoSubtitle: 'HEALTHCARE',
    secureLogin: 'Secure Login',
    hipaaCompliant: 'HIPAA Compliant',
    verifiedPlatform: 'Verified Platform',
    secureAndEncrypted: 'Secure & Encrypted',
    rememberMe: 'Remember me for 30 days',
    
    login: {
      welcomeTitle: 'Welcome Back',
      welcomeSubtitle: 'Sign in to your doctor account',
      emailTab: 'Email',
      phoneTab: 'Phone',
      
      // Email fields
      emailLabel: 'Email Address',
      emailPlaceholder: 'doctor@hospital.com',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter your password',
      forgotPassword: 'Forgot Password?',
      forgotPasswordAlertTitle: 'Forgot Password',
      forgotPasswordAlertMsg: 'Password reset instructions sent to your email.',
      
      // Phone fields
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+1 (555) 000-0000',
      otpLabel: 'OTP Code',
      otpPlaceholder: 'Enter 6-digit code',
      sendOtp: 'Send OTP',
      
      // Footer & Alerts
      signIn: 'Sign In',
      noAccount: "Don't have an account? ",
      createAccount: 'Create Account',
      loginSuccessEmail: 'Successfully logged in with Email!',
      loginSuccessPhone: 'Successfully logged in with Phone!',
      otpRequestTitle: 'OTP Request',
      otpRequestMsg: 'OTP has been sent to {phone}!',
      
      // Validation errors
      emailRequired: 'Email address is required',
      emailInvalid: 'Please enter a valid email address',
      passwordRequired: 'Password is required',
      passwordLength: 'Password must be at least 8 characters',
      phoneRequired: 'Phone number is required',
      phoneInvalid: 'Please enter a valid 10-digit phone number',
      otpRequired: 'Please enter the OTP code',
      otpLength: 'OTP code must be exactly 6 digits',
      phoneRequestOtpError: 'Please enter phone number to request OTP',
    },
    
    register: {
      title: 'Create your Doctor Account',
      subtitle: 'Join our healthcare platform and start providing quality care to your patients',
      basicInfo: 'Basic Information',
      professionalDetails: 'Professional Details',
      accountSetup: 'Account Setup',
      
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'Dr. John Smith',
      
      emailLabel: 'Email Address',
      emailPlaceholder: 'john.smith@hospital.com',
      
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+1 (555) 000-0000',
      
      medRegLabel: 'Medical Registration Number',
      medRegPlaceholder: 'MED-123456',
      
      specializationLabel: 'Specialization',
      specializationPlaceholder: 'Select your specialization',
      
      experienceLabel: 'Years of Experience',
      experiencePlaceholder: 'Select experience range',
      
      passwordLabel: 'Password',
      passwordPlaceholder: 'Create a strong password',
      passwordHelper: 'Must be at least 8 characters with letters and numbers',
      
      confirmPasswordLabel: 'Confirm Password',
      confirmPasswordPlaceholder: 'Re-enter your password',
      
      agreeTermsPrefix: 'I agree to the ',
      termsAndConditions: 'Terms & Conditions',
      agreeTermsInfix: ' and ',
      privacyPolicy: 'Privacy Policy',
      
      termsAlertTitle: 'Terms Agreement',
      termsAlertMsg: 'You must agree to the Terms & Conditions and Privacy Policy.',
      
      registerSuccessAlertTitle: 'Success',
      registerSuccessAlertMsg: 'Account creation requested! Please verify your phone number.',
      
      alreadyHaveAccount: 'Already have an account? ',
      loginBtn: 'Login',
      
      // Validations
      fullNameRequired: 'Full Name is required',
      emailRequired: 'Email is required',
      emailInvalid: 'Enter a valid email address',
      phoneRequired: 'Phone number is required',
      phoneInvalid: 'Enter a valid 10-digit phone number',
      medRegRequired: 'Medical registration number is required',
      specializationRequired: 'Please select your specialization',
      experienceRequired: 'Please select experience range',
      passwordRequired: 'Password is required',
      passwordLength: 'Password must be at least 8 characters',
      passwordFormat: 'Password must contain both letters and numbers',
      confirmPasswordRequired: 'Confirm password is required',
      passwordsDoNotMatch: 'Passwords do not match',
    },
    
    otp: {
      title: 'Verify OTP',
      subtitle: 'Enter the 6-digit code sent to',
      defaultPhone: '+91 *****1234',
      resendPrefix: "Didn't receive code? ",
      resendLink: 'Resend OTP',
      resendIn: 'Resend code in ',
      verifyBtn: 'Verify',
      securityText: 'Your information is secure and encrypted',
      
      otpSentTitle: 'OTP Sent',
      otpSentMsg: 'A new 6-digit verification code has been sent!',
      validationErrorTitle: 'Validation Error',
      validationErrorMsg: 'Please enter all 6 digits of the OTP code.',
      verifySuccessTitle: 'Medora Secure',
      verifySuccessMsg: 'OTP Verified successfully! Welcome to your clinic portal.',
      dashboardBtn: 'Dashboard',
    }
  }
};
