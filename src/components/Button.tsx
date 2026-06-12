import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';

import { colors, typography } from '@app/theme';

import { CustomIcon, IconType } from './CustomIcon';

// Color interpolation for smooth horizontal linear gradients without external native packages
const interpolateColor = (color1: string, color2: string, factor: number) => {
  try {
    const c1 = parseInt(color1.replace('#', ''), 16);
    const c2 = parseInt(color2.replace('#', ''), 16);
    const r1 = (c1 >> 16) & 255;
    const g1 = (c1 >> 8) & 255;
    const b1 = c1 & 255;
    const r2 = (c2 >> 16) & 255;
    const g2 = (c2 >> 8) & 255;
    const b2 = c2 & 255;
    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));
    return `rgb(${r}, ${g}, ${b})`;
  } catch (e) {
    return color1;
  }
};

interface GradientBackgroundProps {
  colors: [string, string];
  style?: ViewStyle;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ colors: gradientColors, style }) => {
  const steps = 30; // smooth blending count
  return (
    <View style={[styles.gradientContainer, style]}>
      <View style={styles.absoluteFill}>
        <View style={styles.gradientRow}>
          {Array.from({ length: steps }).map((_, i) => {
            const factor = i / (steps - 1);
            return (
              <View
                key={i}
                style={{
                  flex: 1,
                  height: '100%',
                  backgroundColor: interpolateColor(gradientColors[0], gradientColors[1], factor),
                  marginRight: -1.5, // Eliminate subpixel gaps by overlapping adjacent steps
                }}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

interface ButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  rightIcon?: IconType;
  style?: ViewStyle;
  textStyle?: TextStyle;
  useGradient?: boolean;
  gradientColors?: [string, string];
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  rightIcon,
  style,
  textStyle,
  useGradient = false,
  gradientColors = [colors.secondary, colors.primary], // Default gradient: Medora Teal to Medora Blue
}) => {
  const isInteractionDisabled = disabled || loading;
  const borderRadius = style?.borderRadius ?? styles.button.borderRadius;

  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator color={colors.white} size="small" />;
    }
    return (
      <View style={styles.contentRow}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
        {rightIcon && (
          <CustomIcon
            name={rightIcon}
            size={14}
            color={colors.white}
            style={styles.iconStyle}
          />
        )}
      </View>
    );
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isInteractionDisabled && styles.buttonDisabled,
        style,
        useGradient && !isInteractionDisabled && styles.buttonGradientOuter,
      ]}
      onPress={onPress}
      disabled={isInteractionDisabled}
      activeOpacity={0.85}
    >
      {useGradient && !isInteractionDisabled ? (
        <GradientBackground
          colors={gradientColors}
          style={{
            ...styles.absoluteFill,
            borderRadius,
          }}
        />
      ) : null}
      <View style={styles.innerContent}>
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    overflow: 'hidden',
    position: 'relative',
  },
  gradientRow: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  absoluteFill: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 8,
    width: '100%',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
    marginVertical: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  buttonGradientOuter: {
    backgroundColor: 'transparent',
    shadowColor: colors.primary,
  },
  buttonDisabled: {
    backgroundColor: colors.borderGrey,
    shadowOpacity: 0,
    elevation: 0,
  },
  innerContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.semibold as any,
    fontFamily: typography.fonts.medium,
  },
  iconStyle: {
    marginLeft: 8,
  },
});
