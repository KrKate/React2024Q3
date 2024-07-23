import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './DetailsPage.module.css';
import { fetchDetails, URL } from '../../helpers/api';
import { Product } from '../../models';
import { AppRootState } from '../../redux/reducers';
import {
  setIsDetailsOpen,
  setProduct,
  setSelectedId,
} from '../../redux/store/homePageSlice';

function DetailsPage() {
  const id = useSelector((state: AppRootState) => state.homePage.selectedId);
  const product = useSelector(
    (state: AppRootState) => state.homePage.product
  ) as unknown as Product;
  const currentPage = useSelector(
    (state: AppRootState) => state.homePage.currentPage
  );
  const dispatch = useDispatch();
  const detailsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetchDetails(`${URL.base}/${id}`);
        dispatch(setProduct(response));
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    if (id) {
      fetchProductData();
    }
  }, [id, dispatch]);

  const handleClose = useCallback(() => {
    dispatch(setProduct(null));
    dispatch(setIsDetailsOpen(false));
    dispatch(setSelectedId(null));
    navigate(`/page=${currentPage}`);
  }, [currentPage, dispatch, navigate]);

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
      <button type="button" data-testid="close-button" onClick={handleClose}>
        Close
      </button>
    </div>
  );
}

export default DetailsPage;
