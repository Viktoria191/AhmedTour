import { createSlice } from '@reduxjs/toolkit';
import type { CommentType } from '../../../types/comment/comment';
import { addCommentThunk, deleteCommentThunk, getCommentsThunk } from './commentThunkAction';

type CommentState = CommentType[];
const initialState: CommentState = [];

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCommentsThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(getCommentsThunk.rejected, (state, action) => []);

    builder.addCase(addCommentThunk.fulfilled, (state, action) => [action.payload, ...state]);
    builder.addCase(addCommentThunk.rejected, (state, action) => state);

    builder.addCase(deleteCommentThunk.fulfilled, (state, action) =>
      state.filter((el) => el.id !== action.payload),
    );
    builder.addCase(deleteCommentThunk.rejected, (state, action) => state);
  },
});

export default commentSlice.reducer;
