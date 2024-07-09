import React from 'react';
import Card from '../Card/Card';
import { Product } from '../../models';

interface ProductListProps {
  products: Product[];
}

class CharacterList extends React.PureComponent<ProductListProps> {
  render() {
    const { products } = this.props;
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
}

export default CharacterList;
