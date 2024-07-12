import { useEffect, useState } from 'react';
import styles from './DetailsPage.module.css';

import { Product } from '../../models';
import { fetchDetails, URL } from '../../helpers/api';

interface DetailsProps {
  id: number | null;
}

function Details({ id }: DetailsProps): JSX.Element {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetchDetails(`${URL.base}/${id}`);
        setProduct(response);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    if (id) {
      fetchProductData();
    }
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.detailsContainer}>
      <img
        src={product.images[0]}
        alt={product.title}
        className={styles.imgDetails}
      />
      <h2>{product.title}</h2>
      <p>{product.price} $</p>
      <p> {product.description}</p>
    </div>
  );
}

export default Details;
