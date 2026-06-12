import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
  ViewStyle,
} from 'react-native';

import { colors, typography } from '@app/theme';

import { CustomIcon, IconType } from './CustomIcon';

interface InputFieldProps extends TextInputProps {
  label: string;
  leftIcon?: IconType;
  rightElement?: React.ReactNode;
  isPassword?: boolean;
  error?: string;
  helperText?: string;
  containerStyle?: ViewStyle;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  leftIcon,
  rightElement,
  isPassword = false,
  error,
  helperText,
  containerStyle,
  style,
  secureTextEntry,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  // Border colors based on state
  const getBorderColor = () => {
    if (error) return colors.error;
    if (isFocused) return colors.secondary;
    return colors.borderGrey;
  };

  const isSecure = isPassword && !passwordVisible;

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Label and optional right-aligned element */}
      <View style={styles.labelRow}>
        <Text style={styles.label}>{label}</Text>
        {rightElement && rightElement}
      </View>

      {/* Input container */}
      <View
        style={[
          styles.inputWrapper,
          {
            borderColor: getBorderColor(),
            backgroundColor: isFocused ? colors.white : colors.lightBg,
            borderWidth: isFocused || error ? 1.5 : 1,
          },
        ]}
      >
        {/* Left Icon */}
        {leftIcon && (
          <CustomIcon
            name={leftIcon}
            size={18}
            color={
              error
                ? colors.error
                : isFocused
                ? colors.secondary
                : colors.mutedSlate
            }
            style={styles.leftIconStyle}
          />
        )}

        {/* Input */}
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={colors.mutedSlate}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoCapitalize="none"
          {...props}
          secureTextEntry={isSecure}
        />

        {/* Right Password Visibility Toggle */}
        {isPassword && (
          <TouchableOpacity
            style={styles.rightIconStyle}
            onPress={() => setPasswordVisible(!passwordVisible)}
            activeOpacity={0.7}
          >
            <CustomIcon
              name={passwordVisible ? 'eye-off' : 'eye'}
              size={18}
              color={
                error
                  ? colors.error
                  : isFocused
                  ? colors.secondary
                  : colors.mutedSlate
              }
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Error or Helper text */}
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : helperText ? (
        <Text style={styles.helperText}>{helperText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  label: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium as any,
    color: colors.darkSlate,
    fontFamily: typography.fonts.medium,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  leftIconStyle: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    color: colors.textMain,
    fontSize: typography.sizes.sm,
    fontFamily: typography.fonts.regular,
    paddingVertical: 0,
  },
  rightIconStyle: {
    padding: 4,
    marginLeft: 6,
  },
  errorText: {
    fontSize: typography.sizes.xs,
    color: colors.error,
    marginTop: 4,
    fontFamily: typography.fonts.regular,
  },
  helperText: {
    fontSize: typography.sizes.xs - 1,
    color: colors.mutedSlate,
    marginTop: 4,
    fontFamily: typography.fonts.regular,
    lineHeight: 14,
  },
});
