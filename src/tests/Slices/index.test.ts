import { describe, it, expect } from 'vitest';
import store from '../../redux/store/index';

describe('Redux Store', () => {
  it('should be configured correctly', () => {
    expect(store).toBeDefined();

    const state = store.getState();
    expect(state).toHaveProperty('api');
  });
});
