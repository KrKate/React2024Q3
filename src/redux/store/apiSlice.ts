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
    fetchProducts: builder.query<
      Product[],
      { limit: number; skip: number; search: string }
    >({
      query: ({ limit, skip, search }) => {
        const searchParam = search ? `${URL.search}${search}` : '';
        return `${URL.products}${URL.limit}${limit}${URL.skip}${skip}${searchParam}`;
      },
    }),
  }),
});
export const { useFetchProductsQuery } = apiSliceProducts;
