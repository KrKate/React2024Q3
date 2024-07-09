import Card from '../Card/Card';
import { Product } from '../../models';

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps): JSX.Element {
  if (products.length === 0) {
    return <p>Product not found</p>;
  }

  return (
    <>
      {products.map((product: Product) => (
        <Card key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductList;
