import type { UserType } from '../auth';
import type { TourType } from '../tour/tour';

export type HistoryType = {
  id: number;
  User: UserType;
  Tour: TourType;
};


export type HistorySlicesState = {
  history: HistoryType[];
};
