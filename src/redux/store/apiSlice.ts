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
    fetchSearch: builder.query<Product[], { search: string }>({
      query: (searchValue) => `${URL.products}${URL.search}${searchValue}`,
    }),
    fetchPagination: builder.query<
      Product[],
      { searchValue: string; limit: number; pageNumber: number }
    >({
      query: ({ searchValue, limit, pageNumber }) => {
        return `${URL.products}${URL.search}${searchValue}${URL.limit}${limit}${URL.skip}${(pageNumber - 1) * limit}`;
      },
    }),
  }),
});
export const {
  useFetchProductsQuery,
  useFetchDetailsQuery,
  useFetchPaginationQuery,
  useFetchSearchQuery,
} = apiSliceProducts;
