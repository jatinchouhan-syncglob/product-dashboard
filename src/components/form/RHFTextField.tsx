import React from 'react';
import { useFormContext, Controller, RegisterOptions } from 'react-hook-form';
import { TextInputProps, ViewStyle } from 'react-native';

import { IconType } from '../CustomIcon';
import { InputField } from '../InputField';

interface RHFTextFieldProps {
  name: string;
  label: string;
  leftIcon?: IconType;
  rightElement?: React.ReactNode;
  isPassword?: boolean;
  helperText?: string;
  containerStyle?: ViewStyle;
  placeholder?: string;
  keyboardType?: TextInputProps['keyboardType'];
  maxLength?: number;
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}

export function RHFTextField({
  name,
  label,
  leftIcon,
  rightElement,
  isPassword,
  helperText,
  containerStyle,
  placeholder,
  keyboardType,
  maxLength,
  rules,
}: RHFTextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <InputField
          label={label}
          leftIcon={leftIcon}
          rightElement={rightElement}
          isPassword={isPassword}
          helperText={helperText}
          containerStyle={containerStyle}
          placeholder={placeholder}
          keyboardType={keyboardType}
          maxLength={maxLength}
          onChangeText={onChange}
          onBlur={onBlur}
          value={String(value ?? '')}
          error={error?.message}
        />
      )}
    />
  );
}
