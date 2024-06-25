import { IProduct } from '../interface/product';
import apiService from './axios';



class ProductService {
  public async getProductById(id: number): Promise<IProduct> {
    return apiService.get<IProduct>(`/products/${id}`);
  }

  public async getProductByCategoryName(name: string): Promise<IProduct[]> {
    return apiService.get<IProduct[]>(`/products/category/${name}`);
  }
  public async getAllProducts(): Promise<IProduct[]> {
    return apiService.get<IProduct[]>('/products');
  }

  public async createProduct(product: IProduct): Promise<IProduct> {
    return apiService.post<IProduct>('/products', product);
  }

  public async updateProduct(id: number, product: IProduct): Promise<IProduct> {
    return apiService.put<IProduct>(`/products/${id}`, product);
  }

  public async deleteProduct(id: number): Promise<void> {
    return apiService.delete<void>(`/products/${id}`);
  }
}

const productService = new ProductService();
export default productService;
