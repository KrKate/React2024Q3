/* eslint-disable jsx-a11y/click-events-have-key-events */
import styles from './Card.module.css';
import { Product } from '../../models';

interface CardProps {
  product: Product;
  toggleDetails: (id: number) => void;
}

function Card({ product, toggleDetails }: CardProps): JSX.Element {
  const handleCardClick = () => {
    toggleDetails(product.id);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles.characterCard} onClick={handleCardClick}>
      <img
        src={product.images[0]}
        alt={product.title}
        className={styles.images}
      />
      <h2>{product.title}</h2>
      <div>{product.price} $</div>
    </div>
  );
}

export default Card;
