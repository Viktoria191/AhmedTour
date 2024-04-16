import axios from 'axios';
import type { TourType } from '../types/tour/tour';
import type { HistoryType } from '../types/history/history';

export const apiHistoryInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

class HistoryService {
  static async getAllTours(): Promise<TourType[]> {
    const { data } = await apiHistoryInstance<TourType[]>('/history');
    return data;
  }

  static async postHistory(id: number): Promise<HistoryType> {
    const response = await apiHistoryInstance.post<HistoryType>(`/history/${id}`);
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('Error posting to server'));
  }
}

export default HistoryService;
