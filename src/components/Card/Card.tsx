import { useDispatch, useSelector } from 'react-redux';
import styles from './Card.module.css';
import { Product } from '../../models';
import { AppRootState } from '../../redux/reducers';
import {
  setIsDetailsOpen,
  setSelectedId,
} from '../../redux/store/homePageSlice';
import { toggleProduct } from '../../redux/store/chooseSlice';

function Card({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const selectedId = useSelector(
    (state: AppRootState) => state.homePage.selectedId
  );
  const chosenProducts = useSelector(
    (state: AppRootState) => state.choose.chosenProducts
  );
  const isChosen = chosenProducts.includes(product.id);

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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      toggleDetails(product.id);
    }
  };

  const toggleChoose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(toggleProduct(product.id));
  };
  console.log(chosenProducts.length);
  return (
    <div
      className={styles.characterCard}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
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
      <button
        type="button"
        className={`${styles.chooseButton} ${isChosen ? styles.chosen : ''}`}
        onClick={toggleChoose}
      >
        {isChosen ? 'Chosen' : 'Choose me!'}
      </button>
    </div>
  );
}

export default Card;
