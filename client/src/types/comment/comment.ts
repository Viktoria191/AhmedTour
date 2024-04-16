import type { UserType } from '../auth';

export type CommentType = {
  id: number;
  text: string;
  User: UserType;
  userId: number;
  tourId: number;
};

export type CommentTypesFormType = Omit<CommentType, 'id' | 'userId' | 'tourId'>;
