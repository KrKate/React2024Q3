'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './DetailsPage.module.css';
import { Product } from '../../models';
import {
  setIsDetailsOpen,
  setProduct,
  setSelectedId,
} from '../../redux/store/homePageSlice';
import Loader from '../Loader/Loader';

interface DetailsPageProps {
  product: Product;
}

// async function fetchProduct(id: string): Promise<Product | null> {
//   const response = await fetch(`${URLapp.base}${URLapp.products}/${id}`);
//   if (!response.ok) {
//     return null;
//   }
//   return response.json();
// }

function DetailsPage({ product }: DetailsPageProps) {
  const dispatch = useDispatch();
  const detailsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleClose = useCallback(() => {
    dispatch(setProduct(null));
    dispatch(setIsDetailsOpen(false));
    dispatch(setSelectedId(null));
    const currentUrl = new URL(window.location.href);
    const pageParam = currentUrl.searchParams.get('page');
    router.push(`/?page=${pageParam}`);
  }, [dispatch, router]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      detailsRef.current &&
      !detailsRef.current.contains(event.target as Node)
    ) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

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
