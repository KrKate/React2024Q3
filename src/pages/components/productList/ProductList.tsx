import Link from 'next/link';
import Card from '../Card/Card';
import { Product } from '../../../models';
import styles from './ProductList.module.css';

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

interface ProductListProps {
  products: Product[];
  currentPage: number;
}

// export const apiSliceProducts = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: URL.base }),
//   endpoints: (builder) => ({
//     fetchProducts: builder.query<
//       Product[],
//       { searchValue?: string; limit: number; skip: number }
//     >({
//       query: ({ limit, skip, searchValue }) => {
//         let url = ``;
//         if (searchValue) {
//           url = `${URL.products}/${URL.search}${searchValue}&${URL.limit}${limit}&${URL.skip}${skip}`;
//         } else url = `${URL.products}?${URL.limit}${limit}&${URL.skip}${skip}`;
//         return url;
//       },
//     }),
//     fetchDetails: builder.query<Product, { id: number }>({
//       query: ({ id }) => `${URL.products}/${id}`,
//     }),
//     fetchPagination: builder.query<
//       Product[],
//       { searchValue: string; limit: number; pageNumber: number }
//     >({
//       query: ({ searchValue, limit, pageNumber }) => {
//         return `${URL.products}/${URL.search}${searchValue}&${URL.limit}${limit}&${URL.skip}${(pageNumber - 1) * limit}`;
//       },
//     }),
//   }),
// });
// export const {
//   useFetchProductsQuery,
//   useFetchDetailsQuery,
//   useFetchPaginationQuery,
// } = apiSliceProducts;

function ProductList({ products, currentPage }: ProductListProps) {
  // const currentPage = useSelector(
  //   (state: AppRootState) => state.pagination.currentPage
  // );
  // const searchValue = useSelector(
  //   (state: AppRootState) => state.search.searchValue
  // );
  // const limit = useSelector((state: AppRootState) => state.homePage.limit);

  // const { data: { products = [] } = {}, refetch } = useFetchProductsQuery({
  //   limit,
  //   skip: (currentPage - 1) * limit,
  //   searchValue,
  // }) as { data: ProductsResponse | undefined; refetch: () => void };

  // useEffect(() => {
  //   refetch();
  // }, [refetch, searchValue]);

  if (!Array.isArray(products) || products.length === 0) {
    return <p>Product not found</p>;
  }

  return (
    <>
      {products.map((product: Product) => (
        <Link
          href={`/page=${currentPage}/details=${product.id}`}
          data-testid="card"
          key={product.id}
          className={styles.link}
        >
          <Card product={product} />
        </Link>
      ))}
    </>
  );
}

export default ProductList;
