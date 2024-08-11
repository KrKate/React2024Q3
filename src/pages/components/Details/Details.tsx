import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import router from 'next/router';
import styles from './DetailsPage.module.css';
import { Product, URLapp } from '../../../models';
import {
  setIsDetailsOpen,
  setProduct,
  setSelectedId,
} from '../../../redux/store/homePageSlice';
import Loader from '../Loader/Loader';
import { AppRootState } from '../../../redux/reducers';

interface DetailsPageProps {
  product: Product | null;
}

export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;
  const response = await fetch(`${URLapp.base}${URLapp.products}/${id}`);
  if (!response.ok) {
    return {
      notFound: true,
    };
  }
  const product: Product = await response.json();
  return {
    props: { product },
  };
}

function DetailsPage({ product }: DetailsPageProps) {
  const dispatch = useDispatch();
  const detailsRef = useRef<HTMLDivElement>(null);
  const currentPage = useSelector(
    (state: AppRootState) => state.pagination.currentPage
  );

  const handleClose = useCallback(() => {
    dispatch(setProduct(null));
    dispatch(setIsDetailsOpen(false));
    dispatch(setSelectedId(null));
    router.push(`/?page=${currentPage}`);
  }, [dispatch]);

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
    return <Loader />;
  }

  return (
    <div className={styles.detailsContainer} ref={detailsRef}>
      <Image
        src={product.images[0]}
        alt={product.title}
        className={styles.imgDetails}
        height={500}
        width={500}
      />
      <h2>{product.title}</h2>
      <p>{product.price} $</p>
      <p> {product.description}</p>
      <button
        type="button"
        className={styles.closeButton}
        onClick={handleClose}
        data-testid="close-button"
      >
        Close
      </button>
    </div>
  );
}

export default DetailsPage;
