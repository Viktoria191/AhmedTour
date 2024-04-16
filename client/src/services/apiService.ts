import axios from 'axios';
import type { AuthState, PayForm } from '../types/auth';

export const apiInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true,
});

class ApiServices {
  static async subscribePay(formData: PayForm): Promise<AuthState> {
    const response = await apiInstance.post('/api/pay', formData);
    return response.data;
  }
}

export default ApiServices;
