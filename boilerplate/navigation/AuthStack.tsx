import { AuthStackParams, SCREENS } from '@myApp/common';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LogIn, SignUp } from '../screens/Auth';

/** @Remarks - Add Auth screens here */

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParams>();

export const AuthStack = () => {
  return (
    <Navigator>
      <Screen name={SCREENS.LogIn} component={LogIn} />
      <Screen name={SCREENS.SignUp} component={SignUp} />
    </Navigator>
  );
};
