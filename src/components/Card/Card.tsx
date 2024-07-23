import { useDispatch, useSelector } from 'react-redux';
import styles from './Card.module.css';
import { Product } from '../../models';
import { AppRootState } from '../../redux/reducers';
import {
  setIsDetailsOpen,
  setSelectedId,
} from '../../redux/store/homePageSlice';

function Card({ product }: { product: Product }): JSX.Element {
  const dispatch = useDispatch();
  const selectedId = useSelector(
    (state: AppRootState) => state.homePage.selectedId
  );

  const toggleDetails = (id: number) => {
    if (selectedId === id) {
      dispatch(setIsDetailsOpen(false));
      dispatch(setSelectedId(null));
    } else {
      dispatch(setIsDetailsOpen(true));
      dispatch(setSelectedId(id));
    }
  };

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
