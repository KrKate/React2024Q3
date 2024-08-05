import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './DetailsPage.module.css';
import { Product, URL } from '../../../models';
import { AppRootState } from '../../../redux/reducers';
import {
  setIsDetailsOpen,
  setProduct,
  setSelectedId,
} from '../../../redux/store/homePageSlice';

interface DetailsPageProps {
  product: Product | null;
}

export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;
  console.log(id);
  const response = await fetch(`${URL.base}${URL.products}/${id}`);
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
  const currentPage = useSelector(
    (state: AppRootState) => state.homePage.currentPage
  );
  const dispatch = useDispatch();
  const detailsRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const handleClose = useCallback(() => {
    dispatch(setProduct(null));
    dispatch(setIsDetailsOpen(false));
    dispatch(setSelectedId(null));
    router.push(`/?page=${currentPage}`);
  }, [currentPage, dispatch, router]);

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
    <div className={styles.detailsContainer}>
      <Image
        src={product.images[0]}
        alt={product.title}
        className={styles.imgDetails}
        height={500}
        width={500}
        priority
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
