import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CustomIcon, Button, FormProvider, RHFTextField, RHFCheckbox } from '@app/components';
import { STRINGS } from '@app/constants';
import { ROUTES } from '@app/navigation';
import { colors } from '@app/theme';

import { sharedStyles, loginStyles } from '../styles';
import { LoginTab, LoginViewProps } from '../types';
import { emailLoginSchema, phoneLoginSchema } from '../validators';


export const LoginView: React.FC<LoginViewProps> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState<LoginTab>('email');
  const [loading, setLoading] = useState(false);

  // Email login form state
  const emailForm = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberEmail: false,
    },
    resolver: yupResolver(emailLoginSchema),
    mode: 'onTouched',
  });

  // Phone login form state
  const phoneForm = useForm({
    defaultValues: {
      phoneNumber: '',
      otpCode: '',
      rememberPhone: false,
    },
    resolver: yupResolver(phoneLoginSchema),
    mode: 'onTouched',
  });

  // Action: Email submission
  const handleEmailLogin = emailForm.handleSubmit((data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        STRINGS.auth.logoText,
        STRINGS.auth.login.loginSuccessEmail,
        [{ text: STRINGS.common.awesome }]
      );
    }, 1500);
  });

  // Action: Phone submission
  const handlePhoneLogin = phoneForm.handleSubmit((data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        STRINGS.auth.logoText,
        STRINGS.auth.login.loginSuccessPhone,
        [{ text: STRINGS.common.awesome }]
      );
    }, 1500);
  });

  // Action: Request OTP dispatch
  const handleSendOTP = () => {
    const phoneNumber = phoneForm.getValues('phoneNumber');

    if (!phoneNumber) {
      phoneForm.setError('phoneNumber', {
        type: 'manual',
        message: STRINGS.auth.login.phoneRequestOtpError,
      });
      return;
    }

    if (phoneNumber.replace(/[^0-9]/g, '').length < 10) {
      phoneForm.setError('phoneNumber', {
        type: 'manual',
        message: STRINGS.auth.login.phoneInvalid,
      });
      return;
    }

    phoneForm.clearErrors('phoneNumber');

    Alert.alert(
      STRINGS.auth.login.otpRequestTitle,
      STRINGS.auth.login.otpRequestMsg.replace('{phone}', phoneNumber),
      [
        {
          text: STRINGS.common.verifyCode,
          onPress: () => {
            navigation.navigateTo(ROUTES.OTP, { phone: phoneNumber });
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={sharedStyles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={sharedStyles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={sharedStyles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo Section */}
          <View style={sharedStyles.logoContainer}>
            <CustomIcon name="logo-heart-shield" size={20} />
            <View style={sharedStyles.logoTextContainer}>
              <Text style={sharedStyles.logoText}>{STRINGS.auth.logoText}</Text>
              <Text style={sharedStyles.logoSubtitle}>{STRINGS.auth.logoSubtitle}</Text>
            </View>
          </View>

          {/* Header Titles */}
          <View style={loginStyles.headerContainer}>
            <Text style={loginStyles.welcomeTitle}>{STRINGS.auth.login.welcomeTitle}</Text>
            <Text style={loginStyles.welcomeSubtitle}>{STRINGS.auth.login.welcomeSubtitle}</Text>
          </View>

          {/* Form Card Container */}
          <View style={loginStyles.card}>
            {/* Custom Tab Selector */}
            <View style={loginStyles.tabContainer}>
              <TouchableOpacity
                style={[
                  loginStyles.tabButton,
                  activeTab === 'email' && loginStyles.tabButtonActive,
                ]}
                onPress={() => setActiveTab('email')}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    loginStyles.tabButtonText,
                    activeTab === 'email' && loginStyles.tabButtonTextActive,
                  ]}
                >
                  {STRINGS.auth.login.emailTab}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  loginStyles.tabButton,
                  activeTab === 'phone' && loginStyles.tabButtonActive,
                ]}
                onPress={() => setActiveTab('phone')}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    loginStyles.tabButtonText,
                    activeTab === 'phone' && loginStyles.tabButtonTextActive,
                  ]}
                >
                  {STRINGS.auth.login.phoneTab}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Email form layout */}
            {activeTab === 'email' && (
              <FormProvider methods={emailForm}>
                <View style={loginStyles.formContent}>
                  <RHFTextField
                    name="email"
                    label={STRINGS.auth.login.emailLabel}
                    leftIcon="mail"
                    placeholder={STRINGS.auth.login.emailPlaceholder}
                    keyboardType="email-address"
                  />

                  <RHFTextField
                    name="password"
                    label={STRINGS.auth.login.passwordLabel}
                    leftIcon="lock"
                    placeholder={STRINGS.auth.login.passwordPlaceholder}
                    isPassword={true}
                    rightElement={
                      <TouchableOpacity
                        onPress={() =>
                          Alert.alert(
                            STRINGS.auth.login.forgotPasswordAlertTitle,
                            STRINGS.auth.login.forgotPasswordAlertMsg
                          )
                        }
                        activeOpacity={0.7}
                      >
                        <Text style={loginStyles.forgotPassLink}>
                          {STRINGS.auth.login.forgotPassword}
                        </Text>
                      </TouchableOpacity>
                    }
                  />

                  <RHFCheckbox
                    name="rememberEmail"
                  >
                    <Text style={loginStyles.checkboxLabel}>{STRINGS.auth.rememberMe}</Text>
                  </RHFCheckbox>

                  <Button
                    title={STRINGS.auth.login.signIn}
                    onPress={handleEmailLogin}
                    loading={loading}
                    useGradient={true}
                  />
                </View>
              </FormProvider>
            )}

            {/* Phone form layout */}
            {activeTab === 'phone' && (
              <FormProvider methods={phoneForm}>
                <View style={loginStyles.formContent}>
                   <RHFTextField
                    name="phoneNumber"
                    label={STRINGS.auth.login.phoneLabel}
                    leftIcon="phone"
                    placeholder={STRINGS.auth.login.phonePlaceholder}
                    keyboardType="phone-pad"
                  />


                  <RHFTextField
                    name="otpCode"
                    label={STRINGS.auth.login.otpLabel}
                    leftIcon="lock"
                    placeholder={STRINGS.auth.login.otpPlaceholder}
                    keyboardType="number-pad"
                    maxLength={6}
                  />
                  <TouchableOpacity
                    onPress={handleSendOTP}
                    activeOpacity={0.7}
                    style={{ alignSelf: 'flex-start', marginTop: -8, marginBottom: 16, paddingLeft: 2 }}
                  >
                    <Text style={loginStyles.sendOTPLink}>{STRINGS.auth.login.sendOtp}</Text>
                  </TouchableOpacity>

                  <RHFCheckbox
                    name="rememberPhone"
                  >
                    <Text style={loginStyles.checkboxLabel}>{STRINGS.auth.rememberMe}</Text>
                  </RHFCheckbox>

                   <Button
                    title={STRINGS.auth.login.signIn}
                    onPress={handlePhoneLogin}
                    loading={loading}
                    useGradient={true}
                  />
                </View>
              </FormProvider>
            )}

            {/* Divider and registration link INSIDE the card */}
            <View style={{ height: 1, backgroundColor: colors.borderGrey, marginVertical: 18, width: '100%' }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: 4 }}>
              <Text style={sharedStyles.footerLinkText}>{STRINGS.auth.login.noAccount}</Text>
              <TouchableOpacity onPress={() => navigation.navigateTo(ROUTES.REGISTER)}>
                <Text style={[sharedStyles.footerLinkBtn, { marginLeft: 4 }]}>{STRINGS.auth.login.createAccount}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* HIPAA & Encryption Banner */}
          <View style={loginStyles.securityRow}>
            <View style={loginStyles.securityBadge}>
              <CustomIcon name="green-check-circle" size={14} color={colors.secondary} style={loginStyles.secIcon} />
              <Text style={loginStyles.securityText}>{STRINGS.auth.secureLogin}</Text>
            </View>
            <View style={loginStyles.securityDot} />
            <View style={loginStyles.securityBadge}>
              <CustomIcon name="green-check-circle" size={14} color={colors.secondary} style={loginStyles.secIcon} />
              <Text style={loginStyles.securityText}>{STRINGS.auth.hipaaCompliant}</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
