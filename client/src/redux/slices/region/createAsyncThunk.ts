import { createAsyncThunk } from '@reduxjs/toolkit';
import RegionService from '../../../services/regions';

export const thunkRegionLoad = createAsyncThunk('historySlice/thunkRegionLoad', async () =>
  RegionService.getRegion(),
);

export const a = 3;
