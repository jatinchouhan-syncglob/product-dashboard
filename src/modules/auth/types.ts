import { NavigationContext } from '../../navigation/AuthNavigator';

export type LoginTab = 'email' | 'phone';

export interface LoginViewProps {
  navigation: NavigationContext;
}

export interface RegisterViewProps {
  navigation: NavigationContext;
}

export interface OTPViewProps {
  navigation: NavigationContext;
}
