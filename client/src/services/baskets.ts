import axios from 'axios';
import type { BasketType } from '../types/basket/basket';
import type { TourType } from '../types/tour/tour';

export const apiBasketInstance = axios.create({
  baseURL: `http://localhost:3000/api/tours/basket`,
});

class BasketService {
  static async addToBasket(formData): Promise<BasketType[]> {
    const response = await apiBasketInstance.post<BasketType[]>('/', formData);
    console.log(response.data, 'LAAAAAAAA');
    if (response.status === 200) return response.data;
    return [];
  }

  // 1 Продумать, что вернуть с данного запроса: элементы чисто BasketType, или чисто TourType, или что-то иное
  // 2 После загрузки положить данные в нужное место в слайсе
  // 3 В компоненте достать данные из слайса БЕЗ ОШИБОК тайпскрипта
  static async getTourBasket(): Promise<BasketType[]> {
    const response = await apiBasketInstance.get<(BasketType & { Tour: TourType })[]>('/basket');

    if (response.status === 200) return response.data;
    return [];
  }

  static async deleteElFromBasket(id: BasketType['id']): Promise<BasketType['id']> {
    const response = await apiBasketInstance.delete<BasketType>(`/${id}`);
    // console.log(response);
    
    if (response.status === 200) return id;
    return Promise.reject(new Error('Server error delete book'));
  }
}

export default BasketService;
