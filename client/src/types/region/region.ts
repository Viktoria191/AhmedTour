export type RegionType = {
  id: number;
  name: string;
  description: string;
  img: string;
  createdAt: Date;
  updatedAt: Date;
};

export type RegionState = {
  region: RegionType[];
};

export type RegionSlicesState ={
  regions: RegionType[]
}