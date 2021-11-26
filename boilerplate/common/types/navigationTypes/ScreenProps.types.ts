import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';
import { SCREENS } from '../../constants/screensEnum';
import { AuthStackParams, BottomTabParams, RootStackParams } from './ParamList';

/** @Remarks - example stack screen props */

export type LogInScreenProps = NativeStackScreenProps<
  AuthStackParams,
  SCREENS.LogIn
>;
export type SignUpScreenProps = NativeStackScreenProps<
  AuthStackParams,
  SCREENS.SignUp
>;

export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParams, SCREENS.Home>,
  StackScreenProps<RootStackParams>
>;
