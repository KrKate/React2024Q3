import { render } from '@testing-library/react';
import ReduxProvider from '../redux/store/reduxProvider';

describe('ReduxProvider', () => {
  it('should render children correctly', () => {
    const { getByText } = render(
      <ReduxProvider>
        <div>Test!</div>
      </ReduxProvider>
    );

    expect(getByText('Test!')).toBeInTheDocument();
  });
});
