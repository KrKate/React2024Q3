import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ErrorPage from '../pages/errorPage/ErrorPage';
import Home from '../pages/home/HomePage';
import Details from '../pages/details/DetailsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/home" element={<Home />} errorElement={<ErrorPage />}>
      <Route
        path="/details"
        element={<Details />}
        errorElement={<ErrorPage />}
      />
      <Route path="/*" element={<ErrorPage />} errorElement={<Home />} />
    </Route>
  )
);

export default router;
