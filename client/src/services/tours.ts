import axios from 'axios';
import type { AddTourFormData, TourType } from '../types/tour/tour';

export const apiTourInstance = axios.create({
  baseURL: 'http://localhost:3000/api/region/tours',
});


class TourService {
  static async getTour(): Promise<TourType[]> {
    const response = await apiTourInstance.get<TourType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }

  static async addTour(formData: AddTourFormData): Promise<TourType> {
    const response = await apiTourInstance.post<TourType>('/', formData);
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('Server error adding product'));
  }

  static async editTour(formData: AddTourFormData, id: TourType['id']): Promise<TourType> {
    const response = await apiTourInstance.put<TourType>(`/${id}`, formData);

    console.log(response, 'responnxwwwdxcehckasuhcksaucg');

    if (response.status === 200) return response.data;
    return Promise.reject(new Error('Error editing on server'));
  }

  static async deleteTour(id: TourType['id']): Promise<TourType['id']> {
    const response = await apiTourInstance.delete<TouchType>(`/${id}`);
    if (response.status === 200) return id;
    return Promise.reject(new Error('Server error delete book'));
  }

  static async editCountTours(id: TourType['id']): Promise<TourType> {
    const response = await apiTourInstance.patch<TourType>(`/updateplaces/${id}`);
    console.log(response, '123132132132', response.data, '231221321321321321Data');
    
    if (response.status === 200) return response.data;

    return Promise.reject(new Error('Error editing on server'));
  }

}

export default TourService;
