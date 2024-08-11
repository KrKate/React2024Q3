import { render } from '@testing-library/react';
import Loader from '../pages/components/Loader/Loader';
import '@testing-library/jest-dom';

describe('Loader component', () => {
  it('renders the loading text', () => {
    const { getByText } = render(<Loader />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
