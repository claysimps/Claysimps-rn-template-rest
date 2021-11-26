import React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ICON_LIBRARY, theme } from '../../constants';
import { assertNever } from '../../helpers';

export interface IconProps {
  size: keyof typeof IconSizes;
  name: string;
  iconColour: keyof typeof theme.colors;
  iconLibrary: ICON_LIBRARY;
}

MaterialCommunityIcon.loadFont();

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
} as const;

const iconType = ({ iconLibrary, name, size, iconColour }: IconProps) => {
  switch (iconLibrary) {
    case ICON_LIBRARY.MaterialCommunity:
      return (
        <MaterialCommunityIcon
          name={name}
          size={IconSizes[size]}
          color={iconColour}
        />
      );
    /** @Remarks - add other libraries here, e.g. */
    // case ICON_LIBRARY.OtherLibrary:
    //   return (
    //     <MaterialCommunityIcon name={name} size={IconSizes[size]} color={iconColour} />
    //   );
    default:
      assertNever(iconLibrary);
  }
};

export const Icon = ({ iconLibrary, size, name, iconColour }: IconProps) => (
  <>{iconType({ iconLibrary, size, name, iconColour })}</>
);
