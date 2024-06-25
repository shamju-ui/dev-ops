

// productApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../interface/product';
import productService from '../productService';
import { IError } from '../../interface/types';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], string | void>({
      queryFn: async (category) => {
        try {
            let data;
            if (category) {
              data = await productService.getProductByCategoryName(category);
            } else {
              data = await productService.getAllProducts();
            }
          return { data };
        } catch (error: unknown) {
          const typedError = error as IError;
          return { error: { status: 'CUSTOM_ERROR', error: typedError.message } };
        }
      },
    }),
    getProductById: builder.query<IProduct, number>({
      queryFn: async (id) => {
        try {
          const data = await productService.getProductById(id);
          return { data };
        } catch (error: unknown) {
          const typedError = error as IError;
          return { error: { status: 'CUSTOM_ERROR', error: typedError.message } };
        }
      },
    }),
    getProductsByCategory: builder.query<IProduct[], string>({
      queryFn: async (category) => {
        try {
          const data = await productService.getProductByCategoryName(category);
          return { data };
        } catch (error: unknown) {
          const typedError = error as IError;
          return { error: { status: 'CUSTOM_ERROR', error: typedError.message } };
        }
      },
    }),
    createProduct: builder.mutation<IProduct, IProduct>({
      queryFn: async (product) => {
        try {
          const data = await productService.createProduct(product);
          return { data };
        } catch (error: unknown) {
          const typedError = error as IError;
          return { error: { status: 'CUSTOM_ERROR', error: typedError.message } };
        }
      },
    }),
    updateProduct: builder.mutation<IProduct, { id: number; product: IProduct }>({
      queryFn: async ({ id, product }) => {
        try {
          const data = await productService.updateProduct(id, product);
          return { data };
        } catch (error: unknown) {
          const typedError = error as IError;
          return { error: { status: 'CUSTOM_ERROR', error: typedError.message } };
        }
      },
    }),
    deleteProduct: builder.mutation<void, number>({
      queryFn: async (id) => {
        try {
          await productService.deleteProduct(id);
          return { data: undefined };
        } catch (error: unknown) {
          const typedError = error as IError;
          return { error: { status: 'CUSTOM_ERROR', error: typedError.message } };
        }
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
