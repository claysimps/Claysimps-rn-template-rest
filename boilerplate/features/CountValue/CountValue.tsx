import { Text } from '@myApp/common';
import { getCount } from '@myApp/selectors';
import React from 'react';
import { Box } from 'react-native-magnus';
import { useSelector } from 'react-redux';

export const CountValue = () => {
  const count = useSelector(getCount);

  return (
    <Box>
      <Text mx={10}>{count}</Text>
    </Box>
  );
};
