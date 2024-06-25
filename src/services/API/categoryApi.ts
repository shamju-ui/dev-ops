import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TCategory } from "../../interface/category";
import categoryService from "../categoryService";
import { IError } from "../../interface/types";

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
      getCategories: builder.query<string[], void>({
        queryFn: async () => {
          try {
            let data = await categoryService.getAllCategories();
            return { data };
          } catch (error: unknown) {
            const typedError = error as IError;
            return { error: { status: 'CUSTOM_ERROR', error: typedError.message } };
          }
        },
      }),
    }),
  });
  
  export const { useGetCategoriesQuery } = categoryApi;

