import type { BasketType, TourWithUser } from '../basket/basket';

export type TourType = {
  id: number;
  name: string;
  body: string;
  description: string;
  price: string;
  regionId: number;
  photoTourId: number;
  currentPlace: number;
  allPlace: number;
  date: string;
  days: number;
  createdAt: Date;
  updatedAt: Date;
  PhotoTour: PhotoTour;
};
export type PhotoTour = {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
};

export type TourState = {
  region: TourType[];
};

export type TourSlicesState = {
  favoriteTours: TourWithUser[];
  tours: TourType[];
  basket: BasketType[];
  selectedTour: TourType | null;
  addTourModalIsOpen: boolean;
  editTourModalIsOpen: boolean;
};

export type AddTourFormData = {
  name: string;
  body: string;
  description: string;
  price: string;
};

export type EditTourFormData = {
  name: string;
  body: string;
  description: string;
  price: string;
};
