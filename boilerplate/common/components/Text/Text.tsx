import React from 'react';
import { Text as MagnusText, TextProps } from 'react-native-magnus';

/** @Remarks - set font here */
export const baseFontStyleValues = {
  // fontFamily: { primary: 'Nunito-Regular' },
  fontWeight: {
    extraLight: 200,
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
};

/** @Remarks - map font weights to font */
const mapFontWeightToFontFamily: any = {
  // 300: 'Nunito-Light',
  // 400: 'Nunito-Regular',
  // 600: 'Nunito-Bold',
  // 700: 'Nunito-ExtraBold',
  // 900: 'Nunito-Black',
};

export const Text = ({
  fontWeight,
  ...restProps
}: Omit<TextProps, 'fontFamily'> & { children: React.ReactNode }) => {
  const platformAgnosticFontFamily = {
    fontFamily: mapFontWeightToFontFamily[fontWeight || 400],
  };

  return <MagnusText {...restProps} {...platformAgnosticFontFamily} />;
};
