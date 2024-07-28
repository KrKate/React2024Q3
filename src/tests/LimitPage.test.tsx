import { render } from '@testing-library/react';
import { vi } from 'vitest';
import * as reduxHooks from 'react-redux';
import LimitPage from '../components/LimitPage/LimitPage';

vi.mock('react-redux');
const mockedDispatch = vi.spyOn(reduxHooks, 'useDispatch');
describe('LimitPage component', () => {
  it('should create limit item', () => {
    mockedDispatch.mockResolvedValue(vi.fn());
    const component = render(<LimitPage />);
    expect(component).toMatchSnapshot();
  });
});
