import { render, screen } from '@testing-library/react';
import DetailsPage from '../pages/details/DetailsPage';

describe('DetailsPage component', () => {
  test('displays loading indicator when fetching data', async () => {
    render(<DetailsPage id={1} onClose={() => {}} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
