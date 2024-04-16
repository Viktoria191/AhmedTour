import type { UserType } from '../auth';
import type { TourType } from '../tour/tour';

export type BasketType = {
  id: number;
  tourId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
};

export type TourWithUser = TourType & { User?: UserType };



export type ToursState = {
  tours: TourWithUser[];
  users: UserType[];
  favoriteTours: TourWithUser[];
  basket: BasketType[];
};
