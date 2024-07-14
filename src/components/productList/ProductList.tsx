import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import { Product } from '../../models';
import styles from './ProductList.module.css';

interface ProductListProps {
  products: Product[];
  toggleDetails: (id: number) => void;
  page: number;
}

function ProductList({
  products,
  toggleDetails,
  page,
}: ProductListProps): JSX.Element {
  if (products.length === 0) {
    return <p>Product not found</p>;
  }

  return (
    <>
      {products.map((product: Product) => (
        <Link
          to={`/page=${page}/details=${product.id}`}
          data-testid="card"
          key={product.id}
          className={styles.link}
        >
          <Card
            product={product}
            toggleDetails={() => toggleDetails(product.id)}
          />
        </Link>
      ))}
    </>
  );
}

export default ProductList;
