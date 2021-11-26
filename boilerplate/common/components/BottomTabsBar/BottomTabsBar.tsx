import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Box, Button } from 'react-native-magnus';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ICON_LIBRARY } from '../../constants/iconLibrary';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { iconDetails } from './iconDetails';

export interface BottomTabBarsProps extends BottomTabBarProps {}

export const BottomTabsBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarsProps) => {
  const { bottom } = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  return (
    <Box
      w={width}
      alignItems="center"
      justifyContent="space-around"
      flexDir="row"
      bottom={bottom}>
      {state.routes.map((route: { key: any; name: any }, index: number) => {
        const { options } = descriptors[route.key];
        /** @Remarks change icon with iconDetails: "./iconDetails" */
        const { iconName } = iconDetails[index];
        const label = options.title !== undefined ? options.title : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const iconColour = isFocused ? 'black' : 'red';
        const iconSize = isFocused ? 'large' : 'medium';

        return (
          <Box>
            <Button
              bg="transparent"
              key={index}
              onPress={onPress}
              onLongPress={onLongPress}>
              <Box alignItems="center">
                <Icon
                  iconLibrary={ICON_LIBRARY.MaterialCommunity}
                  iconColour={iconColour}
                  key={index}
                  name={iconName}
                  size={iconSize}
                />
                <Text textAlign="center" color={isFocused ? 'black' : 'red'}>
                  {label}
                </Text>
              </Box>
            </Button>
          </Box>
        );
      })}
    </Box>
  );
};
