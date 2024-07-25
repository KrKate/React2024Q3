import { useDispatch, useSelector } from 'react-redux';
import styles from './Footer.module.css';
import { AppRootState } from '../../redux/reducers';
import { unselectAllProducts } from '../../redux/store/chooseSlice';

function Footer() {
  const dispatch = useDispatch();
  const chosenProducts = useSelector(
    (state: AppRootState) => state.choose.chosenProducts
  );

  const unselectAll = () => {
    dispatch(unselectAllProducts());
  };
  return (
    <footer className={styles.footer}>
      <button
        className={styles.footerButton}
        type="button"
        onClick={unselectAll}
      >
        Unselect all
      </button>
      <div>You choose {chosenProducts.length} products</div>
      <button className={styles.footerButton} type="button">
        Download
      </button>
    </footer>
  );
}

export default Footer;
