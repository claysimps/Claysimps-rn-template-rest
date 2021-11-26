import { CountUpdater, CountValue } from '@myApp/features';
import React from 'react';
import { Box } from 'react-native-magnus';

export const CountScreenExample = () => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <CountUpdater>
        <CountValue />
      </CountUpdater>
    </Box>
  );
};
