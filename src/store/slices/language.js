import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    currentLanguage: 'en',
    availableLanguages: ['en', 'ar']
  },
  reducers: {
    setLanguage: (state, action) => {
      if (state.availableLanguages.includes(action.payload)) {
        state.currentLanguage = action.payload;
      }
    }
  }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
