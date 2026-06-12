import React from 'react';
import { useFormContext, Controller, RegisterOptions } from 'react-hook-form';
import { ViewStyle } from 'react-native';

import { Checkbox } from '../Checkbox';

interface RHFCheckboxProps {
  name: string;
  children?: React.ReactNode;
  containerStyle?: ViewStyle;
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}

export function RHFCheckbox({
  name,
  children,
  containerStyle,
  rules,
}: RHFCheckboxProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <Checkbox
          checked={!!value}
          onChange={onChange}
          containerStyle={containerStyle}
        >
          {children}
        </Checkbox>
      )}
    />
  );
}
