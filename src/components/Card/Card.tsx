import styles from './Card.module.css';
import { Product } from '../../models';

interface CardProps {
  product: Product;
}

function Card({ product }: CardProps): JSX.Element {
  return (
    <div className={styles.characterCard}>
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
