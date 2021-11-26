import { NavigatorScreenParams } from '@react-navigation/native';
import { SCREENS, STACKS } from './../../constants/screensEnum';

export type RootStackParams = {
  [STACKS.Tabs]: undefined;
  [STACKS.Auth]: undefined;
};

export type AuthStackParams = {
  [SCREENS.LogIn]: undefined;
  [SCREENS.SignUp]: undefined;
};
export type BottomTabParams = {
  [SCREENS.Home]: NavigatorScreenParams<RootStackParams>;
  [SCREENS.CountScreenExample]: NavigatorScreenParams<RootStackParams>;
  [SCREENS.Route3]: NavigatorScreenParams<RootStackParams>;
  [SCREENS.Route4]: NavigatorScreenParams<RootStackParams>;
};
