import { render } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

describe('ErrorBoundary Component', () => {
  it('renders children when there is no error', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>Test Children</div>
      </ErrorBoundary>
    );

    expect(getByText('Test Children')).toBeInTheDocument();
  });

  it('renders error message when there is an error', () => {
    const ErrorComponent = () => {
      throw new Error('Test Error');
    };

    const { getByText } = render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(getByText('Sorry... there was an error')).toBeInTheDocument();
    expect(getByText('ErrorBoundary is working')).toBeInTheDocument();
    expect(
      getByText('Reload the page to return to the application')
    ).toBeInTheDocument();
  });
});
