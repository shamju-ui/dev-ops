import axios, { AxiosInstance, AxiosResponse } from 'axios';

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://fakestoreapi.com', 
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
 
  public async get<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get<T>(url);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error}`);
    }
  }

  public async post<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post<T>(url, data);
      return response.data;
    } catch (error) {
      throw new Error(`Error posting data: ${error}`);
    }
  }

  public async put<T>(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.put<T>(url, data);
      return response.data;
    } catch (error) {
      throw new Error(`Error updating data: ${error}`);
    }
  }

  public async delete<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.delete<T>(url);
      return response.data;
    } catch (error) {
      throw new Error(`Error deleting data: ${error}`);
    }
  }
}

const apiService = new ApiService();
export default apiService;
