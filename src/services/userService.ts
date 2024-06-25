import { IProduct } from '../interface/product';
import { IUser, Itoken } from '../interface/user';
import apiService from './axios';



class UserService {
  public async getProductById(id: number): Promise<IUser> {
    return apiService.get<IUser>(`/products/${id}`);
  }

  public async createUser(user: IUser): Promise<IUser> {
    return apiService.post<IUser>('/users', user);
  }
  public async loginUser(body: any): Promise<Itoken> {
    return apiService.post<Itoken>('/auth/login', body);
  }
  
}

const userService = new UserService();
export default userService;
