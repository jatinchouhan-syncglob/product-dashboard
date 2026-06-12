import React from 'react';
import { useFormContext, Controller, RegisterOptions } from 'react-hook-form';
import { ViewStyle } from 'react-native';

import { IconType } from '../CustomIcon';
import { SelectField } from '../SelectField';

interface RHFSelectProps {
  name: string;
  label: string;
  placeholder: string;
  options: string[];
  leftIcon?: IconType;
  containerStyle?: ViewStyle;
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}

export function RHFSelect({
  name,
  label,
  placeholder,
  options,
  leftIcon,
  containerStyle,
  rules,
}: RHFSelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <SelectField
          label={label}
          placeholder={placeholder}
          value={String(value ?? '')}
          options={options}
          leftIcon={leftIcon}
          onSelect={onChange}
          error={error?.message}
          containerStyle={containerStyle}
        />
      )}
    />
  );
}
