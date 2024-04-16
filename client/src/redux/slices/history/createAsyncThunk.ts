import { createAsyncThunk } from '@reduxjs/toolkit';
import HistoryService from '../../../services/historyService';
import type { HistoryType } from '../../../types/history/history';

export const thunkAllTourLoad = createAsyncThunk('historySlice/thunkAllTourLoad', async () =>
  HistoryService.getAllTours(),
);

export const thunkPostAllTour = createAsyncThunk(
  'historySlice/thunkPostAllTour',
  (id: number) => HistoryService.postHistory(id),
);
