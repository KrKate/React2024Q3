import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../models';

export enum URL {
  base = `//dummyjson.com`,
  products = `/products`,
  search = `/search?q=`,
  limit = `?limit=`,
  skip = `&skip=`,
}

export const apiSliceProducts = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: URL.base }),
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], { limit: number; skip: number }>({
      query: ({ limit, skip }) => {
        return `${URL.products}${URL.limit}${limit}${URL.skip}${skip}`;
      },
    }),
    fetchDetails: builder.query<Product, { id: number }>({
      query: (id) => `${URL.products}/${id}`,
    }),
  }),
});
export const { useFetchProductsQuery } = apiSliceProducts;
