import React from 'react';
import { View, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

import { colors } from '@app/theme';

import { CustomIcon } from './CustomIcon';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children?: React.ReactNode;
  containerStyle?: ViewStyle;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  children,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => onChange(!checked)}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.checkboxBox,
          {
            borderColor: checked ? colors.primary : colors.borderGrey,
            backgroundColor: checked ? colors.primary : colors.white,
          },
        ]}
      >
        {checked && (
          <CustomIcon name="check" size={12} color={colors.white} />
        )}
      </View>

      {/* Label Content */}
      <View style={styles.labelContainer}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 10,
    width: '100%',
  },
  checkboxBox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 2, // Slight offset for multi-line text alignment
  },
  labelContainer: {
    flex: 1,
  },
});
