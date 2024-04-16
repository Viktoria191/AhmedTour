import axios from 'axios';
import type { CommentType, CommentTypesFormType } from '../types/comment/comment';
import type { UserType } from '../types/auth';

export const apiCommentsInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getComments = async (id: CommentType['id']): Promise<CommentType[]> => {
  const { data } = await apiCommentsInstance<CommentType[]>(`/comments/${id}`);
  return data;
};

export const submitComment = async (
  id: CommentType['id'],
  userId: UserType['id'],
  formData: CommentTypesFormType,
): Promise<CommentType> => {
  const { data } = await apiCommentsInstance.post<CommentType>(`/comments/${id}`, userId, formData);
  return data;
};

export const deleteComment = async (id: CommentType['id']): Promise<CommentType['id']> => {
  await apiCommentsInstance.delete(`/comments/${id}`);
  return id;
};
