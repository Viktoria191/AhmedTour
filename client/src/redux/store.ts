import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/auth';
import regionsReducer from './slices/region/regionSlice';
import tourReducer from './slices/tour/tourSlice';
import commentReducer from './slices/comment/commentSlice';
import historyReducer from './slices/history/historySlice';

export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    regionSlice: regionsReducer,
    tourSlice: tourReducer,
    commentSlice: commentReducer,
    historySlice: historyReducer,
    basketSlice: tourReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
