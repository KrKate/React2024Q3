import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card';
import { Product } from '../../models';

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
  const navigate = useNavigate();

  if (products.length === 0) {
    return <p>Product not found</p>;
  }

  return (
    <>
      {products.map((product: Product) => (
        <Card
          key={product.id}
          product={product}
          toggleDetails={() => {
            toggleDetails(product.id);
            navigate(`/page=${page}/details=${product.id}`);
          }}
        />
      ))}
    </>
  );
}

export default ProductList;
