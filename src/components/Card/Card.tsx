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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter') {
      toggleDetails(product.id);
    }
  };

  return (
    <button
      className={styles.characterCard}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      type="button"
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
    </button>
  );
}

export default Card;
