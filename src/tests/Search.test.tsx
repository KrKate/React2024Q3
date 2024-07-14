import { render, fireEvent } from '@testing-library/react';
import Search from '../components/Search/Search';

describe('Search component', () => {
  it('saves the entered value to local storage when search button is clicked', () => {
    const { getByPlaceholderText, getByText } = render(
      <Search updateProducts={() => {}} />
    );

    const input: HTMLInputElement = getByPlaceholderText(
      'Enter product'
    ) as HTMLInputElement;
    const searchButton = getByText('Search');

    fireEvent.change(input, { target: { value: 'Apple' } });
    fireEvent.click(searchButton);

    expect(localStorage.getItem('searchValue')).toBe('Apple');
  });

  it('retrieves the value from local storage on mount', () => {
    localStorage.setItem('searchValue', 'Silver');

    const { getByPlaceholderText } = render(
      <Search updateProducts={() => {}} />
    );
    const input: HTMLInputElement = getByPlaceholderText(
      'Enter product'
    ) as HTMLInputElement;

    expect(input.value).toBe('Silver');
  });
});
