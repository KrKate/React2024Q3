import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from 'react-router-dom';
import ErrorPage from '../pages/errorPage/ErrorPage';
import DetailsPage from '../pages/details/DetailsPage';
import HomePage from '../pages/home/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />} errorElement={<ErrorPage />}>
      <Route
        path="details=:id"
        element={<Outlet />}
        errorElement={<ErrorPage />}
      >
        <Route index element={<DetailsPage />} errorElement={<ErrorPage />} />
      </Route>
      <Route path="/*" element={<ErrorPage />} errorElement={<ErrorPage />} />
    </Route>
  )
);

export default router;
