import { render } from '@testing-library/react';
import ErrorButton from '../components/ErrorButton/ErrorButton';

describe('Loader component', () => {
  it('renders the loading text', () => {
    const { getByText } = render(<ErrorButton />);
    expect(getByText('Create an Error')).toBeInTheDocument();
  });
});
