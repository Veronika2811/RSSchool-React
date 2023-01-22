import { configureStore } from '@reduxjs/toolkit';

import appManagementSlice from './appManagementSlice';

export const store = configureStore({
  reducer: {
    APP_MANAGEMENT_SLICE: appManagementSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
