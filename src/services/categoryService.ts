import { TCategory } from "../interface/category";
import apiService from "./axios";

class CategoryService {
    public async getAllCategories(): Promise<TCategory[]> {
        return apiService.get<TCategory[]>('/products/categories');
      }
}
const categoryService = new CategoryService();
export default categoryService;