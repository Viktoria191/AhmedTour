import { createSlice } from '@reduxjs/toolkit';
import type { HistorySlicesState } from '../../../types/history/history';
import { thunkAllTourLoad, thunkPostAllTour } from './createAsyncThunk';

const initialState: HistorySlicesState = {
  history: [],
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunkAllTourLoad.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.history = action.payload;
    });
    builder.addCase(thunkAllTourLoad.rejected, (state, action) => {
      console.log(action.error);
    });
    builder.addCase(thunkPostAllTour.fulfilled, (state, action) => {
      state.history.push(action.payload);
    });
  },
});

export default historySlice.reducer;
