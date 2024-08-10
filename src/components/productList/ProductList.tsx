import Link from 'next/link';
import Card from '../Card/Card';
import { Product } from '../../models';
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
  onCardClick: (id: number) => void;
}

function ProductList({ products, currentPage, onCardClick }: ProductListProps) {
  if (!Array.isArray(products) || products.length === 0) {
    return <p>Product not found</p>;
  }

  return (
    <>
      {products.map((product: Product) => (
        <Link
          href={`/?page=${currentPage}&details=${product.id}`}
          data-testid="card"
          key={product.id}
          className={styles.link}
          onClick={() => onCardClick(product.id)}
        >
          <Card product={product} />
        </Link>
      ))}
    </>
  );
}

export default ProductList;
