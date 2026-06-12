import React from 'react';
import { FormProvider as ReactHookFormProvider, UseFormReturn, FieldValues } from 'react-hook-form';

interface FormProviderProps<TFieldValues extends FieldValues = FieldValues> {
  children: React.ReactNode;
  methods: UseFormReturn<TFieldValues>;
}

export function FormProvider<TFieldValues extends FieldValues = FieldValues>({
  children,
  methods,
}: FormProviderProps<TFieldValues>) {
  return (
    <ReactHookFormProvider {...methods}>
      {children}
    </ReactHookFormProvider>
  );
}
