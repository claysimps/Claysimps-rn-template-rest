import { RootStackParams, STACKS } from '@myApp/common';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AuthStack } from './AuthStack';
import { BottomTabStack } from './BottomTabStack';

/** @Remarks - Add Stacks and Screens here */

interface RootStackProps {
  isSignedIn: boolean;
}

const { Group, Navigator, Screen } =
  createNativeStackNavigator<RootStackParams>();

export const RootStack = ({ isSignedIn }: RootStackProps) => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isSignedIn ? (
        /** Logged in screens*/
        <Group>
          <Screen name={STACKS.Tabs} component={BottomTabStack} />
        </Group>
      ) : (
        /** auth screens*/
        <Screen name={STACKS.Auth} component={AuthStack} />
      )}
    </Navigator>
  );
};
