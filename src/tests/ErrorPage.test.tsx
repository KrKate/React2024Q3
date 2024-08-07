import { render } from '@testing-library/react';
import ErrorPage from '../pages/404';

describe('ErrorPage component', () => {
  it('renders the loading text', () => {
    const { getByText } = render(<ErrorPage />);
    expect(getByText('404')).toBeInTheDocument();
    expect(getByText('Page not found...')).toBeInTheDocument();
  });
});
