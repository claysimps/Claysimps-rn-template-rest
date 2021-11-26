import { createSelector } from 'reselect';
import { RootState } from '../state';

export const getCount = createSelector(
  (state: RootState) => state,
  (state) => state.counter.value,
);
