import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
  SafeAreaView,
  ViewStyle,
} from 'react-native';

import { colors, typography } from '@app/theme';

import { CustomIcon, IconType } from './CustomIcon';

interface SelectFieldProps {
  label: string;
  placeholder: string;
  value: string;
  options: string[];
  leftIcon?: IconType;
  onSelect: (val: string) => void;
  error?: string;
  containerStyle?: ViewStyle;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  placeholder,
  value,
  options,
  leftIcon,
  onSelect,
  error,
  containerStyle,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Label */}
      <Text style={styles.label}>{label}</Text>

      {/* Selector Trigger Button */}
      <TouchableOpacity
        style={[
          styles.selectorTrigger,
          {
            borderColor: error ? colors.error : colors.borderGrey,
            backgroundColor: colors.lightBg,
          },
        ]}
        onPress={() => setModalVisible(true)}
        activeOpacity={0.8}
      >
        <View style={styles.leftRow}>
          {leftIcon && (
            <CustomIcon
              name={leftIcon}
              size={18}
              color={error ? colors.error : colors.mutedSlate}
              style={styles.leftIconStyle}
            />
          )}
          <Text
            style={[
              styles.valueText,
              { color: value ? colors.textMain : colors.mutedSlate },
            ]}
          >
            {value || placeholder}
          </Text>
        </View>

        {/* Dropdown Chevron */}
        <CustomIcon
          name="chevron-down"
          size={16}
          color={colors.mutedSlate}
          style={styles.rightChevron}
        />
      </TouchableOpacity>

      {/* Error display */}
      {error && <Text style={styles.errorText}>{error}</Text>}

      {/* Bottom Sheet Dropdown Selection Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent} onStartShouldSetResponder={() => true}>
            {/* Header Drag Indicator Bar */}
            <View style={styles.dragIndicator} />

            {/* Modal Title */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{placeholder}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeBtn}>Cancel</Text>
              </TouchableOpacity>
            </View>

            {/* Options List */}
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => {
                const isSelected = item === value;
                return (
                  <TouchableOpacity
                    style={[
                      styles.optionItem,
                      isSelected && styles.optionItemActive,
                    ]}
                    onPress={() => {
                      onSelect(item);
                      setModalVisible(false);
                    }}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        isSelected && styles.optionTextActive,
                      ]}
                    >
                      {item}
                    </Text>
                    {isSelected && (
                      <CustomIcon
                        name="check"
                        size={18}
                        color={colors.primary}
                      />
                    )}
                  </TouchableOpacity>
                );
              }}
              contentContainerStyle={styles.listContent}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium as any,
    color: colors.darkSlate,
    fontFamily: typography.fonts.medium,
    marginBottom: 6,
  },
  selectorTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  leftIconStyle: {
    marginRight: 10,
  },
  valueText: {
    fontSize: typography.sizes.sm,
    fontFamily: typography.fonts.regular,
    flex: 1,
  },
  rightChevron: {
    marginLeft: 6,
  },
  errorText: {
    fontSize: typography.sizes.xs,
    color: colors.error,
    marginTop: 4,
    fontFamily: typography.fonts.regular,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.4)', // Slate transparent
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '60%',
    paddingBottom: 24,
  },
  dragIndicator: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.borderGrey,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderGrey,
  },
  modalTitle: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.bold as any,
    color: colors.darkSlate,
    fontFamily: typography.fonts.semibold,
  },
  closeBtn: {
    fontSize: typography.sizes.sm,
    color: colors.mutedSlate,
    fontWeight: typography.weights.medium as any,
    fontFamily: typography.fonts.medium,
  },
  listContent: {
    paddingVertical: 10,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.lightBg,
  },
  optionItemActive: {
    backgroundColor: colors.lightBg,
  },
  optionText: {
    fontSize: typography.sizes.md - 1,
    color: colors.textMain,
    fontFamily: typography.fonts.regular,
  },
  optionTextActive: {
    color: colors.primary,
    fontWeight: typography.weights.semibold as any,
    fontFamily: typography.fonts.medium,
  },
});
