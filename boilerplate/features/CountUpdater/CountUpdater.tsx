import { useAppDispatch } from '@myApp/common/hooks/useAppDispatch';
import { decrement, increment } from '@myApp/state/counter.slice';
import React from 'react';
import { Box, Button } from 'react-native-magnus';

export const CountUpdater = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  return (
    <Box flexDir="row" justifyContent="center" alignItems="center">
      <Button
        aria-label="Increment value"
        onPress={() => dispatch(increment())}>
        Increment
      </Button>
      {children}
      <Button
        aria-label="Decrement value"
        onPress={() => dispatch(decrement())}>
        Decrement
      </Button>
    </Box>
  );
};
