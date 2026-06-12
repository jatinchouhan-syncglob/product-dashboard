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

import { CustomIcon, Button, FormProvider, RHFTextField, RHFSelect, RHFCheckbox } from '@app/components';
import { STRINGS } from '@app/constants';
import { ROUTES } from '@app/navigation';
import { colors } from '@app/theme';

import { specializationOptions, experienceOptions } from '../constants';
import { sharedStyles, registerStyles } from '../styles';
import { RegisterViewProps } from '../types';
import { registerSchema } from '../validators';


export const RegisterView: React.FC<RegisterViewProps> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      medRegNumber: '',
      specialization: '',
      experience: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    },
    resolver: yupResolver(registerSchema),
    mode: 'onTouched',
  });



  const handleRegisterSubmit = form.handleSubmit((data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        STRINGS.auth.register.registerSuccessAlertTitle,
        STRINGS.auth.register.registerSuccessAlertMsg,
        [
          {
            text: STRINGS.common.verifyCode,
            onPress: () => {
              navigation.navigateTo(ROUTES.OTP, { phone: data.phone });
            },
          },
        ]
      );
    }, 1500);
  });

  const handleLinkPress = (title: string) => {
    Alert.alert(title, `Medora clinic policies - ${title} document.`);
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
          <View style={{ width: '100%', alignItems: 'center' }}>
            <FormProvider methods={form}>
            {/* Header Branding */}
            <View style={sharedStyles.logoContainer}>
              <CustomIcon name="logo-heart-shield" size={20} />
              <View style={sharedStyles.logoTextContainer}>
                <Text style={sharedStyles.logoText}>{STRINGS.auth.logoText}</Text>
                <Text style={sharedStyles.logoSubtitle}>{STRINGS.auth.logoSubtitle}</Text>
              </View>
            </View>

            {/* Page Title */}
            <View style={registerStyles.titleContainer}>
              <Text style={registerStyles.titleText}>{STRINGS.auth.register.title}</Text>
              <Text style={registerStyles.subtitleText}>
                {STRINGS.auth.register.subtitle}
              </Text>
            </View>

            {/* Unified Form Card Container */}
            <View style={registerStyles.card}>

            {/* Section Group 1: Basic Information */}
            <View style={registerStyles.groupCard}>
              <View style={registerStyles.groupHeader}>
                <View style={[registerStyles.headerIconContainer, { backgroundColor: colors.infoBorder }]}>
                  <CustomIcon name="user" size={14} color={colors.infoIcon} />
                </View>
                <Text style={registerStyles.groupTitleText}>{STRINGS.auth.register.basicInfo}</Text>
              </View>

              <View style={registerStyles.groupBody}>
                <RHFTextField
                  name="fullName"
                  label={STRINGS.auth.register.fullNameLabel}
                  leftIcon="user"
                  placeholder={STRINGS.auth.register.fullNamePlaceholder}
                />

                <RHFTextField
                  name="email"
                  label={STRINGS.auth.register.emailLabel}
                  leftIcon="mail"
                  placeholder={STRINGS.auth.register.emailPlaceholder}
                  keyboardType="email-address"
                />

                <RHFTextField
                  name="phone"
                  label={STRINGS.auth.register.phoneLabel}
                  leftIcon="phone"
                  placeholder={STRINGS.auth.register.phonePlaceholder}
                  keyboardType="phone-pad"
                />
              </View>
            </View>

            {/* Section Group 2: Professional Details */}
            <View style={registerStyles.groupCard}>
              <View style={registerStyles.groupHeader}>
                <View style={[registerStyles.headerIconContainer, { backgroundColor: colors.profBorder }]}>
                  <CustomIcon name="document" size={14} color={colors.profIcon} />
                </View>
                <Text style={registerStyles.groupTitleText}>{STRINGS.auth.register.professionalDetails}</Text>
              </View>

              <View style={registerStyles.groupBody}>
                <RHFTextField
                  name="medRegNumber"
                  label={STRINGS.auth.register.medRegLabel}
                  leftIcon="document"
                  placeholder={STRINGS.auth.register.medRegPlaceholder}
                />

                <RHFSelect
                  name="specialization"
                  label={STRINGS.auth.register.specializationLabel}
                  placeholder={STRINGS.auth.register.specializationPlaceholder}
                  leftIcon="briefcase"
                  options={specializationOptions}
                />

                <RHFSelect
                  name="experience"
                  label={STRINGS.auth.register.experienceLabel}
                  placeholder={STRINGS.auth.register.experiencePlaceholder}
                  leftIcon="calendar"
                  options={experienceOptions}
                />
              </View>
            </View>

            {/* Section Group 3: Account Setup */}
            <View style={registerStyles.groupCard}>
              <View style={registerStyles.groupHeader}>
                <View style={[registerStyles.headerIconContainer, { backgroundColor: colors.authBorder }]}>
                  <CustomIcon name="lock" size={14} color={colors.authIcon} />
                </View>
                <Text style={registerStyles.groupTitleText}>{STRINGS.auth.register.accountSetup}</Text>
              </View>

              <View style={registerStyles.groupBody}>
                <RHFTextField
                  name="password"
                  label={STRINGS.auth.register.passwordLabel}
                  leftIcon="lock"
                  placeholder={STRINGS.auth.register.passwordPlaceholder}
                  isPassword={true}
                  helperText={STRINGS.auth.register.passwordHelper}
                />

                <RHFTextField
                  name="confirmPassword"
                  label={STRINGS.auth.register.confirmPasswordLabel}
                  leftIcon="lock"
                  placeholder={STRINGS.auth.register.confirmPasswordPlaceholder}
                  isPassword={true}
                />
              </View>
            </View>

            {/* Terms Agreement Checkbox */}
            <RHFCheckbox
              name="agreeTerms"
              containerStyle={registerStyles.termsRow}
            >
              <Text style={registerStyles.termsLabel}>
                {STRINGS.auth.register.agreeTermsPrefix}
                <Text style={registerStyles.termsLink} onPress={() => handleLinkPress(STRINGS.auth.register.termsAndConditions)}>
                  {STRINGS.auth.register.termsAndConditions}
                </Text>
                {STRINGS.auth.register.agreeTermsInfix}
                <Text style={registerStyles.termsLink} onPress={() => handleLinkPress(STRINGS.auth.register.privacyPolicy)}>
                  {STRINGS.auth.register.privacyPolicy}
                </Text>
              </Text>
            </RHFCheckbox>

            {/* Bottom Security Trust Badges */}
            <View style={sharedStyles.trustBadgesRow}>
              <View style={sharedStyles.trustBadge}>
                <CustomIcon name="green-check-circle" size={10} color={colors.secondary} style={sharedStyles.trustIcon} />
                <Text style={sharedStyles.trustText}>{STRINGS.auth.secureAndEncrypted}</Text>
              </View>
              <View style={sharedStyles.trustBadge}>
                <CustomIcon name="green-check-circle" size={10} color={colors.secondary} style={sharedStyles.trustIcon} />
                <Text style={sharedStyles.trustText}>{STRINGS.auth.hipaaCompliant}</Text>
              </View>
              <View style={sharedStyles.trustBadge}>
                <CustomIcon name="green-check-circle" size={10} color={colors.secondary} style={sharedStyles.trustIcon} />
                <Text style={sharedStyles.trustText}>{STRINGS.auth.verifiedPlatform}</Text>
              </View>
            </View>

            {/* Registration Submit Button */}
            <Button
              title={STRINGS.auth.register.title}
              rightIcon="arrow-right"
              onPress={handleRegisterSubmit}
              loading={loading}
              useGradient={true}
              style={registerStyles.registerBtn}
            />
            </View>
          </FormProvider>

          {/* Footer Navigation Link back to Login */}
          <View style={sharedStyles.footerLinkContainer}>
            <Text style={sharedStyles.footerLinkText}>{STRINGS.auth.register.alreadyHaveAccount}</Text>
            <TouchableOpacity onPress={() => navigation.navigateTo(ROUTES.LOGIN)}>
              <Text style={sharedStyles.footerLinkBtn}>{STRINGS.auth.register.loginBtn}</Text>
            </TouchableOpacity>
          </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
