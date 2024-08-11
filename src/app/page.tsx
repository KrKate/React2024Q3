import { Product } from '../models';
import Home from './home/page';

import { fetchProducts, ProductsResponse } from '../api/fetchProducts';

async function Page({
  searchParams,
}: {
  searchParams: { page?: string; search?: string; limit?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const searchValue = searchParams.search || '';
  const limit = Number(searchParams.limit) || 10;

  let products: Product[] = [];
  //   let total = 0;

  try {
    const data: ProductsResponse = await fetchProducts(
      currentPage,
      searchValue,
      limit
    );
    products = data.products || [];
    // total = data.total || 0;
  } catch (error) {
    console.error(error);
  }

  return <Home products={products} currentPage={currentPage} />;
}

export default Page;
