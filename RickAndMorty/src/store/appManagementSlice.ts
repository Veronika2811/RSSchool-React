import { createSlice } from '@reduxjs/toolkit';

import INITIAL_STATE from './constants/constants';

const appManagementSlice = createSlice({
  name: 'APP_MANAGEMENT_SLICE',
  initialState: INITIAL_STATE,
  reducers: {
    saveUserCard: (state, action) => {
      state.cardUsers = state.cardUsers && [...state.cardUsers, action.payload];
    },
    saveSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    saveSortingRule: (state, action) => {
      state.sortRule = action.payload;
    },
    updateСharacterСards: (state, action) => {
      state.characters = action.payload;
    },
    updatePageInfo: (state, action) => {
      state.info = action.payload;
    },
    saveStateLoadingApp: (state, action) => {
      state.isLoading = action.payload;
    },
    saveAppDataError: (state, action) => {
      state.noData = action.payload;
    },
    goToFirstPage: (state) => {
      state.currentPage = 1;
    },
    goToNextPage: (state) => {
      state.currentPage = state.currentPage + 1;
    },
    goToPrevPage: (state) => {
      state.currentPage = state.currentPage - 1;
    },
  },
});

export const {
  saveUserCard,
  saveSearchQuery,
  saveSortingRule,
  updateСharacterСards,
  updatePageInfo,
  saveStateLoadingApp,
  saveAppDataError,
  goToFirstPage,
  goToNextPage,
  goToPrevPage,
} = appManagementSlice.actions;

export default appManagementSlice.reducer;
