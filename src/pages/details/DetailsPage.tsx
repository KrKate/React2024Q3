import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './DetailsPage.module.css';
import { Product } from '../../models';
import { fetchDetails, URL } from '../../helpers/api';

interface DetailsProps {
  id: number | null;
  onClose: () => void;
}

function DetailsPage({ id, onClose }: DetailsProps): JSX.Element {
  const [product, setProduct] = useState<Product | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

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

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        detailsRef.current &&
        !detailsRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClose]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.detailsContainer} ref={detailsRef}>
      <img
        src={product.images[0]}
        alt={product.title}
        className={styles.imgDetails}
      />
      <h2>{product.title}</h2>
      <p>{product.price} $</p>
      <p> {product.description}</p>
      <button type="button" onClick={handleClose}>
        Close
      </button>
    </div>
  );
}

export default DetailsPage;
