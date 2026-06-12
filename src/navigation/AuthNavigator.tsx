import React, { useState } from 'react';
import { View, StyleSheet, BackHandler } from 'react-native';

import { LoginView, RegisterView, OTPView } from '@app/modules';
import { colors } from '@app/theme';

import { ROUTES, ScreenName } from './routes';

export interface NavigationContext {
  navigateTo: (screen: ScreenName, params?: any) => void;
  goBack: () => void;
  currentScreen: ScreenName;
  params: any;
}

export const AuthNavigator: React.FC = () => {
  const [screenStack, setScreenStack] = useState<ScreenName[]>([ROUTES.LOGIN]);
  const [paramsStack, setParamsStack] = useState<any[]>([{}]);

  const currentScreen = screenStack[screenStack.length - 1];
  const params = paramsStack[paramsStack.length - 1] || {};

  const navigateTo = (screen: ScreenName, screenParams: any = {}) => {
    setScreenStack((prev) => [...prev, screen]);
    setParamsStack((prev) => [...prev, screenParams]);
  };

  const goBack = () => {
    if (screenStack.length > 1) {
      setScreenStack((prev) => prev.slice(0, -1));
      setParamsStack((prev) => prev.slice(0, -1));
    }
  };

  // React Native hardware back button support for Android
  React.useEffect(() => {
    const handleBackButton = () => {
      if (screenStack.length > 1) {
        goBack();
        return true;
      }
      return false;
    };

    const subscription = BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      subscription.remove();
    };
  }, [screenStack]);

  const navigation: NavigationContext = {
    navigateTo,
    goBack,
    currentScreen,
    params,
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case ROUTES.LOGIN:
        return <LoginView navigation={navigation} />;
      case ROUTES.REGISTER:
        return <RegisterView navigation={navigation} />;
      case ROUTES.OTP:
        return <OTPView navigation={navigation} />;
      default:
        return <LoginView navigation={navigation} />;
    }
  };

  return <View style={styles.container}>{renderScreen()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
