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

function ProductList({ products, currentPage }: ProductListProps) {
  if (!Array.isArray(products) || products.length === 0) {
    return <p>Product not found</p>;
  }

  return (
    <>
      {products.map((product: Product) => (
        <Link
          href={`/?page=${currentPage}/details=${product.id}`}
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
