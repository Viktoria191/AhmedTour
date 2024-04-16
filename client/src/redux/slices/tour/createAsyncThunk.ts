import { createAsyncThunk } from '@reduxjs/toolkit';

import type { AddTourFormData, TourType } from '../../../types/tour/tour';
import TourService from '../../../services/tours';
import BasketService from '../../../services/baskets';
import { BasketType } from '../../../types/basket/basket';

export const thunkTourLoad = createAsyncThunk('tourSlice/thunkTourLoad', async () =>
  TourService.getTour(),
);
export const thunkAddBasket = createAsyncThunk('basketSlice/thunkBasketAdd', async (formData) =>
  BasketService.addToBasket(formData),
);

export const thunkBasketLoad = createAsyncThunk('basketSlice/', async () =>
  BasketService.getTourBasket(),
);

export const a = 3;
export const thunkTourAdd = createAsyncThunk(
  'tourSlice/thunkAddTour',
  async (formData: AddTourFormData) => TourService.addTour(formData),
);
export const thunkEditTour = createAsyncThunk(
  'commentsSlice/thunkEditComment',
  async ({ formData, id }: { formData: AddTourFormData; id: TourType['id'] }) =>
    TourService.editTour(formData, id),
);
export const thunkTourDelete = createAsyncThunk(
  'tourSlice/thunkTourDelete',
  async (id: TourType['id']) => TourService.deleteTour(id),
);

export const thunkBasDel = createAsyncThunk(
  'tourSlice/thunkBasDel',
  async (id: BasketType['id']) => BasketService.deleteElFromBasket(id)
);

export const thunkEditCountPay = createAsyncThunk(
  'tourSlice/thunkEditCountPay',
  async(id: TourType['id']) => TourService.editCountTours(id)
  );