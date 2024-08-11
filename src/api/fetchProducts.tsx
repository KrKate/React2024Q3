import { Product, URLapp } from '../models';

export interface ProductsResponse {
  products: Product[];
  total: number;
  currentPage: number;
}

export async function fetchProducts(
  currentPage: number,
  searchValue: string,
  limit: number
): Promise<ProductsResponse> {
  const skip = (currentPage - 1) * limit;
  const url = searchValue
    ? `${URLapp.base}${URLapp.products}/${URLapp.search}${searchValue}&${URLapp.limit}${limit}&${URLapp.skip}${skip}`
    : `${URLapp.base}${URLapp.products}?${URLapp.limit}${limit}&${URLapp.skip}${skip}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}
