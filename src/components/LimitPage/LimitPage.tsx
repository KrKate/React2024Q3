import { useDispatch, useSelector } from 'react-redux';
import styles from './LimitPage.module.css';
import { setLimit } from '../../redux/store/homePageSlice';
import {
  setCurrentPage,
  setTotalPages,
} from '../../redux/store/paginationSlice';
import { AppRootState } from '../../redux/reducers';

function LimitPage() {
  const total = useSelector((state: AppRootState) => state.homePage.total);
  const limit = useSelector((state: AppRootState) => state.homePage.limit);
  const dispatch = useDispatch();
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLimit(parseInt(e.target.value, 10)));
    dispatch(setCurrentPage(1));
    dispatch(setTotalPages(Math.ceil(total / limit)));
  };

  return (
    <section className={styles.limitContainer}>
      <label htmlFor="limit">
        Items:
        <select
          id="limit"
          onChange={handleSelectChange}
          defaultValue="10"
          data-testid="limit-select"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </label>
    </section>
  );
}

export default LimitPage;
