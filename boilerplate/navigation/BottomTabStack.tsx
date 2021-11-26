import { BottomTabParams, BottomTabsBar, SCREENS } from '@myApp/common';
import { CountScreenExample, Home, Route3, Route4 } from '@myApp/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

/** @Remarks - Edit Bottom Tabs here */

const { Navigator, Screen } = createBottomTabNavigator<BottomTabParams>();

export const BottomTabStack = () => (
  <Navigator tabBar={(props) => <BottomTabsBar {...props} />}>
    <Screen options={{ title: 'Home' }} name={SCREENS.Home} component={Home} />
    <Screen
      options={{ title: 'Counter' }}
      name={SCREENS.CountScreenExample}
      component={CountScreenExample}
    />
    <Screen
      options={{ title: 'Route 3' }}
      name={SCREENS.Route3}
      component={Route3}
    />
    <Screen
      options={{ title: 'Route 4' }}
      name={SCREENS.Route4}
      component={Route4}
    />
  </Navigator>
);
