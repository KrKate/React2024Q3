import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppRootState } from '../redux/reducers';
import { setTotalPages, setCurrentPage } from '../redux/store/paginationSlice';

const usePaginationClient = () => {
  const allProducts = useSelector(
    (state: AppRootState) => state.homePage.total
  );
  const limit = useSelector((state: AppRootState) => state.homePage.limit);
  const totalPages = useSelector(
    (state: AppRootState) => state.pagination.totalPages
  );
  const currentPage = useSelector(
    (state: AppRootState) => state.pagination.currentPage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTotalPages(Math.ceil(allProducts / limit)));
  }, [allProducts, limit, dispatch]);

  const handlePageChange = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return {
    pages,
    currentPage,
    handlePageChange,
  };
};

export default usePaginationClient;
