import { createSlice } from '@reduxjs/toolkit';
import type { AuthState } from '../../../types/auth';
import {
  payThanck,
  thunkCheckAuth,
  thunkLogin,
  thunkLogout,
  thunkRefreshToken,
  thunkSignup,
} from './checkAuthThunk';

const initialState: AuthState = {
  accessToken: '',
  user: {
    status: 'pending',
  },
  addRegistrationModalIsOpen: false,
  addLoginModalIsOpen: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registrModal: (state) => {
      state.addRegistrationModalIsOpen = !state.addRegistrationModalIsOpen;
    },
    loginModal: (state) => {
      state.addLoginModalIsOpen = !state.addLoginModalIsOpen;
    },
  },
  extraReducers(builder) {
    builder.addCase(thunkCheckAuth.fulfilled, (state, action) => action.payload);
    builder.addCase(thunkCheckAuth.rejected, (state, action) => {
      state.user.status = 'guest';
    });
    builder.addCase(thunkRefreshToken.fulfilled, (state, action) => {
      state.accessToken = action.payload;
    });
    builder.addCase(thunkLogin.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = { ...action.payload.user, status: 'authenticated' };
    });

    builder.addCase(thunkSignup.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = { ...action.payload.user, status: 'authenticated' };
    });
    builder.addCase(thunkLogout.fulfilled, (state, action) => {
      state.user.status = 'guest';
    });
    builder.addCase(payThanck.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.user.status = 'authenticated';
    });
  },
});

export const { registrModal, loginModal } = authSlice.actions;

export default authSlice.reducer;
