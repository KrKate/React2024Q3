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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      toggleDetails(product.id);
    }
  };

  return (
    <div
      className={styles.characterCard}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      data-testid="cardTest"
    >
      <img
        src={product.images[0]}
        alt={product.title}
        className={styles.images}
        key={product.id}
      />
      <h2>{product.title}</h2>
      <div>{product.price} $</div>
    </div>
  );
}

export default Card;
