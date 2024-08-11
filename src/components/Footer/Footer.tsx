'use client';

import { useDispatch, useSelector } from 'react-redux';
import styles from './Footer.module.css';
import { AppRootState } from '../../redux/reducers';
import { unselectAllProducts } from '../../redux/store/chooseSlice';
import { Product } from '../../models';

function Footer() {
  const dispatch = useDispatch();
  const chosenProducts = useSelector(
    (state: AppRootState) => state.choose.chosenProducts
  );

  const unselectAll = () => {
    dispatch(unselectAllProducts());
  };

  const downloadCSV = () => {
    if (chosenProducts.length === 0) return;

    const headers = ['Title', 'Price', 'Description'];
    const rows = chosenProducts.map((product: Product) => [
      product.title,
      product.price,
      product.description,
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row: string[]) => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const fileName = `${chosenProducts.length}_products.csv`;
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      <button
        className={styles.footerButton}
        type="button"
        onClick={downloadCSV}
      >
        Download
      </button>
    </footer>
  );
}

export default Footer;
