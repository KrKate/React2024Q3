import Card from '../Card/Card';
import { Product } from '../../models';

interface ProductListProps {
  products: Product[];
  toggleDetails: (id: number) => void;
}

function ProductList({
  products,
  toggleDetails,
}: ProductListProps): JSX.Element {
  if (products.length === 0) {
    return <p>Product not found</p>;
  }

  return (
    <>
      {products.map((product: Product) => (
        <Card
          key={product.id}
          product={product}
          toggleDetails={() => toggleDetails(product.id)}
        />
      ))}
    </>
  );
}

export default ProductList;
