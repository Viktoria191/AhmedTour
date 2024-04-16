import axios from 'axios';
import type { RegionType } from '../types/region/region';

export const apiRegionInstance = axios.create({
  baseURL: 'http://localhost:3000/api/regions',
});

class RegionService {
  static async getRegion(): Promise<RegionType[]> {
    const response = await apiRegionInstance.get<RegionType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }
}

export default RegionService;
