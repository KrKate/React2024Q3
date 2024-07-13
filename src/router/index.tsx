import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ErrorPage from '../pages/errorPage/ErrorPage';
import HomePage from '../pages/home/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />} errorElement={<ErrorPage />}>
      <Route
        path="/details"
        element={<Outlet />}
        errorElement={<ErrorPage />}
      />
      <Route path="/*" element={<ErrorPage />} errorElement={<HomePage />} />
    </Route>
  )
);

export default router;
