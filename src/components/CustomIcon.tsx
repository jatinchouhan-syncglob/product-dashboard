import * as React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

import { colors } from '../theme/colors';

export type IconType =
  | 'user'
  | 'mail'
  | 'phone'
  | 'lock'
  | 'shield'
  | 'eye'
  | 'eye-off'
  | 'chevron-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'check'
  | 'calendar'
  | 'briefcase'
  | 'document'
  | 'logo-icon'
  | 'logo-heart-shield'
  | 'green-check-circle';

interface CustomIconProps {
  name: IconType;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

export const CustomIcon: React.FC<CustomIconProps> = ({
  name,
  size = 24,
  color = colors.mutedSlate,
  style,
}) => {
  const halfSize = size / 2;
  const borderSize = Math.max(1.5, size * 0.08);

  const renderIcon = () => {
    switch (name) {
      case 'user':
        return (
          <View style={[styles.center, { width: size, height: size }]}>
            {/* Head */}
            <View
              style={{
                width: size * 0.42,
                height: size * 0.42,
                borderRadius: (size * 0.42) / 2,
                borderWidth: borderSize,
                borderColor: color,
                position: 'absolute',
                top: size * 0.08,
              }}
            />
            {/* Shoulders */}
            <View
              style={{
                width: size * 0.8,
                height: size * 0.35,
                borderTopLeftRadius: size * 0.4,
                borderTopRightRadius: size * 0.4,
                borderWidth: borderSize,
                borderBottomWidth: 0,
                borderColor: color,
                position: 'absolute',
                bottom: size * 0.05,
              }}
            />
          </View>
        );

      case 'mail':
        return (
          <View style={[styles.center, { width: size, height: size }]}>
            {/* Envelope Body */}
            <View
              style={{
                width: size * 0.88,
                height: size * 0.62,
                borderRadius: 4,
                borderWidth: borderSize,
                borderColor: color,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Refined flap lines forming a perfect V shape */}
              <View
                style={{
                  width: '56%',
                  height: borderSize * 0.9,
                  backgroundColor: color,
                  transform: [{ rotate: '28deg' }],
                  position: 'absolute',
                  top: '25%',
                  left: '-4%',
                }}
              />
              <View
                style={{
                  width: '56%',
                  height: borderSize * 0.9,
                  backgroundColor: color,
                  transform: [{ rotate: '-28deg' }],
                  position: 'absolute',
                  top: '25%',
                  right: '-4%',
                }}
              />
            </View>
          </View>
        );

      case 'phone':
        return (
          <View style={[styles.center, { width: size, height: size }]}>
            <View
              style={{
                width: size * 0.7,
                height: size * 0.7,
                transform: [{ rotate: '45deg' }],
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Receiver Bar */}
              <View
                style={{
                  width: size * 0.22,
                  height: size * 0.68,
                  borderRadius: size * 0.1,
                  backgroundColor: color,
                  position: 'relative',
                }}
              >
                {/* Ear piece */}
                <View
                  style={{
                    width: size * 0.16,
                    height: size * 0.16,
                    borderRadius: (size * 0.16) / 2,
                    backgroundColor: colors.white,
                    position: 'absolute',
                    top: size * 0.08,
                    left: size * 0.03,
                  }}
                />
                {/* Mouth piece */}
                <View
                  style={{
                    width: size * 0.16,
                    height: size * 0.16,
                    borderRadius: (size * 0.16) / 2,
                    backgroundColor: colors.white,
                    position: 'absolute',
                    bottom: size * 0.08,
                    left: size * 0.03,
                  }}
                />
              </View>
              {/* Grip/handle connecting loop */}
              <View
                style={{
                  width: size * 0.45,
                  height: size * 0.45,
                  borderTopLeftRadius: size * 0.25,
                  borderBottomLeftRadius: size * 0.25,
                  borderWidth: borderSize,
                  borderRightWidth: 0,
                  borderColor: color,
                  position: 'absolute',
                  left: -size * 0.15,
                }}
              />
            </View>
          </View>
        );

      case 'lock':
        return (
          <View style={[styles.center, { width: size, height: size }]}>
            {/* Shackle */}
            <View
              style={{
                width: size * 0.46,
                height: size * 0.44,
                borderTopLeftRadius: (size * 0.46) / 2,
                borderTopRightRadius: (size * 0.46) / 2,
                borderWidth: borderSize,
                borderBottomWidth: 0,
                borderColor: color,
                position: 'absolute',
                top: size * 0.08,
              }}
            />
            {/* Body */}
            <View
              style={{
                width: size * 0.7,
                height: size * 0.5,
                borderRadius: 5,
                borderWidth: borderSize,
                borderColor: color,
                backgroundColor: 'transparent',
                position: 'absolute',
                bottom: size * 0.08,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Keyhole Dot */}
              <View
                style={{
                  width: size * 0.12,
                  height: size * 0.12,
                  borderRadius: (size * 0.12) / 2,
                  backgroundColor: color,
                }}
              />
              {/* Keyhole stem */}
              <View
                style={{
                  width: borderSize,
                  height: size * 0.14,
                  backgroundColor: color,
                  marginTop: -1,
                }}
              />
            </View>
          </View>
        );

      case 'shield':
        return (
          <View style={[styles.center, { width: size, height: size }]}>
            {/* Shield Outline */}
            <View
              style={{
                width: size * 0.75,
                height: size * 0.8,
                borderWidth: borderSize,
                borderColor: color,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                borderBottomLeftRadius: size * 0.38,
                borderBottomRightRadius: size * 0.38,
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Inner detail (vertical line) */}
              <View
                style={{
                  width: borderSize * 0.8,
                  height: '60%',
                  backgroundColor: color,
                  position: 'absolute',
                  top: '10%',
                }}
              />
            </View>
          </View>
        );

      case 'eye':
        return (
          <View style={[styles.center, { width: size, height: size }]}>
            {/* Eye shape: oval border */}
            <View
              style={{
                width: size * 0.9,
                height: size * 0.55,
                borderRadius: size * 0.27,
                borderWidth: borderSize,
                borderColor: color,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Pupil */}
              <View
                style={{
                  width: size * 0.26,
                  height: size * 0.26,
                  borderRadius: (size * 0.26) / 2,
                  borderWidth: borderSize,
                  borderColor: color,
                  backgroundColor: color,
                }}
              />
            </View>
          </View>
        );

      case 'eye-off':
        return (
          <View style={[styles.center, { width: size, height: size }]}>
            {/* Eye Shape */}
            <View
              style={{
                width: size * 0.9,
                height: size * 0.55,
                borderRadius: size * 0.27,
                borderWidth: borderSize,
                borderColor: color,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <View
                style={{
                  width: size * 0.24,
                  height: size * 0.24,
                  borderRadius: (size * 0.24) / 2,
                  backgroundColor: color,
                }}
              />
            </View>
            {/* Diagonal Slash Line */}
            <View
              style={{
                width: size * 0.95,
                height: borderSize * 1.1,
                backgroundColor: color,
                position: 'absolute',
                transform: [{ rotate: '-35deg' }],
                borderWidth: 0.5,
                borderColor: colors.white, // adds a nice contrast border to the slash
              }}
            />
          </View>
        );

      case 'chevron-down':
        return (
          <View style={[styles.center, { width: size, height: size }]}>
            <View
              style={{
                width: size * 0.35,
                height: size * 0.35,
                borderRightWidth: borderSize * 1.2,
                borderBottomWidth: borderSize * 1.2,
                borderColor: color,
                transform: [{ rotate: '45deg' }],
                marginTop: -size * 0.1,
              }}
            />
          </View>
        );

      case 'arrow-left':
        return (
          <View style={[styles.center, { width: size, height: size }]}>
            {/* Stem */}
            <View
              style={{
                width: size * 0.65,
                height: borderSize * 1.1,
                backgroundColor: color,
                position: 'absolute',
              }}
            />
            {/* Head */}
            <View
              style={{
                width: size * 0.35,
                height: size * 0.35,
                borderLeftWidth: borderSize * 1.1,
                borderTopWidth: borderSize * 1.1,
                borderColor: color,
                transform: [{ rotate: '-45deg' }],
                position: 'absolute',
                left: size * 0.12,
              }}
            />
          </View>
        );

      case 'arrow-right':
        return (
          <View style={[styles.center, { width: size, height: size }]}>
            {/* Stem */}
            <View
              style={{
                width: size * 0.65,
                height: borderSize * 1.1,
                backgroundColor: color,
                position: 'absolute',
              }}
            />
            {/* Head */}
            <View
              style={{
                width: size * 0.35,
                height: size * 0.35,
                borderRightWidth: borderSize * 1.1,
                borderTopWidth: borderSize * 1.1,
                borderColor: color,
                transform: [{ rotate: '45deg' }],
                position: 'absolute',
                right: size * 0.12,
              }}
            />
          </View>
        );

      case 'check':
        return (
          <View style={[styles.center, { width: size, height: size }]}>
            <View
              style={{
                width: size * 0.6,
                height: size * 0.35,
                borderLeftWidth: borderSize * 1.2,
                borderBottomWidth: borderSize * 1.2,
                borderColor: color,
                transform: [{ rotate: '-45deg' }],
                marginTop: -size * 0.08,
              }}
            />
          </View>
        );

      case 'calendar':
        return (
          <View style={[styles.center, { width: size, height: size }]}>
            {/* Binder loops (rings on top) */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: size * 0.6, position: 'absolute', top: size * 0.04, zIndex: 2 }}>
              <View style={{ width: borderSize * 1.2, height: size * 0.18, backgroundColor: color, borderRadius: 2 }} />
              <View style={{ width: borderSize * 1.2, height: size * 0.18, backgroundColor: color, borderRadius: 2 }} />
            </View>
            {/* Main Calendar Body */}
            <View
              style={{
                width: size * 0.8,
                height: size * 0.68,
                borderRadius: 4,
                borderWidth: borderSize,
                borderColor: color,
                position: 'absolute',
                bottom: size * 0.06,
                justifyContent: 'flex-start',
              }}
            >
              {/* Red/Accent header bar line inside calendar */}
              <View
                style={{
                  width: '100%',
                  height: size * 0.15,
                  backgroundColor: color,
                  opacity: 0.3,
                }}
              />
              {/* Tiny dot grid placeholder */}
              <View style={{ flex: 1, padding: 2, justifyContent: 'space-around', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between' }}>
                  <View style={{ width: 2, height: 2, borderRadius: 1, backgroundColor: color }} />
                  <View style={{ width: 2, height: 2, borderRadius: 1, backgroundColor: color }} />
                  <View style={{ width: 2, height: 2, borderRadius: 1, backgroundColor: color }} />
                </View>
                <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between' }}>
                  <View style={{ width: 2, height: 2, borderRadius: 1, backgroundColor: color }} />
                  <View style={{ width: 2, height: 2, borderRadius: 1, backgroundColor: color }} />
                  <View style={{ width: 2, height: 2, borderRadius: 1, backgroundColor: color }} />
                </View>
              </View>
            </View>
          </View>
        );

      case 'briefcase':
        return (
          <View style={[styles.center, { width: size, height: size }]}>
            {/* Handle on top */}
            <View
              style={{
                width: size * 0.38,
                height: size * 0.22,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                borderWidth: borderSize,
                borderBottomWidth: 0,
                borderColor: color,
                position: 'absolute',
                top: size * 0.06,
              }}
            />
            {/* Case Body */}
            <View
              style={{
                width: size * 0.82,
                height: size * 0.58,
                borderRadius: 4,
                borderWidth: borderSize,
                borderColor: color,
                position: 'absolute',
                bottom: size * 0.08,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Latch Clip */}
              <View
                style={{
                  width: size * 0.16,
                  height: size * 0.12,
                  borderRadius: 1,
                  backgroundColor: color,
                }}
              />
            </View>
          </View>
        );

      case 'document':
        return (
          <View style={[styles.center, { width: size, height: size }]}>
            {/* Sheet Outline */}
            <View
              style={{
                width: size * 0.72,
                height: size * 0.85,
                borderRadius: 3,
                borderWidth: borderSize,
                borderColor: color,
                padding: size * 0.1,
                justifyContent: 'space-between',
              }}
            >
              {/* Folding ear corner placeholder top right */}
              <View
                style={{
                  width: size * 0.16,
                  height: size * 0.16,
                  borderLeftWidth: borderSize,
                  borderBottomWidth: borderSize,
                  borderColor: color,
                  position: 'absolute',
                  top: -borderSize,
                  right: -borderSize,
                  backgroundColor: colors.white,
                }}
              />
              {/* Content text lines */}
              <View style={{ width: '80%', height: borderSize * 0.8, backgroundColor: color, borderRadius: 1, marginTop: size * 0.1 }} />
              <View style={{ width: '100%', height: borderSize * 0.8, backgroundColor: color, borderRadius: 1 }} />
              <View style={{ width: '60%', height: borderSize * 0.8, backgroundColor: color, borderRadius: 1 }} />
            </View>
          </View>
        );

      case 'logo-icon':
        return (
          <View style={[styles.center, { width: size, height: size }]}>
            {/* Medora stylized medical heart/cross */}
            <View
              style={{
                width: size,
                height: size,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Cross background card or subtle green glow */}
              <View
                style={{
                  width: size,
                  height: size,
                  borderRadius: size * 0.3,
                  backgroundColor: '#ECFDF5',
                  position: 'absolute',
                }}
              />
              
              {/* Medical Cross Leaf 1 (Vertical Pill) */}
              <View
                style={{
                  width: size * 0.22,
                  height: size * 0.62,
                  borderRadius: (size * 0.22) / 2,
                  backgroundColor: colors.secondary,
                  position: 'absolute',
                }}
              />
              
              {/* Medical Cross Leaf 2 (Horizontal Pill) */}
              <View
                style={{
                  width: size * 0.62,
                  height: size * 0.22,
                  borderRadius: (size * 0.62) / 2,
                  backgroundColor: colors.secondary,
                  position: 'absolute',
                }}
              />
              
              {/* Inner accent core (white dot representing clinical purity) */}
              <View
                style={{
                  width: size * 0.1,
                  height: size * 0.1,
                  borderRadius: (size * 0.1) / 2,
                  backgroundColor: colors.white,
                  position: 'absolute',
                }}
              />
            </View>
          </View>
        );

      case 'logo-heart-shield':
        return (
          <View style={[styles.center, { width: size, height: size }]}>
            {/* Horizontal-friendly medical heart/shield icon */}
            <View
              style={{
                width: size,
                height: size,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              {/* Outer green/blue shield halves */}
              <View style={{ flexDirection: 'row', width: size, height: size * 0.85, overflow: 'hidden', borderRadius: size * 0.25 }}>
                {/* Left Teal Half */}
                <View
                  style={{
                    flex: 1,
                    height: '100%',
                    backgroundColor: colors.secondary,
                    borderTopLeftRadius: size * 0.25,
                    borderBottomLeftRadius: size * 0.25,
                  }}
                />
                {/* Right Blue Half */}
                <View
                  style={{
                    flex: 1,
                    height: '100%',
                    backgroundColor: colors.primary,
                    borderTopRightRadius: size * 0.25,
                    borderBottomRightRadius: size * 0.25,
                  }}
                />
              </View>

              {/* Centered White Medical Cross */}
              <View
                style={{
                  width: size * 0.2,
                  height: size * 0.54,
                  borderRadius: (size * 0.2) / 2,
                  backgroundColor: colors.white,
                  position: 'absolute',
                }}
              />
              <View
                style={{
                  width: size * 0.54,
                  height: size * 0.2,
                  borderRadius: (size * 0.54) / 2,
                  backgroundColor: colors.white,
                  position: 'absolute',
                }}
              />

              {/* Inner core accent */}
              <View
                style={{
                  width: size * 0.08,
                  height: size * 0.08,
                  borderRadius: (size * 0.08) / 2,
                  backgroundColor: colors.secondary,
                  position: 'absolute',
                }}
              />
            </View>
          </View>
        );

      case 'green-check-circle':
        return (
          <View style={[styles.center, { width: size, height: size }]}>
            <View
              style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: 1.5,
                borderColor: colors.secondary,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
              }}
            >
              {/* Checkmark inside */}
              <View
                style={{
                  width: size * 0.45,
                  height: size * 0.25,
                  borderLeftWidth: 1.5,
                  borderBottomWidth: 1.5,
                  borderColor: colors.secondary,
                  transform: [{ rotate: '-45deg' }],
                  marginTop: -size * 0.06,
                }}
              />
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  return <View style={[styles.container, style]}>{renderIcon()}</View>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});
