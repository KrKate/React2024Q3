import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import LimitPage from '../components/LimitPage/LimitPage';

describe('LimitPage component', () => {
  it('calls handleLimitChange with the selected limit value', () => {
    const handleLimitChange = vi.fn();
    const { getByLabelText } = render(
      <LimitPage handleLimitChange={handleLimitChange} />
    );

    const selectElement = getByLabelText('Items:') as HTMLSelectElement;
    fireEvent.change(selectElement, { target: { value: '15' } });

    expect(handleLimitChange).toHaveBeenCalledWith(15);
  });

  it('renders the default limit value of 10', () => {
    const handleLimitChange = vi.fn();
    const { getByDisplayValue } = render(
      <LimitPage handleLimitChange={handleLimitChange} />
    );

    const selectElement = getByDisplayValue('10') as HTMLSelectElement;

    expect(selectElement.value).toBe('10');
  });
});
