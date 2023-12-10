import { createSlice } from "@reduxjs/toolkit";
import { getLanguages, setTranslate } from "./translateActions";

const initialState = {
  languages: [],
  islangLoading: false,
  isLangError: false,
  isTransLoading:false,
  isTransError:false,
  translated:""
};
export const TranslateSlice = createSlice({
  name: "translate",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getLanguages.pending, (state) => {
        state.islangLoading = true;
      })
      .addCase(getLanguages.fulfilled, (state, { payload }) => {
        state.islangLoading = false;
        state.isLangError = false;
        state.languages = payload;
      })
      .addCase(getLanguages.rejected, (state) => {
        state.isLangError = true;
        state.islangLoading = false;
      })
      .addCase(setTranslate.pending, (state)=>{
        state.isTransLoading= true
      })
      .addCase(setTranslate.fulfilled, (state , {payload})=>{
        state.isTransError=false,
        state.isTransLoading=false,
        state.translated = payload
      })
      .addCase(setTranslate.rejected, (state)=>{
        state.isTransError = true,
        state.isTransLoading = false
      })
      
  },
reducers:{
    setTranslated :(state, {payload})=>{
        state.translated = payload
    }
}
});

export const {setTranslated} =TranslateSlice.actions 