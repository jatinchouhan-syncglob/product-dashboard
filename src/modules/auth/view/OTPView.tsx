import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CustomIcon, Button } from '@app/components';
import { STRINGS } from '@app/constants';
import { ROUTES } from '@app/navigation';
import { colors } from '@app/theme';

import { sharedStyles, otpStyles } from '../styles';
import { OTPViewProps } from '../types';


export const OTPView: React.FC<OTPViewProps> = ({ navigation }) => {
  const phone = navigation.params?.phone || STRINGS.auth.otp.defaultPhone;
  
  const [otp, setOtp] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(15);
  const [canResend, setCanResend] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<TextInput>(null);

  // Focus the input on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Countdown timer effect
  useEffect(() => {
    if (secondsLeft <= 0) {
      setCanResend(true);
      return;
    }
    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  // Action: Resend OTP trigger
  const handleResend = () => {
    if (!canResend) return;
    setOtp('');
    setSecondsLeft(15);
    setCanResend(false);
    Alert.alert(
      STRINGS.auth.otp.otpSentTitle,
      STRINGS.auth.otp.otpSentMsg
    );
    setTimeout(() => {
      inputRef.current?.focus();
    }, 500);
  };

  // Action: OTP Code Verification submission
  const handleVerify = () => {
    if (otp.length < 6) {
      Alert.alert(
        STRINGS.auth.otp.validationErrorTitle,
        STRINGS.auth.otp.validationErrorMsg
      );
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        STRINGS.auth.otp.verifySuccessTitle,
        STRINGS.auth.otp.verifySuccessMsg,
        [
          {
            text: STRINGS.auth.otp.dashboardBtn,
            onPress: () => navigation.navigateTo(ROUTES.LOGIN),
          },
        ]
      );
    }, 1500);
  };

  // Utility: format seconds into MM:SS format
  const formatTimer = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    const pad = (num: number) => (num < 10 ? `0${num}` : num);
    return `${pad(minutes)}:${pad(remainingSecs)}`;
  };

  // Focus target textinput manually
  const handleContainerPress = () => {
    inputRef.current?.focus();
  };

  return (
    <SafeAreaView style={sharedStyles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={sharedStyles.keyboardView}
      >
        {/* Header Navigation Bar */}
        <View style={otpStyles.headerBar}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={otpStyles.backBtn} activeOpacity={0.7}>
            <CustomIcon name="arrow-left" size={20} color={colors.darkSlate} />
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={sharedStyles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Shield Emblem */}
          <View style={otpStyles.badgeOuter}>
            <View style={otpStyles.badgeInner}>
              <CustomIcon name="shield" size={32} color={colors.secondary} />
            </View>
          </View>

          {/* Text Titles */}
          <View style={otpStyles.titleContainer}>
            <Text style={otpStyles.title}>{STRINGS.auth.otp.title}</Text>
            <Text style={otpStyles.subtitle}>{STRINGS.auth.otp.subtitle}</Text>
            <Text style={otpStyles.phoneText}>{phone}</Text>
          </View>

          {/* 6-Digit input boxes row */}
          <TouchableOpacity
            style={otpStyles.otpGridContainer}
            activeOpacity={1}
            onPress={handleContainerPress}
          >
            {/* The single invisible TextInput that receives keyboard input */}
            <TextInput
              ref={inputRef}
              style={otpStyles.hiddenTextInput}
              value={otp}
              onChangeText={(text) => {
                const numericText = text.replace(/[^0-9]/g, '');
                setOtp(numericText);
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              keyboardType="number-pad"
              maxLength={6}
              caretHidden={true}
              autoComplete="sms-otp"
              textContentType="oneTimeCode"
            />

            {/* 6 Visual styled containers */}
            {Array.from({ length: 6 }).map((_, idx) => {
              const char = otp[idx] || '';
              const isCellFilled = char !== '';
              
              // Determine if this cell is currently the targeted/active one
              const isCellFocused = isFocused && (
                idx === otp.length || 
                (otp.length === 6 && idx === 5)
              );

              return (
                <View
                  key={idx}
                  style={[
                    otpStyles.otpInput,
                    isCellFocused && otpStyles.otpInputActive,
                    isCellFilled && otpStyles.otpInputFilled,
                  ]}
                >
                  <Text style={otpStyles.otpText}>{char}</Text>
                </View>
              );
            })}
          </TouchableOpacity>

          {/* Resend timer countdown */}
          <View style={otpStyles.timerContainer}>
            {canResend ? (
              <View style={otpStyles.resendRow}>
                <Text style={otpStyles.resendText}>{STRINGS.auth.otp.resendPrefix}</Text>
                <TouchableOpacity onPress={handleResend} activeOpacity={0.7}>
                  <Text style={otpStyles.resendLink}>{STRINGS.auth.otp.resendLink}</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <Text style={otpStyles.timerText}>
                {STRINGS.auth.otp.resendIn}<Text style={otpStyles.timerVal}>{formatTimer(secondsLeft)}</Text>
              </Text>
            )}
          </View>

          {/* Action Button */}
          <Button
            title={STRINGS.auth.otp.verifyBtn}
            onPress={handleVerify}
            loading={loading}
            useGradient={true}
            style={otpStyles.verifyBtn}
          />

          {/* Information Security Bottom Box */}
          <View style={otpStyles.securityBanner}>
            <CustomIcon name="green-check-circle" size={16} color={colors.secondary} style={otpStyles.bannerIcon} />
            <Text style={otpStyles.bannerText}>{STRINGS.auth.otp.securityText}</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
